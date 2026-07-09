# sasaki.dev（Portfolio-v2）設計書

> **このドキュメントの位置づけ**
> sasaki.dev の技術構成・デザイン原則・運用ルールの正。
> 本サイトに手を入れるセッションは必ずこれを読んでから着手し、
> 方針を変える場合はまずこのドキュメントを更新すること。
> コンテンツ基盤の将来像は [portfolio-cms/docs/DESIGN.md](../../portfolio-cms/docs/DESIGN.md) を参照。

最終更新: 2026-07-10

---

## 1. サイトの目的と構成

佐々木雄司の公式ポートフォリオ。研究者・エンジニア・経営者としての
プロフィール/作品/出版/連絡先を、日英2言語で提供する。

| ルート | 内容 | 主なデータソース（モデル） |
|---|---|---|
| `/` | 紹介（プロフィール・ステートメント・経歴・活動） | profile, statement, topimage, history, career, activity |
| `/works` | 作品（プロジェクト一覧） | work（paper / history を参照） |
| `/publications` | 出版（論文・特許・講演・寄稿・メディア掲載） | paper, patent, lecture, publish, media |
| `/contact` | 連絡先（メール・SNS） | ページ内ハードコード |

## 2. 技術構成

- **Nuxt 3.0.0-rc.3**（SSR有効）+ TypeScript。※RC版である点は §7 参照
- **Tailwind CSS 3**（@nuxtjs/tailwindcss）。カラーパレットはデフォルトを**完全上書き**
- **コンテンツ**: Newt CMS（`composables/newt/index.ts`）
  → **2026年10月のNewt終了までに portfolio-cms へ移行する**（§6）
- **フォント**: Adobe Fonts（Typekit kit `idj6pes`）の ten-mincho-text。
  `plugins/index.js` の `$adobeFonts` で各ページ `onMounted` 時にロード
- アイコン: FontAwesome（solid/brands/regular）
- SEO: nuxt-jsonld（Person schema）、ページ毎の useHead、OGP画像は `public/ogp.png`
- 計測: vue-gtag（`plugins/analytics.client.ts`）

## 3. デザイン原則（このサイトの「テイスト」の定義）

変更を加えるときは、以下を**維持したまま**細部の質を上げること。
大きなレイアウト変更・派手な装飾・アニメーションの追加は原則しない。

### 3.1 色

トークンは `tailwind.config.js` の5色のみ。**未定義色（gray-500等）は使用不可**。

| トークン | 値 | 用途 |
|---|---|---|
| `primary` | `#0C2340` | 本文・見出し（ライト）/ 背景（ダーク）のネイビー |
| `secondary` | 背景 `#595959` / 文字 `#ADAFB8` | 補助テキスト・下線・非アクティブ |
| `accent` | `#B0463C` | 控えめな朱色。氏名表示・focus-visible のみ。多用しない |
| `white` / `black` | `#FFFFFF` / `#000000` | 地・反転 |

ダークモードは `darkMode: 'media'`（OS追従）で **白地×ネイビー文字 ⇄ ネイビー地×白文字の反転**。
新しいUIは必ず両モードで成立させる。

### 3.2 タイポグラフィ（`assets/styles/main.css`）

- 明朝体（ten-mincho）を全面使用。`font-feature-settings: "palt"` + `letter-spacing: 0.03em`
- 段落は `text-indent: 2em` の字下げ + `leading-loose`（アカデミックな組版が本サイトの個性）
- リンクは細い下線（`decoration-1` + `underline-offset 0.2em`）、
  hoverで下線色が primary/white に遷移
- 見出し階層は h1（text-2xl）/ h2（text-secondary + bold）の2段のみ。増やさない

### 3.3 インタラクション

- 遷移はすべて **150ms の transition-colors / opacity** 程度に抑える
- nav は現在ページのみ濃色、他は `#ADAFB8`（`app.vue` の scoped style）
- `:focus-visible` は accent 2px アウトライン、`::selection` はネイビー系（ダークで反転）
- ホバーは「淡い背景 / 下線 / 色の濃化」まで。拡大・シャドウ・バウンス等は使わない

### 3.4 レイアウト

- `max-w-6xl` 中央寄せ、本文ブロックは `IndentArticle`（md以上で左インデント）
- 余白は広め（セクション `my-16` 程度）。詰めない

## 4. 多言語（JA/EN）

- ライブラリ不使用の自前実装。`useLocale()`（useState）+ `$localize(ja, en)`
- 初期値は accept-language（SSR）/ navigator.language（client）の先頭2文字
- **`app.vue` の `<client-only>` は意図的**: サーバとクライアントで locale 判定が
  ズレた場合の hydration mismatch を避けるため header/main を client 描画にしている。
  SEO とのトレードオフは既知（§7）。外すなら locale 同期の設計から見直すこと
- 日付表示は `$localizedDate`（ja: 2022年6月 / en: Jun 2022）

## 5. コンテンツ取得

- 現状: `composables/newt/index.ts` が newt-client-js で 12 モデルを取得。
  トークンは公開読み取り用 CDN トークン（コミットされているのは意図的）
- 一覧の並びは CMS 側の order 指定 + 表示直前の `[...items].reverse()`（新しい順）。
  **computed 内で元配列を破壊する `reverse()` は禁止**（過去に修正済みのバグ）

## 6. portfolio-cms への移行方針

Newt 終了（2026年10月）までに実施。実装は
[portfolio-cms](../../portfolio-cms/README.md) 側の Phase 進行と連動する。

1. `@portfolio-cms/client` を `file:` または GitHub 参照でインストール
   （newt-client-js と同一の表面。手順: [packages/client/README.md](../../portfolio-cms/packages/client/README.md)）
2. `composables/newt/index.ts` の `createClient` 呼び出しと import を差し替え
   （各 `fetch*` 関数のシグネチャ・返り値は不変。コンポーネント側の変更なし）
3. `@types/newt.d.ts` の `Content` import 元を `@portfolio-cms/client` に変更
4. 移行後も Newt のトークン・エンドポイントはコードから完全に除去する

データ形状（`_id` / `_sys` / refList / ImageAsset の `src`）は互換のため、
テンプレート側の変更は不要。画像 URL のドメインが Firebase Storage に変わる点のみ留意。

## 7. 既知の制約・技術的負債（触る前に読むこと）

| 項目 | 状態 | 方針 |
|---|---|---|
| Nuxt 3.0.0-rc.3 | RC版のまま。Node 22 でビルド可 | 安定版への更新は大工事（useHead/hid周り等が変わる）。CMS移行完了後に別プロジェクトとして検討 |
| `<client-only>` ラッパー | 本文がSSRされずSEO的に不利（metaはSSRされる） | 意図的（§4）。外す場合は locale 設計とセット |
| meta description | 全ページに日英連結の長文を重複記述 | 実害は小さい。整理するなら検索結果表示を確認しながら |
| `.output` コミット運用 | ビルド成果物をリポジトリにコミットしてデプロイ | ソース変更のPRには含めない。デプロイ時に `npm run build` で再生成（[過去の経緯](https://github.com/jyu0414/Portfolio-v2/pull/1)） |
| Twitter 表記 | X への改名未対応 | 対応する場合はアイコン・URL・useHead をまとめて |

## 8. 検証手順

- `npm run dev`（要ネットワーク: Newt CMS へ実データ取得）
- 確認観点: ライト/ダーク両モード、JA/EN切替、nav アクティブ表示、
  モバイル幅、コンソールエラーなし
- `npm run build` が通ること（Node 22）
- 検証の実例: [PR #1](https://github.com/jyu0414/Portfolio-v2/pull/1)（2026-07 デザイン細部磨き込み）

## 9. 今後のロードマップ

1. **CMS移行**（§6。Newt終了前・最優先）
2. デザイン細部の継続的磨き込み（§3 の原則内で）
3. Nuxt 安定版へのアップグレード検討（CMS移行後）
4. `<client-only>` 解消と本文SSR化の検討（3とセット）

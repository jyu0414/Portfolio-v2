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
- **コンテンツ**: portfolio-cms（Firebase製ヘッドレスCMS、`composables/newt/index.ts`）
  → **Newt からの移行は完了済み**（§5・§6）。Newt CMS への依存は撤去済み
- **フォント**: Adobe Fonts（Typekit kit `idj6pes`）の ten-mincho-text。
  `plugins/index.js` の `$adobeFonts` で各ページ `onMounted` 時にロード
- アイコン: FontAwesome（solid/brands/regular）
- SEO: nuxt-jsonld（Person schema）、ページ毎の useHead、OGP画像は `public/ogp.png`
- 計測: vue-gtag（`plugins/analytics.client.ts`）

## 3. デザイン原則（このサイトの「テイスト」の定義）

変更を加えるときは、以下を**維持したまま**細部の質を上げること。
大きなレイアウト変更・派手な装飾は原則しない。
動的な演出・3D は禁止ではないが、必ず §3.5 の規律の範囲内で行う。

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

- UI の状態遷移は **150ms の transition-colors / opacity** 程度に抑える
  （これを超える演出は §3.5 の階層と規律に従う）
- nav は現在ページのみ濃色、他は `#ADAFB8`（`app.vue` の scoped style）
- `:focus-visible` は accent 2px アウトライン、`::selection` はネイビー系（ダークで反転）
- ホバーは「淡い背景 / 下線 / 色の濃化」まで。拡大・シャドウ・バウンス等は使わない

### 3.4 レイアウト

- `max-w-6xl` 中央寄せ、本文ブロックは `IndentArticle`（md以上で左インデント）
- 余白は広め（セクション `my-16` 程度）。詰めない

### 3.5 ダイナミック演出・3D の導入方針

知的で線ベースのテイストを**動きと立体に拡張する**ための規律。
「装飾を足す」のではなく「既存の線が動く・線が立体になる」と捉えること。
この様式から外れる演出（グロー、パーティクル、写実的マテリアル等）は
どれほど流行っていても採用しない。

#### コンセプト: 「動く製図」

研究者の製図・組版がこのサイトの個性。動的要素もその延長で、
**等高線・流線・ワイヤーフレーム・罫線・測地線**といった数学的/製図的モチーフを
単色の細い線（1px相当）で描く。線は「引かれるもの」（一度だけの描画）と
「生きているもの」（呼吸のテンポで動き続ける生成線画）の2種類に区別して扱う。
色は §3.1 のトークンのみ: 線はライトで primary、ダークで white。
accent は静的な用途（氏名・focus）に予約済みのため、
**3D・アニメーションでは使わない**。

#### 演出の4階層

| 階層 | 内容 | 制約 |
|---|---|---|
| Tier 0: マイクロ | 既存の 150ms transition-colors/opacity（§3.3） | 現状維持。変更しない |
| Tier 1: 線の描画 | SVG `stroke-dasharray` による線の伸長。signature の一筆書き、下線・罫線の描画、スクロール連動の控えめな reveal（opacity + 数px の translate） | 600ms以上のゆったりした ease-out。**初回表示時に1度だけ**。依存ライブラリ追加なし |
| Tier 2: 生成線画 | Canvas 2D + ノイズ場による**有機的に動き続ける線**。流線・呼吸する等高線・波打つ罫線など（下記「有機的な線の様式」） | 「呼吸」のテンポ（下記の速度規律）。1ページに高々1箇所の面的な線群 + 罫線程度の小品まで |
| Tier 3: 3D | WebGL（three.js）による線ベースの立体。ワイヤーフレーム地形、等高線群、回転する幾何など | **1ページに高々1箇所**（Tier 2 の面的な線群とは排他）、本文の余白領域のみ。マウス/スクロールへの応答は緩やかな視差程度 |

#### 有機的な線の様式（Tier 2 の定義）

動き続ける線が「上品」であるかは様式ではなくパラメータで決まる。
以下を守れば有機的な動きは許容され、外れれば派手な装飾になる。

**モチーフ候補**（いずれもノイズ場 = simplex noise を時間発展させて生成）

1. **流線**: ノイズ場に沿って伸びる細い流線の群れ。墨流し・風の跡のイメージ。
   ヒーローや余白の面的な演出向き
2. **呼吸する等高線**: 時間変化するノイズの等値線（marching squares）。
   地形図がごくゆっくり変形し続ける。topimage 周りや背景向き
3. **波打つ罫線**: セクション区切りの水平線が水面のように微かにうねる。
   小品として複数ページで使える基本要素
4. **筆速のある signature**: Tier 1 の一筆書きに、ストローク毎の緩急
   （画の始まり・終わりで減速）を与えて手書きの質を出す

**動きの規律（数値の目安）**

- **速度**: 「一目見ただけでは動いていると気づかない」呼吸のテンポが基準。
  ノイズの時間スケールは 1 サイクル 20 秒以上。急加速・急停止はしない
- **振幅**: 罫線のうねりは ±2〜4px。形は変わっても**要素の位置と占有領域は
  不変**（レイアウトに影響させない = CLS ゼロの原則と同根）
- **密度と主張**: 線は 1px 相当を維持。本数で密度を出す場合は透明度を下げ、
  線 1 本 1 本の主張を弱める。背景的な線群は secondary 系の低コントラスト、
  primary/white の濃い線は焦点となる少数のみ
- **ランダム性**: seed を固定できる実装にする。reduced-motion の静止フレームが
  「たまたま止まった絵」ではなく構図として成立するように、静止時の形を選べること
- **カーソル応答**（任意）: 引き寄せ・反発は強い減衰のバネで、追従は 500ms 以上
  遅らせる。カーソルを「操作」ではなく「水面に落ちた葉」程度の外乱として扱う。
  タッチ環境では自律的な動きのみ

#### 上品さを担保する規律（全 Tier 共通）

- **本文の可読性が常に優先**。段落テキストの背後で動くものは置かない
  （Tier 2 の低コントラストな線群を見出し・余白の背景に敷くのは可。
  その場合もテキスト直下の領域では線を減衰・フェードさせる）
- 動きは遅く・小さく。イージングは ease-out 系、往復・バウンスの目立つ動きは
  不可。動き続けてよいのは Tier 2 の「呼吸」と Tier 3 の緩慢な自律回転のみ
- `prefers-reduced-motion: reduce` で**すべての演出を静止画に**フォールバック
  （Tier 1 は引き終わった状態、Tier 2 は seed 固定の静止フレーム、
  Tier 3 は静止フレームまたは静的 SVG）
- ライト/ダーク両モードで成立させる（線色はトークン参照）
- WebGL 非対応・初期化失敗時は静的 SVG に graceful degradation。
  レイアウトは canvas の有無で変えない（CLS を出さない）

#### 技術方針

**Tier 2（生成線画）— Canvas 2D、依存追加なし**

- 描画は **Canvas 2D** で足りる（細線数百本は 60fps 可）。WebGL は使わない
- simplex noise は自前実装（50行程度）。**ノイズライブラリを追加しない**
- 実装は `useGenerativeLines()` 系 composable + `<client-only>` コンポーネント。
  props で seed / 線色トークン / 密度 / 時間スケールを受け、様式パラメータを
  コードに散らさない
- 呼吸のテンポなら 30fps に間引いても知覚されない。rAF 内で描画間隔を制御し
  CPU 負荷を抑える。IntersectionObserver で画面外・タブ非アクティブ時は停止
- canvas はサイズ固定・`devicePixelRatio` 上限 2。resize は debounce して再構築

**Tier 3（3D）— three.js**

- three.js を直接使う。TresJS 等のラッパーは Nuxt 3.0.0-rc.3（§7）との
  互換リスクがあるため採用しない
- `LineSegments` / `EdgesGeometry` / `Line2` 中心。ライティング・PBR は使わない
  （線の様式なら描画負荷も自然と低く抑えられる）
- 実装は `<client-only>` + dynamic import でルートチャンクから分離し、
  LCP を悪化させない。rAF 停止・dpr クランプは Tier 2 と同じ
- Tier 2 の面的な線群と同一ページに併置しない（動く焦点は1つ）

#### 段階導入

1. **Phase A（依存追加なし・Tier 1）**: signature の stroke 描画アニメ
   （筆速の緩急込み）、セクション罫線・下線の伸長、スクロール reveal。
   ここで動きのトーンを確立する
2. **Phase B（依存追加なし・Tier 2）**: 波打つ罫線を小品として導入し、
   トップページに流線または呼吸する等高線を1箇所。
   様式パラメータ（速度・振幅・密度）の基準値をここで確定する
3. **Phase C（three.js 追加・Tier 3）**: ヒーロー1箇所に線ベース3D
   （候補: 等高線地形、ワイヤーフレーム幾何）。Phase B の生成線画と
   置き換えるか棲み分けるかを判断してから
4. **Phase D**: works での作品ごとのインタラクティブ展示、ページ遷移演出。
   Phase B/C の運用で問題が出ないことを確認してから検討

各 Phase とも §8 の観点に加え reduced-motion / WebGL 無効環境 /
低スペックモバイル（連続アニメーションの CPU 負荷・発熱）での確認を必須とする。

## 4. 多言語（JA/EN）

- ライブラリ不使用の自前実装。`useLocale()`（useState）+ `$localize(ja, en)`
- 初期値は accept-language（SSR）/ navigator.language（client）の先頭2文字
- **`app.vue` の `<client-only>` は意図的**: サーバとクライアントで locale 判定が
  ズレた場合の hydration mismatch を避けるため header/main を client 描画にしている。
  SEO とのトレードオフは既知（§7）。外すなら locale 同期の設計から見直すこと
- 日付表示は `$localizedDate`（ja: 2022年6月 / en: Jun 2022）

## 5. コンテンツ取得

- 現状: `composables/newt/index.ts` が `@bridgeuidev/cms-client`（npm 公開版）で
  12 モデルを取得。
  API トークンは不要（Firestore の公開 read）。接続先 `projectId` は
  `runtimeConfig.public.firebaseProjectId`（既定 `yuji-portfolio-cms`、
  `NUXT_PUBLIC_FIREBASE_PROJECT_ID` で上書き可）。`spaceUid: 'yuji'` /
  `appUid: 'profile'` は Newt から流用。クライアントは遅延生成の singleton
  （`useRuntimeConfig()` を request context 内で呼ぶため）
- 一覧の並びは CMS 側の order 指定 + 表示直前の `[...items].reverse()`（新しい順）。
  **computed 内で元配列を破壊する `reverse()` は禁止**（過去に修正済みのバグ）
- ファイル名・ディレクトリ名（`composables/newt/`, `@types/newt.d.ts`）は
  互換のため据え置き。データ形状も Newt(depth=0) 互換で不変

## 6. portfolio-cms への移行方針（**完了済み**）

Newt 終了（2026年10月）前に実施済み。実装は
[portfolio-cms](../../portfolio-cms/README.md) と連動。接続手順の正は
[docs/website-integration.md](../../portfolio-cms/docs/website-integration.md)。

以下を実施済み:

1. クライアント SDK `@bridgeuidev/cms-client` を npm からインストール
   （newt-client-js と同一の表面・zero dependencies。当初は
   `file:../portfolio-cms/packages/client` 参照だったが npm 公開に伴い切替済みで、
   ローカルに portfolio-cms リポジトリが無くてもビルド可能）。
   `newt-client-js` は `npm uninstall` 済み
2. `composables/newt/index.ts` の `createClient` 呼び出しと import を差し替え
   （各 `fetch*` 関数のシグネチャ・返り値は不変。コンポーネント側の変更なし）
3. `@types/newt.d.ts` の `Content` import 元を `@bridgeuidev/cms-client` に変更
   （不要になった `NewtConfig` 型・`require` boilerplate は除去）
4. Newt のトークン・エンドポイントはコードから完全に除去済み

データ形状（`_id` / `_sys` / refList / ImageAsset の `src`）は互換のため、
テンプレート側の変更は不要。画像 URL のドメインは Firebase Storage
（`firebasestorage.googleapis.com` / バケット `yuji-portfolio-cms.firebasestorage.app`）。

本番接続値: `projectId: yuji-portfolio-cms` / `spaceUid: yuji` / `appUid: profile`
（管理UI https://yuji-portfolio-cms.web.app）。2026-07-10 に全4ページで実データ
表示・JA/EN 切替・画像表示・`npm run build`（Node 22）を検証済み。

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
- 動的演出・3D を含む変更（§3.5）ではさらに: `prefers-reduced-motion: reduce`
  での静止フォールバック、WebGL 無効時の degradation、CLS が出ないこと、
  Lighthouse Performance 90 以上の維持
- `npm run build` が通ること（Node 22）
- 検証の実例: [PR #1](https://github.com/jyu0414/Portfolio-v2/pull/1)（2026-07 デザイン細部磨き込み）

## 9. 今後のロードマップ

1. **CMS移行**（§6。Newt終了前・最優先）
2. デザイン細部の継続的磨き込み（§3 の原則内で）
3. ダイナミック演出の段階導入（§3.5 Phase A → B → C → D）
4. Nuxt 安定版へのアップグレード検討（CMS移行後）
5. `<client-only>` 解消と本文SSR化の検討（4とセット）

<template>
  <div>
    <publications-papers/>
    <publications-patents/>
    <publications-lectures/>
    <publications-publishes/>
    <publications-media/>
  </div>
</template>

<script setup lang="ts">
const { $adobeFonts, $localize } = useNuxtApp()

useHead({
  title: $localize('出版 - 佐々木 雄司', 'Publications - SASAKI, Yuji'),
  htmlAttrs: {
    lang: $localize('ja', 'en'),
    prefix: 'og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# article: http://ogp.me/ns/article#'
  },
  meta: [
    {
      name: 'description',
      content: 
        '佐々木雄司の研究成果として「脈波を使った時系列UX評価手法に関する研究」「An Exploratory Study of the Relationship between Computational Thinking and Creative Attitudes among University Students」「小中学生向け統計学習のためのポータルサイト「キッズすたっと」」などがある．アイコンタクトによる機器操作システムの特許（特開2021-145198）を出願中．日本経済新聞，読売新聞，産経新聞，朝日新聞，マイナビニュース等への掲載がある．MacFanへ「WWDC17 Scholarship Report」の記事を寄稿．佐々木 雄司（ささき ゆうじ、1999年8月9日-）は，Bridge UI株式会社 社長，慶應義塾大学 政策メディア研究科 修士課程，エンジニア，研究者．専門はHuman-Computer Interaction，ユーザインタフェース，ソフトウェア開発，教育工学．WWDC17 Scholarship，STAT-DASHグランプリ優勝(総務大臣賞)，U22プログラミングコンテスト 商務情報政策局長賞などを受賞．2018年より孫正義育英財団 財団生．現在の研究は，新たな表計算インタフェース，脈波によるストレス測定を用いたUX評価手法，アイコンタクトを用いた家電操作，コンピュータを用いた創造性育成など．人間とコンピュータとのやりとりの最適化を通じて「思い通りに動くコンピュータ」を作り，人間の可能性を拡大することを目指している．また，プログラミングや人工知能に関する講座や，プログラミングや研究の指導も行っている．Yuji Sasakis research results include "A Study on Time Series UX Evaluation Methods Using Pulse Waves", "An Exploratory Study of the Relationship between Computational Thinking and Creative Attitudes among University Students" and "Kids Stat", a portal site for statistical learning for elementary and junior high school students. A patent for a device operation system by eye contact (JP 2021-145198) is pending. Contributed an article on "WWDC17 Scholarship Report" to MacFan.Yuji Sasaki (9 August 1999-) is the president of Bridge UI Corporation, a masters degree student at the Graduate School of Media and Governance, Keio University, an engineer and researcher. He specialises in Human-Computer Interaction, User Interface, Software Development and Educational Engineering, and has won the WWDC17 Scholarship, the STAT-DASH Grand Prix Championship (Minister of Internal Affairs and Communications Award), the U22 Programming Contest Commerce and Information Policy Bureau Director-General Award, etc. Scholar, Masa-Son Foundation since 2018. His current research includes a new spreadsheet interface, a UX evaluation method using pulse wave stress measurement, home appliance operation using eye contact, and computer-based creativity development. His aim is to create "computers that work the way you want" through optimising the interaction between humans and computers, and to expand human potential. It also offers courses on programming and artificial intelligence, as well as guidance on programming and research.'
    },
    {
      name: 'author',
      content: $localize('佐々木 雄司', 'SASAKI, Yuji')
    },
    {
      name: 'keywords',
      content:
        '佐々木,雄司,Yuji,Sasaki,関西学院,慶應義塾大学,プログラマ,ソフトウェア,孫正義育英財団,Swift,プログラミング,Human-Computer Interaction,UI,User Interface,UX,教育工学,Kwansei Gakuin, Keio University, Programmer, Software, ユーザインタフェース, Masa-son Foundation, Programming, Creativity, Computational Thinking, 創造性, WWDC, Research, 研究 '
    },
    {
      property: 'og:title',
      content: $localize('出版 - 佐々木 雄司', 'Publications - SASAKI, Yuji')
    },
    {
      property: 'og:type',
      content: 'article'
    },
    {
      property: 'og:url',
      content: 'https://sasaki.dev/publications'
    }
  ]
})

onMounted(() => {
  $adobeFonts(document)
})
</script>

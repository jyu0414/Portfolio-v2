<template>
  <div>
    <h1>
      {{ $localize('作品', 'Works') }}
    </h1>

    <article
      v-for="(item, index) in works"
      :key="index"
      class="md:gap-1/12 my-16 md:flex"
    >
      <div class="md:8 md:w-1/2 lg:m-16">
        <img :src="item.image[0].src" alt="" />
      </div>

      <div class="mt-3 md:ml-16 md:w-5/12 md:text-right">
        <p class="text-secondary">
          {{ item.beginYear }} -
          <span v-if="!item.isCurrent">{{ item.endYear }}</span>
        </p>
        <h1 class="my-0">
          {{ $localize(item.title, item.titleEnglish) }}
        </h1>
        <p>
          {{ $localize(item.subTitle, item.subTitleEnglish) }}
        </p>
        <section
          class="mb-8 text-left"
          v-html="$localize(item.description, item.descriptionEnglish)"
        ></section>
        <aside class="text-left">
          <section>
            <ul>
              <li class="mb-4 flex" v-for="(link, key) in item.link">
                <font-awesome-icon icon="link" class="mr-2" />
                <a :href="link.url">{{
                  $localize(link.title, link.titleEnglish)
                }}</a>
              </li>
            </ul>
          </section>
          <section>
            <ul>
              <li class="mb-4 flex" v-for="(study, key) in item.paper">
                <font-awesome-icon icon="graduation-cap" class="mr-2" />
                <underlined-link
                  :link="study.link"
                  :label="$localize(study.title, study.titleEnglish)"
                />
              </li>
            </ul>
          </section>
          <section>
            <ul>
              <li class="mb-4 flex" v-for="(award, key) in item.award">
                <font-awesome-icon icon="crown" class="mr-2" />
                {{ $localize(award.title, award.titleEnglish) }}
              </li>
            </ul>
          </section>
        </aside>
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: navigator.language.slice(0,2) == 'ja' ? '作品 - 佐々木 雄司' : 'Works - SASAKI, Yuji',
  htmlAttrs: {
    lang: navigator.language.slice(0,2) == 'ja' ? 'ja' : 'en'
  },
  meta: [
    {
      name: 'description',
      content: navigator.language.slice(0,2) == 'ja' ?
        '佐々木雄司はAI体験教材の「AIEdu（kombu.）」，写真を眺めて次の旅先に出会う「Photrip」，次世代の貸借記録アプリ「Credy」，コンピュテーショナルシンキング育成教材「Kasgai」などを開発している．総務省に提案したサービス「Kids Stat」は総務大臣賞を受賞し現在総務省統計局によって運用されている．佐々木 雄司（ささき ゆうじ、1999年8月9日-）は，Bridge UI株式会社 社長，慶應義塾大学 政策メディア研究科 修士課程，エンジニア，研究者．専門はHuman-Computer Interaction，ユーザインタフェース，ソフトウェア開発，教育工学．WWDC17 Scholarship，STAT-DASHグランプリ優勝(総務大臣賞)，U22プログラミングコンテスト 商務情報政策局長賞などを受賞．2018年より孫正義育英財団 財団生．現在の研究は，新たな表計算インタフェース，脈波によるストレス測定を用いたUX評価手法，アイコンタクトを用いた家電操作，コンピュータを用いた創造性育成など．人間とコンピュータとのやりとりの最適化を通じて「思い通りに動くコンピュータ」を作り，人間の可能性を拡大することを目指している．また，プログラミングや人工知能に関する講座や，プログラミングや研究の指導も行っている．' : 'Yuji Sasaki has developed AIEdu (kombu.), an AI experience teaching material; Photrip, an application for viewing photos and finding your next travel destination; Credy, a next-generation loan recording application; and Kasgai, a teaching material for fostering computational thinking. Kids Stat, a service proposed to the Ministry of Internal Affairs and Communications, won the Minister of Internal Affairs and Communications Award and is currently operated by the Statistics Bureau of the Ministry of Internal Affairs and Communications. Yuji Sasaki (9 August 1999-) is the president of Bridge UI Corporation, a masters degree student at the Graduate School of Media and Governance, Keio University, an engineer and researcher. He specialises in Human-Computer Interaction, User Interface, Software Development and Educational Engineering, and has won the WWDC17 Scholarship, the STAT-DASH Grand Prix Championship (Minister of Internal Affairs and Communications Award), the U22 Programming Contest Commerce and Information Policy Bureau Director-General Award, etc. Scholar, Masa-Son Foundation since 2018. His current research includes a new spreadsheet interface, a UX evaluation method using pulse wave stress measurement, home appliance operation using eye contact, and computer-based creativity development. His aim is to create "computers that work the way you want" through optimising the interaction between humans and computers, and to expand human potential. It also offers courses on programming and artificial intelligence, as well as guidance on programming and research.'
    },
    {
      name: 'author',
      content: navigator.language.slice(0,2) == 'ja' ? '佐々木 雄司' : 'SASAKI, Yuji'
    },
    {
      name: 'keywords',
      content:
        '佐々木,雄司,Yuji,Sasaki,関西学院,慶應義塾大学,プログラマ,ソフトウェア,孫正義育英財団,Swift,プログラミング,Human-Computer Interaction,UI,User Interface,UX,教育工学,Kwansei Gakuin, Keio University, Programmer, Software, ユーザインタフェース, Masa-son Foundation, Programming, Creativity, Computational Thinking, 創造性, WWDC, kombu, kasgai, kids stat,キッズすたっと, e-stat junior, KabeCom, LuuX, Credy'
    }
  ]
})

const { items: _works } = await fetchWorks()
const { $adobeFonts } = useNuxtApp()

const works = computed(() => {
  return _works.reverse()
})

onMounted(() => {
  $adobeFonts(document)
})
</script>

<template>
  <div class="flex" itemscope itemtype="http://schema.org/Person">
    <indent-article class="w-3/4">
      <template v-slot:title> 佐々木 雄司 <span>Sasaki, Yuji</span> </template>
      <template v-slot:content>
        <section v-for="(item, index) in profileContents" :key="index" class="my-6">
          <h2 v-if="item.isTitleNeeded" class="mb-1 font-semibold">{{ locale == "ja-JP" ? item.title : item.titleEnglish}}</h2>
          <span v-html="locale == 'ja-JP' ? item.content : item.contentEnglish"></span>
        </section>
      </template>
    </indent-article>
    <div class="w-1/4">
      <img :src="topImage.profileimage.src" itemprop="image" alt=""/>
    </div>
  </div>
  <indent-article>
    <template v-slot:title> {{ locale == "ja-JP" ? statement.title : statement.titleEnglish }}</template>
    <template v-slot:content>
      <span v-html="locale == 'ja-JP' ? statement.message : statement.messageEnglish"></span>
    </template>
  </indent-article>
  <indent-article>
    <template v-slot:title>{{ locale == "ja-JP" ? "経歴" : "Biography"}}</template>
    <template v-slot:content>
      <table>
        <tbody>
          <tr v-for="(item, index) in history" :key="index">
            <td>
              {{ }}
              {{ new Date(item.date).getMonth() + 1 }}月
            </td>
            <td>
              {{ locale == "ja-JP" ? item.title : item.titleEnglish }}
            </td>
          </tr>
        </tbody>
      </table>
    </template>
  </indent-article>
  <indent-article>
    <template v-slot:title>{{locale == "ja-JP" ? "職歴" : "Career"}}</template>
    <template v-slot:content>
      <table>
        <tbody>
          <tr v-for="(item, index) in career" :key="index">
            <td>
              
              {{ new Date(item.beginDate).getFullYear() }}年
              {{ new Date(item.beginDate).getMonth() + 1 }}月
              
            </td>
            <td>
              ~
            </td>
            <td>
              <span v-if="!item.isCurrent">
              {{ new Date(item.endDate).getFullYear() }}年
              {{ new Date(item.endDate).getMonth() + 1 }}月
              </span>
              <span v-if="item.isCurrent">
                {{locale == "ja-JP" ? "現在" : "current"}}
              </span>
            </td>
            <td>
              {{ locale == "ja-JP" ? item.organization : item.organizationEnglish }}
            </td>
            <td>
              {{ locale == "ja-JP" ? item.jobTitle : item.jobTitleEnglish }}
            </td>
          </tr>
        </tbody>
      </table>
    </template>
  </indent-article>
  <indent-article>
    <template v-slot:title>{{locale == "ja-JP" ? "活動" : "Activities"}}</template>
    <template v-slot:content>
      <table>
        <tbody>
          <tr v-for="(item, index) in activity" :key="index">
            <td>
              
              {{ new Date(item.beginDate).getFullYear() }}年
              {{ new Date(item.beginDate).getMonth() + 1 }}月
              
            </td>
            <td>
              ~
            </td>
            <td>
              <span v-if="!item.isCurrent">
              {{ new Date(item.endDate).getFullYear() }}年
              {{ new Date(item.endDate).getMonth() + 1 }}月
              </span>
              <span v-if="item.isCurrent">
                {{locale == "ja-JP" ? "現在" : "current"}}
              </span>
            </td>
            <td>
              {{ locale == "ja-JP" ? item.organization : item.organizationEnglish }}
            </td>
            <td>
              {{ locale == "ja-JP" ? item.jobTitle : item.jobTitleEnglish }}
            </td>
          </tr>
        </tbody>
      </table>
    </template>
  </indent-article>
</template>

<script setup lang="ts">
const [
  { items: profileContents },
  statement,
  topImage,
  { items: history },
  { items: career },
  { items: activity }
] = await Promise.all([
  fetchProfile(),
  fetchStatement(),
  fetchTopImage(),
  fetchHistory(),
  fetchCareer(),
  fetchActivity()
])
const locale = useLocale()
const { $adobeFonts } = useNuxtApp()

onMounted(() => {
  $adobeFonts(document)
})
</script>

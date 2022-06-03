<template>
  <div class="flex" itemscope itemtype="http://schema.org/Person">
    <indent-article class="w-3/4">
      <template v-slot:title> <span class="text-accent">佐々木 雄司</span> <span class="text-secondary">Sasaki, Yuji</span> </template>
      <template v-slot:content>
        <section v-for="(item, index) in profileContents" :key="index" class="my-6">
          <h2 v-if="item.isTitleNeeded" class="mb-1 text-secondary font-bold">{{ locale == "ja-JP" ? item.title : item.titleEnglish}}</h2>
          <span v-html="locale == 'ja-JP' ? item.content : item.contentEnglish"></span>
        </section>
      </template>
    </indent-article>
    <div class="w-1/4">
      <img class="mt-[160px]" :src="topImage.profileimage.src" itemprop="image" alt=""/>
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
              <span v-if="index == 0 || $localizedDate(history[index - 1].date).year !== $localizedDate(item.date).year">{{ $localizedDate(item.date).year }}</span>
            </td>
            <td>
               <span v-if="index == 0 || $localizedDate(history[index - 1].date).month !== $localizedDate(item.date).month || $localizedDate(history[index - 1].date).year !== $localizedDate(item.date).year">{{ $localizedDate(item.date).month }}</span>
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
              
              {{ $localizedDate(item.beginDate).full }}
              
            </td>
            <td>
              -
            </td>
            <td>
              <span v-if="!item.isCurrent">
              {{ $localizedDate(item.endDate).full }}
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
              {{ $localizedDate(item.beginDate).full }}
            </td>
            <td>
              -
            </td>
            <td>
              <span v-if="!item.isCurrent">
              {{ $localizedDate(item.endDate).full }}
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

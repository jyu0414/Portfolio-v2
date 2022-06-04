<template>
  <indent-article>
    <template v-slot:title>{{
      locale == 'ja-JP' ? '活動' : 'Activities'
    }}</template>
    <template v-slot:content>
      <table>
        <tbody>
          <tr v-for="(item, index) in activity" :key="index">
            <td class="text-secondary pr-4">
              {{ $localizedDate(item.beginDate).full }} -
              <span v-if="!item.isCurrent">
              {{ $localizedDate(item.endDate).full }}
              </span>
              <span v-if="item.isCurrent">
                {{ locale == 'ja-JP' ? '現在' : 'current' }}
              </span>
            </td>
            <td>
              {{
                locale == 'ja-JP' ? item.organization : item.organizationEnglish
              }}
            </td>
            <td>
              {{ locale == 'ja-JP' ? item.jobTitle : item.jobTitleEnglish }}
            </td>
          </tr>
        </tbody>
      </table>
    </template>
  </indent-article>
</template>

<script setup lang="ts">
const { items: activity } = await fetchActivity()
const locale = useLocale()
</script>

<template>
  <indent-article>
    <template v-slot:title>{{ $localize('職歴', 'Career') }}</template>
    <template v-slot:content>
      <table>
        <tbody>
          <tr v-for="(item, index) in career" :key="index">
            <td class="pr-4 text-secondary">
              {{ $localizedDate(item.beginDate).full }} -
              <span v-if="!item.isCurrent">
                {{ $localizedDate(item.endDate).full }}
              </span>
              <span v-if="item.isCurrent">
                {{ $localize('現在', 'current') }}
              </span>
            </td>
            <td>
              {{ $localize(item.organization, item.organizationEnglish) }}
            </td>
            <td>{{ $localize(item.jobTitle, item.jobTitleEnglish) }}</td>
          </tr>
        </tbody>
      </table>
    </template>
  </indent-article>
</template>

<script setup lang="ts">
const { items: _career } = await fetchCareer()
const career = computed(() => {
  return _career.reverse()
})
</script>

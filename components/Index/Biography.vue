<template>
  <indent-article>
    <template v-slot:title>{{ $localize('経歴', 'Biography') }}</template>
    <template v-slot:content>
      <table>
        <tbody>
          <tr v-for="(item, index) in history" :key="index">
            <td class="text-secondary">
              <span
                v-if="
                  index == 0 ||
                  $localizedDate(history[index - 1].date).year !==
                    $localizedDate(item.date).year
                "
                >{{ $localizedDate(item.date).year }}</span
              >
            </td>
            <td class="pr-4 text-secondary">
              <span
                v-if="
                  index == 0 ||
                  $localizedDate(history[index - 1].date).month !==
                    $localizedDate(item.date).month ||
                  $localizedDate(history[index - 1].date).year !==
                    $localizedDate(item.date).year
                "
                >{{ $localizedDate(item.date).month }}</span
              >
            </td>
            <td>
              {{ $localize(item.title, item.titleEnglish) }}
            </td>
          </tr>
        </tbody>
      </table>
    </template>
  </indent-article>
</template>

<script setup lang="ts">
const { items: history } = await fetchHistory()
</script>

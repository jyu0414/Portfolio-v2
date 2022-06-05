<template>
  <div>
    <indent-article>
      <template v-slot:title>
        {{ $localize('講演', 'Lectures') }}
      </template>
      <template v-slot:content>
        <table>
          <tbody>
            <tr v-for="(item, index) in lectures" :key="index">
              <td class="pr-4 text-secondary">
                {{ $localizedDate(item.date).full }}
              </td>
              <td class="pr-4">
                {{ item.title }}
              </td>
              <td class="text-secondary">
                {{ item.place }}
              </td>
            </tr>
          </tbody>
        </table>
      </template>
    </indent-article>
  </div>
</template>

<script setup lang="ts">
const { items: lectures } = await fetchLectures()
</script>

<template>
  <div>
    <indent-article>
      <template v-slot:title>
        {{ $localize('メディア掲載', 'Media Coverage') }}
      </template>
      <template v-slot:content>
        <table>
          <tbody>
            <tr v-for="(item, index) in media" :key="index">
              <td class="pr-4 text-secondary">
                {{ $localizedDate(item.date).full }}
              </td>
              <td class="pr-4">
                <underlined-link :link="item.link" :label="item.title"/>
              </td>
              <td class="text-secondary">
                {{ item.media }}
              </td>
            </tr>
          </tbody>
        </table>
      </template>
    </indent-article>
  </div>
</template>

<script setup lang="ts">
const { items: media } = await fetchMedia()
</script>

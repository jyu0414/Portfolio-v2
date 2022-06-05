<template>
  <div>
    <indent-article>
      <template v-slot:title>
        {{ $localize('特許', 'Patent') }}
      </template>
      <template v-slot:content>
        <table>
          <tbody>
            <tr v-for="(item, index) in patents" :key="index">
              <td class="pr-4 text-secondary">
                {{ item.number }}
              </td>
              <td class="pr-4">
                <underlined-link :link="item.link" :label="item.title"/>
              </td>
              <td class="text-secondary">
                {{ item.author.map((a) => a.data).join(', ') }}
              </td>
            </tr>
          </tbody>
        </table>
      </template>
    </indent-article>
  </div>
</template>

<script setup lang="ts">
const { items: patents } = await fetchPatents()
</script>

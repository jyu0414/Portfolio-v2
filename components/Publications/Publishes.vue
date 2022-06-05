<template>
  <div>
    <indent-article>
      <template v-slot:title>
        {{ $localize('出版', 'Publications') }}
      </template>
      <template v-slot:content>
        <table>
          <tbody>
            <tr v-for="(item, index) in publishes" :key="index">
              <td class="pr-4 text-secondary">
                {{$localizedDate(item.date).full}}
              </td>
              <td class="pr-4">
                <underlined-link :link="item.link" :label="item.title"/>
              </td>
              <td class="text-secondary">
                {{ item.author.map(a => a.data).join(', ') }}
              </td>
            </tr>
          </tbody>
        </table>
      </template>
    </indent-article>
  </div>
</template>

<script setup lang="ts">
const { items: publishes } = await fetchPublishes()
</script>

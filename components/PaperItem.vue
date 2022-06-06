<template>
  <font-awesome-icon
    v-if="isReviewed(paper.category)"
    icon="circle-check"
    class="mr-2"
  /><underlined-link
    :link="paper.link"
    :label="$localize(paper.title, paper.titleEnglish)"
  />

  <div class="ml-8 text-secondary">
    <div>
      {{ paper.authors.map((a) => a.data).join(', ') }} -
      {{ paper.book ? paper.book : paper.conference }},
      {{ paper.year }}
      <button
        v-if="paper.bibtex || paper.cite"
        class="ml-2 hover:text-primary"
        @click="emit('show', paper.cite, paper.bibtex)"
      >
        <font-awesome-icon icon="quote-right" />
      </button>
      <a
        v-if="paper.link"
        :href="paper.link"
        target="_blank"
        rel="noopener noreferrer"
        class="ml-2 hover:text-primary"
      >
        <font-awesome-icon icon="link" />
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Paper } from '~~/@types/newt'

interface Props {
  paper: Paper
}

const props = defineProps<Props>()
const emit = defineEmits<{
  (e: 'show', text: string, bibtex: string): void
}>()

const isReviewed = (category: string) => {
  return [
    'paper-reviewed',
    'conference-reviewed',
    'domestic-conference-reviewed'
  ].includes(category)
}


</script>
<template>
  <div>
    <indent-article>
      <template v-slot:title>
        <span class="hairline-heading inline-block">{{ $localize('研究成果', 'Papers') }}</span>
      </template>
      <template v-slot:content>
        <div class="space-y-8">
          <article v-for="item in papers" :key="item._id" v-reveal>
            <paper-item :paper="item" @show="showCitation"/>
          </article>
        </div>
      </template>
    </indent-article>

    <!--MODAL-->
    <div
      v-if="showModal"
      class="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden"
      @click="closeCitation"
    >
      <div
        class="relative mx-auto w-full max-w-xl"
        role="dialog"
        aria-modal="true"
        aria-labelledby="citation-modal-title"
        @click.stop
      >
        <div class="rounded-lg bg-white p-5 text-primary">
          <div class="my-4 flex items-center justify-between">
            <h3 id="citation-modal-title">{{ $localize('引用情報', 'Export Citations') }}</h3>
            <button
              type="button"
              class="ml-4 transition-colors duration-150 hover:text-secondary"
              :aria-label="$localize('閉じる', 'Close')"
              @click="closeCitation"
            >
              &times;
            </button>
          </div>

          <table>
            <tr v-if="modalText">
              <td>Text:</td>
              <td>
                <textarea
                  readonly
                  rows="4"
                  class="w-full rounded-lg border border-primary p-3"
                  >{{ modalText }}</textarea
                >
              </td>
            </tr>
            <tr v-if="modalBibTex">
              <td>BibTeX:</td>
              <td>
                <textarea
                  readonly
                  rows="5"
                  class="w-full rounded-lg border border-primary p-3"
                  >{{ modalBibTex }}</textarea
                >
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
    <div v-if="showModal" class="fixed inset-0 z-40 bg-black opacity-10"></div>
  </div>
</template>

<script setup lang="ts">
const { items: _papers } = await fetchPapers()

const showModal = ref(false)
const modalText = ref('')
const modalBibTex = ref('')

const papers = computed(() => {
  return [..._papers].reverse()
})

const closeCitation = () => {
  showModal.value = false
}

const showCitation = (text: string, bibtex: string) => {
  modalText.value = text
  modalBibTex.value = bibtex
  showModal.value = true
}

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    closeCitation()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <div>
    <indent-article>
      <template v-slot:title>
        {{ $localize('研究成果', 'Papers') }}
      </template>
      <template v-slot:content>
        <div class="space-y-8">
          <article v-for="(item, key) in papers" :key="key">
            <font-awesome-icon
              v-if="isReviewed(item.category)"
              icon="circle-check"
              class="mr-2"
            /><underlined-link :link="item.link" :label="$localize(item.title, item.titleEnglish)"/>

            <div class="ml-8 text-secondary">
              <div>
                {{ item.authors.map((a) => a.data).join(', ') }} -
                {{ item.book ? item.book : item.conference }},
                {{ item.year }}
                <button
                  v-if="item.bibtex || item.cite"
                  class="ml-2 hover:text-primary"
                  @click="showCitation(item.cite, item.bibtex)"
                >
                  <font-awesome-icon icon="quote-right" />
                </button>
                <a
                  v-if="item.link"
                  :href="item.link"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="ml-2 hover:text-primary"
                >
                  <font-awesome-icon icon="link" />
                </a>
              </div>
            </div>
          </article>
        </div>
      </template>
    </indent-article>

    <!--MODAL-->
    <div
      v-if="showModal"
      @click="closeCitation"
      class="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden"
    >
      <div class="relative mx-auto w-full max-w-xl">
        <div class="rounded-lg bg-white p-5">
          <div class="my-4">
            <h3>{{ $localize('引用情報', 'Export Citations') }}</h3>
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

const { items: papers } = await fetchPapers()

let showModal = ref(false)
let modalText = ref('')
let modalBibTex = ref('')

const isReviewed = (category: string) => {
  return [
    'paper-reviewed',
    'conference-reviewed',
    'domestic-conference-reviewed'
  ].includes(category)
}

const closeCitation = () => {
  showModal.value = false
}

const showCitation = (text: string, bibtex: string) => {
  modalText.value = text
  modalBibTex.value = bibtex
  showModal.value = true
}
</script>

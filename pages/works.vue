<template>
  <div>
    <h1>
      {{ $localize('作品', 'Works') }}
    </h1>

    <article
      v-for="(item, index) in works"
      :key="index"
      class="md:gap-1/12 my-16 md:flex"
    >
      <div class="md:8 md:w-1/2 lg:m-16">
        <img :src="item.image[0].src" alt="" />
      </div>

      <div class="mt-3 md:ml-16 md:w-5/12 md:text-right">
        <p class="text-secondary">
          {{ item.beginYear }} -
          <span v-if="!item.isCurrent">{{ item.endYear }}</span>
        </p>
        <h1 class="my-0">
          {{ $localize(item.title, item.titleEnglish) }}
        </h1>
        <p>
          {{ $localize(item.subTitle, item.subTitleEnglish) }}
        </p>
        <section
          class="mb-8 text-left"
          v-html="$localize(item.description, item.descriptionEnglish)"
        ></section>
        <aside class="text-left">
          <section>
            <ul>
              <li class="mb-4 flex" v-for="(link, key) in item.link">
                <font-awesome-icon icon="link" class="mr-2" />
                <a :href="link.url">{{
                  $localize(link.title, link.titleEnglish)
                }}</a>
              </li>
            </ul>
          </section>
          <section>
            <ul>
              <li class="mb-4 flex" v-for="(study, key) in item.paper">
                <font-awesome-icon icon="graduation-cap" class="mr-2" />
                <underlined-link
                  :link="study.link"
                  :label="$localize(study.title, study.titleEnglish)"
                />
              </li>
            </ul>
          </section>
          <section>
            <ul>
              <li class="mb-4 flex" v-for="(award, key) in item.award">
                <font-awesome-icon icon="crown" class="mr-2" />
                {{ $localize(award.title, award.titleEnglish) }}
              </li>
            </ul>
          </section>
        </aside>
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Works - SASAKI, Yuji'
})

const { items: _works } = await fetchWorks()
const { $adobeFonts } = useNuxtApp()

const works = computed(() => {
  return _works.reverse()
})

onMounted(() => {
  $adobeFonts(document)
})
</script>

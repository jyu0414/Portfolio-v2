<template>
  <article class="my-4">
    <section-title class="my-3">
      <slot name="title" />
    </section-title>
    <div class="md:ml-[80px] lg:ml-[160px]">
      <slot name="content" />
    </div>
  </article>
</template>

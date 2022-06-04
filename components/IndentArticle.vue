<template>
  <article class="my-4">
    <h1>
      <slot name="title" />
    </h1>
    <div class="md:ml-[80px] lg:ml-[160px]">
      <slot name="content" />
    </div>
  </article>
</template>

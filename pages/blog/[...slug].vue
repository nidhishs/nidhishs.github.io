<template>
  <main class="prose dark:prose-invert prose-headings:font-serif">
    <h1 class="-mb-2">{{ data?.title }}</h1>
    <p>{{ data?.description }}</p>
    <span class="text-muted-foreground text-sm"
      >{{ date }} &mdash; {{ data?.author }}</span
    >
    <NuxtImg
      :src="data?.headerImg"
      :alt="data?.title"
      placeholder
      fit="cover"
      class="rounded-lg"
    />
    <ContentRenderer v-if="data" :value="data" />
  </main>
</template>

<script setup lang="ts">
const route = useRoute();
const { data } = await useAsyncData(`content-${route.path}`, () =>
  queryContent().where({ _path: route.path }).findOne(),
);
const date = new Date(data.value?.date).toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});
</script>

<template>
  <main class="prose dark:prose-invert prose-headings:font-serif">
    <template v-if="page">
      <h1 class="-mb-2">{{ page.title }}</h1>
      <p>{{ page.description }}</p>
      <span class="text-muted-foreground text-sm">
        {{ formattedDate }} &mdash; {{ page.author }}
      </span>
      <NuxtImg
        :src="page.image"
        :alt="page.title"
        placeholder
        fit="cover"
        class="rounded-lg"
      />
      <ContentRenderer v-if="page" :value="page" />
    </template>
    <template v-else>
      <h1>No content found.</h1>
      <NuxtLink :to="backLink">
        <Button>Back</Button>
      </NuxtLink>
    </template>
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  validate: async (route) => {
    return (
      route.path.includes("/blogs") || route.path.includes("/publications")
    );
  },
});

const route = useRoute();
const contentType = computed(() => {
  return route.path.includes("/blogs") ? "blog" : "publication";
});

const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection(contentType.value).path(route.path).first();
});

const formattedDate = computed(() => {
  return new Date(page.value?.date || "").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
});

const backLink = computed(() => {
  return contentType.value === "blog" ? "/blogs" : "/publications";
});
</script>

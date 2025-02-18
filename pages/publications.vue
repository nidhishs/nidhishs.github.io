<template>
  <main class="flex flex-col gap-20">
    <h1 class="text-6xl font-serif font-bold">Publications</h1>
    <section>
      <p class="max-w-prose">
        Below you'll find my published papers, preprints, and technical reports.
        Each explores different aspects of ML research - from language models,
        computer vision to medical AI.
      </p>
      <div class="grid gap-3 grid-cols-1 sm:grid-cols-2 mt-6">
        <ContentCard
          v-for="publication in publications"
          :key="publication.path"
          :title="publication.title || 'Untitled'"
          :description="publication.description || ''"
          :img="publication.image"
          :link="{ text: 'Read', href: publication.path || '#' }"
        />
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
const { data: publications } = await useAsyncData("content-publications", () =>
  queryCollection("publication")
    .select("path", "title", "description", "date", "image")
    .order("date", "DESC")
    .all(),
);
</script>

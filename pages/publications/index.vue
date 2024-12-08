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
          v-for="blog in blogs"
          :key="blog._path"
          :title="blog.title || 'Untitled'"
          :description="blog.description || ''"
          :img="blog.headerImg"
          :link="{ text: 'Read', href: blog._path || '#' }"
        />
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
const { data: blogs } = await useAsyncData("content-publications", () =>
  queryContent("publications")
    .only(["_path", "title", "description", "date", "headerImg"])
    .sort({ date: -1 })
    .find(),
);
</script>

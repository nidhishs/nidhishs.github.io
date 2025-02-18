<template>
  <main class="flex flex-col gap-20">
    <h1 class="text-6xl font-serif font-bold">Blogs</h1>
    <section>
      <p class="max-w-prose">
        I've always found it fascinating how different interests can complement
        each other in unexpected ways. My work in machine learning has taught me
        to appreciate elegant solutions, while building custom keyboards has
        shown me the value of hands-on craftsmanship. Here on this blog, I'll be
        sharing both these passions.
      </p>
      <p class="max-w-prose mt-1">
        In the machine learning space, expected detailed explorations of my
        research work; I'll dive into the technical challenges, share
        implementation insights, and discuss the latest developments that catch
        my attention. On the hardware side, I build split ergonomic mechnical
        keyboards from scratch. I'll share build logs, design decision and what
        I've learned about creating tools that enhance both comfort and
        productivity.
      </p>
      <p class="max-w-prose mt-1">
        Whether you're here for the AI content or keyboard builds, I hope you'll
        find something intriguing and valuable. Let's dive in!
      </p>
      <div class="grid gap-3 grid-cols-1 sm:grid-cols-2 mt-6">
        <ContentCard
          v-for="blog in blogs"
          :key="blog.path"
          :title="blog.title || 'Untitled'"
          :description="blog.description || ''"
          :img="blog.image"
          :link="{ text: 'Read', href: blog.path || '#' }"
        />
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
const { data: blogs } = await useAsyncData("content-blogs", () =>
  queryCollection("blog")
    .select("path", "title", "description", "date", "image")
    .order("date", "DESC")
    .all(),
);
</script>

<template>
  <main class="flex flex-col gap-20">
    <section>
      <h1 class="text-6xl font-serif font-bold">Nidhish Shah</h1>
      <h2 class="text-4xl font-serif">Machine Learning Engineer</h2>
    </section>
    <section>
      <h2 class="text-4xl font-serif font-bold mb-2">About</h2>
      <p class="max-w-prose">
        Machine Learning Engineer and aspiring Research Scientist, driven by a
        passion for developing innovative AI solutions. With experience at
        Prosus Group, Microsoft, and Amazon, I've worked on impactful projects
        across various domains of AI.
      </p>
      <p class="max-w-prose mt-1">
        My current focus is on
        <NuxtLink
          to="https://prollm.toqan.ai"
          target="_blank"
          class="font-semibold hover:underline"
        >
          training and evaluation of LLMs </NuxtLink
        >, where I've achieved significant performance improvements and cost
        reductions. My research interests span Natural Language Processing,
        Computer Vision, and Reinforcement Learning, with publications at
        conferences like NeurIPS.
      </p>
      <div class="flex gap-3 font-serif mt-6">
        <NuxtLink
          to="https://docs.google.com/document/d/1mfX9cibUHxpgtYugJ7uVUvO0QZ719dKjg4P9VKH_6xE/edit?usp=sharing"
          target="_blank"
        >
          <Button
            >R&#232;sum&#232;
            <ArrowTopRightIcon :fontControlled="false" class="!size-2 ml-3" />
          </Button>
        </NuxtLink>
        <NuxtLink to="/blog">
          <Button variant="outline"
            >Blog<ArrowTopRightIcon
              :fontControlled="false"
              class="!size-2 ml-3"
          /></Button>
        </NuxtLink>
      </div>
    </section>
    <section>
      <h2 class="text-4xl font-serif font-bold mb-2">Blogs</h2>
      <p class="max-w-prose">
        I write about AI research and building split mechanical keyboards - two
        very different things that somehow both involve a lot of tinkering.
        Expect some thoughts on neural nets, split keyboards, and maybe a few
        other nerdy obsessions I pick up along the way.
      </p>
      <div
        class="grid gap-3 grid-cols-1 sm:grid-cols-2 mt-6"
        v-if="blogs && blogs.length > 0"
      >
        <ContentCard
          v-for="blog in blogs"
          :key="blog._path"
          :title="blog.title || 'Untitled'"
          :description="blog.description || ''"
          :img="blog.headerImg"
          :link="{ text: 'Read', href: blog._path || '#' }"
        />
      </div>
      <NuxtLink to="/blog">
        <Button variant="outline" class="mt-6"
          >View All Blogs<ArrowTopRightIcon
            :fontControlled="false"
            class="!size-2 ml-3"
        /></Button>
      </NuxtLink>
    </section>
    <section>
      <h2 class="text-4xl font-serif font-bold mb-2">Publications</h2>
      <p class="max-w-prose">
        Machine learning research publications ranging from LLMs and computer
        vision to Medical AI. Peer-reviewed papers at major ML conferences along
        with arXiv preprints showcasing some my work.
      </p>
      <div
        class="grid gap-3 grid-cols-1 sm:grid-cols-2 mt-6"
        v-if="publications && publications.length > 0"
      >
        <ContentCard
          v-for="publication in publications"
          :key="publication._path"
          :title="publication.title || 'Untitled'"
          :description="publication.description || ''"
          :img="publication.headerImg"
          :link="{ text: 'Read', href: publication._path || '#' }"
        />
      </div>
      <NuxtLink to="/publications">
        <Button variant="outline" class="mt-6"
          >View All Publications<ArrowTopRightIcon
            :fontControlled="false"
            class="!size-2 ml-3"
        /></Button>
      </NuxtLink>
    </section>
  </main>
</template>

<script setup lang="ts">
import ArrowTopRightIcon from "@/assets/icons/arrow-top-right.svg";
const { data: blogs } = await useAsyncData("content-blog", () =>
  queryContent("blog")
    .only(["_path", "title", "description", "date", "headerImg"])
    .sort({ date: -1 })
    .limit(2)
    .find(),
);
const { data: publications } = await useAsyncData("content-publications", () =>
  queryContent("publications")
    .only(["_path", "title", "description", "date", "headerImg"])
    .sort({ date: -1 })
    .limit(5)
    .find(),
);
</script>

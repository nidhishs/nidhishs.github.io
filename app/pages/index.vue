<template>
  <article class="space-y-10">
    <header class="space-y-2">
      <h1 class="text-[1.3em] font-medium tracking-tight">Nidhish Shah</h1>
      <p class="text-muted-foreground max-w-prose">
        Machine Learning Engineer &amp; Scientist working on language models across the stack, from
        training to inference and evaluation. I write about ML, research, and a few other things
        that catch my interest.
      </p>
      <SocialLinks class="mt-4" />
    </header>

    <section class="space-y-2">
      <h2 class="text-[1.3em] font-medium tracking-tight">Writing</h2>
      <div class="group/post-list divide-y border-t">
        <div v-for="group in postsByYear" :key="group.year" class="grid grid-cols-[3rem_1fr]">
          <span class="text-muted-foreground py-3 text-sm">{{ group.year }}</span>
          <div class="divide-y">
            <NuxtLink
              v-for="post in group.posts"
              :key="post.path"
              :to="post.path"
              class="group-hover/post-list:text-muted-foreground hover:text-foreground focus-visible:text-foreground flex items-baseline justify-between gap-4 py-3 text-sm transition-colors"
            >
              {{ post.title }}
              <time :datetime="post.date" class="text-muted-foreground shrink-0 tabular-nums">
                {{ formatDate(post.date, 'day-month') }}
              </time>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </article>
</template>

<script setup lang="ts">
import { formatDate } from '@/lib/utils'

useSeoMeta({
  title: 'Nidhish Shah',
  description:
    'Machine Learning Engineer & Scientist writing about ML, research, and a few other things.',
  ogTitle: 'Nidhish Shah',
  ogDescription:
    'Machine Learning Engineer & Scientist writing about ML, research, and a few other things.',
  twitterCard: 'summary_large_image',
})

defineOgImage('Preview', {
  title: 'ML Engineer & Scientist',
  subtitle: '',
})

const { data: posts } = await useAsyncData('writing-posts', () =>
  queryCollection('writing').order('date', 'DESC').all(),
)

const postsByYear = computed(() => {
  const items = posts.value ?? []
  const groups: { year: string; posts: typeof items }[] = []
  for (const post of items) {
    const year = post.date.slice(0, 4)
    const last = groups.at(-1)
    if (!last || last.year !== year) groups.push({ year, posts: [post] })
    else last.posts.push(post)
  }
  return groups
})
</script>

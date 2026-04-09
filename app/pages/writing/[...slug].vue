<template>
  <article v-if="page" class="space-y-8">
    <BackLink>Index</BackLink>
    <header class="space-y-1">
      <h1 class="text-[1.3em] font-medium tracking-tight">
        {{ page.title }}
      </h1>
      <time class="text-muted-foreground block text-sm">
        {{ formatDate(page.date, 'long') }}
      </time>
    </header>
    <div
      class="prose anchored-headings dark:prose-invert prose-a:no-underline prose-h2:text-[1.2em] prose-h3:text-[1.05em] prose-h4:text-[1em]"
    >
      <ContentRenderer :value="page" />
    </div>
  </article>
</template>

<script setup lang="ts">
import { formatDate } from '@/lib/utils'

const route = useRoute()

const { data: page } = await useAsyncData('writing-' + route.path, () =>
  queryCollection('writing').path(route.path).first(),
)

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true,
  })
}
</script>

<style scoped>
/* Show a subtle hash only when hovering linked content headings. */
:deep(.anchored-headings :is(h1, h2, h3, h4, h5, h6) a::after) {
  content: ' #';
  opacity: 0;
  font-size: 0.8em;
  color: var(--muted-foreground);
  transition: opacity 0.15s;
}

:deep(.anchored-headings :is(h1, h2, h3, h4, h5, h6):hover a::after) {
  opacity: 1;
}
</style>

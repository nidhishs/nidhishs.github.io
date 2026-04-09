<script setup lang="ts">
import type { NuxtError } from '#app'
import { ArrowUpLeft } from 'lucide-vue-next'

const props = defineProps<{
  error: NuxtError
}>()

const statusCode = computed(() => props.error?.statusCode ?? 404)
const title = computed(() =>
  statusCode.value === 404 ? 'Page not found.' : 'Something went wrong.',
)
</script>

<template>
  <NuxtLayout>
    <section class="py-16">
      <div class="space-y-1">
        <p class="text-muted-foreground text-sm">
          {{ statusCode }}
        </p>
        <h1 class="text-xl font-medium">
          {{ title }}
        </h1>
      </div>
      <NuxtLink
        to="/"
        class="text-muted-foreground hover:text-foreground inline-flex items-center gap-1 pt-2 font-serif italic transition-colors"
      >
        <ArrowUpLeft class="size-4" />
        Index
      </NuxtLink>
    </section>
  </NuxtLayout>
</template>

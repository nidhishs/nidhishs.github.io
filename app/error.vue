<script setup lang="ts">
import type { NuxtError } from '#app'

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
    <section class="space-y-5 py-16">
      <div class="space-y-1">
        <p class="text-muted-foreground text-sm">
          {{ statusCode }}
        </p>
        <h1 class="text-xl font-medium">
          {{ title }}
        </h1>
      </div>
      <BackLink>Index</BackLink>
    </section>
  </NuxtLayout>
</template>

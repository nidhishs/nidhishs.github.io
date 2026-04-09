<script setup lang="ts">
import { Undo2 } from 'lucide-vue-next'

withDefaults(
  defineProps<{
    to?: string
  }>(),
  {
    to: '/',
  },
)
</script>

<template>
  <NuxtLink
    :to="to"
    class="text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 text-lg transition-colors"
  >
    <Undo2 class="relative -top-0.5 size-4" />
    <em><slot /></em>
  </NuxtLink>
</template>

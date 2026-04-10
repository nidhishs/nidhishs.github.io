<template>
  <Alert :variant="variant">
    <AlertCircle v-if="variant === 'destructive'" class="size-4" />
    <Terminal v-else class="size-4" />
    <AlertTitle v-if="$slots.title" class="mb-2 text-[1.1em]">
      <slot name="title" mdc-unwrap="p" />
    </AlertTitle>
    <AlertDescription>
      <slot mdc-unwrap="p" />
    </AlertDescription>
  </Alert>
</template>

<script setup lang="ts">
import { Terminal, AlertCircle } from 'lucide-vue-next'
withDefaults(
  defineProps<{
    variant?: 'default' | 'destructive'
  }>(),
  {
    variant: 'default',
  },
)
</script>

<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { Copy, CopyCheck } from 'lucide-vue-next'
import { useClipboard } from '@vueuse/core'

const props = defineProps<{
  code?: string
  language?: string
  filename?: string
  highlights?: number[]
  meta?: string
  class?: HTMLAttributes['class']
}>()

const { copied, copy, isSupported } = useClipboard({ copiedDuring: 2000 })
</script>

<template>
  <div class="group relative">
    <pre :class="[props.class, 'rounded-md', 'max-h-125']"><slot /></pre>
    <Button
      v-if="isSupported"
      variant="outline"
      size="icon-sm"
      class="absolute top-2 right-2 transition-opacity group-hover:opacity-100 focus-visible:opacity-100"
      :class="copied ? 'opacity-100' : 'opacity-0'"
      aria-label="Copy"
      type="button"
      @click="copy(props.code || '')"
    >
      <CopyCheck v-if="copied" class="size-4" aria-hidden="true" />
      <Copy v-else class="size-4" aria-hidden="true" />
    </Button>
  </div>
</template>

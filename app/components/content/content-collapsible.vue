<template>
  <Collapsible v-model:open="open" class="border-border border-y">
    <CollapsibleTrigger
      class="flex w-full cursor-pointer items-center justify-between py-4 text-sm"
    >
      {{ title }}
      <ChevronDown
        class="text-muted-foreground size-4 transition-transform"
        :class="{ 'rotate-180': open }"
      />
    </CollapsibleTrigger>
    <CollapsibleContent>
      <slot />
    </CollapsibleContent>
  </Collapsible>
</template>

<script setup lang="ts">
import { ChevronDown } from 'lucide-vue-next'

defineProps<{ title: string }>()
const open = ref(false)
</script>

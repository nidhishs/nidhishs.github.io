<script setup lang="ts">
withDefaults(
  defineProps<{
    title?: string
    subtitle?: string
  }>(),
  {
    title: '',
    subtitle: '',
  },
)
</script>

<template>
  <div class="bg-background flex h-full w-full flex-col justify-between p-20">
    <div class="text-muted-foreground flex justify-between text-3xl tracking-widest">
      <span>NIDHISH SHAH</span>
      <span>nidhish.dev</span>
    </div>
    <p class="text-foreground font-['Bricolage_Grotesque'] text-7xl font-semibold">{{ title }}</p>
    <div v-if="subtitle" class="text-muted-foreground text-3xl">{{ subtitle }}</div>
  </div>
</template>

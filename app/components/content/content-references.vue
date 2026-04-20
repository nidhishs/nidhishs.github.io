<template>
  <ol ref="el" class="text-muted-foreground text-xs">
    <slot mdc-unwrap="ol" />
  </ol>
</template>

<script setup lang="ts">
const el = useTemplateRef('el')

onMounted(() => {
  el.value?.querySelectorAll(':scope > li').forEach((li, i) => {
    li.id = `ref-${i + 1}`
  })
})
</script>

<style scoped>
:deep(a) {
  color: inherit;
  transition: color 0.15s;
}

:deep(a:hover) {
  color: var(--foreground);
}
</style>

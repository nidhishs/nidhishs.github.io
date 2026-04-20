<template>
  <sup
    ><a :href="`#ref-${n}`" class="no-underline">[{{ n }}]</a></sup
  >
</template>

<script setup lang="ts">
defineProps<{ n: string }>()
</script>

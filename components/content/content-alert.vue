<template>
  <Alert :variant="destructive ? 'destructive' : 'default'" class="mb-4">
    <AlertCircle class="h-4 w-4" v-if="destructive" />
    <Terminal class="h-4 w-4" v-else />
    <template v-if="$slots.title">
      <AlertTitle class="mb-2.5">
        <slot name="title" :mdc-unwrap="'p'" />
      </AlertTitle>
    </template>
    <AlertDescription>
      <slot :mdc-unwrap="'p'" />
    </AlertDescription>
  </Alert>
</template>

<script setup lang="ts">
import { Terminal, AlertCircle } from "lucide-vue-next";
const { destructive } = defineProps<{
  destructive?: boolean;
}>();
</script>

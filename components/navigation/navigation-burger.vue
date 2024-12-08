<template>
  <Button
    variant="ghost"
    @click="isActive = !isActive"
    class="w-[105px] justify-between transition-colors"
  >
    <span class="text-sm font-serif">{{ isActive ? "close" : "menu" }}</span>
    <div
      class="size-6 flex flex-col gap-1 justify-center"
      v-motion="'navIcon'"
      :initial="{ rotate: 0 }"
      :tapped="{ rotate: 135 }"
    >
      <div class="h-0.5 rounded-full bg-foreground"></div>
      <div class="h-0.5 rounded-full bg-foreground"></div>
    </div>
  </Button>
</template>

<script setup lang="ts">
const isActive = defineModel<boolean>();
const motionInstance = useMotions();

onMounted(() => {
  watchEffect(() => {
    motionInstance.navIcon.variant.value = isActive.value
      ? "tapped"
      : "initial";
  });
});
</script>

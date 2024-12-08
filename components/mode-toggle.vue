<template>
  <Button
    variant="ghost"
    size="icon"
    @click="mode.preference = mode.preference === 'dark' ? 'light' : 'dark'"
  >
    <MoonIcon v-if="mode.preference === 'light'" :fontControlled="false" />
    <SunIcon v-else :fontControlled="false" />
  </Button>
</template>

<script setup lang="ts">
import MoonIcon from "@/assets/icons/moon.svg";
import SunIcon from "@/assets/icons/sun.svg";

const mode = ref({ preference: "light" });
onMounted(() => {
  mode.value = useColorMode();
});
</script>

<template>
  <ConfigProvider :use-id="useIdFunction">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </ConfigProvider>
</template>

<script setup lang="ts">
useHead({
  title: "Nidhish Shah | Portfolio",
  link: [
    {
      rel: "icon",
      type: "image/svg+xml",
      href: "/favicon.svg",
    },
  ],
});
import { ConfigProvider } from "radix-vue";
const useIdFunction = () => useId();
</script>

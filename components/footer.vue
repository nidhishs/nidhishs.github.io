<template>
  <footer
    class="flex items-center justify-between p-6 border-t text-xs font-serif"
  >
    <p class="text-muted-foreground">
      &#169; {{ new Date().getFullYear() }}, Nidhish Shah.
    </p>
    <div class="flex gap-3">
      <NuxtLink
        v-for="link in footerLinks"
        :key="link.path"
        :to="link.path"
        class="hover:underline"
        >{{ link.name }}</NuxtLink
      >
    </div>
  </footer>
</template>

<script setup lang="ts">
const footerLinks = [
  { name: "Blog", path: "/blog" },
  { name: "Publications", path: "/publications" },
];
</script>

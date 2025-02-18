<template>
  <header class="fixed w-full p-3 z-20">
    <div class="glass max-w-screen-xl p-4 mx-auto border">
      <div class="flex items-center justify-between">
        <NuxtLink to="/">
          <h3 class="text-lg font-bold font-serif">ns.</h3>
        </NuxtLink>
        <span class="flex items-center">
          <ModeToggle />
          <NavigationBurger v-model="isActive" />
        </span>
      </div>
    </div>
    <div
      class="glass max-w-screen-xl mx-auto overflow-hidden transition-[height] duration-500 mt-1"
      :class="isActive ? 'h-[300px]' : 'h-0'"
    >
      <div class="flex items-end justify-between p-4 min-h-[300px]">
        <Socials />
        <nav
          class="flex flex-col items-end gap-3 text-4xl md:text-7xl font-serif font-bold"
        >
          <NuxtLink
            v-for="link in links"
            :key="link.href"
            :to="link.href"
            @mouseover="currentLink = link.href"
            @mouseleave="currentLink = ''"
            :class="{ 'blur-sm': currentLink && currentLink !== link.href }"
            class="transition-all duration-500"
            @click="isActive = false"
            >{{ link.name }}</NuxtLink
          >
        </nav>
      </div>
    </div>
  </header>
  <transition name="overlay">
    <div
      v-if="isActive"
      class="fixed inset-0 bg-foreground/25 z-10"
      @click="isActive = false"
    ></div>
  </transition>
</template>

<script setup lang="ts">
const links = [
  { name: "Home", href: "/" },
  { name: "Blogs", href: "/blogs" },
  { name: "Publications", href: "/publications" },
];

const isActive = ref(false);
const currentLink = ref("");
</script>

<style scoped>
.glass {
  @apply rounded-lg shadow-sm saturate-100 backdrop-blur-[10px] bg-background/80;
}
.overlay-enter-active,
.overlay-leave-active {
  transition: transform 0.5s ease;
  transform: scaleY(1);
  transform-origin: top;
}
.overlay-enter-from,
.overlay-leave-to {
  transform: scaleY(0);
}
</style>

<template>
  <div class="font-serif">
    <div class="flex flex-col gap-2 w-max">
      <NuxtLink
        v-for="social in socials"
        :key="social.name"
        :to="social.href"
        target="_blank"
      >
        <Button variant="ghost" class="bg-transparent w-full justify-start"
          ><component :is="social.icon" /> {{ social.name }}</Button
        >
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import GithubIcon from "@/assets/icons/github.svg";
import LinkedinIcon from "@/assets/icons/linkedin.svg";
import ScholarIcon from "@/assets/icons/scholar.svg";

const socials = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/nidhish-s-shah",
    icon: LinkedinIcon,
  },
  { name: "GitHub", href: "https://github.com/nidhishs", icon: GithubIcon },
  {
    name: "Scholar",
    href: "https://scholar.google.com/citations?user=g18XeocAAAAJ",
    icon: ScholarIcon,
  },
];
</script>

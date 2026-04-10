<template>
  <nav aria-label="social-links">
    <ul class="flex flex-wrap items-center gap-x-3 gap-y-2">
      <li v-for="(social, i) in socials" :key="social.href" class="flex items-center gap-3">
        <a
          :href="social.href"
          target="_blank"
          rel="noreferrer"
          class="text-muted-foreground hover:text-foreground text-xs tracking-wide uppercase transition-colors hover:underline"
        >
          {{ social.label }}
        </a>
        <span v-if="i < socials.length - 1" aria-hidden="true" class="text-border"> / </span>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
const socials = [
  { label: 'GitHub', href: 'https://github.com/nidhishs' },
  { label: 'Scholar', href: 'https://scholar.google.com/citations?user=g18XeocAAAAJ' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/nidhish-s-shah' },
] as const
</script>

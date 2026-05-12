import tailwindcss from '@tailwindcss/vite'
export default defineNuxtConfig({
  modules: ['@nuxt/fonts', 'nuxt-og-image', '@nuxt/content', 'shadcn-nuxt', '@nuxtjs/color-mode'],
  site: {
    url: 'https://nidhish.dev',
    name: 'Nidhish Shah',
  },
  fonts: {
    families: [
      { name: 'Bricolage Grotesque', weights: ['200 800'], global: true },
      { name: 'Figtree', weights: ['300 900'], styles: ['normal', 'italic'], global: true },
      { name: 'Newsreader', weights: ['200 800'], styles: ['normal', 'italic'], global: true },
      { name: 'JetBrains Mono', weights: ['100 800'], styles: ['normal', 'italic'], global: true },
    ],
  },
  app: {
    head: {
      title: 'Nidhish Shah',
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'shortcut icon', href: '/favicon.svg' },
      ],
    },
  },
  content: {
    build: {
      markdown: {
        highlight: {
          theme: 'github-dark',
          langs: ['c', 'cpp', 'js', 'python', 'ts', 'yaml'],
        },
      },
    },
  },
  mdc: {
    components: {
      map: {
        blockquote: 'ContentProseBlockquote',
        pre: 'ContentProsePre',
      },
    },
  },
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
  css: ['~/assets/css/tailwind.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  shadcn: {
    prefix: '',
    componentDir: '@/components/ui',
  },
  colorMode: {
    classSuffix: '',
  },
})

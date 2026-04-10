import tailwindcss from '@tailwindcss/vite'
export default defineNuxtConfig({
  modules: ['@nuxt/content', 'shadcn-nuxt'],
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
          langs: ['c', 'cpp', 'python', 'yaml'],
        },
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
})

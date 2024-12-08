// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@vueuse/motion/nuxt",
    "nuxt-svgo",
    "@nuxt/content",
    "@nuxt/image",
  ],
  shadcn: {
    prefix: "",
    componentDir: "./components/ui",
  },
  colorMode: {
    classSuffix: "",
  },
  content: {
    highlight: {
      theme: "github-dark",
      preload: ["python"],
    },
    markdown: {
      rehypePlugins: [
        [
          "rehype-external-links",
          { target: "_blank", rel: "noopener noreferer" },
        ],
      ],
    },
  },
});

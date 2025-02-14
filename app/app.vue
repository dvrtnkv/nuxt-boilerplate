<script setup lang="ts">
  const { title, title_chunk } = useData();
  useHead({
    htmlAttrs: {
      lang: "ru",
      class: "scroll-smooth",
    },
    titleTemplate: (titleChunk) => {
      return titleChunk ? `${titleChunk} - ${title_chunk}` : title;
    },
    link: [
      {
        rel: "icon",
        href: "/favicon-dark.svg",
        media: "(prefers-color-scheme: dark)",
      },
      {
        rel: "icon",
        href: "/favicon-light.svg",
        media: "(prefers-color-scheme: light)",
      },
    ],
  });
</script>
<template>
  <NuxtPage />
</template>

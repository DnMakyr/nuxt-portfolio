<template>
  <div>
    <h1>This is the main page</h1>
  </div>
</template>

<script lang="ts" setup>
useSeoMeta({
  title: 'Main',
  description: 'This is the main page',
  ogTitle: 'Main',
  ogDescription: 'This is the main page',
  ogImage: '[og:image]',
  ogUrl: 'og:url',
  twitterTitle: '[twitter:title]',
  twitterDescription: '[twitter:description]',
  twitterImage: '[twitter:image]',
  twitterCard: 'summary'
})

useHead({
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.png'
    }
  ]
})
</script>

<style>
</style>
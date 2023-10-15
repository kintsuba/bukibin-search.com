<template>
  <div>
    <BukibinHeader />
    <NuxtPage class="font-body" />
  </div>
</template>

<script setup lang="ts">
const BukibinHeader = resolveComponent("BukibinHeader");

const title = computed(() => "武器瓶のセリフから第何回か検索するやつ");
const description = ref(
  "不器用ビンボーダンス（武器瓶）のセリフが第何回のセリフかを検索できる非公式のファンサイトです。"
);

useHead({
  title,
  htmlAttrs: {
    lang: "ja",
    prefix: "og: http://ogp.me/ns#",
  },
  link: [
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicon-16x16.png",
    },
    {
      rel: "manifest",
      href: "/site.webmanifest",
    },
  ],
  meta: [
    {
      name: "description",
      content: description,
    },
    { hid: "og:site_name", property: "og:site_name", content: title },
    { hid: "og:type", property: "og:type", content: "website" },
    {
      hid: "og:url",
      property: "og:url",
      content: "https://bukibin-search.com",
    },
    { hid: "og:title", property: "og:title", content: title },
    {
      hid: "og:description",
      property: "og:description",
      content: description,
    },
    { hid: "og:image", property: "og:image", content: "/ogp-icon.png" },
    { name: "twitter:card", content: "summary" },
  ],
});
</script>

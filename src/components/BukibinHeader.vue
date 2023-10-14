<template>
  <header class="bg-primary-500 w-full shadow">
    <UContainer class="h-14 flex justify-between align-middle">
      <h1 class="flex">
        <UButton
          :ui="{
            strategy: 'override',
            font: 'font-extrabold',
            variant: {
              solid:
                'shadow-sm text-white dark:text-gray-900 bg-{color}-500 dark:bg-{color}-400 dark:disabled:bg-{color}-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-{color}-500 dark:focus-visible:outline-{color}-400',
            },
          }"
          color="primary"
          variant="solid"
          size="xl"
          label="武器瓶のセリフから第何回か検索するやつ"
          to="/"
          icon="i-heroicons-magnifying-glass-solid"
        />
      </h1>
      <div class="hidden md:flex">
        <UButton
          v-for="link in links"
          color="primary"
          variant="solid"
          size="xl"
          :label="link.label"
          :to="link.href"
          :icon="link.icon"
        />
      </div>
    </UContainer>
  </header>
</template>
<script setup lang="ts">
import { _primary } from "#tailwind-config/theme/accentColor";

const links = [
  { label: "Home", href: "/", icon: "i-heroicons-home-solid" },
  { label: "List", href: "/list", icon: "i-heroicons-list-bullet-solid" },
  {
    label: "Info",
    href: "/info",
    icon: "i-heroicons-information-circle-solid",
  },
];
</script>

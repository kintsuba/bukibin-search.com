<template>
  <main>
    <UContainer class="my-8">
      <UTable class="max-w-full" :rows="quotes ?? []" :columns="columns">
        <template #quote-data="{ row }">
          <span class="whitespace-normal">{{ row.quote }}</span>
        </template>
      </UTable>
    </UContainer>
  </main>
</template>

<script setup lang="ts">
import { type Quote } from "~/utils/types";

const { data: quotes } = await useFetch<Quote[]>(
  "https://script.google.com/macros/s/AKfycbxgLVZ_-8tk0FelmZkRFVV6JpKhTqgIS2hDd4Q63iF8KRNjnmGHIA0D2Lbc8SPMuBsA/exec",
  {
    timeout: 10000,
  }
);

const columns = [
  { key: "quote", label: "セリフ" },
  { key: "character", label: "キャラ" },
  { key: "episode", label: "話数" },
];
</script>

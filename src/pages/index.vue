<template>
  <main>
    <UContainer class="mt-8">
      <div class="flex flex-col items-center">
        <div class="w-full md:w-2/3 lg:w-1/2">
          <UInput
            v-model="query"
            color="primary"
            variant="outline"
            size="xl"
            placeholder="検索したいセリフを入力"
            icon="i-heroicons-magnifying-glass-20-solid"
          />
          <div class="my-4 flex flex-col gap-4">
            <UCard
              v-for="quote in matchedQuotes"
              class="cursor-pointer"
              @click="selectQuote(quote.id)"
            >
              <div class="grid grid-cols-3 md:grid-cols-4 gap-1 md:gap-4">
                <div
                  class="col-span-2 md:col-span-3 grid grid-cols-10 items-center"
                >
                  <UIcon
                    class="col-span-1 text-xl md:text-2xl text-primary-500"
                    name="i-heroicons-chat-bubble-oval-left-ellipsis-solid"
                  />
                  <p
                    class="col-span-9 whitespace-nowrap overflow-hidden text-ellipsis"
                  >
                    {{ quote.quote }}
                  </p>
                </div>
                <div class="col-span-1 grid grid-cols-4 items-center">
                  <UIcon
                    class="col-span-1 text-xl md:text-2xl text-primary-500"
                    name="i-heroicons-user-solid"
                  />
                  <p
                    class="col-span-3 whitespace-nowrap overflow-hidden text-ellipsis"
                  >
                    {{ quote.character }}
                  </p>
                </div>
              </div>
            </UCard>
          </div>
        </div>
      </div>
    </UContainer>
    <UModal v-model="isOpenModal"
      ><UCard>
        <Tweet
          :tweet-id="selectedQuote?.twitterId"
          conversation="none"
          lang="ja"
        >
          <template #loading>
            <USkeleton class="w-full h-[560px]" />
          </template>
        </Tweet>
      </UCard>
    </UModal>
  </main>
</template>

<script setup lang="ts">
import Tweet from "vue-tweet";
import { Quote } from "~/utils/types";

const { data: quotes } = await useFetch<Quote[]>(
  "https://script.google.com/macros/s/AKfycbxgLVZ_-8tk0FelmZkRFVV6JpKhTqgIS2hDd4Q63iF8KRNjnmGHIA0D2Lbc8SPMuBsA/exec",
  {
    timeout: 10000,
  }
);

const query = ref<string>("");
const isOpenModal = ref<boolean>(false);
const selectedQuote = ref<Quote | undefined>(undefined);

const matchedQuotes = computed<Quote[]>(() => {
  if (!quotes.value || query.value === "") return [];

  return quotes.value.filter((q) => q.quote.includes(query.value));
});

const selectQuote = (id: number) => {
  if (!quotes.value || query.value === "") return [];

  selectedQuote.value = quotes.value.find((q) => q.id === id);
  isOpenModal.value = true;
};
</script>

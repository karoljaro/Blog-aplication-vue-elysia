<template>
   <button
      class="flex space-x-1 items-center justify-center rounded-xl border border-solid border-dark/15 bg-dark/08 xl:px-6 xl:py-4.5 py-3.5 px-8 font-inter text-sm  leading-normal tracking-[calc(100%-3%)] text-grey/60"
   >
      <slot />
      <MoveUpRight v-if="displayArrow" :stroke-width="1.5" class="ml-1 text-yellow/55 size-5" />
   </button>
</template>

<script setup lang="ts">
import { MoveUpRight } from 'lucide-vue-next';

const {displayArrow = true} = defineProps<{
   displayArrow?: boolean;
}>();
</script>

<template>
   <button
      class="flex space-x-2.5 items-center justify-center rounded-xl border border-solid border-dark/15 bg-dark/08 px-6 py-4.5 font-inter text-lg font-normal leading-normal -tracking-[3%] text-grey/60"
   >
      <slot />
      <MoveUpRight :stroke-width="1.5" class="text-yellow/55 size-5" />
   </button>
</template>

<script setup lang="ts">
import { MoveUpRight } from 'lucide-vue-next';
</script>

<template>
   <SharedContentBox class="min-w-[16rem] flex-1 space-y-2.5 p-6 lg:space-y-4 lg:p-7.5 xl:space-y-5 xl:p-10">
      <div class="flex items-center justify-between">
         <h5 class="text-left font-inter text-base font-semibold !leading-normal -tracking-[3%] text-white lg:text-lg xl:text-[1.375rem]">
            <slot name="FooterCardTitle" />
         </h5>

         <div class="ml-4 rounded-full bg-yellow/55 p-2.5 lg:p-3 xl:p-3.5">
            <MoveUpRight :stroke-width="1.5" class="size-5 text-dark/08 xl:size-6" />
         </div>
      </div>
      <div>
         <p class="text-left font-inter text-sm font-normal !leading-normal -tracking-[3%] text-grey/60 lg:text-base xl:text-lg">
            <slot name="FooterCardDetails" />
         </p>
      </div>
   </SharedContentBox>
</template>

<script setup lang="ts">
import { MoveUpRight } from 'lucide-vue-next';
</script>

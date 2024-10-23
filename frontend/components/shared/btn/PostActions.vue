<template>
   <div class="flex max-w-min cursor-pointer select-none rounded-[6.25rem] border-dark/15 border bg-dark/10 sm:gap-1.5 sm:px-3 sm:py-1.5 xl:gap-2 xl:px-4 xl:py-2" @click="setValue()">
      <div class="size-5 xl:size-6" :class="value ? 'text-[#FF5500]' : 'text-dark/40'">
         <slot name="icon" />
      </div>
      <p class="sm:textsm text-left font-kumbh-sans font-normal !leading-normal -tracking-[3%] text-grey/60 xl:text-lg">
         <slot name="value" />
      </p>
   </div>
</template>

<script setup lang="ts">
const [value, setValue] = useToggle(false);
</script>

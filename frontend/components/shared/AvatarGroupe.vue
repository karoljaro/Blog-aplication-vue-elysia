<template>
   <div
      class="flex max-w-max -space-x-2 overflow-hidden rounded-full border border-solid border-dark/15 bg-dark/10 xl:p-2.5 sm:p-2"
   >
      <template v-for="{ photoSrc, photoAlt } in $props['data']" :key="photoSrc">
         <img
            :alt="photoAlt"
            :src="photoSrc"
            class="inline-block xl:size-[3.75rem] lg:size-[3.125rem] sm:size-10 rounded-full ring-1 ring-dark/40"
         />
      </template>
   </div>
</template>

<script setup lang="ts">
defineProps<{
   data: Array<{
      photoSrc: string;
      photoAlt: string;
   }>;
}>();
</script>

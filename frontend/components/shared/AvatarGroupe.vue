<template>
   <div
      class="flex max-w-max -space-x-2 overflow-hidden rounded-full border border-solid border-dark/15 bg-dark/10 p-2"
   >
      <template v-for="{ photoSrc, photoAlt } in $props['data']" :key="photoSrc">
         <img
            :alt="photoAlt"
            :src="photoSrc"
            class="inline-block size-15 rounded-full ring-1 ring-dark/40"
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

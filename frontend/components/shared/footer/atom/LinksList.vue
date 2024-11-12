<template>
   <nav class="space-y-4 lg:space-y-7 xl:space-y-9">
      <h6 class="text-left font-inter text-base font-medium !leading-[130%] -tracking-[3%] text-white lg:text-lg xl:text-xl">
         {{ title }}
      </h6>

      <ul class="flex-col space-y-2 lg:space-y-3 xl:space-y-[1.125rem]">
         <template v-for="link in links" :key="link['id']">
            <li class="list-none">
               <NuxtLink class="text-left font-inter text-sm font-normal !leading-[130%] -tracking-[3%] text-dark/40 xl:text-lg text-nowrap" :to="link['link']">{{ link['name'] }}</NuxtLink>
            </li>
         </template>
      </ul>
   </nav>
</template>

<script setup lang="ts">
defineProps<{
   title: string;
   links: {
      id: string;
      name: string;
      link: string;
      createdAt: string | Date;
   }[];
}>();
</script>

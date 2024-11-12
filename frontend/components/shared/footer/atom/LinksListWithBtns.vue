<template>
   <nav class="space-y-4 lg:space-y-7 xl:space-y-9">
      <h6 class="text-left font-inter text-base font-medium !leading-[130%] -tracking-[3%] text-white lg:text-lg xl:text-xl">
         {{ title }}
      </h6>

      <ul class="flex flex-wrap gap-2 lg:gap-3 xl:gap-[1.125rem]">
         <template v-for="link in links" :key="link['id']">
            <li class="list-none [@media(min-width:50rem)]:basis-1/2">
               <SharedBtnPrimaryBtn class="!px-3.5 !py-2 xl:!py-2.5 xl:!px-4">
                  <NuxtLink class="text-left font-inter text-sm font-normal !leading-[130%] -tracking-[3%] text-dark/40 xl:text-lg text-nowrap" :to="link['link']">{{ link['name'] }}</NuxtLink>
               </SharedBtnPrimaryBtn>
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

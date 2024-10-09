<template>
   <header>
      <div class="flex items-center justify-center space-x-2.5 sm:py-3 lg:py-3 xl:py-5">
         <p class="font-inter !leading-normal -tracking-[3%] text-grey/60 sm:text-sm xl:text-lg">Subscribe to our Newsletter For New & latest Blogs and Resources</p>
         <MoveUpRight :stroke-width="1.5" class="text-yellow/55 xl:size-6 sm:size-5 " />
      </div>

      <nav class="bg-dark/10">
         <div class="mx-auto flex w-5/6 items-center justify-between px-40.5 py-6">
            <!-- ------ LOGO ------ -->
            <picture>
               <source media="(min-width: 1920px)" srcset="/XL_Logo.png">
               <source media="(min-width: 1440px)" srcset="/MD_Logo.png">
               <img src="/SM_Logo.png" alt="Logo">
            </picture>

            <div class="space-x-4">
               <template v-for="link in navLinks" :key="link['id']">
                  <NuxtLink
                     :to="link['link']"
                     class="xl:px-6 xl:py-3.5 lg:px-4.5 lg:py-2.5 font-inter xl:text-lg lg:text-sm font-normal leading-normal text-grey/50"
                     :class="link['link'] == $route.path ? 'rounded-[0.625rem] border border-solid border-grey/50 bg-dark/08 !text-white' : ''"
                  >
                     {{ link['name'] }}
                  </NuxtLink>
               </template>
            </div>

            <NuxtLink class="rounded-[0.625rem] bg-yellow/55 xl:px-5 xl:py-3.5 lg:px-3.5 lg:py-2.5  font-inter xl:text-lg lg:text-sm !leading-normal text-dark/08"> Contact Us </NuxtLink>
         </div>
      </nav>
   </header>
</template>

<script setup lang="ts">
import { MoveUpRight } from 'lucide-vue-next';
import { CurrentRoute } from '~/types/enumCurrentRoute';

type LINK_TYPE = {
   id: number;
   name: string;
   link: string;
};

const navLinks: Array<LINK_TYPE> = [
   {
      id: 1,
      name: CurrentRoute['/'],
      link: '/'
   },
   {
      id: 2,
      name: CurrentRoute['news'],
      link: '/News'
   }
];
</script>

<template>
   <header>
      <div class="flex items-center justify-center space-x-2.5 px-6 pb-3.5 pt-10 lg:py-3 xl:py-5">
         <p class="text-left font-inter text-xs font-normal !leading-normal -tracking-[3%] text-grey/60 lg:text-sm xl:text-lg">Subscribe to our Newsletter For Blogs and Resources</p>
         <MoveUpRight :stroke-width="1.5" class="size-5 text-yellow/55 xl:size-6" />
      </div>

      <nav class="bg-dark/10">
         <div class="mx-auto flex max-w-[1920px] items-center justify-between px-4 py-5 lg:px-20 xl:px-40.5 xl:py-6">
            <!-- ------ LOGO ------ -->
            <picture>
               <source media="(min-width: 1920px)" srcset="/XL_Logo.png" />
               <source media="(min-width: 1440px)" srcset="/MD_Logo.png" />
               <img src="/SM_Logo.png" alt="Logo" />
            </picture>

            <AlignRight :size="34" :stroke-width="1.5" class="text-white lg:hidden" />
            <div class="space-x-4 hidden lg:block">
               <template v-for="link in navLinks" :key="link['id']">
                  <NuxtLink
                     :to="link['link']"
                     class="font-inter font-normal leading-normal text-grey/50 lg:px-4.5 lg:py-2.5 lg:text-sm xl:px-6 xl:py-3.5 xl:text-lg"
                     :class="link['link'] == $route.path ? 'rounded-[0.625rem] border border-solid border-grey/50 bg-dark/08 !text-white' : ''"
                  >
                     {{ link['name'] }}
                  </NuxtLink>
               </template>
            </div>

            <NuxtLink class="rounded-[0.625rem] bg-yellow/55 font-inter !leading-normal text-dark/08 hidden lg:block lg:px-3.5 lg:py-2.5 lg:text-sm xl:px-5 xl:py-3.5 xl:text-lg">
               Contact Us
            </NuxtLink>
         </div>
      </nav>
   </header>
</template>

<script setup lang="ts">
import { MoveUpRight, AlignRight } from 'lucide-vue-next';
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

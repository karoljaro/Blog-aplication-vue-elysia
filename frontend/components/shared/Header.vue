<template>
   <header>
      <div class="flex items-center justify-center space-x-2.5 py-5">
         <p class="font-inter text-[18px] leading-normal -tracking-[3%] text-grey/60">
            Subscribe to our Newsletter For New & latest Blogs and Resources
         </p>
         <MoveUpRight :stroke-width="1.5" class="text-yellow/55" />
      </div>

      <nav class=" bg-dark/10">
         <div class="flex items-center justify-between px-40.5 py-6 w-5/6 mx-auto">
            <img src="/XL_Logo.png" alt="Logo" />
            <div class="space-x-4">
               <template v-for="link in navLinks" :key="link['id']">
                  <NuxtLink
                     :to="link['link']"
                     class="px-6 py-3.5 font-inter text-lg font-normal leading-normal text-grey/50"
                     :class="
                        link['link'] == $route.path
                           ? 'rounded-[0.625rem] border border-solid border-grey/50 bg-dark/08 !text-white'
                           : ''
                     "
                  >
                     {{ link['name'] }}
                  </NuxtLink>
               </template>
            </div>

            <NuxtLink
               class="rounded-[0.625rem] bg-yellow/55 px-5 py-3.5 font-inter text-lg font-medium leading-normal text-dark/08"
            >
               Contact Us
            </NuxtLink>
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

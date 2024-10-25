<template>
   <div class="flex flex-wrap justify-between items-center border-b border-b-dark/15 px-4 gap-y-7.5 py-10 lg:px-20 lg:py-15 xl:px-40.5 xl:py-20">
      <!-- ----- Author ----- -->
      <div class="self-start flex space-x-2 order-1 flex-wrap">
         <img src="/Avatar1.png" alt="authorPhoto" />
         <div>
            <h5 class="text-left font-inter font-semibold !leading-normal -tracking-[3%] text-white text-lg xl:text-xl">Jonh Techson</h5>
            <p class="text-left font-inter font-normal !leading-normal -tracking-[3%] text-grey/60 xl:text-lg">Quantum Computing</p>
         </div>
      </div>
      
      <!-- ---- Post info ---- -->
      <div class="space-y-5 lg:space-y-6 xl:space-y-7.5 order-2 [@media(max-width:1100px)]:order-3 [@media(max-width:450px)]:order-2">
         <p class="text-left font-inter font-semibold !leading-normal -tracking-[3%] text-grey/60 text-base lg:text-lg xl:text-xl">October 15, 2023</p>

         <div>
            <h2 class="text-left font-inter font-semibold !leading-normal -tracking-[3%] text-white text-lg lg:text-xl xl:text-[1.625rem]">The Quantum Leap in Computing</h2>
            <p class="text-left font-inter font-normal !leading-normal -tracking-[3%] text-grey/60 text-sm lg:text-base xl:text-lg">
               Explore the revolution in quantum computing, its applications, and its potential impact on various industries.
            </p>
         </div>

         <div class="flex flex-wrap gap-2 xl:gap-x-2.5">
            <!-- Likes -->
            <SharedBtnPostActions>
               <template #icon>
                  <Heart />
               </template>
               <template #value> 24k </template>
            </SharedBtnPostActions>

            <!-- Comments -->
            <SharedBtnPostActions>
               <template #icon>
                  <MessageCircle />
               </template>
               <template #value> 24k </template>
            </SharedBtnPostActions>

            <!-- Shares -->
            <SharedBtnPostActions>
               <template #icon>
                  <Send />
               </template>
               <template #value> 24k </template>
            </SharedBtnPostActions>
         </div>
      </div>

      <SharedBtnPrimaryBtn class="max-h-min xl:ml-12.5 lg:ml-10 mr-0 order-3 [@media(max-width:1100px)]:order-2 [@media(max-width:450px)]:w-full [@media(max-width:450px)]:order-3">
         View Blog
      </SharedBtnPrimaryBtn>
   </div>
</template>

<script setup lang="ts">
import { Heart, MessageCircle, Send } from 'lucide-vue-next';
</script>

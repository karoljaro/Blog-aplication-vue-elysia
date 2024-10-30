<template>
   <div class="w-full border-b border-b-dark/15">
      <div class="mx-auto flex max-w-screen-xl flex-wrap justify-between gap-y-7.5 px-4 py-10 lg:px-20 lg:py-15 xl:px-40.5 xl:py-20">
         <!-- ----- Author ----- -->

         <div class="order-1 flex flex-wrap space-x-2 self-start">
            <img src="/Avatar1.png" alt="authorPhoto" />
            <div>
               <h5 class="text-left font-inter text-lg font-semibold !leading-normal -tracking-[3%] text-white xl:text-xl">Jonh Techson</h5>
               <p class="text-left font-inter font-normal !leading-normal -tracking-[3%] text-grey/60 xl:text-lg">Quantum Computing</p>
            </div>
         </div>

         <!-- ---- Post info ---- -->
         <div class="order-2 space-y-5 lg:space-y-6 xl:space-y-7.5 [@media(max-width:1150px)]:order-3 [@media(max-width:450px)]:order-2 [@media(min-width:70rem)]:ml-7.5  lg:ml-10 xl:ml-12.5">
            <p class="text-left font-inter text-base font-semibold !leading-normal -tracking-[3%] text-grey/60 lg:text-lg xl:text-xl">October 15, 2023</p>

            <div>
               <h2 class="text-left font-inter text-lg font-semibold !leading-normal -tracking-[3%] text-white lg:text-xl xl:text-[1.625rem]">The Quantum Leap in Computing</h2>
               <p class="text-left font-inter text-sm font-normal !leading-normal -tracking-[3%] text-grey/60 lg:text-base xl:text-lg">
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

         <SharedBtnPrimaryBtn class="order-3 mr-0 self-center max-h-min lg:ml-10 xl:ml-12.5 [@media(max-width:1150px)]:order-2 [@media(max-width:450px)]:order-3 [@media(max-width:450px)]:w-full [@media(min-width:70rem)]:ml-7.5">
            View Blog
         </SharedBtnPrimaryBtn>
      </div>
   </div>
</template>

<script setup lang="ts">
import { Heart, MessageCircle, Send } from 'lucide-vue-next';
</script>

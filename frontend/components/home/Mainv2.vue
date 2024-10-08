<template>
   <!-- -------------- WRAPPER -------------- -->

   <div class="h-screen">
      <Header />

      <main class="mx-auto h-[calc(100vh-170px)] max-w-[1920px]">
         <!-- ------------ TOP MAIN -------------- -->

         <section class="flex h-3/4">
            <!-- -------------- LEFT TOP SIDE SECTION OF MAIN -------------- -->

            <section class="w-3/5">
               <div class="flex h-3/4 w-full items-center justify-end sm:px-4 lg:pr-10 xl:pr-12.5">
                  <div class="sm:w-full sm:pt-2.5 lg:w-4/5 lg:pt-0 xl:pt-12.5">
                     <!-- -------------- TEXT DIV -------------- -->

                     <div class="text-left sm:space-y-3.5 lg:space-y-4 xl:space-y-6">
                        <p class="text-left font-kumbh-sans font-medium leading-[120%] -tracking-[3%] text-dark/40 sm:text-lg lg:text-[1.375rem] xl:text-3xl">
                           Your Journey to Tomorrow Begins Here
                        </p>

                        <div class="sm:space-y-2.5 lg:space-y-3.5 xl:space-y-5">
                           <h1 class="text-left font-kumbh-sans font-medium !leading-[120%] -tracking-[3%] text-white sm:text-3xl lg:text-[3.438rem] xl:text-[4.375rem]">
                              Explore the Frontiers of Artificial Intelligence
                           </h1>

                           <p class="text-left font-inter font-normal leading-normal -tracking-[3%] text-grey/50 sm:text-sm lg:text-base xl:text-lg">
                              Welcome to the epicenter of AI innovation. FutureTech AI News is your passport to a world where machines think, learn, and reshape the future. Join us
                              on this visionary expedition into the heart of AI.
                           </p>
                        </div>
                     </div>
                  </div>
               </div>

               <!-- -------------- SUB LEFT TOP SECTION OF MAIN CONTAINER -------------- -->

               <div class="flex justify-end h-1/4 w-full border-t border-t-dark/15">
                  <!-- Boxes orders are from left to right  -->

                  <div class="flex w-4/5 justify-end lg:pr-10 xl:pr-12.5">
                     <!-- First box -->
                     <div class="flex flex-1 items-center justify-start sm:pr-5 lg:pr-10  xl:pr-12.5">
                        <div class="w-full lg:space-y-0.5 xl:space-y-2.5">
                           <h3 class="text-left font-inter font-semibold leading-normal -tracking-[3%] text-white sm:text-2xl lg:text-3xl xl:text-[2.5rem]">
                              300<span class="text-yellow/55">+</span>
                           </h3>
                           <p class="font-inter font-normal leading-normal -tracking-[3%] text-grey/60 sm:text-sm xl:text-lg">News available</p>
                        </div>
                     </div>

                     <!-- Second box -->
                     <div class="flex flex-1 items-center justify-start border-x border-x-dark/15 sm:px-5 lg:px-10 xl:px-12.5">
                        <div class="w-full lg:space-y-0.5 xl:space-y-2.5">
                           <h3 class="text-left font-inter font-semibold leading-normal -tracking-[3%] text-white sm:text-2xl lg:text-3xl xl:text-[2.5rem]">
                              12k<span class="text-yellow/55">+</span>
                           </h3>
                           <p class="font-inter font-normal leading-normal -tracking-[3%] text-grey/60 sm:text-sm xl:text-lg">Total Reads</p>
                        </div>
                     </div>

                     <!-- Third box -->
                     <div class="flex flex-1 items-center justify-start sm:pl-5 sm:pr-0 lg:pl-10 xl:pl-12.5">
                        <div class="w-full lg:space-y-0.5 xl:space-y-2.5">
                           <h3 class="text-left font-inter font-semibold leading-normal -tracking-[3%] text-white sm:text-2xl lg:text-3xl xl:text-[2.5rem]">
                              10k<span class="text-yellow/55">+</span>
                           </h3>
                           <p class="font-inter font-normal leading-normal -tracking-[3%] text-grey/60 sm:text-sm xl:text-lg">News available</p>
                        </div>
                     </div>
                  </div>
               </div>
            </section>

            <!-- -------------- Right TOP SIDE SECTION OF MAIN -------------- -->
            <section class="relative flex h-full w-2/5 flex-col items-start justify-end border-l border-l-dark/15 sm:pb-10 sm:pl-10 lg:pb-12.5 lg:pl-12.5 xl:pb-20 xl:pl-20">
               <div class="sm:space-y-5 xl:space-y-[1.875rem]">
                  <SharedAvatarGroupe :data="avatarPhotos" />

                  <div class="sm:space-y-1 lg:space-y-1.5 xl:space-y-3.5">
                     <h2 class="text-left font-inter font-medium leading-normal -tracking-[3%] text-white sm:text-lg lg:text-xl xl:text-2xl">Explore 1000+ resources</h2>

                     <p class="text-left font-inter font-medium leading-normal -tracking-[3%] text-grey/60 sm:text-sm lg:text-base xl:text-lg">
                        Over 1,000 articles on emerging tech trends and breakthroughs.
                     </p>
                  </div>

                  <SharedBtnPrimaryBtn> Explore News </SharedBtnPrimaryBtn>
               </div>
            </section>
         </section>
         <!-- ------------ BOTTOM MAIN (SUB CONTAINER) -------------- -->

         <section class="flex h-1/4 w-full items-center justify-center border-t border-t-dark/15">
            <!-- Boxes orders are from left to right  -->
            <!-- tutaj -->
            <!-- First box -->
            <div class="flexcol flex items-center justify-center"></div>
         </section>
      </main>
   </div>
</template>

<script setup lang="ts">
import Header from '../shared/Header.vue';
import { FileClock, Boxes, UsersRound } from 'lucide-vue-next';

type AvatarPhoto_TYPE = {
   photoSrc: string;
   photoAlt: string;
};

const avatarPhotos: Array<AvatarPhoto_TYPE> = [
   {
      photoSrc: '/Avatar1.png',
      photoAlt: 'Avatar1'
   },
   {
      photoSrc: '/Avatar2.png',
      photoAlt: 'Avatar2'
   },
   {
      photoSrc: '/Avatar3.png',
      photoAlt: 'Avatar3'
   },
   {
      photoSrc: '/Avatar4.png',
      photoAlt: 'Avatar4'
   }
];
</script>

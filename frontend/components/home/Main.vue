<template>
   <section class="flex flex-col">
      <Header />

      <main class="mx-auto max-w-screen-xl">
         <!-- ------------ TOP MAIN -------------- -->

         <div class="flex flex-wrap">
            <!-- -------------- LEFT TOP SIDE SECTION OF MAIN -------------- -->
            <section class="w-full flex flex-col [@media(min-width:800px)]:w-3/5">
               <div class="flex-1 px-4 pb-7.5 pt-10 lg:py-[6.25rem] lg:pl-20 lg:pr-10 xl:pb-[6.25rem] xl:pl-40.5 xl:pr-12.5 xl:pt-[9.375rem]">
                  <!-- -------------- TEXT DIV -------------- -->

                  <div class="space-y-3.5 text-left lg:space-y-5 xl:space-y-6">
                     <p class="text-left font-kumbh-sans text-lg font-medium !leading-[120%] -tracking-[3%] text-dark/40 lg:text-[1.375rem] xl:text-3xl">Your Journey to Tomorrow Begins Here</p>

                     <div class="space-y-2.5 lg:space-y-3.5 xl:space-y-5">
                        <h1 class="text-left font-kumbh-sans text-3xl font-medium !leading-[120%] -tracking-[3%] text-white lg:text-[3.438rem] xl:text-[4.375rem]">
                           Explore the Frontiers of Artificial Intelligence
                        </h1>

                        <p class="text-left font-inter text-sm font-normal !leading-normal -tracking-[3%] text-grey/50 lg:text-base xl:text-lg">
                           Welcome to the epicenter of AI innovation. FutureTech AI News is your passport to a world where machines think, learn, and reshape the future. Join us on this visionary
                           expedition into the heart of AI.
                        </p>
                     </div>
                  </div>
               </div>

               <!-- -------------- SUB LEFT TOP SECTION OF MAIN CONTAINER -------------- -->
               <div class="flex justify-end border-y border-y-dark/15 pl-4 lg:pl-20 xl:pl-40.5">
                  <!-- Boxes orders are from left to right  -->

                  <div class="flex w-full justify-end lg:pr-10 xl:pr-12.5">
                     <!-- First box -->
                     <div class="flex flex-1 items-center justify-start py-5 pr-5 lg:py-7.5 lg:pr-10 xl:py-12.5 xl:pr-12.5">
                        <div class="w-full lg:space-y-0.5 xl:space-y-2.5">
                           <h3 class="text-left font-inter font-semibold leading-normal -tracking-[3%] text-white text-2xl lg:text-3xl xl:text-[2.5rem]">
                              300<span class="text-yellow/55">+</span>
                           </h3>
                           <p class="font-inter font-normal leading-normal -tracking-[3%] text-grey/60 text-sm xl:text-lg">News available</p>
                        </div>
                     </div>

                     <!-- Second box -->
                     <div class="flex flex-1 items-center justify-start border-x border-x-dark/15 px-5 py-5 lg:px-10 lg:py-7.5 xl:px-12.5 xl:py-12.5">
                        <div class="w-full lg:space-y-0.5 xl:space-y-2.5">
                           <h3 class="text-left font-inter font-semibold leading-normal -tracking-[3%] text-white text-2xl lg:text-3xl xl:text-[2.5rem]">
                              12k<span class="text-yellow/55">+</span>
                           </h3>
                           <p class="font-inter font-normal leading-normal -tracking-[3%] text-grey/60 text-sm xl:text-lg">Total Reads</p>
                        </div>
                     </div>

                     <!-- Third box -->
                     <div class="flex flex-1 items-center justify-start py-5 pl-5 pr-0 lg:py-7.5 lg:pl-10 xl:py-12.5 xl:pl-12.5">
                        <div class="w-full lg:space-y-0.5 xl:space-y-2.5">
                           <h3 class="text-left font-inter font-semibold leading-normal -tracking-[3%] text-white text-2xl lg:text-3xl xl:text-[2.5rem]">
                              10k<span class="text-yellow/55">+</span>
                           </h3>
                           <p class="font-inter font-normal leading-normal -tracking-[3%] text-grey/60 text-sm xl:text-lg">News available</p>
                        </div>
                     </div>
                  </div>
               </div>
            </section>

            <!-- -------------- Right TOP SIDE SECTION OF MAIN -------------- -->
            <section class="bg-gradient-to-br to-dark/08 via-dark/08 from-dark/10 flex flex-1 w-2/5 flex-col items-start justify-end border-l border-b border-b-dark/15 border-l-dark/15 pb-10 px-10 pt-[6.25rem] lg:pt-[9.375rem] lg:pb-12.5 lg:pl-12.5 xl:pb-20 xl:pl-20">
                <div class="space-y-5 xl:space-y-[1.875rem]">
                  <SharedAvatarGroupe :data="avatarPhotos" />

                  <div class="space-y-1 lg:space-y-1.5 xl:space-y-3.5">
                     <h2 class="text-left font-inter font-medium leading-normal -tracking-[3%] text-white text-lg lg:text-xl xl:text-2xl">Explore 1000+ resources</h2>

                     <p class="text-left font-inter font-medium leading-normal -tracking-[3%] text-grey/60 text-sm lg:text-base xl:text-lg">
                        Over 1,000 articles on emerging tech trends and breakthroughs.
                     </p>
                  </div>

                  <SharedBtnPrimaryBtn> Explore News </SharedBtnPrimaryBtn>
               </div>
            </section>
         </div>

         <!-- ------------ BOTTOM MAIN (SUB CONTAINER) -------------- -->
          <section class="flex flex-wrap [@media(max-width:1040px)]:flex-col w-full px-4 lg:px-20 xl:px-40.5 justify-center">
             <!-- Boxes orders are from left to right  -->

            <HomeAtomComponentsSubMainBoxes class="[@media(min-width:65rem)]:pr-7.5 xl:pr-20 lg:pr-12.5">
                <template #icon>
                    <FileClock :size="50" :stroke-width="1" class="self-start text-yellow/55 size-7.5 lg:size-10 xl:size-[3.125rem]" />
                </template>
                <template #box-header>
                    Latest News Updates
                </template>
                <template #box-content>
                    Stay Current
                </template>
                <template #box-details>
                    Over 1,000 articles published monthly
                </template>
            </HomeAtomComponentsSubMainBoxes>
            <HomeAtomComponentsSubMainBoxes class="[@media(max-width:65rem)]:border-y [@media(max-width:65rem)]:border-y-dark/15 [@media(max-width:65rem)]:border-x-0 [@media(min-width:65rem)]:px-7.5 xl:px-20 lg:px-12.5 border-x border-x-dark/15">
                <template #icon>
                    <Boxes :size="50" :stroke-width="1" class="self-start text-yellow/55 size-7.5 lg:size-10 xl:size-[3.125rem]" />
                </template>
                <template #box-header>
                    Expert Contributors
                </template>
                <template #box-content>
                    Trusted Insights
                </template>
                <template #box-details>
                    50+ renowned AI experts on our team
                </template>
            </HomeAtomComponentsSubMainBoxes>
            <HomeAtomComponentsSubMainBoxes class="[@media(min-width:65rem)]:pl-7.5 xl:pl-20 lg:pl-12.5">
                <template #icon>
                    <UsersRound :size="50" :stroke-width="1" class="self-start text-yellow/55 size-7.5 lg:size-10 xl:size-[3.125rem]" />
                </template>
                <template #box-header>
                    Global Readership
                </template>
                <template #box-content>
                    Worldwide Impact
                </template>
                <template #box-details>
                    2 million monthly readers
                </template>
            </HomeAtomComponentsSubMainBoxes>
          </section>
      </main>
   </section>
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

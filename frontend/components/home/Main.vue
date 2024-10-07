<template>
   <main class="h-[calc(100vh-170px)]">
      <!-- CONTINER -->
      <div class="flex h-3/4">
         <!-- LEFT SIDE -->
         <div class="w-3/5">
            <div class="flex h-3/4 w-full items-center justify-end pr-12.5">
               <div class="w-4/5 pt-12.5">
                  <div class="space-y-6 text-left">
                     <p
                        class="font-kumbh-sans text-3xl font-medium leading-[120%] -tracking-[3%] text-dark/40"
                     >
                        Your Journey to Tomorrow Begins Here
                     </p>
                     <div class="space-y-5">
                        <h1
                           class="font-kumbh-sans text-[70px] font-medium leading-[120%] -tracking-[3%] text-white"
                        >
                           Explore the Frontiers of Artificial Intelligence
                        </h1>

                        <p
                           class="font-inter text-lg font-normal leading-normal -tracking-[3%] text-grey/50"
                        >
                           Welcome to the epicenter of AI innovation. FutureTech AI News is your
                           passport to a world where machines think, learn, and reshape the future.
                           Join us on this visionary expedition into the heart of AI.
                        </p>
                     </div>
                  </div>
               </div>
            </div>

            <div class="flex h-1/4 w-full justify-end border-t border-t-dark/15">
               <div
                  class="flex items-center justify-start border-r border-solid border-dark/15 pr-12.5"
               >
                  <div class="w-[15rem] space-y-2.5">
                     <h3
                        class="-trackng-[3%] font-inter text-[2.5rem] font-semibold leading-normal text-white"
                     >
                        300<span class="text-yellow/55">+</span>
                     </h3>
                     <p
                        class="font-inter text-lg font-normal leading-normal -tracking-[3%] text-grey/60"
                     >
                        News available
                     </p>
                  </div>
               </div>
               <div
                  class="flex h-full items-center justify-start border-r border-solid border-dark/15 px-12.5"
               >
                  <div class="w-[15rem] space-y-2.5">
                     <h3
                        class="-trackng-[3%] font-inter text-[2.5rem] font-semibold leading-normal text-white"
                     >
                        12k<span class="text-yellow/55">+</span>
                     </h3>
                     <p
                        class="font-inter text-lg font-normal leading-normal -tracking-[3%] text-grey/60"
                     >
                        Total Reads
                     </p>
                  </div>
               </div>
               <div class="flex h-full items-center justify-start pl-12.5">
                  <div class="w-[15rem] space-y-2.5">
                     <h3
                        class="-trackng-[3%] font-inter text-[2.5rem] font-semibold leading-normal text-white"
                     >
                        10k<span class="text-yellow/55">+</span>
                     </h3>
                     <p
                        class="font-inter text-lg font-normal leading-normal -tracking-[3%] text-grey/60"
                     >
                        Active Users
                     </p>
                  </div>
               </div>
            </div>
         </div>

         <!-- RIGHT SIDE  -->
         <div
            class="relative flex h-full w-2/5 flex-col items-start justify-end border-l border-solid border-dark/15 pb-12.5 pl-12.5"
         >
            <div class="space-y-[1.875rem]">
               <SharedAvatarGroupe :data="avatarPhotos" />

               <div class="space-y-3.5">
                  <h2
                     class="text-left font-inter text-2xl font-medium leading-normal -tracking-[3%] text-white"
                  >
                     Explore 1000+ news
                  </h2>
                  <p
                     class="text-left font-inter text-lg font-normal leading-normal -tracking-[3%] text-grey/60"
                  >
                     Over 1,000 articles on emerging tech trends and breakthroughs.
                  </p>
               </div>

               <SharedBtnPrimaryBtn> Explore News </SharedBtnPrimaryBtn>
            </div>
         </div>
      </div>

      <!-- SUB CONTAINER -->
      <div class="flex h-1/4 items-center justify-center border-t border-t-dark/15">
         <div class="flex flex-col items-center justify-center space-y-7.5 pr-12">
            <FileClock :size="50" :stroke-width="1" class="self-start text-yellow/55" />

            <div class="flex w-[26.583rem] justify-between">
               <div class="space-y-1">
                  <p
                     class="text-left font-inter text-xl font-medium leading-normal -tracking-[3%] text-white"
                  >
                     Latest News Updates
                  </p>
                  <p
                     class="text-left font-inter text-lg font-normal leading-normal -tracking-[3%] text-grey/50"
                  >
                     Stay Current
                  </p>
               </div>

               <SharedBtnSecondBtn />
            </div>

            <p
               class="self-start text-left font-kumbh-sans text-xl font-normal leading-normal -tracking-[3%] text-grey/60"
            >
               Over 1,000 articles published monthly
            </p>
         </div>

         <div
            class="flex h-full flex-col items-center justify-center space-y-7.5 border-x border-dark/15 px-12"
         >
            <Boxes :size="50" :stroke-width="1" class="self-start text-yellow/55" />

            <div class="flex w-[26.583rem] justify-between">
               <div class="space-y-1">
                  <p
                     class="text-left font-inter text-xl font-medium leading-normal -tracking-[3%] text-white"
                  >
                     Expert Contributors
                  </p>
                  <p
                     class="text-left font-inter text-lg font-normal leading-normal -tracking-[3%] text-grey/50"
                  >
                     Trusted Insights
                  </p>
               </div>

               <SharedBtnSecondBtn />
            </div>

            <p
               class="self-start text-left font-kumbh-sans text-xl font-normal leading-normal -tracking-[3%] text-grey/60"
            >
               50+ renowned AI experts on our team
            </p>
         </div>
         <div class="flex flex-col items-center justify-center space-y-7.5 pl-12">
            <UsersRound :size="48" :stroke-width="1" class="self-start text-yellow/55" />

            <div class="flex w-[26.583rem] justify-between">
               <div class="space-y-1">
                  <p
                     class="text-left font-inter text-xl font-medium leading-normal -tracking-[3%] text-white"
                  >
                     Global Readership
                  </p>
                  <p
                     class="text-left font-inter text-lg font-normal leading-normal -tracking-[3%] text-grey/50"
                  >
                     Worldwide Impact
                  </p>
               </div>

               <SharedBtnSecondBtn />
            </div>

            <p
               class="self-start text-left font-kumbh-sans text-xl font-normal leading-normal -tracking-[3%] text-grey/60"
            >
               2 million monthly readers
            </p>
         </div>
      </div>
   </main>
</template>

<script setup lang="ts">
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

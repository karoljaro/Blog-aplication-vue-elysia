<template>
   <div class="space-y-5 lg:space-y-10 xl:space-y-[3.75rem] flex-col flex justify-center min-w-min">
      <div class="space-y-6 lg:space-y-7.5 xl:space-y-12.5">
         <BookCopy :stroke-width="1.5" class="text-yellow/55 size-12.5 lg:size-15 xl:size-20" />

         <div class="space-y-1 lg:space-y-2.5 xl:space-y-4">
            <h3 class="text-left font-kumbh-sans text-2xl font-semibold !leading-normal -tracking-[3%] text-white lg:text-3xl xl:text-[2.5rem]"></h3>
            <p class="text-left font-inter text-sm font-normal !leading-normal -tracking-[3%] text-grey/60 lg:text-base xl:text-xl">
               Explore our collection of ebooks covering a wide spectrum of future technology topics.
            </p>
         </div>

         <SharedBtnPrimaryBtn class="w-full"> Download Ebooks Now </SharedBtnPrimaryBtn>
      </div>

      <SharedContentBox class="flex flex-nowrap w-fit space-x-7.5 px-7.5 py-5 lg:px-5 xl:space-x-12.5 xl:p-7.5">
         <div class="space-y-0.5 flex flex-col text-nowrap justify-center">
            <p class="text-left font-inter text-sm font-normal !leading-normal -tracking-[3%] text-grey/60 xl:text-lg">Downloaded By</p>
            <p class="text-left font-inter text-lg font-semibold !leading-normal -tracking-[3%] text-white xl:text-2xl">10k + Users</p>
         </div>
         <SharedAvatarGroupe :data="avatarPhotos" class="!rounded-[0.813rem] !border-none" />
      </SharedContentBox>
   </div>
</template>

<script setup lang="ts">
import { BookCopy } from 'lucide-vue-next';

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

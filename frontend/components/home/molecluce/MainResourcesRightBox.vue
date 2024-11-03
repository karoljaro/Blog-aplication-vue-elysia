<script setup lang="ts">
import ContentBox from '~/components/shared/ContentBox.vue';
</script>

<template>
   <div class="flex flex-col py-10 pl-0 lg:py-15 lg:pl-15 xl:py-20 xl:pl-20 space-y-6 xl:space-y-7.5 border-l border-l-dark/15">
      <div class="flex justify-between">
         <h4 class="text-left font-inter text-lg text-nowrap min-w-min font-semibold !leading-normal -tracking-[3%] text-white lg:text-xl xl:text-2xl xl:mr-5 mr-4">Variety of Topics</h4>
         <p class="text-left font-inter text-sm font-normal !leading-normal -tracking-[3%] text-grey/60 lg:text-base xl:text-lg">
            Topics include AI in education (25%), renewable energy (20%), healthcare (15%), space exploration (25%), and biotechnology (15%).
         </p>
      </div>

      <img src="/resource1.png" alt="resourcePhoto" class="rounded-xl" />

      <div class="flex flex-wrap gap-5">
         <ContentBox class="space-y-0.5 max-w-full min-w-min p-5 lg:p-6 xl:space-y-1 xl:p-7.5">
            <p class="text-left font-inter text-sm font-normal !leading-normal -tracking-[3%] text-grey/60 lg:text-base xl:text-lg">Total Ebooks</p>
            <p class="text-left font-inter font-semibold !leading-normal -tracking-[3%] text-white lg:text-lg xl:text-xl">Over 100 ebooks</p>
         </ContentBox>
         <ContentBox class="flex p-5 grow justify-between lg:p-6 xl:p-7.5">
            <div class="space-y-0.5 xl:space-y-1">
               <p class="text-left font-inter text-sm font-normal !leading-normal -tracking-[3%] text-grey/60 lg:text-base xl:text-lg">Download Formats</p>
               <p class="text-left font-inter text-base font-semibold !leading-normal -tracking-[3%] text-white lg:text-lg xl:text-xl">PDF format for access.</p>
            </div>

            <SharedBtnPrimaryBtn>
                Preview
            </SharedBtnPrimaryBtn>
         </ContentBox>
         <ContentBox class="space-y-0.5 w-full p-5 lg:p-6 xl:space-y-1 xl:p-7.5">
            <p class="text-left font-inter text-sm font-normal !leading-normal -tracking-[3%] text-grey/60 lg:text-base xl:text-lg">Average Author Expertises</p>
            <p class="text-left font-inter font-medium !leading-normal -tracking-[3%] text-white lg:text-lg xl:text-xl">Ebooks are authored by renowned experts with an average of 15 years of experience</p>
         </ContentBox>
      </div>
   </div>
</template>

<template>
   <section class="flex flex-col">
      <!-- ------------ SECTION HEADER ------------ -->
      <SharedSectionHeader>
         <div class="mx-auto max-w-screen-xl space-y-2.5 px-4 py-10 lg:px-20 lg:py-20 xl:space-y-4 xl:px-40.5 xl:py-30">
            <SharedSectionLabel> Unlock the Power of </SharedSectionLabel>

            <h1 class="space-y-2.5 text-left font-kumbh-sans text-[1.75rem] font-medium !leading-[130%] -tracking-[3%] text-white lg:text-[2.75rem] xl:space-y-4 xl:text-[3.625rem]">
               FutureTech Features
            </h1>
         </div>
      </SharedSectionHeader>

      <!-- ------------ Future Technology Blog ------------ -->

      <div class="mx-auto flex max-w-screen-xl flex-col border-b border-b-dark/15 px-4 lg:flex-row lg:px-20 xl:px-40.5">
         <!-- LEFT SIDE -->
         <div
            class="flex flex-col items-end justify-center space-y-5 border-b border-b-dark/15 py-12.5 lg:w-4/5 lg:space-y-10 lg:border-b-0 lg:border-r lg:border-r-dark/15 lg:py-0 lg:pr-15 xl:space-y-12.5 xl:pr-20"
         >
            <Dna class="size-12.5 self-start text-yellow/55 lg:size-15 xl:size-20" />
            <div class="self-start space-y-1.5 lg:space-y-2.5 xl:space-y-4">
               <h2 class="text-left font-kumbh-sans font-semibold !leading-normal -tracking-[3%] text-white text-2xl lg:text-[1.875rem] xl:text-[2.5rem]">Future Technology Blog</h2>
               <p class="text-left font-inter font-normal !leading-normal -tracking-[3%] text-grey/60 text-sm lg:text-base xl:text-lg">
                  Stay informed with our blog section dedicated to future technology.
               </p>
            </div>
         </div>

         <!-- RIGHT SIDE -->
         <div class="flex flex-wrap gap-2.5 px-4 py-7.5 lg:w-fit lg:gap-5 lg:py-15 lg:pl-15 lg:pr-0 xl:gap-7.5 xl:py-20 xl:pl-20">
            <SharedContentBox class="min-w-64 flex-1 basis-[40%] space-y-1 p-6 lg:space-y-4 lg:p-7.5 xl:space-y-5 xl:p-10">
               <h3 class="text-left font-inter font-medium !leading-normal -tracking-[3%] text-white text-lg lg:text-xl xl:text-2xl">Quantity</h3>
               <p class="text-left font-inter font-normal !leading-normal -tracking-[3%] text-grey/60 text-sm lg:text-base xl:text-lg">
                  Over 1,000 articles on emerging tech trends and breakthroughs.
               </p>
            </SharedContentBox>

            <SharedContentBox class="min-w-64 flex-1 basis-[40%] space-y-1 p-6 lg:space-y-4 lg:p-7.5 xl:space-y-5 xl:p-10">
               <h3 class="text-left font-inter font-medium !leading-normal -tracking-[3%] text-white text-lg lg:text-xl xl:text-2xl">Variety</h3>
               <p class="text-left font-inter font-normal !leading-normal -tracking-[3%] text-grey/60 text-sm lg:text-base xl:text-lg">
                  Articles cover fields like AI, robotics, biotechnology, and more.
               </p>
            </SharedContentBox>

            <SharedContentBox class="min-w-64 flex-1 basis-[40%] space-y-1 p-6 lg:space-y-4 lg:p-7.5 xl:space-y-5 xl:p-10">
               <h3 class="text-left font-inter font-medium !leading-normal -tracking-[3%] text-white text-lg lg:text-xl xl:text-2xl">Frequency</h3>
               <p class="text-left font-inter font-normal !leading-normal -tracking-[3%] text-grey/60 text-sm lg:text-base xl:text-lg">Fresh content added daily to keep you up to date.</p>
            </SharedContentBox>

            <SharedContentBox class="min-w-64 flex-1 basis-[40%] space-y-1 p-6 lg:space-y-4 lg:p-7.5 xl:space-y-5 xl:p-10">
               <h3 class="text-left font-inter font-medium !leading-normal -tracking-[3%] text-white text-lg lg:text-xl xl:text-2xl">Authoritative</h3>
               <p class="text-left font-inter font-normal !leading-normal -tracking-[3%] text-grey/60 text-sm lg:text-base xl:text-lg">
                  Written by our team of tech experts and industry professionals.
               </p>
            </SharedContentBox>
         </div>
      </div>

      <!-- ------------ Research Insights Blogs ------------ -->

      <div class="mx-auto flex max-w-screen-xl border-b border-b-dark/15 flex-col px-4 lg:flex-row lg:px-20 xl:px-40.5">
         <!-- LEFT SIDE -->
         <div
            class="flex flex-col items-end justify-center border-b-dark/15 space-y-5 border-b py-12.5 lg:w-4/5 lg:space-y-10 lg:border-b-0 lg:border-r lg:border-r-dark/15 lg:py-0 lg:pr-15 xl:space-y-12.5 xl:pr-20"
         >
            <FolderCheck class="self-start text-yellow/55 size-12.5 lg:size-15 xl:size-20" />
            <div class="self-start space-y-1.5 lg:space-y-2.5 xl:space-y-4">
               <h2 class="text-left font-kumbh-sans font-semibold !leading-normal -tracking-[3%] text-white text-2xl lg:text-[1.875rem] xl:text-[2.5rem]">Research Insights Blogs</h2>
               <p class="text-left font-inter font-normal !leading-normal -tracking-[3%] text-grey/60 text-sm lg:text-base xl:text-lg">
                  Dive deep into future technology concepts with our research section.
               </p>
            </div>
         </div>

         <!-- RIGHT SIDE -->
         <div class="flex flex-wrap gap-2.5 px-4 py-7.5 lg:w-fit lg:gap-5 lg:py-15 lg:pl-15 lg:pr-0 xl:gap-7.5 xl:py-20 xl:pl-20">
            <SharedContentBox class="min-w-64 flex-1 basis-[40%] space-y-1 p-6 lg:space-y-4 lg:p-7.5 xl:space-y-5 xl:p-10">
               <h3 class="text-left font-inter font-medium !leading-normal -tracking-[3%] text-white text-lg lg:text-xl xl:text-2xl">Depth</h3>
               <p class="text-left font-inter font-normal !leading-normal -tracking-[3%] text-grey/60 text-sm lg:text-base xl:text-lg">500+ research articles for in-depth understanding.</p>
            </SharedContentBox>

            <SharedContentBox class="min-w-64 flex-1 basis-[40%] space-y-1 p-6 lg:space-y-4 lg:p-7.5 xl:space-y-5 xl:p-10">
               <h3 class="text-left font-inter font-medium !leading-normal -tracking-[3%] text-white text-lg lg:text-xl xl:text-2xl">Graphics</h3>
               <p class="text-left font-inter font-normal !leading-normal -tracking-[3%] text-grey/60 text-sm lg:text-base xl:text-lg">Visual aids and infographics to enhance comprehension.</p>
            </SharedContentBox>

            <SharedContentBox class="min-w-64 flex-1 basis-[40%] space-y-1 p-6 lg:space-y-4 lg:p-7.5 xl:space-y-5 xl:p-10">
               <h3 class="text-left font-inter font-medium !leading-normal -tracking-[3%] text-white text-lg lg:text-xl xl:text-2xl">Trends</h3>
               <p class="text-left font-inter font-normal !leading-normal -tracking-[3%] text-grey/60 text-sm lg:text-base xl:text-lg">Explore emerging trends in future technology research.</p>
            </SharedContentBox>

            <SharedContentBox class="min-w-64 flex-1 basis-[40%] space-y-1 p-6 lg:space-y-4 lg:p-7.5 xl:space-y-5 xl:p-10">
               <h3 class="text-left font-inter font-medium !leading-normal -tracking-[3%] text-white text-lg lg:text-xl xl:text-2xl">Contributors</h3>
               <p class="text-left font-inter font-normal !leading-normal -tracking-[3%] text-grey/60 text-sm lg:text-base xl:text-lg">Contributions from tech researchers and academics.</p>
            </SharedContentBox>
         </div>
      </div>
   </section>
</template>

<script setup lang="ts">
import { Dna, FolderCheck } from 'lucide-vue-next';
</script>

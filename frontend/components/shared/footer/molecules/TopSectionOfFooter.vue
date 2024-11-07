<template>
   <div class="w-full flex-col space-y-10 py-10 lg:py-20 xl:py-[7.5rem] lg:space-y-12.5 xl:space-y-[6.25rem]">
      <div class="flex flex-wrap items-center gap-5 lg:gap-[3.75rem] xl:gap-20">
         <img src="/Logo2.png" alt="logo2" class="size-15 w-fit shrink-0 lg:size-[7.5rem] xl:size-[9.375rem]" />

         <div class="grow space-y-2.5 xl:space-y-4">
            <SharedSectionLabel>Learn, Connect, and Innovate</SharedSectionLabel>
            <div class="space-y-1 lg:space-y-5 xl:space-y-7.5">
               <h1 class="text-left font-kumbh-sans text-[1.75rem] font-medium !leading-normal -tracking-[3%] text-white lg:text-[2.75rem] xl:text-[3.625rem]">
                  Be Part of the Future Tech Revolution
               </h1>
               <p class="text-wrap text-left font-inter text-sm font-normal !leading-normal -tracking-[3%] text-grey/50 lg:text-base xl:text-lg">
                  Immerse yourself in the world of future technology. Explore our comprehensive resources,
               </p>
            </div>
         </div>
      </div>
      <div class="flex flex-wrap gap-2.5 p-2.5 xl:gap-5 xl:p-5 bg-dark/08 rounded-xl">
         <SharedFooterAtomCard>
            <template #FooterCardTitle>
               Resource Access
            </template>
            <template #FooterCardDetails>
               Visitors can access a wide range of resources, including ebooks, whitepapers, reports.
            </template>
         </SharedFooterAtomCard>

         <SharedFooterAtomCard>
            <template #FooterCardTitle>
               Community Forum
            </template>
            <template #FooterCardDetails>
               Join our active community forum to discuss industry trends, share insights, and collaborate with peers.
            </template>
         </SharedFooterAtomCard>

         <SharedFooterAtomCard>
            <template #FooterCardTitle>
               Tech Events
            </template>
            <template #FooterCardDetails>
               Stay updated on upcoming tech events, webinars, and conferences to enhance your knowledge.
            </template>
         </SharedFooterAtomCard>
      </div>
   </div>
</template>

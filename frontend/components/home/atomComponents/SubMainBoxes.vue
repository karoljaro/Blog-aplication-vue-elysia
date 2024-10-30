<template>
   <div class="flex flex-1 max-w-[37.5rem] min-w-60 w-full flex-col mx-auto items-center justify-center space-y-2.5 py-7.5 lg:space-y-5 lg:py-10 xl:space-y-7.5 xl:py-12.5">
      <slot name="icon" />

      <div class="flex w-full justify-between">
         <div class="space-y-0.5 xl:space-y-1">
            <p class="text-left font-inter text-base font-medium !leading-normal -tracking-[3%] text-white lg:text-lg xl:text-xl">
               <slot name="box-header" />
            </p>
            <p class="text-left font-inter text-sm font-normal !leading-normal -tracking-[3%] text-grey/60 lg:text-base xl:text-lg">
               <slot name="box-content" />
            </p>
         </div>
         <SharedBtnSecondBtn class="ml-3.5 xl:ml-5" />
      </div>

      <p class="self-start text-left font-kumbh-sans text-sm font-normal !leading-normal -tracking-[3%] text-grey/60 lg:text-base xl:text-xl">
         <slot name="box-details" />
      </p>
   </div>
</template>

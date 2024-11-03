<template>
   <section>
      <SharedSectionHeader>
         <div
            class="mx-auto flex max-w-screen-xl flex-row items-center justify-between px-4 py-10 lg:px-20 lg:py-20 xl:px-40.5 xl:py-30 [@media(max-width:800px)]:flex-col [@media(max-width:800px)]:space-y-7.5"
         >
            <div class="space-y-2.5 xl:space-y-4">
               <SharedSectionLabel> Your Gateway to In-Depth Information </SharedSectionLabel>

               <h1 class="space-y-2.5 text-left font-kumbh-sans text-[1.75rem] font-medium !leading-[130%] -tracking-[3%] text-white lg:text-[2.75rem] xl:space-y-4 xl:text-[3.625rem]">
                  Unlock Valuable Knowledge with FutureTech's Resources
               </h1>
            </div>

            <SharedBtnPrimaryBtn class="max-h-min [@media(min-width:801px)]:ml-[10rem] [@media(max-width:800px)]:!w-full"> View All Resources </SharedBtnPrimaryBtn>
         </div>
      </SharedSectionHeader>
      <HomeAtomComponentsMainResourcesBox>
         <HomeMolecluceMainResourcesLeftBox />
         <HomeMolecluceMainResourcesRightBox />
      </HomeAtomComponentsMainResourcesBox>
   </section>
</template>

<template>
   <section class="flex min-h-screen flex-col">
      <!-- -------------- SECTION HEADER -------------- -->
      <SharedSectionHeader>
         <div
            class="mx-auto flex max-w-screen-xl flex-row items-center justify-between sm:px-4 sm:py-10 lg:px-20 lg:py-20 xl:px-40.5 xl:py-30 [@media(max-width:800px)]:flex-col [@media(max-width:800px)]:space-y-7.5"
         >
            <div class="sm:space-y-2.5 xl:space-y-4">
               <SharedSectionLabel> A Knowledge Treasure Throve </SharedSectionLabel>

               <h1 class="text-left font-kumbh-sans font-medium !leading-[130%] -tracking-[3%] text-white sm:space-y-2.5 sm:text-[1.75rem] lg:text-[2.75rem] xl:space-y-4 xl:text-[3.625rem]">
                  Explore Future Tech In-Depth Blog Post
               </h1>
            </div>

            <SharedBtnPrimaryBtn class="max-h-min [@media(max-width:800px)]:!w-full"> View all Blogs </SharedBtnPrimaryBtn>
         </div>
      </SharedSectionHeader>

      <!-- -------------- EXAMPLE POSTS CATEGORY NAVBAR -------------- -->
      <nav class="flex flex-row overflow-x-auto border-b border-b-dark/15 sm:space-x-3.5 sm:px-4 sm:py-5 lg:px-20 lg:py-10 xl:space-x-5 xl:px-40.5 xl:py-12.5">
         <div
            v-for="category in postsCategory"
            :key="category['id']"
            ref="categoryRef"
            class="cursor-pointer rounded-[0.438rem] border border-dark/15 bg-dark/08 sm:px-4 sm:py-4.5 lg:px-5 lg:py-6 xl:px-6 xl:py-7.5"
         >
            <p class="min-w-max text-center font-inter font-normal !leading-normal -tracking-[3%] text-grey/60 sm:text-sm xl:text-lg">{{ category['name'] }}</p>
         </div>
      </nav>

      <!-- -------------- EXAMPLE POSTS -------------- -->
      <SharedExamplePosts />
      <SharedExamplePosts />
      <SharedExamplePosts />
       
   </section>
</template>

<script setup lang="ts">
type PostSCategory_TYPE = {
   id: string;
   name: string;
};

const categoryRef = ref<(HTMLDivElement | null)[]>([null]);

const setEqualWidth = () => {
   const widths = categoryRef['value'].map((element) => (element ? element.offsetWidth : 0));
   const maxWidth = Math.max(...widths);

   categoryRef['value'].forEach((el) => {
      if (el) {
         el.style.minWidth = `${maxWidth}px`;
      }
   });
};

onMounted(() => {
   setEqualWidth();
});

const postsCategory: PostSCategory_TYPE[] = [
   {
      id: 'noieiisfi',
      name: 'All'
   },
   {
      id: 'fdsfsd',
      name: 'Quantum Computing'
   },
   {
      id: 'oifjasoijfoidsa',
      name: 'AI Ethics'
   },
   {
      id: 'joifjsoijbh',
      name: 'Space Exploration'
   },
   {
      id: 'dbcbkbkjas',
      name: 'Biotechnology'
   },
   {
      id: 'ncn,xmnjknksd',
      name: 'Renewable Energy'
   }
];
</script>

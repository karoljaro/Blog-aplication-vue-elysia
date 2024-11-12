<template>
   <section class="flex flex-col">
      <main class="mx-auto max-w-screen-xl">
         <!-- ------------ TOP MAIN -------------- -->

         <div class="flex flex-wrap">
            <!-- -------------- LEFT TOP SIDE SECTION OF MAIN -------------- -->
            <section class="flex w-full flex-col border-b border-b-dark/15 [@media(min-width:800px)]:w-3/5">
               <div class="flex-1 px-4 pb-7.5 pt-10 lg:py-[6.25rem] lg:pl-20 lg:pr-10 xl:pb-[6.25rem] xl:pl-40.5 xl:pr-12.5 xl:pt-[9.375rem]">
                  <!-- -------------- TEXT DIV -------------- -->

                  <div class="space-y-3.5 text-left lg:space-y-5 xl:space-y-6">
                     <div class="space-y-2.5 lg:space-y-3.5 xl:space-y-5">
                        <h1 id="header" class="text-left font-kumbh-sans text-3xl font-medium !leading-[120%] -tracking-[3%] text-white lg:text-[3.438rem] xl:text-[4.375rem]">
                           Today's Headlines: Stay Informed
                        </h1>

                        <p id="header-details" class="text-left font-inter text-sm font-normal !leading-normal -tracking-[3%] text-grey/50 lg:text-base xl:text-lg">
                           Explore the latest news from around the world. We bring you up-to-the-minute updates on the most significant events, trends, and stories. Discover the world through our news
                           coverage.
                        </p>
                     </div>
                  </div>
               </div>
            </section>

            <!-- articles list seciton -->
            <section class="flex w-full flex-col [@media(min-width:800px)]:w-3/5">
               <!-- main article tile -->
               <div class="flex-1 border-b border-b-dark/15 px-4 pb-7.5 pt-10 lg:py-[6.25rem] lg:pl-20 lg:pr-10 xl:pb-[6.25rem] xl:pl-40.5 xl:pr-12.5 xl:pt-[9.375rem]">
                  <div class="space-y-3.5 text-left lg:space-y-5 xl:space-y-6">
                     <div class="space-y-2.5 lg:space-y-3.5 xl:space-y-5">
                        <img src="@/public/news/news1.png" class="w-full rounded-xl" />
                        <h2 class="text-left font-inter text-xl font-semibold leading-normal -tracking-[3%] text-white lg:text-xl xl:text-2xl">
                           Global Climate Summit Addresses Urgent Climate Action
                        </h2>

                        <p class="text-left font-inter text-sm leading-normal -tracking-[3%] text-grey/60 lg:text-base xl:text-lg">Over 1,000 articles on emerging tech trends and breakthroughs.</p>

                        <div class="!mt-8 flex flex-row space-x-3">
                           <div class="space-y-1">
                              <p class="text-left font-inter text-sm leading-normal -tracking-[3%] text-grey/60 lg:text-base xl:text-lg">Category</p>
                              <p class="text-left font-inter text-sm leading-normal -tracking-[3%] text-white lg:text-base xl:text-lg">Environment</p>
                           </div>

                           <div class="space-y-1">
                              <p class="text-left font-inter text-sm leading-normal -tracking-[3%] text-grey/60 lg:text-base xl:text-lg">Publication Date</p>
                              <p class="text-left font-inter text-sm leading-normal -tracking-[3%] text-white lg:text-base xl:text-lg">May 15, 2023</p>
                           </div>

                           <div class="space-y-1">
                              <p class="text-left font-inter text-sm leading-normal -tracking-[3%] text-grey/60 lg:text-base xl:text-lg">Author</p>
                              <p class="text-left font-inter text-sm leading-normal -tracking-[3%] text-white lg:text-base xl:text-lg">Jane Smith</p>
                           </div>
                        </div>
                        <div class="!mt-5 flex w-full items-center justify-between">
                           <div class="flex space-x-2">
                              <div class="flex h-fit items-center space-x-2 rounded-full border border-dark/15 bg-dark/10 px-4 py-1 text-grey/60">
                                 <Heart :width="14" class="text-dark/40" />
                                 <span class="text-sm">14k</span>
                              </div>
                              <div class="flex h-fit items-center space-x-2 rounded-full border border-dark/15 bg-dark/10 px-4 py-1 text-grey/60">
                                 <Send :width="14" class="text-dark/40" />
                                 <span class="text-sm">204</span>
                              </div>
                           </div>

                           <SharedBtnPrimaryBtn :display-arrow="false">Read More</SharedBtnPrimaryBtn>
                        </div>
                     </div>
                  </div>
               </div>

               <!-- other article tile -->
               <div v-for="_ in 5" class="flex-1 border-b border-b-dark/15 px-4 pb-7.5 pt-10 lg:py-[6.25rem] lg:pl-20 lg:pr-10 xl:pb-[6.25rem] xl:pl-40.5 xl:pr-12.5 xl:pt-[9.375rem]">
                  <div class="space-y-3.5 text-left lg:space-y-5 xl:space-y-6">
                     <div class="space-y-2.5 lg:space-y-3.5 xl:space-y-5">
                        <img src="@/public/news/news1.png" class="w-full rounded-xl" />
                        <h2 class="text-left font-inter text-xl font-semibold leading-normal -tracking-[3%] text-white lg:text-xl xl:text-2xl">A Decisive Victory for Progressive Policies</h2>
                        <p class="text-left font-inter text-sm leading-normal -tracking-[3%] text-grey/60 lg:text-base xl:text-lg">Politics</p>

                        <div class="!mt-2 flex w-full items-center justify-between">
                           <div class="flex space-x-2">
                              <div class="flex h-fit items-center space-x-2 rounded-full border border-dark/15 bg-dark/10 px-4 py-1 text-grey/60">
                                 <Heart :width="14" class="text-dark/40" />
                                 <span class="text-sm">14k</span>
                              </div>
                              <div class="flex h-fit items-center space-x-2 rounded-full border border-dark/15 bg-dark/10 px-4 py-1 text-grey/60">
                                 <Send :width="14" class="text-dark/40" />
                                 <span class="text-sm">204</span>
                              </div>
                           </div>

                           <SharedBtnPrimaryBtn>Read More</SharedBtnPrimaryBtn>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
         </div>

         <section class="flex flex-col">
            <!-- ------------ SECTION HEADER ------------ -->
            <SharedSectionHeader>
               <div class="mx-auto max-w-screen-xl space-y-2.5 px-4 py-10 lg:px-20 lg:py-20 xl:space-y-4 xl:px-40.5 xl:py-30">
                  <SharedSectionLabel>Featured Videos </SharedSectionLabel>

                  <h1 class="space-y-2.5 text-left font-kumbh-sans text-[1.75rem] font-medium !leading-[130%] -tracking-[3%] text-white lg:text-[2.75rem] xl:space-y-4 xl:text-[3.625rem]">
                     Visual Insights for the Modern Viewer
                  </h1>

                  <SharedBtnPrimaryBtn class="!w-full">View all</SharedBtnPrimaryBtn>
               </div>
            </SharedSectionHeader>

            <!-- ------------ Future Technology Blog ------------ -->

            <div class="mx-auto flex max-w-screen-xl flex-col border-b border-b-dark/15 lg:flex-row lg:px-20 xl:px-40.5">


               <!-- article tile -->
               <div v-for="_ in 2" class="flex-1 border-b border-b-dark/15 px-4 pb-7.5 pt-10 lg:py-[6.25rem] lg:pl-20 lg:pr-10 xl:pb-[6.25rem] xl:pl-40.5 xl:pr-12.5 xl:pt-[9.375rem]">
                  <div class="space-y-2.5 lg:space-y-3.5 xl:space-y-5">
                     <div class="relative">
                        <img src="@/public/news/news1.png" class="w-full rounded-xl" />
                        <div class="z-2 absolute bottom-0 flex w-full items-center justify-between bg-gradient-to-t from-[#141414]/100 to-[#141414]/0 px-6 pb-8">
                           <Play fill="white" class="text-white" :size="32" />
                           <p class="text-gray-500">2.30 min</p>
                        </div>
                     </div>

                     <h2 class="text-left font-inter text-lg font-semibold leading-normal -tracking-[3%] text-white lg:text-xl xl:text-2xl">A Decisive Victory for Progressive Policies</h2>
                     <p class="line-clamp-3 text-left font-inter text-sm leading-normal -tracking-[3%] text-grey/60 lg:text-base xl:text-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, perferendis architecto nulla quod est dolore fuga, magnam quisquam, totam cumque ex mollitia tempore earum
                        asperiores laudantium delectus iste? Doloribus, repellendus!
                     </p>
                  </div>
               </div>

            
            </div>
         </section>
      </main>
   </section>
</template>

<script setup lang="ts">
import { Heart, Send, Dna, FolderCheck, Play } from 'lucide-vue-next';
</script>

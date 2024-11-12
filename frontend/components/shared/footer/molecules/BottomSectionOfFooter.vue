<template>
   <div class="bg-dark/08">
      <div class="flex flex-wrap gap-5 py-10 lg:gap-12.5 lg:py-15 xl:gap-20 xl:py-20">
        <template v-for="navLink in data.slice(0, -1)" :key="navLink['title']">
            <SharedFooterAtomLinksList :links="navLink['links']" :title="navLink['title']" class="flex-1" />
        </template>
        <template v-for="navLinkBtn in data.slice(-1)" :key="navLinkBtn['title']">
            <SharedFooterAtomLinksListWithBtns :links="navLinkBtn['links']" :title="navLinkBtn['title']" class="flex-1" />
        </template>
      </div>

      <div></div>
   </div>
</template>

<script setup lang="ts">
type DATA_TYPE = {
   title: string;
   links: {
      id: string;
      name: string;
      link: string;
      createdAt: string | Date;
   }[];
};

const data: DATA_TYPE[] = [
   {
      title: 'Home',
      links: [
         { id: 'c1a1e1b4-4b1b-4e1b-8b1b-4e1b4b1b4e1b', name: 'Features', link: '#', createdAt: '2023-01-15' },
         { id: 'd2b2f2c5-5c2c-5f2c-9c2c-5f2c5c2c5f2c', name: 'Blogs', link: '#', createdAt: '2023-02-20' },
         { id: 'e3c3g3d6-6d3d-6g3d-0d3d-6g3d6d3d6g3d', name: 'Resources', link: '#', createdAt: '2023-03-25' },
         { id: 'f4d4h4e7-7e4e-7h4e-1e4e-7h4e7e4e7h4e', name: 'Testimonials', link: '#', createdAt: '2023-04-30' },
         { id: 'g5e5i5f8-8f5f-8i5f-2f5f-8i5f8f5f8i5f', name: 'Contact Us', link: '#', createdAt: '2023-05-05' },
         { id: 'h6f6j6g9-9g6g-9j6g-3g6g-9j6g9g6g9j6g', name: 'Newsletter', link: '#', createdAt: '2023-06-10' }
      ]
   },
   {
      title: 'News',
      links: [
         { id: 'i7g7k7h0-0h7h-0k7h-4h7h-0k7h0h7h0k7h', name: 'Trending Stories', link: '#', createdAt: '2023-07-15' },
         { id: 'j8h8l8i1-1i8i-1l8i-5i8i-1l8i1i8i1l8i', name: 'Featured Videos', link: '#', createdAt: '2023-08-20' },
         { id: 'k9i9m9j2-2j9j-2m9j-6j9j-2m9j2j9j2m9j', name: 'Technology', link: '#', createdAt: '2023-09-25' },
         { id: 'l0j0n0k3-3k0k-3n0k-7k0k-3n0k3k0k3n0k', name: 'Health', link: '#', createdAt: '2023-10-30' },
         { id: 'm1k1o1l4-4l1l-4o1l-8l1l-4o1l4l1l4o1l', name: 'Politics', link: '#', createdAt: '2023-11-05' },
         { id: 'n2l2p2m5-5m2m-5p2m-9m2m-5p2m5m2m5p2m', name: 'Environment', link: '#', createdAt: '2023-12-10' }
      ]
   },
   {
      title: 'Blogs',
      links: [
         { id: 'l2m3n4o5-6p7q-8r9s-0t1u-2v3w4x5y6z7a', name: 'Quantum Computing', link: '#', createdAt: '2023-01-10' },
         { id: 'm3n4o5p6-7q8r-9s0t-1u2v-3w4x5y6z7a8b', name: 'AI and Future', link: '#', createdAt: '2022-11-05' },
         { id: 'n4o5p6q7-8r9s-0t1u-2v3w4x5y6z7a8b9c', name: 'Cyber Security', link: '#', createdAt: '2023-03-01' },
         { id: 'o5p6q7r8-9s0t-1u2v-3w4x5y6z7a8b9c0d', name: 'Programming Tips', link: '#', createdAt: '2022-12-15' },
         { id: 'p6q7r8s9-0t1u-2v3w-4x5y6z7a8b9c0d1e', name: 'Tech Reviews', link: '#', createdAt: '2023-02-25' },
         { id: 'q7r8s9t0-1u2v-3w4x-5y6z7a8b9c0d1e2f', name: 'Gadget Hacks', link: '#', createdAt: '2023-04-05' }
      ]
   },
   {
      title: 'Podcasts',
      links: [
         { id: 'r8s9t0u1-2v3w-4x5y-6z7a-8b9c0d1e2f3g', name: 'AI Revolution', link: '#', createdAt: '2023-03-20' },
         { id: 's9t0u1v2-3w4x-5y6z-7a8b-9c0d1e2f3g4h', name: 'AI Revolution', link: '#', createdAt: '2023-01-10' },
         { id: 't0u1v2w3-4x5y-6z7a-8b9c-0d1e2f3g4h5i', name: 'TechTalk AI', link: '#', createdAt: '2022-12-30' },
         { id: 'u1v2w3x4-5y6z-7a8b-9c0d-1e2f3g4h5i6j', name: 'AI Conversations', link: '#', createdAt: '2023-02-15' }
      ]
   },
   {
      title: 'Resources',
      links: [
         { id: 'x4y5z6a7-8b9c-0d1e-2f3g-4h5i6j7k8l9m', name: 'Whitepapers', link: '#', createdAt: '2023-03-12' },
         { id: 'y5z6a7b8-9c0d-1e2f-3g4h-5i6j7k8l9m0n', name: 'Ebooks', link: '#', createdAt: '2023-01-25' },
         { id: 'z6a7b8c9-0d1e-2f3g-4h5i-6j7k8l9m0n1o', name: 'Reports', link: '#', createdAt: '2022-12-10' },
         { id: 'a7b8c9d0-1e2f-3g4h-5i6j-7k8l9m0n1o2p', name: 'Research Papers', link: '#', createdAt: '2023-02-05' }
      ]
   }
];
</script>

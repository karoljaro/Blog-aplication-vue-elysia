import Lenis from 'lenis';
import gsap from 'gsap';

export const useSmoothScrool = () => {
   const scroolLenis = new Lenis({
      duration: 1.2,
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true
   });

   gsap.ticker.add((time: number) => {
    scroolLenis.raf(time * 1000);
   })

   gsap.ticker.lagSmoothing(0)
};

import { defineNuxtPlugin } from "#app";
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default defineNuxtPlugin((nuxtApp) => {
    if (import.meta.client) {
        gsap.registerPlugin(ScrollTrigger);
    }

    nuxtApp.provide('gsap', gsap);
    nuxtApp.provide("ScrollTrigger", ScrollTrigger);
})
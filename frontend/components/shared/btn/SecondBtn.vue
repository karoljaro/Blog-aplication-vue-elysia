<template>
    <button class="grid place-items-center xl:size-13 lg:size-11 size-10 bg-yellow/55 rounded-full">
        <MoveUpRight :stroke-width="1.5" class="text-dark/08 xl:size-6 size-5" />
    </button>
</template>

<script setup lang="ts">
import { MoveUpRight } from 'lucide-vue-next';
</script>
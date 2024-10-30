<template>
    <div>
        <main>
            <slot />
        </main>
    </div>
</template>

<script setup lang="ts">
onMounted(() => {
    useSmoothScrool()
})
</script>
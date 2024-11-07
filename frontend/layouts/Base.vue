<template>
    <div>
        <main>
            <slot />
        </main>
        <SharedFooter />
    </div>
</template>

<script setup lang="ts">
onMounted(() => {
    useSmoothScrool()
})
</script>
<script setup>


import TheLogo from '@/components/TheLogo.vue'
import TheHeaderProgress from '@/components/TheHeaderProgress.vue'
import { isPageValid } from '@/validators.js'
import { PAGE_PROGRESS, PAGE_TIMELINE } from '../../constants.js'


const emit= defineEmits({
  navigate:isPageValid
})



</script>

<template>
  <header class="sticky top-0 z-20 flex items-center justify-between border-b bg-gray-300  p-3">

    <TheLogo v-on:click="emit('navigate',PAGE_TIMELINE)"/>
    <TheHeaderProgress v-on:click="emit('navigate',PAGE_PROGRESS)" />

  </header>
</template>

<style scoped>

</style>
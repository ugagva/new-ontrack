<script setup>


import TheLogo from '@/components/TheLogo.vue'
import TheHeaderProgress from '@/components/TheHeaderProgress.vue'

const emit =defineEmits(['goToTimeLine','goToProgress','goTo'])
</script>

<template>
  <header class="sticky top-0 z-20 flex items-center justify-between border-b bg-white p-3">

    <TheLogo v-on:click="emit('goToTimeLine')"/>
    <TheHeaderProgress v-on:click="emit('goToProgress')" />

  </header>
</template>

<style scoped>

</style>
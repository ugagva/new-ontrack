<script setup>


import TimeItem from '@/components/TimeItem.vue'
defineProps(['timelineItems'])


</script>

<template>
  <div>
    <ul class="mt-7">

<TimeItem  v-for ="timeItem in timelineItems"
           :key="timeItem.hour"
           :timeItem="timeItem"/>

    </ul>
  </div>
</template>

<style scoped>

</style>

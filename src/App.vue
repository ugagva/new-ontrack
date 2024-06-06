<script setup>


import TheHeader from '@/components/TheHeader.vue'
import TheNav from '@/components/TheNav.vue'
import TheTimeline from '@/pages/TheTimeline.vue'
import TheActivities from '@/pages/TheActivities.vue'
import TheProgress from '@/pages/TheProgress.vue'
import { PAGE_ACTIVITIES, PAGE_PROGRESS, PAGE_TIMELINE } from '../constants.js'
import { ref } from 'vue'
import { generateTimelineItems, normalizePageHash } from '/functions.js'

const currentPage = ref(normalizePageHash())

function goTo(page) {
  currentPage.value = page
}


const timelineItems = generateTimelineItems()
</script>


<template>
  <TheHeader v-on:go-to-time-line="goTo(PAGE_TIMELINE)"
             v-on:go-to-progress="goTo(PAGE_PROGRESS)"
  />


  <main class="flex flex-grow flex-col">
    <TheTimeline    v-show="currentPage === PAGE_TIMELINE" :timelineItems="timelineItems" />
    <TheActivities  v-show="currentPage ===PAGE_ACTIVITIES" />
    <TheProgress    v-show="currentPage === PAGE_PROGRESS" />
  </main>

  <TheNav :currentPage="currentPage" v-on:navigate="goTo($event)" />

</template>




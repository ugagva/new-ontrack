<script setup>


import TheHeader from '@/components/TheHeader.vue'
import TheNav from '@/components/TheNav.vue'
import TheTimeline from '@/pages/TheTimeline.vue'
import TheActivities from '@/pages/TheActivities.vue'
import TheProgress from '@/pages/TheProgress.vue'
import { PAGE_ACTIVITIES, PAGE_PROGRESS, PAGE_TIMELINE } from '../constants.js'
import { ref } from 'vue'
import {
  generateActivities,
  generateActivitySelectOptions,
  generateTimelineItems, id,
  normalizePageHash
} from '/functions.js'

const currentPage = ref(normalizePageHash())

const timelineItems = generateTimelineItems()

const activities = ref(generateActivities())

const activitySelectOptions = generateActivitySelectOptions(activities.value)


function goTo(page) {
  currentPage.value = page
}

function deleteActivity(activity) { activities.value.splice(activities.value.indexOf(activity),1)}

function createActivity(name) {
  activities.value.push({
    id: id(),
    name,
    secondsToComplete: 0
  })
}

</script>


<template>
  <TheHeader v-on:navigate="goTo($event)" />


  <main class="flex flex-grow flex-col">
    <TheTimeline v-show="currentPage === PAGE_TIMELINE" :timelineItems="timelineItems"
                 :activity-select-options="activitySelectOptions" />
    <TheActivities v-show="currentPage ===PAGE_ACTIVITIES" :activities="activities" v-on:delete-activity="deleteActivity" v-on:create-activity="createActivity" />
    <TheProgress v-show="currentPage === PAGE_PROGRESS" />
  </main>

  <TheNav :currentPage="currentPage" v-on:navigate="goTo($event)" />

</template>




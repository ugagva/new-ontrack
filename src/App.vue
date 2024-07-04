<script setup>


import TheHeader from '@/components/TheHeader.vue'
import TheNav from '@/components/TheNav.vue'
import TheActivities from '@/pages/TheActivities.vue'
import TheProgress from '@/pages/TheProgress.vue'
import { PAGE_ACTIVITIES, PAGE_PROGRESS, PAGE_TIMELINE } from '../constants.js'
import { computed, ref } from 'vue'
import {
  generateActivities,
  generateActivitySelectOptions,
  generateTimelineItems,
  normalizePageHash
} from '/functions.js'

import TheTimeLine from '@/pages/TheTimeLine.vue'

const currentPage = ref(normalizePageHash())

const activities = ref(generateActivities())

const timelineItems = ref(generateTimelineItems(activities.value))



const activitySelectOptions = computed(() => generateActivitySelectOptions(activities.value))


function goTo(page) {
  currentPage.value = page
}

function deleteActivity(activity) {
  timelineItems.value.forEach((timeItem) => {

    if (timeItem.activityId === activity.id) {
      timeItem.activityId = null
      timeItem.activitySeconds = 0

    }
  })
  activities.value.splice(activities.value.indexOf(activity), 1)
}


function createNewActivity(activity) {
  activities.value.push(activity)
}

function setTimeItemByActivity({ timeItem, activity }) {
  timeItem.activityId = activity.id
}

function setActivitySecondsToComplete(activity, secondsToComplete) {
  activity.secondsToComplete = secondsToComplete
}


</script>


<template>
  <TheHeader v-on:navigate="goTo($event)" />

  <main class="flex flex-grow flex-col">

    <TheTimeLine v-show="currentPage === PAGE_TIMELINE"
                 :timeline-items="timelineItems"
                 :activities="activities"
                 :activity-select-options="activitySelectOptions"
                 @set-time-item-activity="setTimeItemByActivity"
    />


    <TheActivities v-show="currentPage ===PAGE_ACTIVITIES"
                   :activities="activities"
                   @create-activity="createNewActivity"
                   @delete-activity="deleteActivity"
                   @set-activity-seconds-to-complete="setActivitySecondsToComplete" />


    <TheProgress v-show="currentPage === PAGE_PROGRESS" />
  </main>

  <TheNav :currentPage="currentPage" v-on:navigate="goTo($event)" />

</template>




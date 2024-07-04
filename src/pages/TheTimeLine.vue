<script setup>
import TimeLineItem from '@/components/TimeLineItem.vue'

import {
  isActivityValid,
  isTimeItemIsValid,
  validateActivities,
  validateSelectOptions,
  validateTimelineItems,
isNull
} from '@/validators.js'



defineProps({

  timelineItems: {
    required: true,
    type: Array,
    validator: validateTimelineItems
  },

  activities: {
    required: true,
    type: Array,
    validator: validateActivities
  },

  activitySelectOptions: {
    required: true,
    type: Array,
    validator: validateSelectOptions
  }
})

const emit = defineEmits({

  setTimeItemActivity({ timeItem, activity }) {
    return [
      isTimeItemIsValid(timeItem),
      isActivityValid(activity)
    ].every(Boolean)
  }
})

</script>

<template>
  <div>
    <ul class="mt-7">

      <TimeLineItem
        v-for="timeItem in timelineItems"
        :key="timeItem.hour"
        :time-item="timeItem"
        :activities="activities"
        :activity-select-options="activitySelectOptions"
        @select-activity="emit('setTimeItemActivity',{timeItem, activity:$event})"   />
      <!-- @get-selected-Activity пришло через emit  из TimeLineItem-->


    </ul>
  </div>
</template>

<style scoped>

</style>

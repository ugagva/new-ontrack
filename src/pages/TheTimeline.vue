<script setup>


import TimeItem from '@/components/TimeItem.vue'
import { validateSelectOptions, validateTimelineItems } from '@/validators.js'


defineProps({

  timelineItems: {
    required: true,
    type: Array,
    validator:validateTimelineItems
  },
  activitySelectOptions:{
    required:true,
    type:Array,
    validator:validateSelectOptions
  }
})


</script>

<template>
  <div>
    <ul class="mt-7">

<TimeItem  v-for ="timeItem in timelineItems"
           :key="timeItem.hour"
           :timeItem="timeItem"
           :activity-select-options="activitySelectOptions"
/>

    </ul>
  </div>
</template>

<style scoped>

</style>

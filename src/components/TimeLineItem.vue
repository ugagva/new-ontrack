<script setup>
import BaseSelect from '@/components/BaseSelect.vue'

import { isActivityValid,  isTimeItemIsValid, validateActivities, validateSelectOptions } from '@/validators.js'
import HourForm from '@/components/HourForm.vue'
import { NULLABLE_ACTIVITY } from '../../constants.js'

import TimelineStopwatch from '@/components/TimelineStopwatch.vue'






const props=defineProps({

  timeItem:{
    required:true,
    type: Object,
    validator:isTimeItemIsValid
  },
  activities:{
    required:true,
    type: Array,
    validator:validateActivities
  },

  activitySelectOptions:{
    required:true,
    type: Array,
   validator: validateSelectOptions
  }
})



const emit= defineEmits({
  selectActivity:isActivityValid
})

function selectActivity(id) {
  emit('selectActivity', findActivityById(id))
}

function findActivityById(id) {
  return props.activities.find((activity) => activity.id=== id )|| NULLABLE_ACTIVITY
}


</script>


<template>
  <li class="relative flex flex-col gap-2 border-t border-gray-200 py-10 px-4">

<HourForm :hour="props.timeItem.hour"/>

<BaseSelect
  placeholder="Rest"
  :selected="props.timeItem.activityId"
  :options="activitySelectOptions"
  @select="selectActivity" />   <!-- @select через emit пришло из BaseSelect-->


<TimelineStopwatch v-bind:seconds="props.timeItem.activitySeconds"/>


  </li>
</template>

<style scoped>

</style>
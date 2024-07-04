<script setup>

import ActivityItem from '@/components/ActivityItem.vue'
import { isActivityValid, isNumber, validateActivities } from '@/validators.js'
import TheNewActivityForm from '@/components/TheNewActivityForm.vue'
import TheActivityEmptyState from '@/components/TheActivityEmptyState.vue'

defineProps({
  activities: {
    required: true,
    type: Array,
    validator: validateActivities

  }
})

const emit = defineEmits({
  setActivitySecondsToComplete(activity, secondsToComplete){
return [  isActivityValid(activity),  isNumber(secondsToComplete)].every(Boolean)  },

  deleteActivity: isActivityValid,
  createActivity: isActivityValid
})


function setSecondsToComplete(activity, secondsToComplete) {
emit('setActivitySecondsToComplete', activity, secondsToComplete)
}

</script>

<template>

  <div class="flex flex-col grow">
    <ul v-if="activities.length>0" class="divide-y-2 grow ">

      <ActivityItem v-for="activity in activities"
                    :key="activity.id"
                    :activity="activity"
                    @delete="emit('deleteActivity',activity)"
                    @set-seconds-to-complete="setSecondsToComplete(activity, $event)"
                  />
    </ul>
<TheActivityEmptyState v-else ></TheActivityEmptyState>

        <TheNewActivityForm @submit="emit('createActivity',$event)" />
  </div>

</template>


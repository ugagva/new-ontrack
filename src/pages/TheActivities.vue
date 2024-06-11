<script setup>

import ActivityItem from '@/components/ActivityItem.vue'
import { isActivityValid, validateActivities } from '@/validators.js'
import TheNewActivityForm from '@/components/TheNewActivityForm.vue'

defineProps({
  activities: {
    required: true,
    type: Array,
    validator: validateActivities

  }
})
const emit = defineEmits({
  deleteActivity: isActivityValid,
  createActivity: isActivityValid
})


</script>

<template>
  <ul class="divide-y-2 ">
    <ActivityItem v-for="activity in activities" :key="activity" :activity="activity"
                  v-on:delete="emit('deleteActivity',activity)" />
    <TheNewActivityForm v-on:submit="emit('createActivity',$event)" />
  </ul>

</template>

<style scoped>

</style>
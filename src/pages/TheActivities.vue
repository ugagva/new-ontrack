<script setup>

import ActivityItem from '@/components/ActivityItem.vue'
import { isActivityValid, validateActivities } from '@/validators.js'
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
  deleteActivity: isActivityValid,
  createActivity: isActivityValid
})


</script>

<template>

  <div class="flex flex-col grow">
    <ul v-if="activities.length>0" class="divide-y-2 grow ">

      <ActivityItem v-for="activity in activities"
                    :key="activity.id"
                    :activity="activity"
                    v-on:delete="emit('deleteActivity',activity)" />
    </ul>
<TheActivityEmptyState v-else ></TheActivityEmptyState>
        <TheNewActivityForm v-on:submit="emit('createActivity',$event)" />
  </div>

</template>


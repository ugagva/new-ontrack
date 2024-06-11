<script setup>
import BaseSelect from '@/components/BaseSelect.vue'
import { isTimeItemIsValid, validateSelectOptions } from '@/validators.js'
import { ref } from 'vue'
import Hour from '@/components/Hour.vue'


defineProps({
  timeItem:{
    required:true,
    type: Object,
    validator:isTimeItemIsValid
  },
  activitySelectOptions:{
    required:true,
    type: Array,
   validator:validateSelectOptions
  }
})





const selectedActivityId= ref(0)


</script>


<template>
  <li class="relative flex flex-col gap-2 border-t border-gray-200 py-10 px-4">

<Hour :hour="timeItem.hour"/>

<BaseSelect
  :selected="selectedActivityId"
  :options="activitySelectOptions"
  placeholder="Rest"
  v-on:select="selectedActivityId=$event"/>
  </li>
</template>

<style scoped>

</style>
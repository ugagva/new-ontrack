<script setup>

import { isHourValid } from '@/validators.js'


const props= defineProps({

   hour:{

    required:true,
    type: Number,
    validator:isHourValid
  }
})
const formattedHour=  `${props.hour.toString().padStart(2, 0)}:00`




const hourClasses = [
  'absolute -top-4 left-1/2 -translate-x-1/2 rounded  p-x-2 font-mono text-lg ',
 props.hour === new Date().getHours()
    ? 'bg-purple-300 font-black text-black'
    : 'bg-gray-100 text-gray-500'
]
</script>

<template>
  <a
    href="#"
    v-bind:class="hourClasses">
    {{formattedHour}}
  </a>
</template>

<style scoped>

</style>
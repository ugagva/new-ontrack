<script setup>
import {XMarkIcon } from '@heroicons/vue/24/outline/index.js'
import BaseSelect from '@/components/BaseSelect.vue'

const props = defineProps(['timeItem'])

 const hourLinkClasses = [
  'absolute -top-4 left-1/2 -translate-x-1/2 rounded  p-x-2 font-mono text-lg ',
  props.timeItem.hour === new Date().getHours()
    ? 'bg-purple-900 font-black text-white'
    : 'bg-gray-100 text-pink-500'
]
const   options=[
  {value:1,label:'Coding'},
  {value:2,label:'Reading'},
  {value:3,label:'Watching'}
]
const selectedActivityId=1
</script>

<template>
  <li

    class="relative flex flex-col gap-2 border-t border-gray-200 py-10 px-4">
    <a
      href="#"
      v-bind:class="hourLinkClasses">
      {{props.timeItem.hour}} 0:00
    </a>

<BaseSelect :selected="selectedActivityId" :options="options" placeholder="Rest"/>
  </li>
</template>

<style scoped>

</style>
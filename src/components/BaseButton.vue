

<script>
import { BUTTON_TYPE_DANGER, BUTTON_TYPE_NEUTRAL, BUTTON_TYPE_PRIMARY } from '../../constants.js'

const typeButtonClasses= {
  [BUTTON_TYPE_NEUTRAL]: 'bg-gray-100 enabled:hover:bg-gray-200 ',
  [BUTTON_TYPE_DANGER]: 'bg-red-500 p-3 enabled:hover:bg-red-600 text-white',
  [BUTTON_TYPE_PRIMARY]: 'bg-green-500 p-3 enabled:hover:bg-purple-600 text-white'
}
</script>

<script setup>

import { isButtonTypeValid } from '@/validators.js'


defineProps({
  type:{
    default: BUTTON_TYPE_PRIMARY,
    type:String,
    validator:isButtonTypeValid
  }
})


</script>

<template>
  <button :class="`${typeButtonClasses[type]} rounded p-3 disabled:cursor-not-allowed disabled:opacity-50`">
    <slot></slot>
  </button>
</template>

<style scoped>

</style>
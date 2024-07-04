<script setup>

import BaseButton from '@/components/BaseButton.vue'
import { XMarkIcon } from '@heroicons/vue/24/outline/index.js'
import {  isSelectValueValid, isUndefinedOrNull, validateSelectOptions } from '@/validators.js'
import { computed } from 'vue'
import { BUTTON_TYPE_NEUTRAL } from '../../constants.js'
import { normalizeSelectValue } from '../../functions.js'

const props=defineProps({

  selected:[String,Number],

  options: {
    required:true,
    type:Array,
    validator:validateSelectOptions
  },

  placeholder:{
    required:true,
    type:String,
  }

})


const emit = defineEmits({
  select:isSelectValueValid
 })

 function select (value){
  emit('select',normalizeSelectValue(value))
 }

const isNotSelected=computed(()=>  isUndefinedOrNull(props.selected))


</script>

<template>
  <div class="flex gap-2">

    <BaseButton v-bind:type="BUTTON_TYPE_NEUTRAL" v-on:click="select(null)">
      <XMarkIcon class="h-6" /> <!--Кнопка Х-->
    </BaseButton>


    <select
      class="w-full truncate rounded bg-gray-100 py-1 px-2 text-2xl"
            @change="select($event.target.value)">    <!--Выбранная активность -->

      <option :selected="isNotSelected" disabled value="">
        {{placeholder}}  <!--Название -->
      </option>

      <option v-for="{value,label} in options"
              :key="value"
              :value="value"
              :selected="value===selected">
        {{ label}}     <!--Время-->
      </option>
    </select>
  </div>
</template>

<style scoped>

</style>
<script setup>

import { TrashIcon } from '@heroicons/vue/24/outline/index.js'
import BaseButton from '@/components/BaseButton.vue'
import BaseSelect from '@/components/BaseSelect.vue'

import { BUTTON_TYPE_DANGER, PERIOD_SELECT_OPTIONS } from '../../constants.js'
import { isActivityValid, isNumber, isUndefined } from '@/validators.js'


defineProps({

  activity: {
    required: true,
    type: Object,
    validator:isActivityValid
    }
  })

const emit = defineEmits({
  setSecondsToComplete: isNumber,
  delete:isUndefined
})




</script>

<template>
  <li class="flex flex-col gap-2 p-4">
    <div class="flex items-center gap-2">
      <BaseButton :type="BUTTON_TYPE_DANGER"   @click="emit('delete')">  <!--Мусорка-->
        <TrashIcon  class="h-8 " />  <!--Мусорка-->
      </BaseButton>

      <span class="truncate bg-emerald-100 text-xl">{{activity.title}}
      </span>
    </div>
    <div>
      <BaseSelect class="font-mono "
                  placeholder="hh:mm"
                  :options="PERIOD_SELECT_OPTIONS"
                  :selected="activity.secondsToComplete"
                  @select="emit('setSecondsToComplete',$event)"/>
    </div>
  </li>
</template>

<style scoped>

</style>
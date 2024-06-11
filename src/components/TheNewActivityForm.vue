<script setup>

import { PlusIcon } from '@heroicons/vue/24/outline/index.js'
import BaseButton from '@/components/BaseButton.vue'
import { isActivityValid } from '@/validators.js'

let newActivity = ''

function submit() {
  emit('submit', newActivity)
}

const emit = defineEmits({
  submit: isActivityValid
})


</script>

<template>
  <form v-on:submit.prevent="submit" class="sticky bottom-[57px] flex gap-2 border-t bg-white p-4">
    <input type="text"
           v-on:input="newActivity=$event.target.value"
           v-bind:value="newActivity"
           class="w-full rounded border px-4 text-xl"
           placeholder="ActivityName">
    <BaseButton>
      <PlusIcon class="h-8" />
    </BaseButton>
  </form>
</template>

<style scoped>

</style>
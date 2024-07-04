<script setup>

import { PlusIcon } from '@heroicons/vue/24/outline/index.js'
import BaseButton from '@/components/BaseButton.vue'
import { isActivityValid } from '@/validators.js'
import { nextTick, ref } from 'vue'
import { id } from '../../functions.js'

const newActivity = ref('')


async function submit() {
  emit('submit',

    {
      id: id(),
      title: newActivity.value,
      secondsToComplete: 0
    })

  newActivity.value = ''


  await nextTick()
  window.scrollTo(0, document.body.scrollHeight)

}


const emit = defineEmits({
  submit: isActivityValid
})


</script>

<template>
  <form @submit.prevent="submit" class="sticky bottom-[57px] flex gap-2 border-t bg-white p-4">
    <input type="text"
           v-model="newActivity"
           class="w-full rounded border px-4 text-xl"
           placeholder="Create new activity">

    <BaseButton v-bind:disabled="newActivity.trim() ===''">
      <PlusIcon class="h-8" />
    </BaseButton>

  </form>
</template>

<style scoped>

</style>
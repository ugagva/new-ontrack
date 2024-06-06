<script setup>

import { NAV_ITEMS } from '../../constants.js'
import NavItem from '@/components/NavItem.vue'

defineProps(['currentPage'])
const emit=  defineEmits(['navigate'])



</script>


<template>
  <nav class="sticky bottom-0 z-10 bg-white ">

    <ul class="flex items-center justify-around border-t">

      <NavItem :href="`#${page}`" v-for="(icon,page) in NAV_ITEMS" :key="page"
               :class="{'bg-gray-200 pointer-events-none': page === currentPage}"
               v-on:click="emit('navigate',page)"
      >

        <component :is="icon" class="h-6 w-6" />
        {{ page }}
      </NavItem>
    </ul>
  </nav>
</template>

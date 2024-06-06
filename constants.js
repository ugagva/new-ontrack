import { ChartBarIcon, ClockIcon, ListBulletIcon } from '@heroicons/vue/24/outline/index.js'
import timeItem from '@/components/TimeItem.vue'

export const  PAGE_TIMELINE='timeline'
export const PAGE_ACTIVITIES='activities'
export const PAGE_PROGRESS='progress'

export const NAV_ITEMS = {
  [PAGE_TIMELINE]: ClockIcon,
  [PAGE_ACTIVITIES]: ListBulletIcon,
  [PAGE_PROGRESS]: ChartBarIcon
}

export const HOURS_IN_DAY=24


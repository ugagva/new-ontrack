import { ChartBarIcon, ClockIcon, ListBulletIcon } from '@heroicons/vue/24/outline/index.js'

export const  PAGE_TIMELINE='timeline'
export const PAGE_ACTIVITIES='activities'
export const PAGE_PROGRESS='progress'

export const NAV_ITEMS = {
  [PAGE_TIMELINE]: ClockIcon,
  [PAGE_ACTIVITIES]: ListBulletIcon,
  [PAGE_PROGRESS]: ChartBarIcon
}
export const SECONDS_IN_HOUR=3600
export const HOURS_IN_DAY=24
export const MIDNIGHT_HOUR=0

export const PERIOD_SELECT_OPTIONS = [
  {
    value: 15,
    label: '0:15'
  },

  {
    value: 20,
    label: '0:20'
  },
  {
    value: 30,
    label: '0:30'
  }
]
export const BUTTON_TYPE_PRIMARY='PRIMARY'
export const BUTTON_TYPE_DANGER='danger'
export const BUTTON_TYPE_NEUTRAL='neutral'

export const BUTTON_TYPES=[
  BUTTON_TYPE_DANGER,
  BUTTON_TYPE_NEUTRAL,
  BUTTON_TYPE_PRIMARY
]

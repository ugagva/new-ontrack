import { ChartBarIcon, ClockIcon, ListBulletIcon } from '@heroicons/vue/24/outline/index.js'
import { generatePeriodSelectOptions } from './functions.js'

export const  PAGE_TIMELINE='timeline'
export const PAGE_ACTIVITIES='activities'
export const PAGE_PROGRESS='progress'

export const NAV_ITEMS = {
  [PAGE_TIMELINE]: ClockIcon,
  [PAGE_ACTIVITIES]: ListBulletIcon,
  [PAGE_PROGRESS]: ChartBarIcon
}

export const MILLISECOND_IN_SECOND=1000
export const SECONDS_IN_MINUTES=60
export const MINUTES_IN_HOUR=60
export const SECONDS_IN_HOUR=SECONDS_IN_MINUTES*MINUTES_IN_HOUR

export const HOURS_IN_DAY=24
export const MIDNIGHT_HOUR=0


export const NULLABLE_ACTIVITY = {id:null}
export const PERIODS_IN_MINUTES=[5,10,15,20,25,30,35,40,45,50,55]
export const PERIOD_SELECT_OPTIONS = generatePeriodSelectOptions(PERIODS_IN_MINUTES)


export const BUTTON_TYPE_PRIMARY='primary'
export const BUTTON_TYPE_SUCCESS='success'
export const BUTTON_TYPE_WARNING='warning'
export const BUTTON_TYPE_DANGER='danger'
export const BUTTON_TYPE_NEUTRAL='neutral'

export const BUTTON_TYPES=[
  BUTTON_TYPE_DANGER,
  BUTTON_TYPE_NEUTRAL,
  BUTTON_TYPE_PRIMARY,
  BUTTON_TYPE_SUCCESS,
  BUTTON_TYPE_WARNING
]

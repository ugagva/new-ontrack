import {
  HOURS_IN_DAY,
  MIDNIGHT_HOUR,
  PAGE_TIMELINE,
  SECONDS_IN_HOUR
} from './constants.js'
import { isPageValid } from '@/validators.js'


export function normalizePageHash() {

  const page = window.location.hash.slice(1)
  if (isPageValid(page)) {
    return page
  }
  window.location.hash = PAGE_TIMELINE

  return PAGE_TIMELINE
}


export function generateTimelineItems() {
  const timelineItems = []

  for (let hour = MIDNIGHT_HOUR; hour < HOURS_IN_DAY; hour++) {
    timelineItems.push({ hour })
  }
  return timelineItems
}

export function generateActivities() {
  return [
    {
      id: id(),
      name: 'Coding',
      secondsToComplete: 0 * SECONDS_IN_HOUR
    },
    {
      id: id(),
      name: 'Reading',
      secondsToComplete: 1 * SECONDS_IN_HOUR
    },
    {
      id: id(),
      name: 'Learning',
      secondsToComplete: 2 * SECONDS_IN_HOUR
    }
  ]
}

export function id(){
return Date.now().toString(36)+ Math.random().toString(36).substring(2)
}


export function generateActivitySelectOptions(activities) {
  return activities.map((activity) => ({  value:activity.id,label:activity.name}))
}
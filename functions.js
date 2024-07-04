import {
  HOURS_IN_DAY,
 MILLISECOND_IN_SECOND, MINUTES_IN_HOUR,
  PAGE_TIMELINE,
  SECONDS_IN_HOUR, SECONDS_IN_MINUTES
} from './constants.js'
import { isPageValid, isNull} from '@/validators.js'




export function normalizePageHash() {

  const page = window.location.hash.slice(1)
  if (isPageValid(page)) {
    return page
  }
  window.location.hash = PAGE_TIMELINE

  return PAGE_TIMELINE
}

export function normalizeSelectValue(value){
  return isNull(value) || isNaN(value) ? value:  +value
}



export function generateTimelineItems(activities) {
  return [...Array(HOURS_IN_DAY).keys()].map((hour)=>({
    hour,
    activityId: hour % 4 ===0? null :activities[hour % 2].id,
    activitySeconds:  hour % 4 ===0? 0 : (15 *SECONDS_IN_MINUTES * hour) % SECONDS_IN_HOUR
  }))
}


export function generateActivities() {
  return ['Coding','Reading','Playing'].map((title,hours)=>({
    id: id(),
    title,
    secondsToComplete: hours * SECONDS_IN_HOUR
  }))


}

export function id(){
return Date.now().toString(36)+ Math.random().toString(36).substring(2)
}


export function generateActivitySelectOptions(activities) {
  return activities.map((activity) => ({value:activity.id, label:activity.title}))
}

export function generatePeriodSelectOptions() {
  const periodInMinutes=[
    15,20,30,45,30,60,75
  ]
  return periodInMinutes.map((periodInMinutes)=>({
    value:periodInMinutes * MINUTES_IN_HOUR,
    label:generatePeriodSelectOptionsLabel(periodInMinutes)}))
}

export function generatePeriodSelectOptionsLabel(periodInMinutes){
const hours=Math.floor(periodInMinutes / MINUTES_IN_HOUR).toString().padStart(2, 0)
const minutes=(periodInMinutes % MINUTES_IN_HOUR).toString().padStart(2)

  return `${hours} : ${minutes}`
}
export function formatSeconds(seconds) {
  const date = new Date()
  date.setTime(Math.abs(seconds) * MILLISECOND_IN_SECOND)
  const utc = date.toUTCString()
  return utc.substring(utc.indexOf(':') - 2, utc.indexOf(':') + 6)
}
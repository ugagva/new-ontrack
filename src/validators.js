
import { HOURS_IN_DAY, MIDNIGHT_HOUR, NAV_ITEMS,BUTTON_TYPES } from '../constants.js'




export function validateTimelineItems(timelineItems) {
  return timelineItems.every(isTimeItemIsValid)
}

export function isTimeItemIsValid(timeItem){
  return isHourValid(timeItem.hour)
}
export function isHourValid(timeItem){
  return typeof isNumber(timeItem.hour) && isBetween(timeItem.hour,MIDNIGHT_HOUR,HOURS_IN_DAY-1)
}
function isBetween(value, start, end){
  return value >= start && value <= end
}


  export function isPageValid(currentPage){
    return Object.keys(NAV_ITEMS).includes(currentPage)
  }


  export function isButtonTypeValid(type) {
  return BUTTON_TYPES.includes(type)
}

  export function validateSelectOptions (options){
    return options.every(isSelectOptionsValid)
  }

function isSelectOptionsValid({value,label}){
  return isNumber(value)&& isNotEmptyString(label)
}
function isNumber(value){
  return typeof value==='number'
}
function isString(value){
  return  typeof value==='string'
}


export function isUndefinedOrNull(value){
 return isNull(value)|| isUndefined(value)
}
function isNull(value){
  return  value=== null
}

export function isUndefined(value){
  return value===undefined
}

export function isNumberOrNull(value){
  return typeof isNumber(value)|| isNull(value)

}
export function validateActivities(activities){
  return activities.every(isActivityValid)
}


export function isActivityValid(activity){
return isNotEmptyString(activity)
}

function isNotEmptyString(value){
  return isString(value)&& value.length > 0
}






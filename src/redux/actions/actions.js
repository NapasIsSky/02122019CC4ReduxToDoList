import { uniqueId } from 'lodash'
import moment from 'moment'

export const ADD_NOTE = 'ADD_NOTE'
export const REMOVE_NOTE = 'REMOVE_NOTE'
export const SHOW_ACTIVE = 'SHOW_ACTIVE'
export const SHOW_INACTIVE = 'SHOW_INACTIVE'
export const STATUS_ACTIVE = 'STATUS_ACTIVE'
export const STATUS_INACTIVE = 'STATUS_INACTIVE'
export const SHOW_TAG_GENERAL = 'SHOW_TAG_GENERAL'
export const SHOW_TAG_IMPORTANT = 'SHOW_TAG_IMPORTANT'
export const SHOW_TAG_OTHER = 'SHOW_TAG_OTHER'
export const TAG_GENERAL = 'TAG_GENERAL'
export const TAG_IMPORTANT = 'TAG_IMPORTANT'
export const TAG_OTHER = 'TAG_OTHER'




export function addNote(title, content,tag) {
  return {
    id: new Date().getTime(),
    type: ADD_NOTE,
    title: title,
    content: content,
    dateTime: moment(new Date()).format('DD/MM/YYYY, H:MM:SS'),
    status: STATUS_ACTIVE,
    tag: tag
  }
}

export function removeNote(id) {
  return { type: REMOVE_NOTE, id: id }
}

export function showActive(){
  return {type:SHOW_ACTIVE}
}

export function showInactive(){
  return {type:SHOW_INACTIVE}
}

export function showTagGeneral(){
  return {type:SHOW_TAG_GENERAL}
}

export function showTagImportant(){
  return {type:SHOW_TAG_IMPORTANT}
}

export function showTagOther(){
  return {type:SHOW_TAG_OTHER}
}
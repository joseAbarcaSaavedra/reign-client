import React, { Fragment } from 'react'

const MONTHS = ['Jan', 'Feb', 'Mar', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const DAY_TIME = 1000 * 60 * 60 * 24

const hourFormat = (date) => {
  const hours = date.getHours()
  const hourAbs = Math.abs(hours - 12)
  const minutes = date.getMinutes()
  return `${hourAbs < 10 ? '0'.concat(hourAbs) : hourAbs}:${
    minutes < 10 ? '0'.concat(minutes.toString()) : minutes
  } ${hours < 12 ? 'am' : 'pm'}`
}

const dayFormat = (date) => {
  const month = date.getMonth()
  const day = date.getDate()
  return `${MONTHS[month]} ${day}`
}
export const DateInformation = React.memo(({ date = null }) => {
  const dateStr = new Date(date)
  const diffTime = Math.abs(new Date() - dateStr)
  const diffDays = diffTime / DAY_TIME

  const value =
    diffDays < 1
      ? hourFormat(dateStr)
      : diffDays >= 1 && diffDays < 2
      ? 'Yesterday'
      : dayFormat(dateStr)

  return <Fragment>{value}</Fragment>
})

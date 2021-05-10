import React, { Fragment } from 'react'
export const DateInformation = ({ date = null }) => {
  const dateStr = date ? new Date(date * 1000) : new Date()
  return <Fragment>{dateStr.toLocaleString()}</Fragment>
}

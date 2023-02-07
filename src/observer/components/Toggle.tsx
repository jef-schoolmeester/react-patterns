import React from 'react'

import { useNotificationObservable } from '..'

const Toggle = () => {
  const { notificationObservable } = useNotificationObservable()
  return (
    <button onClick={() => notificationObservable.notify('BUTTON CLICKED')}>
      TOGGLE ALERT
    </button>
  )
}

export default Toggle

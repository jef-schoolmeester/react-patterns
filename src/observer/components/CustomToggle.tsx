import React, { useState } from 'react'

import { useNotificationObservable } from '..'

const CustomToggle = () => {
  const { notificationObservable } = useNotificationObservable()

  const [notification, setNotification] = useState<string>('')

  const submitNotification = () => {
    notificationObservable.notify(notification)
    setNotification('')
  }

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setNotification(e.target.value)}
        value={notification}
      />
      <button onClick={submitNotification}>Submit</button>
    </div>
  )
}

export default CustomToggle

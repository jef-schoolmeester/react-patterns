import React, { useEffect, useState } from 'react'

import { useNotificationObservable } from '..'

const Alert = () => {
  const { notificationObservable } = useNotificationObservable()
  const [message, setMessage] = useState<string>()

  const alertMessage = (data: string) => {
    setMessage(data)
    setTimeout(() => setMessage(undefined), 2000)
  }

  useEffect(() => {
    notificationObservable.subscribe(alertMessage)
    return () => {
      notificationObservable.unsubscribe(alertMessage)
    }
  }, [])

  if (!message) return null
  return (
    <div>
      <h2>ALERT: {message}</h2>
    </div>
  )
}

export default Alert

import React, { createContext, useContext, useMemo, useRef } from 'react'

import { NotificationObservable } from './utils/NotificationObservable'

import Alert from './components/Alert'
import Toggle from './components/Toggle'
import CustomToggle from './components/CustomToggle'

const ObserverContext = createContext<{
  notificationObservable: NotificationObservable
}>({ notificationObservable: new NotificationObservable() })

export const useNotificationObservable = () => {
  return useContext(ObserverContext)
}

const Observer = () => {
  const notificationRef = useRef(new NotificationObservable())
  const value = useMemo(
    () => ({ notificationObservable: notificationRef.current }),
    []
  )
  return (
    <main>
      <h1>Observer</h1>
      <ObserverContext.Provider value={value}>
        <Alert />
        <Toggle />
        <CustomToggle />
      </ObserverContext.Provider>
    </main>
  )
}

export default Observer

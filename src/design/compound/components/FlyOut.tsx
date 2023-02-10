import React, { createContext, useContext, useState } from 'react'

const FlyOutContext = createContext<{ isOpen: boolean; toggle: () => void }>({
  isOpen: false,
  toggle: () => null,
})

const FlyOut = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setOpen] = useState<boolean>(false)

  const toggle = () => setOpen(!isOpen)

  const value = { isOpen, toggle }
  return (
    <FlyOutContext.Provider value={value}>{children}</FlyOutContext.Provider>
  )
}

const Toggle = () => {
  const { toggle } = useContext(FlyOutContext)

  return (
    <div onClick={toggle}>
      <button>TOGGLE</button>
    </div>
  )
}

const ActionList: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isOpen } = useContext(FlyOutContext)
  if (!isOpen) return null
  return <ul>{children}</ul>
}

const ActionItem: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <li>{children}</li>
}

FlyOut.Toggle = Toggle
FlyOut.ActionList = ActionList
FlyOut.ActionItem = ActionItem

export default FlyOut

import React, { createContext, useState } from 'react'

export const SuscriptionContext = createContext()

export const SuscriptionProvider = ({ children }) => {
  const [tittle, setTittle] = useState('')
  const [cash, setCash] = useState('')

  return (
    <SuscriptionContext.Provider value={{ setTittle, tittle, cash, setCash }}>
      {children}
    </SuscriptionContext.Provider>
  )
}

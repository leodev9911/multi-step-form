import { createContext, useState } from 'react'

export const FormsContext = createContext()

export const FormsProvider = ({ children }) => {
  const [monthly, setMonthly] = useState(true)

  return (
    <FormsContext.Provider
      value={{
        monthly,
        setMonthly
      }}
    >
      {children}
    </FormsContext.Provider>
  )
}

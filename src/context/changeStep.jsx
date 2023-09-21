import { createContext, useState } from 'react'

export const StepsContexts = createContext()

export const StepProvider = ({ children }) => {
  const [activeForm, setActiveForm] = useState({
    step1: true,
    step2: false,
    step3: false,
    step4: false
  })

  return (
    <StepsContexts.Provider
      value={{
        activeForm,
        setActiveForm
      }}
    >
      {children}
    </StepsContexts.Provider>
  )
}

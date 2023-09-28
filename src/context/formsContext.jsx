import { createContext, useState } from 'react'

export const FormsContext = createContext()

export const FormsProvider = ({ children }) => {
  const [monthly, setMonthly] = useState(true)

  const arcade = {
    monthly: 9,
    yearly: 90
  }
  const advanced = {
    monthly: 12,
    yearly: 120
  }
  const pro = {
    monthly: 15,
    yearly: 150
  }

  const onlineService = {
    monthly: 1,
    yearly: 10
  }
  const largerStorage = {
    monthly: 2,
    yearly: 20
  }
  const customizableProfile = {
    monthly: 2,
    yearly: 20
  }

  const [formsInfo, setFormsInfo] = useState({
    name: '',
    email: '',
    phone: '',
    subscription: '',
    storage: false,
    online: false,
    customizable: false
  })

  return (
    <FormsContext.Provider
      value={{
        monthly,
        setMonthly,
        arcade,
        advanced,
        pro,
        formsInfo,
        setFormsInfo,
        onlineService,
        largerStorage,
        customizableProfile
      }}
    >
      {children}
    </FormsContext.Provider>
  )
}

import { useContext } from 'react'
import { FormsContext } from '../context/formsContext'

export function useFormsInfo () {
  const {
    setFormsInfo,
    arcade,
    advanced,
    pro,
    onlineService,
    largerStorage,
    customizableProfile,
    formsInfo,
    monthly
  } = useContext(FormsContext)

  const handleChange = (event) => {
    const { name, type, value, checked } = event.target
    setFormsInfo(prevForm => {
      return {
        ...prevForm,
        [name]: type === 'checkbox' ? checked : value
      }
    })
  }

  const handleSubscriptionPrice = () => {
    if (formsInfo.subscription === 'Arcade' && monthly) {
      return arcade.monthly
    } else if (formsInfo.subscription === 'Arcade' && !monthly) {
      return arcade.yearly
    } else if (formsInfo.subscription === 'Advanced' && !monthly) {
      return advanced.yearly
    } else if (formsInfo.subscription === 'Advanced' && !monthly) {
      return advanced.yearly
    } else if (formsInfo.subscription === 'Pro' && monthly) {
      return pro.monthly
    } else if (formsInfo.subscription === 'Pro' && !monthly) {
      return pro.yearly
    }
  }

  const handleOnlineServicePrice = () => {
    if (formsInfo.online && monthly) {
      return onlineService.monthly
    } else if (formsInfo.online && !monthly) {
      return onlineService.yearly
    }
  }
  const handleStoragePrice = () => {
    if (formsInfo.storage && monthly) {
      return largerStorage.monthly
    } else if (formsInfo.storage && !monthly) {
      return largerStorage.yearly
    }
  }
  const handleCustomizablePrice = () => {
    if (formsInfo.customizable && monthly) {
      return customizableProfile.monthly
    } else if (formsInfo.customizable && !monthly) {
      return customizableProfile.yearly
    }
  }

  return {
    handleChange,
    handleCustomizablePrice,
    handleOnlineServicePrice,
    handleSubscriptionPrice,
    handleStoragePrice
  }
}

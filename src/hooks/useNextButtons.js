import { useContext } from 'react'
import { StepsContexts } from '../context/changeStep'

export function useNextButton () {
  const { activeForm, setActiveForm } = useContext(StepsContexts)

  const handleNextButton = () => {
    if (activeForm.step1) {
      setActiveForm(prev => {
        return {
          step1: false,
          step2: true,
          step3: false,
          step4: false
        }
      })
    } else if (activeForm.step2) {
      setActiveForm(prev => {
        return {
          step1: false,
          step2: false,
          step3: true,
          step4: false
        }
      })
    } else if (activeForm.step3) {
      setActiveForm(prev => {
        return {
          step1: false,
          step2: false,
          step3: false,
          step4: true
        }
      })
    }
  }

  const handleBackButton = () => {
    if (activeForm.step2) {
      setActiveForm(prev => {
        return {
          step1: true,
          step2: false,
          step3: false,
          step4: false
        }
      })
    } else if (activeForm.step3) {
      setActiveForm(prev => {
        return {
          step1: false,
          step2: true,
          step3: false,
          step4: false
        }
      })
    } else if (activeForm.step4) {
      setActiveForm(prev => {
        return {
          step1: false,
          step2: false,
          step3: true,
          step4: false
        }
      })
    }
  }

  return { handleNextButton, handleBackButton }
}

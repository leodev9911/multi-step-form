import { useContext } from 'react'
import { StepsContexts } from '../context/changeStep'

export function useToSteps () {
  const { setActiveForm } = useContext(StepsContexts)

  const toStep1 = () => {
    setActiveForm(prev => {
      if (!prev.step1) {
        return {
          step1: !prev.step1,
          step2: false,
          step3: false,
          step4: false
        }
      } else {
        return {
          ...prev
        }
      }
    })
  }
  const toStep2 = () => {
    setActiveForm(prev => {
      if (!prev.step2) {
        return {
          step1: false,
          step2: !prev.step2,
          step3: false,
          step4: false
        }
      } else {
        return {
          ...prev
        }
      }
    })
  }
  const toStep3 = () => {
    setActiveForm(prev => {
      if (!prev.step3) {
        return {
          step1: false,
          step2: false,
          step3: !prev.step3,
          step4: false
        }
      } else {
        return {
          ...prev
        }
      }
    })
  }
  const toStep4 = () => {
    setActiveForm(prev => {
      if (!prev.step4) {
        return {
          step1: false,
          step2: false,
          step3: false,
          step4: !prev.step4
        }
      } else {
        return {
          ...prev
        }
      }
    })
  }

  return { toStep1, toStep2, toStep3, toStep4 }
}

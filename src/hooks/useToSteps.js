import { useContext } from 'react'
import { StepsContexts } from '../context/changeStep'

export function useToSteps () {
  const { setActiveForm } = useContext(StepsContexts)

  const toStep1 = () => {
    setActiveForm(prev => {
      if (!prev.step1.active) {
        return {
          step1: {
            active: !prev.step1.active,
            try: false
          },
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
          step1: {
            active: false,
            try: false
          },
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
          step1: {
            active: false,
            try: false
          },
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
          step1: {
            active: false,
            try: false
          },
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

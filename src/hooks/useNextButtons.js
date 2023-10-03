import { useContext } from 'react'
import { StepsContexts } from '../context/changeStep'
import { FormsContext } from '../context/formsContext'

export function useNextButton () {
  const { activeForm, setActiveForm } = useContext(StepsContexts)
  const { formsInfo } = useContext(FormsContext)

  const wasTried = () => {
    if (formsInfo.name === '' || formsInfo.email === '' || formsInfo.phone === '') {
      return true
    } else {
      return false
    }
  }
  const isValid = () => {
    const regEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (formsInfo.email !== '') {
      if (regEx.test(formsInfo.email)) {
        return true
      } else {
        return false
      }
    }
  }

  const handleNextButton = () => {
    if (wasTried() === true || isValid() === false) {
      setActiveForm(prev => {
        return {
          step1: {
            active: true,
            try: true
          },
          step2: false,
          step3: false,
          step4: false
        }
      })
      return
    }

    if (activeForm.step1.active) {
      setActiveForm(prev => {
        return {
          step1: {
            active: false,
            try: false
          },
          step2: true,
          step3: false,
          step4: false
        }
      })
    } else if (activeForm.step2) {
      setActiveForm(prev => {
        return {
          step1: {
            active: false,
            try: false
          },
          step2: false,
          step3: true,
          step4: false
        }
      })
    } else if (activeForm.step3) {
      setActiveForm(prev => {
        return {
          step1: {
            active: false,
            try: false
          },
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
          step1: {
            active: true,
            try: false
          },
          step2: false,
          step3: false,
          step4: false
        }
      })
    } else if (activeForm.step3) {
      setActiveForm(prev => {
        return {
          step1: {
            active: false,
            try: false
          },
          step2: true,
          step3: false,
          step4: false
        }
      })
    } else if (activeForm.step4) {
      setActiveForm(prev => {
        return {
          step1: {
            active: false,
            try: false
          },
          step2: false,
          step3: true,
          step4: false
        }
      })
    }
  }

  const handleConfirmButton = () => {
    if (wasTried() === true || isValid() === false) {
      setActiveForm(prev => {
        return {
          step1: {
            active: true,
            try: true
          },
          step2: false,
          step3: false,
          step4: false
        }
      })
      return
    }
    setActiveForm(prev => {
      return {
        step1: {
          active: false,
          try: false
        },
        step2: false,
        step3: false,
        step4: false,
        step5: true
      }
    })
  }

  return { handleNextButton, handleBackButton, handleConfirmButton, isValid }
}

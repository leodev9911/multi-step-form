import { React, useContext } from 'react'
import './FormsContainer.css'
import Step1 from '../components/Step1'
import Step2 from '../components/Step2'
import Step3 from '../components/Step3'
import Step4 from '../components/Step4'
import Step5 from '../components/Step5'
import { StepsContexts } from '../context/changeStep'
import { useNextButton } from '../hooks/useNextButtons'

export default function FormsContainer () {
  const { activeForm } = useContext(StepsContexts)
  const { handleNextButton, handleBackButton, handleConfirmButton } = useNextButton()

  let H1 = ''
  let P = ''

  if (activeForm.step1.active) {
    H1 = 'Personal info'
    P = 'Please provide your name, email address, and phone number.'
  } else if (activeForm.step2) {
    H1 = 'Select your plan'
    P = 'You have the option of monthly or year billing.'
  } else if (activeForm.step3) {
    H1 = 'Pick add-ons'
    P = 'Add ons help enhance your gaming experience'
  } else if (activeForm.step4) {
    H1 = 'Finishing up'
    P = 'Double check everything looks OK before confirming.'
  }

  return (
    <>
      <section className='forms__container'>
        <section className='mobile-section'>
          <div className='title__container'>
            <h1>{H1}</h1>
            <p>{P}</p>
          </div>
          <div className='section'>
            {activeForm.step1.active && <Step1 />}
            {activeForm.step2 && <Step2 />}
            {activeForm.step3 && <Step3 />}
            {activeForm.step4 && <Step4 />}
            {activeForm.step5 && <Step5 />}
          </div>
        </section>
        <div className='buttons__container'>
          {(!activeForm.step1.active && !activeForm.step5) &&
            <button
              className='back'
              onClick={handleBackButton}
            >
              Go Back
            </button>}
          {(!activeForm.step4 && !activeForm.step5) &&
            <button
              className='step'
              onClick={handleNextButton}
            >
              Next Step
            </button>}
          {activeForm.step4 &&
            <button
              className='step'
              onClick={handleConfirmButton}
            >
              Confirm
            </button>}
        </div>
      </section>
    </>
  )
}

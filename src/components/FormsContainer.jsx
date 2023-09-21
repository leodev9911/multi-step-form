import { React, useContext } from 'react'
import './FormsContainer.css'
import Step1 from '../components/Step1'
import Step2 from '../components/Step2'
import Step3 from '../components/Step3'
import Step4 from '../components/Step4'
import { StepsContexts } from '../context/changeStep'

export default function FormsContainer () {
  const { activeForm } = useContext(StepsContexts)
  return (
    <>
      <section className='forms__container'>
        <div className='title__container'>
          <h1>Personal info</h1>
          <p>Please provide your name, email address, and phone number</p>
        </div>
        <div className='section'>
          {activeForm.step1 && <Step1 />}
          {activeForm.step2 && <Step2 />}
          {activeForm.step3 && <Step3 />}
          {activeForm.step4 && <Step4 />}
        </div>
        <div className='buttons__container'>
          {!activeForm.step1 && <button className='back'>Go Back</button>}
          <button className='step'>Next Step</button>
        </div>
      </section>
    </>
  )
}

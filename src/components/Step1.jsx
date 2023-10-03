import { React, useContext } from 'react'
import './Step1.css'
import { useFormsInfo } from '../hooks/useFormsInfo'
import { FormsContext } from '../context/formsContext'
import { StepsContexts } from '../context/changeStep'
import { useNextButton } from '../hooks/useNextButtons'

export default function Step1 () {
  const { handleChange } = useFormsInfo()
  const { isValid } = useNextButton()
  const { formsInfo } = useContext(FormsContext)
  const { activeForm } = useContext(StepsContexts)

  return (
    <form className='step1__form'>
      <div>
        <label
          htmlFor='name'
          className={(activeForm.step1.try === true && formsInfo.name === '') && 'required'}
        >
          <p>Name</p>
          {(activeForm.step1.try === true && formsInfo.name === '') && <p>This field is required</p>}
        </label>
        <input
          id='name'
          name='name'
          type='text'
          className={(activeForm.step1.try === true && formsInfo.name === '') && 'required'}
          placeholder='e.g. Stephen King'
          onChange={handleChange}
          value={formsInfo.name}
        />
      </div>

      <div>
        <label
          htmlFor='email'
          className={((activeForm.step1.try === true && formsInfo.email === '') || isValid() === false) && 'required'}
        >
          <p>Email Address</p>
          {(activeForm.step1.try === true && formsInfo.email === '') && <p>This field is required</p>}
          {isValid() === false && <p>Invalid Email Address</p>}
        </label>
        <input
          id='email'
          type='text'
          name='email'
          className={((activeForm.step1.try === true && formsInfo.email === '') || isValid() === false) && 'required'}
          onChange={handleChange}
          value={formsInfo.email}
          placeholder='e.g. stephenking@lorem.com'
        />
      </div>

      <div>
        <label
          htmlFor='phone'
          className={(activeForm.step1.try === true && formsInfo.phone === '') && 'required'}
        >
          <p>Phone Number</p>
          {(activeForm.step1.try === true && formsInfo.phone === '') && <p>This field is required</p>}
        </label>
        <input
          id='phone'
          type='text'
          name='phone'
          className={(activeForm.step1.try === true && formsInfo.phone === '') && 'required'}
          onChange={handleChange}
          value={formsInfo.phone}
          placeholder='e.g. +1 234 567 890'
        />
      </div>
    </form>
  )
}

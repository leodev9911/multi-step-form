import { React, useContext } from 'react'
import './Step1.css'
import { useFormsInfo } from '../hooks/useFormsInfo'
import { FormsContext } from '../context/formsContext'

export default function Step1 () {
  const { handleChange } = useFormsInfo()
  const { formsInfo } = useContext(FormsContext)

  return (
    <form className='step1__form'>
      <div>
        <label htmlFor='name'>Name</label>
        <input
          id='name'
          name='name'
          type='text'
          placeholder='e.g. Stephen King'
          onChange={handleChange}
          value={formsInfo.name}
        />
      </div>

      <div>
        <label htmlFor='email'>Email Address</label>
        <input
          id='email'
          type='text'
          name='email'
          onChange={handleChange}
          value={formsInfo.email}
          placeholder='e.g. stephenking@lorem.com'
        />
      </div>

      <div>
        <label htmlFor='phone'>Phone Number</label>
        <input
          id='phone'
          type='text'
          name='phone'
          onChange={handleChange}
          value={formsInfo.phone}
          placeholder='e.g. +1 234 567 890'
        />
      </div>
    </form>
  )
}

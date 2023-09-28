import { React, useContext } from 'react'
import { FormsContext } from '../context/formsContext'
import './Step3.css'
import { useFormsInfo } from '../hooks/useFormsInfo'

export default function Step3 () {
  const { monthly, formsInfo } = useContext(FormsContext)
  const { handleChange } = useFormsInfo()

  return (
    <form className='step3-form'>
      <label htmlFor='online' className='online-label'>
        <input
          type='checkbox'
          id='online'
          className='online-input'
          checked={formsInfo.online}
          onChange={handleChange}
          name='online'
        />
        <div className='info'>
          <h3>Online Service</h3>
          <p>Access to multiplayer games</p>
        </div>
        <p className='price'>+${monthly ? '1/mo' : '10/yr'}</p>
      </label>
      <label htmlFor='storage' className='storage-label'>
        <input
          type='checkbox'
          id='storage'
          className='storage-input'
          checked={formsInfo.storage}
          onChange={handleChange}
          name='storage'
        />
        <div className='info'>
          <h3>Larger Storage</h3>
          <p>Extra 1TB of cloud save</p>
        </div>
        <p className='price'>+${monthly ? '2/mo' : '20/yr'}</p>
      </label>
      <label htmlFor='profile' className='profile-label'>
        <input
          type='checkbox'
          id='profile'
          className='profile-input'
          checked={formsInfo.customizable}
          onChange={handleChange}
          name='customizable'
        />
        <div className='info'>
          <h3>Customizable Profile</h3>
          <p>Custom theme on your profile</p>
        </div>
        <p className='price'>+${monthly ? '2/mo' : '20/yr'}</p>
      </label>
    </form>
  )
}

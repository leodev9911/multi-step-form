import { React, useContext } from 'react'
import iconArcade from '../assets/images/icon-arcade.svg'
import iconAdvanced from '../assets/images/icon-advanced.svg'
import iconPro from '../assets/images/icon-pro.svg'
import './Step2.css'
import { FormsContext } from '../context/formsContext'

export default function Step2 () {
  const { monthly, setMonthly } = useContext(FormsContext)

  const toggleMonth = () => {
    setMonthly(prev => !prev)
  }

  return (
    <>
      <form className='checkbox-form'>
        <input
          className='step2-inputs'
          id='arcade'
          type='radio'
          name='step2'
        />
        <label
          className='arcade-label'
          htmlFor='arcade'
        >
          <img src={iconArcade} alt='Arcade icon' />
          <h3>Arcade</h3>
          <p>${monthly ? '9/mo' : '90/yr'}</p>
        </label>
        <input
          className='step2-inputs'
          id='advanced'
          type='radio'
          name='step2'
        />
        <label
          className='advanced-label'
          htmlFor='advanced'
        >
          <img src={iconAdvanced} alt='Advanced icon' />
          <h3>Advanced</h3>
          <p>${monthly ? '12/mo' : '120/yr'}</p>
        </label>
        <input
          className='step2-inputs'
          id='pro'
          type='radio'
          name='step2'
        />
        <label
          className='pro-label'
          htmlFor='pro'
        >
          <img src={iconPro} alt='Arcade icon' />
          <h3>Pro</h3>
          <p>${monthly ? '15/mo' : '150/yr'}</p>
        </label>
      </form>
      <div className='toggleButton__container'>
        <p className={`month ${monthly && 'active'}`}>Monthly</p>
        <div className='dot__container' onClick={toggleMonth}>
          <div className={`dot ${!monthly ? 'right' : 'left'}`} />
        </div>
        <p className={`year ${!monthly && 'active'}`}>Yearly</p>
      </div>
    </>
  )
}

import { React, useContext } from 'react'
import iconArcade from '../assets/images/icon-arcade.svg'
import iconAdvanced from '../assets/images/icon-advanced.svg'
import iconPro from '../assets/images/icon-pro.svg'
import './Step2.css'
import { FormsContext } from '../context/formsContext'
import { useFormsInfo } from '../hooks/useFormsInfo'

export default function Step2 () {
  const { monthly, setMonthly, arcade, advanced, pro } = useContext(FormsContext)
  const { handleChange } = useFormsInfo()

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
          name='subscription'
          value='Arcade'
          onChange={handleChange}
        />
        <label
          className='arcade-label'
          htmlFor='arcade'
        >
          <img src={iconArcade} alt='Arcade icon' />
          <div>
            <h3>Arcade</h3>
            <p>${monthly ? `${arcade.monthly}/mo` : `${arcade.yearly}/yr`}</p>
          </div>
        </label>
        <input
          className='step2-inputs'
          id='advanced'
          type='radio'
          name='subscription'
          value='Advanced'
          onChange={handleChange}
        />
        <label
          className='advanced-label'
          htmlFor='advanced'
        >
          <img src={iconAdvanced} alt='Advanced icon' />
          <div>
            <h3>Advanced</h3>
            <p>${monthly ? `${advanced.monthly}/mo` : `${advanced.yearly}/yr`}</p>
          </div>
        </label>
        <input
          className='step2-inputs'
          id='pro'
          type='radio'
          name='subscription'
          value='Pro'
          onChange={handleChange}
        />
        <label
          className='pro-label'
          htmlFor='pro'
        >
          <img src={iconPro} alt='Arcade icon' />
          <div>
            <h3>Pro</h3>
            <p>${monthly ? `${pro.monthly}/mo` : `${pro.yearly}/yr`}</p>
          </div>
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

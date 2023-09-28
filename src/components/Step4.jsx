import { React, useContext } from 'react'
import './Step4.css'
import { FormsContext } from '../context/formsContext'
import { useFormsInfo } from '../hooks/useFormsInfo'

export default function Step4 () {
  const {
    formsInfo,
    monthly
  } = useContext(FormsContext)

  const {
    handleCustomizablePrice,
    handleOnlineServicePrice,
    handleSubscriptionPrice,
    handleStoragePrice
  } = useFormsInfo()

  const subscriptionPrice = handleSubscriptionPrice()
  const onlinePrice = handleOnlineServicePrice()
  const storagePrice = handleStoragePrice()
  const customizablePrice = handleCustomizablePrice()

  const totalPrice = onlinePrice + subscriptionPrice + storagePrice + customizablePrice

  return (
    <section className='step4-section'>
      <div className='summary-div'>
        <div className='upper-div'>
          <div>
            <h3>{formsInfo.subscription} ({monthly ? 'Monthly' : 'Yearly'})</h3>
            <p>Change</p>
          </div>
          <p className='price-p'>
            ${subscriptionPrice}/{monthly ? 'mo' : 'yr'}
          </p>
        </div>
        <div className='lower-div'>
          {formsInfo.online &&
            <div className='online-div'>
              <p>Online service</p>
              <p className='price-p'>+${onlinePrice}/{monthly ? 'mo' : 'yr'}</p>
            </div>}
          {formsInfo.storage &&
            <div className='online-div'>
              <p>Larger Storage</p>
              <p className='price-p'>+${storagePrice}/{monthly ? 'mo' : 'yr'}</p>
            </div>}
          {formsInfo.customizable &&
            <div className='online-div'>
              <p>Customizable Profile</p>
              <p className='price-p'>+${customizablePrice}/{monthly ? 'mo' : 'yr'}</p>
            </div>}
        </div>
      </div>
      <div className='total-div'>
        <p>Total (per {monthly ? 'month' : 'year'})</p>
        <p className='price-p'>+${totalPrice}/{monthly ? 'mo' : 'yr'}</p>
      </div>
    </section>
  )
}

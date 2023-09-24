import { React } from 'react'
import './Step4.css'

export default function Step4 () {
  return (
    <section className='step4-section'>
      <div className='summary-div'>
        <div className='upper-div'>
          <div>
            <h3>Arcade (Monthly)</h3>
            <p>Change</p>
          </div>
          <p className='price-p'>
            $9/mo
          </p>
        </div>
        <div className='lower-div'>
          <div className='online-div'>
            <p>Online service</p>
            <p className='price-p'>+$1/mo</p>
          </div>
          <div className='storage-div'>
            <p>Larger storage</p>
            <p className='price-p'>+$2/mo</p>
          </div>
        </div>
      </div>
      <div className='total-div'>
        <p>Total (per month)</p>
        <p className='price-p'>+$12/mo</p>
      </div>
    </section>
  )
}

import './Step5.css'
import { React } from 'react'
import iconThankYou from '../assets/images/icon-thank-you.svg'

export default function Step5 () {
  return (
    <>
      <section className='step5__section'>
        <img src={iconThankYou} alt='Icon Thank You' />
        <h2>Thank you!</h2>
        <p>Thanks for confirming you subscription! We hope yoy have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
      </section>
    </>
  )
}

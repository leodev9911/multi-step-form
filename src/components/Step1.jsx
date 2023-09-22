import { React } from 'react'
import './Step1.css'

export default function Step1 () {
  return (
    <form>
      <div>
        <label htmlFor='name'>Name</label>
        <input
          id='name'
          type='text'
          placeholder='e.g. Stephen King'
        />
      </div>

      <div>
        <label htmlFor='email'>Email Address</label>
        <input
          id='email'
          type='text'
          placeholder='e.g. stephenking@lorem.com'
        />
      </div>

      <div>
        <label htmlFor='phone'>Phone Number</label>
        <input
          id='phone'
          type='text'
          placeholder='e.g. +1 234 567 890'
        />
      </div>
    </form>
  )
}

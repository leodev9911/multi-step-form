import { React } from 'react'

export default function Step1 () {
  return (
    <form>
      <label htmlFor='name'>Name</label>
      <input
        id='name'
        type='text'
        placeholder='e.g. Stephen King'
      />

      <label htmlFor='email'>Email Address</label>
      <input
        id='email'
        type='text'
        placeholder='e.g. stephenking@lorem.com'
      />

      <label htmlFor='phone'>Phone Number</label>
      <input
        id='phone'
        type='text'
        placeholder='e.g. +1 234 567 890'
      />
    </form>
  )
}

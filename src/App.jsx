import { React } from 'react'
import Aside from './components/Aside'
import './style.css'
import FormsContainer from './components/FormsContainer'

export default function App () {
  return (
    <>
      <main>
        <section className='multi-forms__container'>
          <Aside />
          <FormsContainer />
        </section>
      </main>
    </>
  )
}

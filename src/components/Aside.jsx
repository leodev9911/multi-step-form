import { useContext } from 'react'
import { useToSteps } from '../hooks/useToSteps'
import './Aside.css'
import { StepsContexts } from '../context/changeStep'

export default function Aside () {
  const { toStep1, toStep2, toStep3, toStep4 } = useToSteps()
  const { activeForm } = useContext(StepsContexts)

  return (
    <aside>
      <div className='scroll-points'>
        <div className={`button ${activeForm.step1 && 'active'}`} onClick={toStep1}>1</div>
        <div className='title'>
          <p>STEP 1</p>
          <p>YOUR INFO</p>
        </div>
      </div>
      <div className='scroll-points'>
        <div className={`button ${activeForm.step2 && 'active'}`} onClick={toStep2}>2</div>
        <div className='title'>
          <p>STEP 2</p>
          <p>SELECT PLAN</p>
        </div>
      </div>
      <div className='scroll-points'>
        <div className={`button ${activeForm.step3 && 'active'}`} onClick={toStep3}>3</div>
        <div className='title'>
          <p>STEP 3</p>
          <p>ADD-ONS</p>
        </div>
      </div>
      <div className='scroll-points'>
        <div className={`button ${activeForm.step4 && 'active'}`} onClick={toStep4}>4</div>
        <div className='title'>
          <p>STEP 4</p>
          <p>SUMMARY</p>
        </div>
      </div>
    </aside>
  )
}

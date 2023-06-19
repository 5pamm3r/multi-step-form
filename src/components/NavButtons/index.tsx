import React, { useContext } from 'react'
import '../../styles/layout/_navButtons.scss';

interface Props {
  step: number;
  setStep: (value: number) => void;
}
const NavButtons: React.FC<Props> = ({ step, setStep }) => {

  const onBack = () => {
    setStep(step - 1)
  }
  const onNextStep = () => {
    setStep(step + 1)
  }
  return (
    <div className='navButtons__container'>
      <button className={`backBtn ${step <= 1 ? 'hidden' : ''}`} onClick={onBack} disabled={step === 1}>Go Back</button>
      {step === 4
        ? <button className='nextBtn'>Confirm</button>
        : <button className='nextBtn' onClick={onNextStep}>Next Step</button>}
    </div>
  )
}

export default NavButtons
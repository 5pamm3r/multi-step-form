import React, { useContext } from 'react'
import '../../styles/layout/_footer.scss'
import UserContext from '../../context/userContext';

interface Props {
  step: number;
  setStep: (value: number) => void;
}
const Footer: React.FC<Props> = ({ step, setStep }) => {

  const onBack = () => {
    setStep(step - 1)
  }
  const onNext = () => {
    setStep(step + 1)
  }
  return (
    <div className='footer__container'>
      <button className='backBtn' onClick={onBack}>Go Back</button>
      {step === 4
        ? <button className='nextBtn'>Confirm</button>
        : <button className='nextBtn' onClick={onNext}>Next Step</button>}
    </div>
  )
}

export default Footer
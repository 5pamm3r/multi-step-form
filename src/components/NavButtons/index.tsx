import React from 'react'
import '../../styles/layout/_navButtons.scss';
import UserContext from '../../context/userContext';

interface Props {
  step: number;
  setStep: (value: number) => void;
  validatePersonalInfo: (name: string, email: string, phone: string, setError: (error: boolean) => void) => boolean;
}
const NavButtons: React.FC<Props> = ({ step, setStep, validatePersonalInfo }) => {

  const {
    state: { user },
    actions: { setError }
  } = React.useContext(UserContext);

  const onBack = () => {
    setStep(step - 1)
  }
  const onNextStep = () => {
    if (step === 1) {
      if (!validatePersonalInfo(user.name, user.email, user.phone, setError)) {
        setStep(step + 1)
      }

    }
    else if (step > 1) {
      setStep(step + 1)
    }
  }
  return (
    <div className='navButtons__container'>
      <button className={`backBtn ${step <= 1 ? 'hidden' : ''}`} onClick={onBack} disabled={step === 1}>Go Back</button>
      {step === 4
        ? <button className='nextBtn' onClick={() => setStep(step + 1)}>Confirm</button>
        : <button className='nextBtn' onClick={onNextStep}>Next Step</button>}
    </div>
  )
}

export default NavButtons
import React, { useEffect, useState } from 'react'
import '../../styles/layout/_navButtons.scss';
import UserContext from '../../context/userContext';
import { Plan } from '../../types/planType';
import { User } from '../../types/userType';

interface Props {
  step: number;
  setStep: (value: number) => void;
  validatePersonalInfo: (name: User['name'], email: User['email'], phone: User['phone']) => void;
  validatePlan: (name: Plan['name']) => void;
}
const NavButtons: React.FC<Props> = ({ step, setStep, validatePersonalInfo, validatePlan }) => {
  const [hidden, setHidden] = useState<boolean>(false);

  const {
    state: { user, planSelected, personalError, planError },
  } = React.useContext(UserContext);

  const onBack = () => {
    setStep(step - 1)
  }
  const onNextStep = () => {
    if (step === 1) {
      validatePersonalInfo(user.name, user.email, user.phone)


    } else if (step === 2) {
      validatePlan(planSelected.name)
    }
    else if (step > 2 && step <= 4) {
      setStep(step + 1)
    }
  }

  const onConfirm = () => {
    setHidden(prevState => !prevState)
    setStep(step + 1)
  }

  useEffect(() => {
    if (personalError.name === false && personalError.email === false && personalError.phone === false) {
      setStep(step + 1);
    }
  }, [personalError])
  useEffect(() => {
    if (planError.name === false) {
      setStep(step + 1)
    }
  }, [planError])
  return (
    <>
      <div className={`navButtons__container ${hidden ? 'hidden' : ''}`}>
        <button className={`backBtn ${step <= 1 || hidden ? 'hidden' : ''}`} onClick={onBack} disabled={step === 1 || hidden}>Go Back</button>
        {step === 4
          ? <button className='nextBtn' onClick={onConfirm} disabled={hidden}>Confirm</button>
          : <button className={`nextBtn ${hidden ? 'hidden' : ''}`} onClick={onNextStep} disabled={hidden}>Next Step</button>}
      </div>
    </>
  )
}

export default NavButtons
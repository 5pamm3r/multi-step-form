import React from 'react';
import AddOns from '../AddOns'
import Form from '../Form'
import Header from '../Header'
import Plans from '../Plans'
import PersonalInfo from '../PersonalInfo'
import Finishing from '../Finishing';

import '../../styles/layout/_app.scss';
import NavButtons from '../NavButtons';
import Confirm from '../Confirm';
import { Plan } from '../../types/planType';
import UserContext from '../../context/userContext';
import { User } from '../../types/userType';

function App() {
  const {
    actions: { setPersonalError, setPlanError }
  } = React.useContext(UserContext);
  const [step, setStep] = React.useState<number>(1);

  const validateEmail = (email: User['email']) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  const validatePhone = (phone: User['phone']) => {
    const phoneRegex = /^\d+(\s\d+)*$/;
    return phoneRegex.test(phone)

  }
  const validatePersonalInfo = (name: User['name'], email: User['email'], phone: User['phone']) => {
    if (name.trim() === '') {
      setPersonalError((prevState) => ({
        ...prevState,
        name: true,
      }))
    } else {
      setPersonalError((prevState) => ({
        ...prevState,
        name: false,
      }))

    }
    if (!validateEmail(email)) {
      setPersonalError((prevState) => ({
        ...prevState,
        email: true,
      }))
    } else {
      setPersonalError((prevState) => ({
        ...prevState,
        email: false,
      }))
    }
    if (!validatePhone(phone)) {
      setPersonalError((prevState) => ({
        ...prevState,
        phone: true,
      }))
    } else {
      setPersonalError((prevState) => ({
        ...prevState,
        phone: false,
      }))

    }
  }

  const validatePlan = (plan: Plan['name']) => {
    if (!plan) {
      setPlanError(() => ({
        name: true,
      }))
    } else {
      setPlanError(() => ({
        name: false,
      }))
    }
  }

  const stepComponents: { [key: number]: JSX.Element } = {
    1: <PersonalInfo />,
    2: <Plans />,
    3: <AddOns />,
    4: <Finishing setStep={setStep} />,
    5: <Confirm />
  }

  return (
    <div className='app__container'>
      <Header step={step} />
      <div className='formDesk__container'>
        <Form>
          {
            stepComponents[step]
          }
        </Form>
        <NavButtons step={step} setStep={setStep} validatePersonalInfo={validatePersonalInfo} validatePlan={validatePlan} />
      </div>
    </div>
  )
}

export default App

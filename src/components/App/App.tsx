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

function App() {
  const [step, setStep] = React.useState<number>(1);

  const validatePersonalInfo = (name: string, email: string, phone: string, setError: (error: boolean) => void): boolean => {
    if (name.trim() === '' || email.trim() === '' || phone.trim() === '') {
      setError(true);
      return true
    }
    setError(false);
    return false
  };

  const stepComponents: { [key: number]: JSX.Element } = {
    1: <PersonalInfo />,
    2: <Plans />,
    3: <AddOns />,
    4: <Finishing />,
    5: <Confirm />
  }

  return (
    <div className='app__container'>
      <Header />
      <div className='formDesk__container'>
        <Form>
          {
            stepComponents[step]
          }
        </Form>
        <NavButtons step={step} setStep={setStep} validatePersonalInfo={validatePersonalInfo} />
      </div>
    </div>
  )
}

export default App

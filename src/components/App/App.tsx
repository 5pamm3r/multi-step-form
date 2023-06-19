import React from 'react';
import AddOns from '../AddOns'
import Form from '../Form'
import Header from '../Header'
import Plans from '../Plans'
import PersonalInfo from '../personalInfo/PersonalInfo'
import Finishing from '../Finishing';

import '../../styles/layout/_app.scss';
import NavButtons from '../NavButtons';

function App() {
  const [step, setStep] = React.useState<number>(1);

  const validateFields = (name: string, email: string, phone: string, setError: (error: boolean) => void) => {
    if (name.trim() === '' || email.trim() === '' || phone.trim() === '') {
      setError(true);
      // return false;
    }
    setError(false);
    // return true;
  };

  const stepComponents: { [key: number]: JSX.Element } = {
    1: <PersonalInfo validateFields={validateFields} />,
    2: <Plans />,
    3: <AddOns />,
    4: <Finishing />
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
        <NavButtons step={step} setStep={setStep} />
      </div>
    </div>
  )
}

export default App

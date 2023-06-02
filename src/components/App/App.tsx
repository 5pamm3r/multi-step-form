import React, { useContext, useState } from 'react';
import AddOns from '../AddOns'
import Footer from '../Footer'
import Form from '../Form'
import Header from '../Header'
import Plans from '../Plans'
import PersonalInfo from '../personalInfo/PersonalInfo'
import UserContext from '../../context/userContext';
import Finishing from '../Finishing';

function App() {
  const [step, setStep] = useState<number>(1);
  const {
    state: { user },
  } = useContext(UserContext)
  let render;

  if (step === 1) {
    render = <PersonalInfo />
  } else if (step === 2) {
    render = <Plans />
  } else if (step === 3) {
    render = <AddOns />
  } else if (step === 4) {
    render = <Finishing />
  }

  return (
    <>
      <Header />
      <Form>
        {
          render
        }
      </Form>
      <Footer step={step} setStep={setStep} />
    </>
  )
}

export default App

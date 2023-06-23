import React, { useEffect, useState } from 'react'
import '../../styles/components/_personalInfo.scss'
import Error from '../Error';
import UserContext from '../../context/userContext';
import { User } from '../../types/userType';

const PersonalInfo: React.FC = () => {
  const {
    state: { user, personalError },
    actions: { setUser }
  } = React.useContext(UserContext);

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');

  useEffect(() => {
    setName(user.name);
    setEmail(user.email);
    setPhone(user.phone)
  }, [])

  const onChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
    setUser((prevState: User) => ({
      ...prevState,
      name: e.target.value,
    }))
    // setPersonalError((prevState) => ({
    //   ...prevState,
    //   name: false
    // }))
  }
  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setUser((prevState: User) => ({
      ...prevState,
      email: e.target.value,
    }))
    // setPersonalError((prevState) => ({
    //   ...prevState,
    //   email: false,
    // }))
  }
  const onChangePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
    setUser((prevState: User) => ({
      ...prevState,
      phone: e.target.value,
    }))
    // setPersonalError((prevState) => ({
    //   ...prevState,
    //   phone: false,
    // }))
  }

  return (
    <div className='form' aria-labelledby='personalInfo'>
      <h2 className='offscreen' id='personalInfo'>Personal information section</h2>
      <h2 className='title'>Personal Info</h2>
      <h3 className='subtitle'>Please provide your name, email address and phone number.</h3>
      <div className='inputs__container'>
        <label><span className='offscreen'>Type your</span>Name
          {personalError.name && <Error message='This field is required' />}
          <input className={personalError.name ? 'error' : ''} type='text' placeholder='e.g Sthepen King' value={name} onChange={onChangeUsername} />
        </label>
        <label><span className='offscreen'>Type you</span>Email Address
          {personalError.email && <Error message='E-mail format is not correct' />}
          <input className={personalError.email ? 'error' : ''} type='email' placeholder='e.g sthepenking@lorem.com' value={email} onChange={onChangeEmail} />
        </label>
        <label><span className='offscreen'>Type your</span>Phone Number
          {personalError.phone && <Error message='This field is required' />}
          <input className={personalError.phone ? 'error' : ''} type='tel' min="00000" placeholder='e.g +1 234 567 890' value={phone} onChange={onChangePhone} />
        </label>
      </div>
    </div>
  )
}

export default PersonalInfo
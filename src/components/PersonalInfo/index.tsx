import React, { useContext, useState } from 'react'
import '../../styles/components/_personalInfo.scss'
import Error from '../Error';

interface Props {
  validateFields: (name: string, email: string, phone: string, setError: (error: boolean) => void) => void;
}
const PersonalInfo: React.FC<Props> = ({ validateFields }) => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [error, setError] = useState<boolean>(false);

  const onChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
    // setUser((prevState: User) => ({
    //   ...prevState,
    //   name: e.target.value,
    // }))
  }
  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    // setUser((prevState: User) => ({
    //   ...prevState,
    //   email: e.target.value,
    // }))
  }
  const onChangePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
    // setUser((prevState: User) => ({
    //   ...prevState,
    //   phone: e.target.value,
    // }))
  }

  return (
    <div className='form'>
      <h2 className='title'>Personal Info</h2>
      <h3 className='subtitle'>Please provide your name, email address and phone number.</h3>
      <div className='inputs__container'>
        <label>Name
          {error && <Error />}
          <input type='text' placeholder='e.g Sthepen King' value={name} onChange={onChangeUsername} />
        </label>
        <label>Email Address
          {error && <Error />}
          <input type='email' placeholder='e.g sthepenking@lorem.com' value={email} onChange={onChangeEmail} />
        </label>
        <label>Phone Number
          {error && <Error />}
          <input type='text' placeholder='e.g +1 234 567 890' value={phone} onChange={onChangePhone} />
        </label>
      </div>
    </div>
  )
}

export default PersonalInfo
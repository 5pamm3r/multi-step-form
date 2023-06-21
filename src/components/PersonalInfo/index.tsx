import React, { useContext, useState } from 'react'
import '../../styles/components/_personalInfo.scss'
import Error from '../Error';
import UserContext from '../../context/userContext';
import { User } from '../../types/userType';

const PersonalInfo: React.FC = () => {
  const {
    state: { error, user },
    actions: { setUser }
  } = React.useContext(UserContext);

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');

  React.useEffect(() => {
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
  }
  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setUser((prevState: User) => ({
      ...prevState,
      email: e.target.value,
    }))
  }
  const onChangePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
    setUser((prevState: User) => ({
      ...prevState,
      phone: e.target.value,
    }))
  }

  return (
    <div className='form'>
      <h2 className='title'>Personal Info</h2>
      <h3 className='subtitle'>Please provide your name, email address and phone number.</h3>
      <div className='inputs__container'>
        <label>Name
          <input type='text' placeholder='e.g Sthepen King' value={name} onChange={onChangeUsername} autoFocus={true} />
        </label>
        <label>Email Address
          <input type='email' placeholder='e.g sthepenking@lorem.com' value={email} onChange={onChangeEmail} />
        </label>
        <label>Phone Number
          <input type='text' placeholder='e.g +1 234 567 890' value={phone} onChange={onChangePhone} />
        </label>
      </div>
      {error && <Error />}
    </div>
  )
}

export default PersonalInfo
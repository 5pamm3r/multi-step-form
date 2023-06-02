import React from 'react'
import '../../styles/layout/_form.scss';

interface Props {
  children: React.ReactNode;
}
const Form: React.FC<Props> = ({ children }) => {
  return (
    <div className='form__container'>
      {children}
    </div>
  )
}

export default Form
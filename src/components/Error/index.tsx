import React from 'react'
import '../../styles/components/_error.scss';

interface Props {
  message: string;
}
const Error: React.FC<Props> = ({ message }) => {
  return (
    <span className='errorMessage' role='alert' aria-live='assertive'> {message}</span>
  )
}

export default Error
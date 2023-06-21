import React from 'react'
import icon from '../../assets/images/icon-thank-you.svg';
import '../../styles/components/_confirm.scss';

const Confirm: React.FC = () => {
  return (
    <div className='Confirm__container'>
      <div className='Img__container'>
        <img src={icon} alt='' />
      </div>
      <h3 className='Subtitle'>Thank you!</h3>
      <p className='Text'>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
    </div>
  )
}

export default Confirm
import React from 'react'
import icon from '../../assets/images/icon-thank-you.svg';
import '../../styles/components/_finishing.scss';

const Finishing: React.FC = () => {
  return (
    <div className='finishing__container'>
      <div className='img__container'>
        <img src={icon} alt='' />
      </div>
      <h3 className='title'>Thank you!</h3>
      <p className='subtitle'>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at <a href='mailto:support@loremgaming.com'>support@loremgaming.com.</a></p>
    </div>
  )
}

export default Finishing
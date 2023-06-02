import React, { useContext } from 'react'

import arcadeImg from '../../assets/images/icon-arcade.svg';
import advancedImg from '../../assets/images/icon-advanced.svg';
import proImg from '../../assets/images/icon-pro.svg';
import '../../styles/components/_plans.scss';
import UserContext from '../../context/userContext';

interface Price {
  [key: string]: number;
}

const Plans: React.FC = () => {
  const {
    state: { planSelected },
    actions: { setPlanSelected }
  } = useContext(UserContext);


  const positionStyle = planSelected.plan === 'monthly' ? 'left' : 'right';
  const prices: Price = planSelected.plan === "monthly" ? {
    arcade: 9,
    advanced: 12,
    pro: 15,
  } : {
    arcade: 90,
    advanced: 120,
    pro: 150,
  }
  const onHandlePlan = (e: React.MouseEvent<HTMLButtonElement>) => {
    const selectedPlan = e.currentTarget.id;
    if (selectedPlan) {
      setPlanSelected({
        name: selectedPlan,
        price: prices[selectedPlan],
        plan: planSelected.plan,
      });
    }
  };
  const onChangePrice = (e: React.MouseEvent<HTMLButtonElement>) => {
    const selectedPrice = e.currentTarget.id;
    if (selectedPrice) {
      setPlanSelected((prevState) => ({
        ...prevState,
        plan: selectedPrice,
      }))
    }
  }

  return (
    <div className='plans__container'>
      <h2 className='title'>Select your plan</h2>
      <h3 className='subtitle'>You have the option of monthly or yearly billing.</h3>
      <div className='buttons__container'>
        <button id='arcade' className={`button ${planSelected.name === 'arcade' ? 'active' : ''}`} onClick={onHandlePlan} data-plan=''>
          <div className='img__container'>
            <img src={arcadeImg} />
          </div>
          <div className='text__container'>
            <span className='text1'>Arcade</span>
            <span className='text2'>{`$${prices.arcade}/${planSelected.plan === 'monthly' ? 'mo' : 'yr'}`}</span>
            <span className='text3'>2 months free</span>
          </div>
        </button>
        <button id='advanced' className={`button ${planSelected.name === 'advanced' ? 'active' : ''}`} onClick={onHandlePlan}>
          <div className='img__container'>
            <img src={advancedImg} />
          </div>
          <div className='text__container'>
            <span className='text1'>Advanced</span>
            <span className='text2'>{`$${prices.advanced}/${planSelected.plan === 'monthly' ? 'mo' : 'yr'}`}</span>
            <span className='text3'>2 months free</span>
          </div>
        </button>
        <button id='pro' className={`button ${planSelected.name === 'pro' ? 'active' : ''}`} onClick={onHandlePlan}>
          <div className='img__container'>
            <img src={proImg} />
          </div>
          <div className='text__container'>
            <span className='text1'>Pro</span>
            <span className='text2'>{`$${prices.pro}/${planSelected.plan === 'monthly' ? 'mo' : 'yr'}`}</span>
            <span className='text3'>2 months free</span>
          </div>
        </button>
      </div>
      <div className='selectedPlans__container'>
        <button id='monthly' className={`monthBtn ${positionStyle}`} onClick={onChangePrice}>Monthly</button>
        <div className='circle__container'><div className={`circle ${positionStyle}`}></div></div>
        <button id='yearly' className={`yearBtn ${positionStyle}`} onClick={onChangePrice}>Yearly</button>
      </div>
    </div>
  )
}

export default Plans
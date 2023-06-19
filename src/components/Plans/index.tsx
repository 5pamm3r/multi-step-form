import React, { useContext } from 'react'

import arcadeImg from '../../assets/images/icon-arcade.svg';
import advancedImg from '../../assets/images/icon-advanced.svg';
import proImg from '../../assets/images/icon-pro.svg';
import '../../styles/components/_plans.scss';
import UserContext from '../../context/userContext';


const Plans: React.FC = () => {
  const {
    state: { planSelected, planPrices, addOnsPrices },
    actions: { setPlanSelected, setAddOns }
  } = useContext(UserContext);


  const positionStyle = planSelected.plan === 'monthly' ? 'left' : 'right';


  const onHandlePlan = (e: React.MouseEvent<HTMLButtonElement>) => {
    const selectedPlan = e.currentTarget.id;
    if (selectedPlan) {
      setPlanSelected({
        name: selectedPlan,
        price: planPrices[selectedPlan],
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
      setAddOns((prevAddOns) =>
        prevAddOns.map((addOn) => ({
          ...addOn,
          price: addOn.plan === 'monthly' ? addOnsPrices[addOn.id] : addOnsPrices[addOn.id],
        }))
      );
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
            <span className='text2'>{`$${planPrices.arcade}/${planSelected.plan === 'monthly' ? 'mo' : 'yr'}`}</span>
            {planSelected.plan === 'yearly' && <span className='text3'>2 months free</span>}
          </div>
        </button>
        <button id='advanced' className={`button ${planSelected.name === 'advanced' ? 'active' : ''}`} onClick={onHandlePlan}>
          <div className='img__container'>
            <img src={advancedImg} />
          </div>
          <div className='text__container'>
            <span className='text1'>Advanced</span>
            <span className='text2'>{`$${planPrices.advanced}/${planSelected.plan === 'monthly' ? 'mo' : 'yr'}`}</span>
            {planSelected.plan === 'yearly' && <span className='text3'>2 months free</span>}
          </div>
        </button>
        <button id='pro' className={`button ${planSelected.name === 'pro' ? 'active' : ''}`} onClick={onHandlePlan}>
          <div className='img__container'>
            <img src={proImg} />
          </div>
          <div className='text__container'>
            <span className='text1'>Pro</span>
            <span className='text2'>{`$${planPrices.pro}/${planSelected.plan === 'monthly' ? 'mo' : 'yr'}`}</span>
            {planSelected.plan === 'yearly' && <span className='text3'>2 months free</span>}
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
import React, { useContext } from 'react'
import UserContext from '../../context/userContext';

import '../../styles/components/_confirm.scss';

interface Props {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}
const Confirm: React.FC<Props> = ({ setStep }) => {
  const {
    state: { planSelected, addOns, total },
    actions: { addToTotal }
  } = useContext(UserContext);

  React.useEffect(() => {
    let count = 0;
    addOns.map(e => {
      if (e.state === true) {
        {
          count += e.price
        }
      }
    })
    addToTotal(planSelected.price, count);
  }, [])

  const onChangePlan = () => {
    setStep(2)
  }
  return (
    <div className='confirm__container'>
      <h2 className='title'>Confirm up</h2>
      <h3 className='subtitle'>Double-check everything looks OK before confirming.</h3>
      <div className='detail__container'>
        <div className='detailPlan__container'>
          <div className='planName__container'>
            <span className='planName'>{planSelected.name} ({planSelected.plan})</span>
            <button className='changeBtn' onClick={onChangePlan}>Change</button>
          </div>
          <div className='planPrice__container'>
            <span className='planPrice'>${planSelected.price}/{planSelected.plan === 'monthly' ? 'mo' : 'yr'}</span>
          </div>
        </div>
        <hr />
        <div className='detailAddOns__container'>
          {addOns.map(e => {
            if (e.state === true) {
              return (
                <div key={e.id} className='detailAddOns'>
                  <span className='detailAddOns-name'>{e.name}</span>
                  <span className='detailAddOns-price'>+${e.price}/{e.plan}</span>
                </div>)
            }
          })}
        </div>
      </div>
      <div className='total__container'>
        <span className='total'>Total (per {planSelected.plan}) </span>
        <span className='total-price'>+${total}/{planSelected.plan === 'monthly' ? 'mo' : 'yr'}</span>
      </div>
    </div>
  )
}

export default Confirm
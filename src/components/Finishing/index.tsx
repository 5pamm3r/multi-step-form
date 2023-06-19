import React, { useContext } from 'react'
import UserContext from '../../context/userContext';

import '../../styles/components/_finishing.scss';

const Finishing: React.FC = () => {
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

  return (
    <div className='finishing__container'>
      <h2 className='title'>Finishing up</h2>
      <h3 className='subtitle'>Double-check everything looks OK before confirming.</h3>
      <div className='detail__container'>
        <div className='detailPlan__container'>
          <div className='planName__container'>
            <span className='planName'>{planSelected.name} ({planSelected.plan})</span>
            <a href='#'>Change</a>
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

export default Finishing
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
      <div className='plans__container'>
        <div className='plan__container'>
          <div className='planName__container'>
            <span>{planSelected.name} ({planSelected.plan})</span>
            <a href='#'>Change</a>
          </div>
          <div className='planPrice__container'>
            <span>${planSelected.price}/{planSelected.plan === 'monthly' ? 'mo' : 'yr'}</span>
          </div>
        </div>
        <hr />
        <div className='addOns__container'>
          {addOns.map(e => {
            if (e.state === true) {
              return (
                <div key={e.id}>
                  <span>{e.name}</span>
                  <span>+${e.price}/{e.plan}</span>
                </div>)
            }
          })}
        </div>
        <div className='total__container'>
          <span>Total (per {planSelected.plan}) </span>
          <span>+${total}/{planSelected.plan}</span>
        </div>
      </div>
    </div>
  )
}

export default Finishing
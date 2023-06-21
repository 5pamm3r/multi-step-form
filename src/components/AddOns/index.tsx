import React, { useContext } from 'react'
import '../../styles/components/_addOns.scss';
import checkmark from '../../assets/images/icon-checkmark.svg'
import UserContext from '../../context/userContext';


const AddOns: React.FC = () => {
  const {
    state: { addOns, planSelected },
    actions: { setAddOns }
  } = useContext(UserContext);

  React.useEffect(() => {
    const updatedAddOns = addOns.map(addOn => ({
      ...addOn,
      plan: planSelected.plan === 'monthly' ? 'mo' : 'yr'
    }));
    setAddOns(updatedAddOns);
  }, []);

  const onChangeAddOns = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btnId = e.currentTarget.id;
    if (btnId) {
      const updateAddOns = addOns.map(addOn => {
        if (addOn.id === btnId) {
          return {
            ...addOn,
            state: !addOn.state,
          }
        }
        return addOn;
      })
      setAddOns(updateAddOns);
    }

  }
  return (
    <div className='addOns__container'>
      <h2 className='title'>Pick Add-ons</h2>
      <h3 className='subtitle'>Add-ons help enhance your gaming experiencie.</h3>
      <div className='buttons__container'>
        <button id='online' className={`button ${addOns[0].state ? 'active' : ''}`} onClick={onChangeAddOns}>
          <div className='img__container'>
            {addOns[0].state && <img src={checkmark} alt='checkmark' />}
          </div>
          <div className='text__container'>
            <span className='text1'>{addOns[0].name}</span>
            <span className='text2'>{addOns[0].description}</span>
          </div>
          <div className='text3__container'>
            <span className='text3'>+${addOns[0].price}/{addOns[0].plan}</span>
          </div>
        </button>
        <button id='storage' className={`button ${addOns[1].state ? 'active' : ''}`} onClick={onChangeAddOns}>
          <div className='img__container'>
            {addOns[1].state && <img src={checkmark} alt='checkmark' />}
          </div>
          <div className='text__container'>
            <span className='text1'>{addOns[1].name}</span>
            <span className='text2'>{addOns[1].description}</span>
          </div>
          <div className='text3__container'>
            <span className='text3'>+${addOns[1].price}/{addOns[1].plan}</span>
          </div>
        </button>
        <button id='profile' className={`button ${addOns[2].state ? 'active' : ''}`} onClick={onChangeAddOns}>
          <div className='img__container'>
            {addOns[2].state && <img src={checkmark} alt='checkmark' />}
          </div>
          <div className='text__container'>
            <span className='text1'>{addOns[2].name}</span>
            <span className='text2'>{addOns[2].description}</span>
          </div>
          <div className='text3__container'>
            <span className='text3'>+${addOns[2].price}/{addOns[2].plan}</span>
          </div>
        </button>
      </div>
    </div>
  )
}

export default AddOns
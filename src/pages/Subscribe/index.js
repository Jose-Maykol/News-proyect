import React, { useState } from 'react'
import './Subscribe.css'
import SubscriptionOption from '../../components/SubscriptionOption'

const Subcribe = () => {

  const [changePlan, setChangePlan] = useState(false);

  const handleChange = () => {
    setChangePlan(!changePlan)
  }

  const premiun = {
    name: 'premium',
    price: '50',
    advantages: ['Ventaja 1', 'Ventaja 2', 'Ventaja 3'],
  }

  const normal = {
    name: 'normal',
    price: '20',
    advantages: ['Ventaja 1', 'Ventaja 2', 'Ventaja 3'],
  }

  return (
    <div className='subcribe-container'>
      <div className='subcribe-content'>
      <h1>NUESTROS PLANES DE SUBCRIPCION</h1>
      <h2>Para que te mantengas mejor informado de todo lo que acontece en el mundo.</h2>
      <div className='suscribe-options'>
        <div className='suscribe-plans'>
          {changePlan 
            ? 
            <SubscriptionOption typeSubscription={normal} />
            :
            <SubscriptionOption typeSubscription={premiun} />
            }
        </div>
        <div className='suscribe-select'>
          <input type="checkbox" id="switch" onChange={handleChange}/>
          <label htmlFor="switch" >Toggle</label>
          <p> Cambiar de plan</p>
        </div>
      </div>
    </div>
      <img src="/img/subcripcion.jpg" alt="subcripcion" />
    </div>
  )
}

export default Subcribe

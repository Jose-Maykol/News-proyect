import React from 'react'
import './Subscribe.css'
import SubscriptionOption from '../../components/SubscriptionOption'

const Subcribe = () => {
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
    <div className='subcribe-content'>
      <h1>NUESTROS PLANES DE SUBCRIPCION</h1>
      <h2>Para que te mantengas mejor informado de todo lo que acontece en el mundo.</h2>
      <div className='suscribe-options'>
        <SubscriptionOption typeSubscription={normal} />
        <SubscriptionOption typeSubscription={premiun} />
      </div>
    </div>
  )
}

export default Subcribe

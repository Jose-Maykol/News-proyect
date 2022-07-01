import React, { useContext } from 'react'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import axios from 'axios'
import { SuscriptionContext } from '../../context/SuscriptionContext'
import './CheckoutForm.css'

const CheckoutForm = () => {
  const stripe = useStripe()
  const elements = useElements()

  const { tittle, cash } = useContext(SuscriptionContext)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    })
    if (!error) {
      const { id } = paymentMethod
      const { data } = await axios.post('http://localhost:3001/payment', {
        id,
        amount: cash,
        description: tittle,
      })
      console.log(data)
    }
    elements.getElement(CardElement).clear()
  }

  const inputStyle = {
    iconColor: '#000000',
    color: '#000000',
    fontWeight: '200',
    fontSize: '1.2rem',
    fontSmoothing: 'antialiased',
    ':-webkit-autofill': {
      color: '#fce883',
    },
    '::placeholder': {
      color: '#157dec',
    },
  }

  return (
    <div className='checkout-container'>
      <form className='checkout-form' onSubmit={handleSubmit}>
        <h2>Subscribete a nuestro sitio</h2>
        <p>Para que te mantengas mejor informado de todo lo que acontece en el mundo.</p>
        <CardElement options={{ style: { base: inputStyle } }} />
        <button className='checkout-submit'>Suscribirse</button>
      </form>
      <img className='checkout-image' src='/img/subcripcion.jpg' alt='comida' />
    </div>
  )
}

export default CheckoutForm

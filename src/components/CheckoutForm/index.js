import React, { useContext, useState } from 'react'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { SuscriptionContext } from '../../context/SuscriptionContext'
import './CheckoutForm.css'
import SuccessButton from '../SuccessButton'
import { AuthContext } from '../../context/AuthContext'


const CheckoutForm = () => {

  const stripe = useStripe()
  const elements = useElements()
  const navigate = useNavigate()

  const { tittle, cash, suscribeToggle } = useContext(SuscriptionContext)
  const { currentUser } = useContext(AuthContext)
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    })
    if (!error) {
      const { id } = paymentMethod
      await axios.post('http://localhost:3001/payment', {
        id,
        amount: cash,
        description: tittle,
      })
      setSuccess(true)
      elements.getElement(CardElement).clear()
      suscribeToggle(currentUser.email)
      setTimeout(() => {
        navigate('/', { replace: true })
      }, "1000")
    }
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
    <div>
      <div className='checkout-container'>
        <form className='checkout-form' onSubmit={handleSubmit}>
          {success ? <SuccessButton /> : null}
          <h2>Subscribete a nuestro plan {tittle}</h2>
          <p>
            Para que te mantengas mejor informado de todo lo que acontece en el mundo tan solo a S/
            {cash}.
          </p>
          <CardElement options={{ style: { base: inputStyle } }} />
          <button className='checkout-submit' id='liveAlertBtn'>
            Suscribirse
          </button>
        </form>
        <img className='checkout-image' src='/img/subcripcion.jpg' alt='comida' />
      </div>
    </div>
  )
}

export default CheckoutForm

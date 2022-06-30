import React from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { stripePromise } from '../../utils/Stripe'
import CheckoutForm from '../../components/CheckoutForm'

const Payment = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  )
}

export default Payment

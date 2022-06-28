import React from 'react'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import axios from 'axios'

const CheckoutForm = () => {

    const stripe = useStripe()
    const elements = useElements()

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement)
        })
        if (!error) {
            const { id } = paymentMethod;
            const { data } = await axios.post('http://localhost:3001/payment', {
                id,
                amount: 10000,
            })
            console.log(data)
        }
        elements.getElement(CardElement).clear()
    }


    return (
        <div style={{ margin: "10rem", border: "1px solid black" }}>
            <form className='form-control' onSubmit={handleSubmit}>
                <input placeholder='Nombre' title='customer' name='customer'></input>
                <CardElement />
                <button className='btn btn-primary'>Submit</button>
            </form>
        </div>
    )
}

export default CheckoutForm
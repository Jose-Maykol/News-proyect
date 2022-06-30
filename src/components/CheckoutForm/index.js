import React, { useContext } from 'react'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import axios from 'axios'
import { SuscriptionContext } from '../../context/SuscriptionContext'

const CheckoutForm = () => {

    const stripe = useStripe()
    const elements = useElements()

    const { tittle, cash } = useContext(SuscriptionContext)

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
                amount: cash,
                description: tittle
            })
            console.log(data)
        }
        elements.getElement(CardElement).clear()
    }


    return (
        <div style={{ margin: "25vh 25vw 25vh 25vw", border: "1px solid black" }}>
            <form className='form-control' onSubmit={handleSubmit}>
                <div className='m-3 border'>
                    <CardElement />
                </div>
                <button className='btn btn-primary my-3'>Buy</button>
            </form>
        </div>
    )
}

export default CheckoutForm
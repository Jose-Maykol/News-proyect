const express = require('express')
const cors = require('cors')
const Stripe = require('stripe')
const app = express()

const stripe = new Stripe(
  'sk_test_51LFPouGLqyJj5K6C87fNvUa2krjvDYTKGNufMF3UOvD4VO9z1AoLhR4hb8R0P55ApuiQgStrhjKcLvfLzxYWhoRz00q0ZegOkS',
)

app.use(cors({ origin: 'http://localhost:3000' }))
app.use(express.json())

app.post('/payment', async (req, res) => {
  try {
    const { id, amount, description } = req.body

    const payment = await stripe.paymentIntents.create({
      amount: amount * 100,
      currency: 'USD',
      description: description,
      payment_method: id,
      confirm: true,
    })
    console.log(payment)
    res.send('Listo')
  } catch (error) {
    console.log(error)
    res.json({ message: error.raw.message })
  }
})

app.listen(3001, () => {
  console.log('http://localhost:3001')
})

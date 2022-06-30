import { loadStripe } from '@stripe/stripe-js'

export const stripePromise = loadStripe(
  'pk_test_51LFPouGLqyJj5K6C2JKC9iRrP7DiHeccOdVzMIX41TZfHy3RXfQCtEBTqJh8M50QfRc6g56IF2GhoJ3OQENFFhE200FaHp8yP9',
)

import React from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import CheckOutForm from '../components/CheckOutForm'
import Price from '../components/Price'

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY)

function Payment() {
  return (
    <div className='w-full min-h-screen bg-white'>
       <div className='max-w-7xl mx-auto'>
        <div>
            <Price />
        </div>
        <div>
        <Elements stripe={stripePromise}>
          <CheckOutForm />
        </Elements>
        </div>
       </div>
    </div>
  )
}

export default Payment
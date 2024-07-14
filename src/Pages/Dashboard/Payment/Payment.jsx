import React from 'react'
import Title from '../../Shared/Title'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import CheckoutForm from './CheckoutForm'

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PAYMENT)

const Payment = () => {
  return (
    <>
    <Title heading={'Payment'}/>
    <Elements stripe={stripePromise}>
        <CheckoutForm/>
    </Elements>
    </>
  )
}

export default Payment
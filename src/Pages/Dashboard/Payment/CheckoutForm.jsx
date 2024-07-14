import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import React, { useState } from 'react'

const CheckoutForm = () => {
    const stripe = useStripe()
    const elements = useElements()
    const [errorMsg, setErrorMsg] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement)
        if (card == null) return

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('payment error', error.message)
            setErrorMsg(error.message)
        } else {
            console.log('payment method', paymentMethod)
        }

    }

    return (
        <form className='p-12 lg:w-1/2 mx-auto ' onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aaa',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        }
                    }
                }} 
                />
            <button className='btn btn-md btn-primary mt-8' disabled={!stripe} type="submit">Pay</button>
            <p className="text-red-600">{errorMsg}</p>
        </form>
    )
}

export default CheckoutForm
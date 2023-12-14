import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import { useEffect, useState } from 'react';

const CheckoutForm = ({price}) => {
    const [cardError, setCardError] = useState("");
    const stripe=useStripe();
    const elements=useElements();

    const [clientSecret,setClientSecret]=useState('');

    useEffect(() => {
      // Create PaymentIntent as soon as the page loads
      fetch("http://localhost:5000/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ price }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data.clientSecret);
          setClientSecret(data.clientSecret)
        }
          );
    }, []);


    const handleSubmit=async(event)=>{
        event.preventDefault();
         if (!stripe || !elements) {
           return;
         }
          const card = elements.getElement(CardElement);
        
         if(card===null){
            return 
         }

         const {error,paymentMethod}= await stripe.createPaymentMethod({
            type:'card',
            card,
         })
        
        if(error){
            console.log(error.message);
            setCardError(error.message);
        }
        else {
            setCardError('');
            console.log(paymentMethod);
        }
         
    }

   

   
    return (
      <>
        <form onSubmit={handleSubmit}>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
          <button
            className="btn btn-primary btn-sm mt-5 hover:bg-blue-950"
            type="submit"
            disabled={!stripe || !clientSecret}
          >
            Pay
          </button>
        </form>
        <div>{cardError && <p className='text-red-700 mt-2'>{cardError}</p>}</div>
      </>
    );
};

export default CheckoutForm;
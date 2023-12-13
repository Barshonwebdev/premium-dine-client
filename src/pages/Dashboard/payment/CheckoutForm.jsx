import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useState } from 'react';

const CheckoutForm = () => {
    const [cardError, setCardError] = useState("");
    const stripe=useStripe();
    const elements=useElements();
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
            disabled={!stripe}
          >
            Pay
          </button>
        </form>
        <div>{cardError && <p className='text-red-700 mt-2'>{cardError}</p>}</div>
      </>
    );
};

export default CheckoutForm;
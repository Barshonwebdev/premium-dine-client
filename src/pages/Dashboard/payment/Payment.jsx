
import SectionTitle from '../../../components/Sectiontitle/SectionTitle';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const Payment = () => {
    
    const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);
    return (
        <div className='w-full px-10'>
            <SectionTitle subHeading={'please pay by your card'} heading={'Payment'}></SectionTitle>
            <Elements stripe={stripePromise}>
                <CheckoutForm></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;
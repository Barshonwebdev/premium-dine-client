
import SectionTitle from '../../../components/Sectiontitle/SectionTitle';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import useCart from '../../../hooks/useCart';

const Payment = () => {
    
    const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);
    const [cart]=useCart();
    const total=cart.reduce((sum,item)=>sum+item.price,0);
    const price=parseFloat(total.toFixed(2));
    console.log(price);
    return (
        <div className='w-full px-10'>
            <SectionTitle subHeading={'please pay by your card'} heading={'Payment'}></SectionTitle>
            <Elements stripe={stripePromise}>
                <CheckoutForm price={price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;
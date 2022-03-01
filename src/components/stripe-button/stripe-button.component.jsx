import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51KYNpvSIfPTV1ZoW8W9Zx7AmiSH4Cw5kq16v1G9CenCuNliLSmAxp5uYxbvoCxT967J8Gb7bjhmK05EgVqOF7f3D00HfeAEpuH';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
           label='Pay Now'
           name='CRWN Clothing Ltd.'
           billingAddress
           shippingAddress
           image="https://svgshare.com/i/CUz.svg"  
           description={`your total is $${price}`}
           amount={priceForStripe}
           panelLabel='Pay Now'
           token={onToken}
           stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;

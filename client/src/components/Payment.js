import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';

import * as actions from '../actions/index';

function Payment(props) {
    const { handleStripeToken } = props;

    return (
        <div>
            <StripeCheckout 
                name="Emaily"
                description='5$ for 5 email credits'
                amount={500}
                token={token => handleStripeToken(token)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
                <button class="px-2 md:px-3 py-1 md:py-2 bg-green-500 text-white hover:bg-green-600 font-medium rounded shadow-lg">
                    Add credits
                </button>
            </StripeCheckout>
        </div>
    );
}

export default connect(null, actions)(Payment);
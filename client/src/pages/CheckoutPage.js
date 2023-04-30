import React from 'react'
import Stripe from "react-stripe-checkout"
import axios from "axios"

export default function CheckoutPage(amount) {
    const baseURL = "http://localhost:8000";

    const handleToken=(totalAmount,token)=>{
        try{
            axios.post(`${baseURL}/v1/payments/pay`,{
                token:token.id,
                amount:totalAmount
            });
        } catch(error){
            console.log(error);
        };
    }

    const tokenHandler=(token)=>{
        handleToken(amount,token);
    }

  return (
    <div>
        <Stripe
            stripeKey='pk_test_51N2AgSSCj3qeyMGvAo1HPe2M6PWZuIxfKTL6skMnncKP8N5V9YQO0EBAarnZIP5FoHmOHV0qEefJCiDPAO01SNTj00UQk6m28P'
            token={tokenHandler}
        />
    </div>
  )
}

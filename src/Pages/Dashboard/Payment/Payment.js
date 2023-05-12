import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import Loading from "../../Home/Shared/Loading/Loading";
import CheckoutForm from "./CheckoutForm";


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);


const Payment = () => {
  const booking = useLoaderData();
  const navigation = useNavigation()
  const { treatment, price, appointmentDate, slot } = booking;
  if(navigation.state === 'loading'){
    return <Loading/>
  }
  return (
    <div >
      {/* <h3 className="text-2xl mb-5 "> Payment</h3> */}
       <div className="text-left  " >
       <h3 className="text-xl  ">Payment for {treatment}</h3>
      <p className="text-xl">
        Please pay <strong>${price}</strong> for your appointment on{" "}
        {appointmentDate} at {slot}
      </p>
       </div>
      <div className="w-96 my-6 pt-6  " >
      <Elements stripe={stripePromise}>
      <CheckoutForm booking={booking} />
    </Elements>
      </div>
    </div>
  );
};

export default Payment;

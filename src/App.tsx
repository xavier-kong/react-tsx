import React, { useState, useContext } from 'react';
import './App.css';

// Details
// Shipping
// Payment

type CheckoutStep = "Details" | "Shipping" | "Payment"

function App() {
  const [ checkoutStep, setCheckoutStep ] = useState<CheckoutStep>("Details")

  return (
    <>
      {checkoutStep === "Details" &&
      <>
        <h2>Details</h2>
        <button type="button" onClick={() => setCheckoutStep("Shipping")}>Next</button>
      </>
      }

      {checkoutStep === "Shipping" &&
      <>
        <h2>Shipping</h2>
        <button type="button" onClick={() => setCheckoutStep("Payment")}>Next</button>
      </>
      }

      {checkoutStep === "Payment" &&
      <>
        <h2>Details</h2>
        <button type="button" onClick={() => setCheckoutStep("Shipping")}>Next</button>
      </>
      }
    </>
  )
};

export default App;

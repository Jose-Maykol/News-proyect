import React from "react";
import './SubscriptionOption.css'

const SubscriptionOption = ({typeSubscription}) => {

  const {name, price, advantages} = typeSubscription; 

  return (
    <div className={`subscription-option-content ${name}`}>
      <h2>PLAN {name}</h2>
      <p>S/. {price} <span>al mes</span></p> 
      <ul>
        {advantages.map(advantage => <li key={advantage}>{advantage}</li>)}
      </ul>
      <button>Subcribete</button>
    </div>
  );
}
 
export default SubscriptionOption;
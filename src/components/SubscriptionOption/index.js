import React, { useContext } from "react";
import './SubscriptionOption.css'
import { Link } from 'react-router-dom'
import { SuscriptionContext } from "../../context/SuscriptionContext";

const SubscriptionOption = ({ typeSubscription }) => {

  const { name, price, advantages } = typeSubscription;
  const { setTittle, setCash } = useContext(SuscriptionContext)

  const sendData = () => {
    setTittle(name)
    setCash(price)
  }

  return (
    <div className={`subscription-option-content ${name}`}>
      <h2>PLAN {name}</h2>
      <p>S/. {price} <span>al mes</span></p>
      <ul>
        {advantages.map(advantage => <li key={advantage}>{advantage}</li>)}
      </ul>
      <Link to='/payment'>
        <button onClick={sendData}>Subcribete</button>
      </Link>
    </div>
  );
}

export default SubscriptionOption;
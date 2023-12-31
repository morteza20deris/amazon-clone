import { doc, serverTimestamp, setDoc } from 'firebase/firestore'
import React, { useEffect } from 'react'
import CurrencyFormat from 'react-currency-format'
import { useNavigate } from "react-router-dom"
import { auth, database } from '../Services/firebase'
import getBasketTotal from '../Services/getBasketTotal'
import globalStore from '../Services/globalStore'
import "./Subtotal.css"
function Subtotal() {
  const kartItems = globalStore(store => store.kartItems)
  const navigate = useNavigate()
  
  useEffect(() => {
    if (kartItems.length<1) {
      document.getElementById("checkoutButton").disabled = true;
    document.getElementById("checkoutButton").style.background = "lightgray";
    document.getElementById("checkoutButton").textContent = "Add items to cart first";
    }
  },[kartItems.length])
  
  const checkoutButtonClickHandler = () => {
    document.getElementById("loader").style.display = ""
    document.getElementById("checkout").style.filter = "blur(5px)"
    setTimeout(() => {
      document.getElementById("loader").style.display = "none"
      document.getElementById("checkout").style.filter = ""
      navigate("/orders")
    }, 5000);
    const test1 = doc(database, "Users",auth.currentUser.email);
    const test2 = doc(test1, "Orders",Math.random()*100000+"")
    setDoc(test2, { cart: kartItems, date: serverTimestamp() })
  }
  return (
    <div className='subtotal'>

      
        
          <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Subtotal ({kartItems.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(kartItems)} 
        // value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button disabled={!auth.currentUser} id="checkoutButton" onClick={checkoutButtonClickHandler}>{auth.currentUser? "Proceed to Checkout":"Please Login First" }</button>
    </div>
  )
}

export default Subtotal
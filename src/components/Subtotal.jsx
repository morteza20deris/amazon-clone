import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from 'react-currency-format'
import globalStore from '../Services/globalStore'
import getBasketTotal from '../Services/getBasketTotal'
function Subtotal() {
  const kartItems = globalStore(store=>store.kartItems)
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

      <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
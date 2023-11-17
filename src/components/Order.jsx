import React from 'react'
import "./Order.css"
import CheckoutProduct from './CheckoutProduct'
import CurrencyFormat from 'react-currency-format';
import getBasketTotal from '../Services/getBasketTotal';
function Order({ order }) {
  return (
      <div className='order'>
          <h2>Order</h2>
          <p>{new Date(order.date?.toDate()).toUTCString()}</p>
          {order?.cart?.map(
              item => <CheckoutProduct
                  count={item.count}
                  id={item.id}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                  title={item.title}
                  key={item.id}
                  ordered={true}
              />
          )}
          <CurrencyFormat
              renderText={value => <h3 className='order__total'>Order Total: {value}</h3>}
              decimalScale={2}
              value={getBasketTotal(order.cart)}
              displayType='text'
              thousandSeparator={true}
              prefix='$' />
    </div>
  )
}

export default Order
import React from 'react'
import "./Checkout.css"
import Subtotal from './Subtotal'
import globalStore from '../Services/globalStore'
import CheckoutProduct from './CheckoutProduct'
function Checkout() {
	const { kartItems } = globalStore()
	const sortedCart = kartItems.sort((a,b)=>a.title.localeCompare(b.title))
  return (
	<div className='checkout'>
		<div className="checkout__left">
			<img className='checkout__ad' src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="checkout Ad" />
			<div className="checkout__title">
				<h2>Your shopping cart Basket</h2>
			</div>
			<div className="checkout__products">
				{sortedCart.map(item=><CheckoutProduct id={item.id} key={item.id} title={item.title} price={item.price} image={item.image} rating={item.rating} count={item.count}/>)}
			</div>

		</div>
		<div className="checkout__right">
			<Subtotal/>
		</div>
	</div>
  )
}

export default Checkout
import React from 'react'
import "./CheckoutProduct.css"
import Star from '@mui/icons-material/Star'
import globalStore from '../Services/globalStore'
import Delete from '@mui/icons-material/Delete'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
function CheckoutProduct({ id, image, title, price, rating, count }) {
	const { removeKartItem, modifyKartItem } = globalStore()

	const addButtonHandler = () => modifyKartItem({ id: id, title: title, price: price, rating: rating, image: image, count: count + 1 })
	

	const removeButtonHandler = () => {
		if (count-1 > 0) {
			modifyKartItem({ id: id, title: title, price: price, rating: rating, image: image, count: count - 1 })
		} else {
			removeKartItem({id:id})
		}
	}
  return (
    <div className='checkoutProduct'>
          <img className='checkoutProduct__image' src={image} alt={title} />
		  <div className="checkoutProduct__info">
			  <p className='checkoutProduct__title'>{title}</p>
			  <p className='checkoutProduct__price'>
				  <small>$</small>
				  <strong>{price}</strong>
			  </p>
			  <div className="checkoutProduct__rating">
				  {Array(rating).fill().map((_,i)=><Star key={i}/>)}
			  </div>
			  <div className="checkoutProduct__controls">
				<Delete onClick={()=>removeKartItem({id:id})} />
				  <RemoveCircleIcon onClick={removeButtonHandler } />
				<input readOnly value={count} className='checkoutProduct__itemCount' type="number" />
				  <AddCircleIcon onClick={addButtonHandler} />
			  </div>
		  </div>
    </div>
  )
}

export default CheckoutProduct
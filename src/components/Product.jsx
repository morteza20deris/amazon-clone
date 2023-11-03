import React from 'react'
import "./Product.css"
import StarIcon from '@mui/icons-material/Star';
export default function Product({title,price,rating,image}) {
  return (
      <div className='product'>
          <div className="product__info">
              <p>{ title}</p>
              <p className='product__price'>
                  <small>$</small>
                  <strong>{price}</strong>
              </p>
              <div className="product__rating">
                  {Array(rating).fill().map((_, i) => {
                      return <p><StarIcon/></p>
                  })}
              </div>
          </div>
          <img src={image} alt={title} />
          <button>Add to Basket</button>
    </div>
  )
}

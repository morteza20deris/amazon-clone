import React from 'react'
import "./Product.css"
import StarIcon from '@mui/icons-material/Star';
import globalStore from '../Services/globalStore';
export default function Product({ id, title, price, rating, image }) {
    const {addItemToKart,kartItems,modifyKartItem} = globalStore();
  return (
      <div className='product'>
          <div className="product__info">
              <p>{ title}</p>
              <p className='product__price'>
                  <small>$</small>
                  <strong>{price}</strong>
              </p>
              <div className="product__rating">
                  {Array(rating).fill().map((_,i) => {
                      return <StarIcon key={i}/>
                  })}
              </div>
          </div>
          <img src={image} alt={title} />
          <button onClick={() => {
              const test = kartItems.filter(item => item.id === id);
              if (test.length) {
                  modifyKartItem({ id: id, title: title, price: price, rating: rating, image: image, count: test[0].count+1 })
              } else {
                  
                  addItemToKart({ id: id, title: title, price: price, rating: rating, image: image, count: 1 })
              }
          }}>Add to Basket</button>
    </div>
  )
}

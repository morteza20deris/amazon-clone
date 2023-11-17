import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { auth, database } from '../Services/firebase'
import "./Orders.css"
import Order from './Order'

function Orders() {
    const [orders, setOrders] = useState([])
    useEffect(() => {
        if (auth.currentUser) {
            const test = query(collection(database,"Users",auth.currentUser.email,"Orders"),orderBy("date","desc"))
            onSnapshot(test, (dataDocs => {
                setOrders(dataDocs.docs.map(item=>item.data()))
            }))
        }
    },[])
    useEffect(() => {
        if (orders.length<1 && auth.currentUser) {
            document.getElementById("loader").style.display = ""
        } else {
            document.getElementById("loader").style.display = "none"
        }
    },[orders.length])
  return (
      <div className='orders'>
          {!auth.currentUser ? <h1 className='login__message'>Please Log In First</h1> : (
              <div className="orders__order">
                {orders?.map((orderItem,index) => <Order key={index} order={orderItem}/>)}
              </div>
          )}
          
    </div>
  )
}

export default Orders
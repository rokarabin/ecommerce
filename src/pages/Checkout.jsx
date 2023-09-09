import React, { useReducer } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

const Checkout = () => {

  const addressReducer = (state, event) => {
    return { ...state, [event.target.name]: event.target.value }
  }

  const [shippingAddress, setShippingAddress] = useReducer(addressReducer, [])
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const proceedToPayment = (e) => {
    e.preventDefault()
   dispatch({type:"SAVE_SHIPPING_INFO",payload:shippingAddress})
    navigate("/payment")


  }
  return (
    <>
      <form className="w-50 mx-auto shadow-lg m-5 p-5">
        <label htmlFor="name">Name</label>
        <input type="text" className='form-control' id='name' name='name' onChange={setShippingAddress} />
        <label htmlFor="street">Street</label>
        <input type="text" className='form-control' id='street' name='street' onChange={setShippingAddress} />
        <label htmlFor="city">City</label>
        <input type="text" className='form-control' id='city' name='city' onChange={setShippingAddress} />
        <label htmlFor="zipcode">Zipcode</label>
        <input type="text" className='form-control' id='zipcode' name='zipcode' onChange={setShippingAddress} />
        <label htmlFor="country">Country</label>
        <input type="text" className='form-control' id='country' name='country' onChange={setShippingAddress} />
        <label htmlFor="phone">Phone</label>
        <input type="text" className='form-control' id='phone' name='phone' onChange={setShippingAddress} />
        <label htmlFor="email">Email</label>
        <input type="text" className='form-control' id='email' name='email' onChange={setShippingAddress} />

        <button onClick={proceedToPayment} className='btn btn-warning w-100' >Proceed to payment</button>
      </form>
    </>
  )
}

export default Checkout
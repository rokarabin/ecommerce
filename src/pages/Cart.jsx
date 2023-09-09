import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'
import Swal from 'sweetalert2'
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';



const Cart = () => {

  const {cart_items}=useSelector(store=>store.cartStore)
  let dispatch=useDispatch()
  let navigate=useNavigate()
  const deleteItem=cart_id=>e=>{
    
    Swal.fire({
      title:'Alert',
      text:"Are you sure,you want to remove form cart?",
      icon:'question',
      showCancelButton:true,
      cancelButtonColor:"#dd1111"
    })
    .then(result=>{
      if(result.isConfirmed){
        dispatch({type:"REMOVE_ITEM",payload: cart_id})
        toast.warning('Your item has been removed from cart.')
      }
    })
  }

  const decreaseQuantity=item=>e=>{
    e.preventDefault()
    let new_quantity=item.quantity-1
    if(new_quantity<=0){
      Swal.fire({
        title:'warning',
        text:"Minimum qunatity reaches.Do you want to remove this item from cart?",
        icon:'question',
        showCancelButton:true,
        cancelButtonColor:"#dd1111"
      })
      .then(result=>{
        if(result.isConfirmed){
          dispatch({type:"REMOVE_ITEM",payload:item.cart_id})
          toast.warning('Your item has been removed from cart.')
        }
        })
    }
    else{
      let updated_item={...item,quantity:new_quantity}
      dispatch({type:"UPDATE_CART",payload:updated_item})
      toast.warning("Quantity has been updated")
    }
  }
  const increaseQuantity=item=>e=>{
    let new_quantity=item.quantity+1
    if(new_quantity>item.stock){
      Swal.fire('Warning','Item is out of stock','warning')
    }
    else{
      let updated_item={...item,quantity:new_quantity}
      dispatch({type:"UPDATE_CART",payload:updated_item})
      toast.warning("Quantity has been updated")

    }

    
    
  }
  const handleCheckout=e=>{
    e.preventDefault()
    let solo_total=cart_items.map(item=>item.quantity*item.price)
    let totalprice=solo_total.reduce((a,c)=>a+c)
    sessionStorage.setItem('total_price',totalprice)
    return navigate('/checkout')
  }
  return (
    <>
    <ToastContainer position='top-left' theme='colored'/>
    <h4 className='text-center'>Cart Items</h4>
    {
      cart_items.length>0 ?
      <>
       <table className='table w-75 text-center table-bordered table-hover table-striped mx-auto align-middle'>
<thead className='table-dark'>
  <tr>
    <td>S.No</td>
    <td>Product Image</td>
    <td>Product name</td>
    <td>Unit Price</td>
    <td>Quantity</td>
    <td>Total Price</td>
    <td>Action</td>
    
  </tr>

</thead>
<tbody>
  
   {
    cart_items.length>0 && 
    cart_items.map((item,i)=>{
      return<tr key={item.cart_id}>
        <td>{i+1}</td>
        <td>
          { 
            <img src={item.images[0]} style={{height:'75px'}}/>
          }
          
        </td>
        <td>{item.title}</td>
        <td>${item.price}</td>
        <td>
          <div className="btn-group ">
            <button className='btn btn-warning ' onClick={decreaseQuantity(item)}>-</button>
          <input type="text"  className='text-center' value={item.quantity} disabled  style={{width:'2.5rem'}}/>
            <button className='btn btn-success'onClick={increaseQuantity(item)}>+</button>
          </div>
          </td>
        

        <td><h4>${item.quantity*item.price}</h4></td>
        <td>
          <button className='btn btn-danger'>
            <i className='bi bi-trash' onClick={deleteItem(item.cart_id)}/>
          </button>
        </td>
       </tr>
    })
   }
 
</tbody>
    </table>
    <button className='btn btn-danger'onClick={handleCheckout}>Proceed to checkout</button></>
   
     
    :
    <div className="alert alert-danger text-center p-5 my-5 h2 w-75 mx-auto">
      No items in cart.
    </div>
      
    }
    
    
    
    
    </>
  )
}

export default Cart
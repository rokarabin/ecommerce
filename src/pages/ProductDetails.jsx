import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify';
 
import Swal from 'sweetalert2';
import Card from '../component/Card';

const ProductDetails = () => {
    let items = useSelector(store => store.itemStore.items)
    let [product, setProduct] = useState({})
    let [relatedProduct, setRelated] = useState([])
    let [quantity,setQuantity ] = useState(1)

    let { id } = useParams()
    let dispatch=useDispatch()
    let navigate=useNavigate()

    useEffect(() => {
        let item = items.find(i => i.id == id)
        setProduct(item)
        let filteredItems = items.filter(i => (i.category == item.category && item.category && i.id != item.id))
        setRelated(filteredItems.slice(0, 4))
    }, [id])
 const add_to_cart=()=>{
   
    let cart_item={
        cart_id:Date.now()+"_"+Math.round(Math.random()*1E9),
        ...product,
        quantity

    }
    // Swal.fire('congrats','your item has been added','success')
    Swal.fire({
        title:'Confirm',
        text:"this item will be added to cart",
    icon:'question',
    showCancelButton:true
}
        )

        .then(result=>{
            if(result.isConfirmed){
                dispatch({type:"ADD-TO-CART",payload: cart_item})
                toast.success("Your item has been added.")

                Swal.fire({
                    title:"Congrats",
                    text:"Your item has been adde to cart",
                    icon:"success",
                    confirmButtonText:"Continue Shopping",
                    showCancelButton:true,
                    cancelButtonText:"Go to cart",
                    cancelButtonColor:'#dd1111'
                })
                .then(result=>{
                    if(result.isConfirmed){
                        navigate('/')
            
                    }
                    else{
                        navigate('/cart')
                    }
                })
            }
        })
   
        

 }




    return (
        <>
        <ToastContainer position='top-right' theme='colored'/>
            <div className="container">
                <div className="alert alert-primary">
                    <h2 className='  text-center ' style={{ backgroundColor: '##96C2DB, #E5EDF1', color: '#178582', fontFamily: 'cursive' }} >{product.title}</h2>
                    <div className="d-flex">
                        <div className=" img w-50 p-3 object-fit-cover " style={{ backgroundColor: '#DDD0C8' }}>
                            {
                                product && product.images &&
                                <img src={product.images[0]} alt={product.title} style={{ height: '300px', width: '80%', margin: 'auto' }} />
                            }
                        </div>
                        <div className="w-50 p-3" style={{ backgroundColor: '#0A1828', color: '#BFA181', fontFamily: 'Brush Script' }}>

                            <h3 style={{ textShadow: '3' }}>Description :</h3>
                            <h4>{product.description}</h4>
                            <h4>Price: ${product.price}</h4>
                            <h4>In Stock: {product.stock}</h4>

                            <h4>Quantity:</h4>
                            <input type='number' min={1} max={product.stock} value={quantity} className='form-control w-25'  onChange={e=>setQuantity(e.target.value)}/>


                        </div>
                    </div>
                <button className='btn btn-warning mt-2 w-100' style={{ color: '#582C12' }} onClick={add_to_cart}> Add to Cart</button>
                </div>

                <h3 className='text-center p-3' >Similar Products:</h3>
                <div className="row row-cols-1 row-cols-lg-4 row-cols-sm-2 row-cols-md-3 g-4">
               
                    {
                        relatedProduct.length > 0 && relatedProduct.map(item => {
                            return <Card item={item} key={item.id} />
                        })
                    }


                </div>
            </div>


        </>
    )
}

export default ProductDetails
import Swal from "sweetalert2"


const initialData={
    cart_items: [],
    shipping_info:{}
}

const cartReducer=(state=initialData,action)=>{
    switch(action.type){
        case "ADD-TO-CART":
            // Swal.fire({
            //     title:"congrats",
            //     text:"Your item has been added to cart",
            //     icon:"success",
            //     timer:3000,
            //     showCloseButton:false,
            //     showConfirmButton:false,
            //     position:"top-end"
                
            // })

            
            return {
                ...state,cart_items:[...state.cart_items, action.payload]}

            case "REMOVE_ITEM":
                return {
                    ...state,cart_items:
                    state.cart_items.filter(items=>items.cart_id !=action.payload)
                }

                case "UPDATE_CART":
                   let  updated_item=action.payload
                    return{
                       ...state, cart_items:
                        state.cart_items.map(item=>
                            item.cart_id == updated_item.cart_id?updated_item:item)
                    }
                    case "SAVE_SHIPPING_INFO":
                        return{...state,
                            shipping_address:action.payload

                        }
            default:
                return state
    }
    return state
}

export default cartReducer
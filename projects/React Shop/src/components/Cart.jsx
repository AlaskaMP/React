import { useId } from "react";
import { CartIcon,ClearCartIcon,RemoveFromCartIcon } from "./icons";
import './Cart.css'
import { useCart } from "../Hooks/useCart";
export function Cart(){
    const cartCheckBoxID=useId()
    const {cart,clearCart,addToCart}=useCart()
    return(
        <>
        <label className='cart-button' htmlFor={cartCheckBoxID}>
          <CartIcon />
        </label>
        <input id={cartCheckBoxID} type='checkbox' hidden />
  
        <aside className='cart'>
          <ul>
            {cart.map(product=>(
              <li key={product.id}>
              <img src={product.thumbnail}/>
              <div>
                  <strong>{product.title}</strong>-${product.price}
              </div>
              <footer>
                  <small>
                       Qty:{product.quantity}
                  </small>
                   <button onClick={()=>(addToCart(product))}>+</button>
              </footer>
              </li>
            ))}
          </ul>
  
          <button onClick={clearCart}>
            <ClearCartIcon />
          </button>
        </aside>
      </>
    )
}
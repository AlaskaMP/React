import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

export function useCart(){
    const {cart,addToCart,checkItemInCart,clearCart,removeFromCart}=useContext(CartContext)

    return {cart,addToCart,checkItemInCart,clearCart,removeFromCart}
}
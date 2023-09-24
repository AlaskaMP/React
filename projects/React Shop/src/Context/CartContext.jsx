import {createContext,useState} from 'react'

export const CartContext=createContext()

export const CartProvider=({children})=>{

    const [cart,setCart]=useState([])
    //cart=[{product},{product}]	
    const addToCart=(product)=>{
        const productIndexInCart=cart.findIndex(item=>item.id===product.id)
        if(productIndexInCart>=0){
            const newCart=structuredClone(cart)
            newCart[productIndexInCart].quantity+=1
            return setCart(newCart)
        }
        setCart(prevState=>([
            ...prevState,{
                ...product,quantity:1
            }
        ]))
    }
    const checkItemInCart=(product)=>{
        return cart.some(item=>item.id===product.id)
    }
    const clearCart=()=>{
        setCart([])
    }
    const removeFromCart=(product)=>{
        setCart(prevState=>prevState.filter(item=> item.id != product.id))
    }

    return(
        <CartContext.Provider value={
            {cart,addToCart,checkItemInCart,clearCart,removeFromCart}
        }>
            {children}
        </CartContext.Provider>
    )
}
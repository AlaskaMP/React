import { useState } from 'react'
import './App.css'
import listOfProducts from './mocks/products.json'
import { Products } from './components/products'
import { Header } from './components/Header'
import { useFilters } from './Hooks/useFilters'
import { Cart } from './components/Cart'
import { CartProvider } from './Context/CartContext'
export function App(){
  const [products,setProducts]=useState(listOfProducts.products)

  const {filterProducts}=useFilters()
  
  const filteredProducts=filterProducts(products)

  return(
    <div className='app'>
      <CartProvider>
        <Header/>
        <Products products={filteredProducts}/>
        <Cart/>
      </CartProvider>
    </div>
  )
}
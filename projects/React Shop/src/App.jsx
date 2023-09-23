import { useState } from 'react'
import './App.css'
import listOfProducts from './mocks/products.json'
import { Products } from './components/products'
export function App(){
  const [products,setProducts]=useState(listOfProducts.products)
  const [filters,setFilters]=useState({
    category:'all',
    minPrince:100
  })
  const filterProducts=(products)=>{
    return products.filter((product)=>{
       return product.price>=filters.minPrince&&(filters.category === 'all'||product.category===filters.category)
      })
  }
  const filteredProducts=filterProducts(products)
  return(
    <div className='app'>
      <header>
        <h1>React Shop</h1>
        <section className='filtros' style={{
          display:'flex',
          gap:'1rem'

        }}>
          <div>
            <label htmlFor='precio'>Precio</label>
            <input type='range' id='precio'></input>
          </div>
          <div>
            <label htmlFor='categoria'>Categoria</label>
            <select id='categoria'>
              <option value='all'>Todas</option>
              <option value='laptops'>Portátiles</option>
              <option value='smartphones'>Celulares</option>
            </select>
          </div>
        </section>
      </header>
      <Products products={filteredProducts}/>
    </div>
  )
}
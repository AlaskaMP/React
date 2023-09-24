import { useState } from 'react'
import './filters.css'
import { useFilters } from '../Hooks/useFilters'
export function Filters(){
    const {filters,setFilters}=useFilters()
  
    const handleChangeMinPrice=(event)=>{
        setFilters(prevState=>({
        ...prevState,
            minPrice:event.target.value
        }))

    }
    const handleChangeCategory=(event)=>{
      setFilters(prevState=>({
            ...prevState,
            category:event.target.value
        }))
    }

    return(
      <section className='filtros'>
          <div>
            <label htmlFor='precio'>Precio desde</label>
            <input   onChange={handleChangeMinPrice}
              type='range'
              id='precio'
              min='0'
              max='1000'
              value={filters.minPrice}
              ></input>
            <p>{filters.minPrice}</p>
          </div>
          <div>
            <label htmlFor='categoria'>Categoria</label>
            <select id='categoria'onChange={handleChangeCategory}>
              <option value='all'>Todas</option>
              <option value='laptops'>Portátiles</option>
              <option value='smartphones'>Celulares</option>
            </select>
          </div>
        </section>
      
    )
}
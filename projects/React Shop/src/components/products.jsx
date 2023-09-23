import './products.css'
import { AddToCartIcon } from './icons'
export function Products({products}){
    return(
        <main className='products'>
            <ul >
                { 
                products.map((value)=>(
                    <li key={value.id}>
                        <h2>{value.title}</h2>
                        <p>${value.price}</p>
                        <img src={value.thumbnail} alt={value.title}></img>
                        <button><AddToCartIcon/></button>
                    </li>   
                    ))
                }
                
            </ul>  
        </main>
    )
  }

import './products.css'
import { AddToCartIcon, RemoveFromCartIcon} from './icons'
import { useCart } from '../Hooks/useCart'
export function Products({products}){
    const {addToCart,checkItemInCart,removeFromCart}=useCart()
    return(
        <main className='products'>
            <ul >
                { 
                products.map((value)=>(
                    <li key={value.id}>
                        <h2>{value.title}</h2>
                        <p>${value.price}</p>
                        <img src={value.thumbnail} alt={value.title}></img>
                        <button onClick={()=>{
                            checkItemInCart(value)?
                            removeFromCart(value):
                            addToCart(value)
                            }}
                            style={{
                                backgroundColor: checkItemInCart(value)?'red':'#202b38'
                            }}
                        >
                            {checkItemInCart(value)?
                                <RemoveFromCartIcon/>:
                                <AddToCartIcon/>
                            }
                        </button>
                    </li>   
                    ))
                }
                
            </ul>  
        </main>
    )
  }

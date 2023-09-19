import { useState,useEffect,useRef} from "react"
export function UseQuery(){
    const [query,setQuery]=useState('')
    const [error,setError]=useState()
    const isFirstInput=useRef(true)
    useEffect(()=>{
      if(isFirstInput.current){
        isFirstInput.current= query === ''
        return
      }
      if(query===''){
        setError('Introduce una pelicula')
        return
      }
      setError(null)
      
      
  
    },[query])
    return {query,setQuery,error,isFirstInput}
  }
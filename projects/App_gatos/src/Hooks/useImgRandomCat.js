import { useState,useEffect } from "react"
export function useImgRandomCat(fact){
    const [img,setImg]=useState()
    useEffect(()=>{
        if(!fact) return
        const firstWord=fact.split(' ')[0]
        console.log(firstWord)
        fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
          .then(response=>response.json())
          .then(data=>setImg(data.url))
      },[fact])
    
    return `https://cataas.com${img}`
}
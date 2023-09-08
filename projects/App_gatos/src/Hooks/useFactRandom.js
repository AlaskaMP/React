import { getRandomCat } from "../Logic/getRandomfact"
import { useEffect, useState } from "react"
export function useFactRandom(){
    const [fact,setFact]=useState()
    const refreshFact=()=>{
        getRandomCat().then(res=>setFact(res))
    }
    useEffect(refreshFact,[])

    return {fact,refreshFact}
}
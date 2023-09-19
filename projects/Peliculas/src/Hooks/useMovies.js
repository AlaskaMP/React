import withResults from '../mocks/withResults.json'
import noResults from '../mocks/noResults.json'
import { useRef, useState } from 'react'
export function useMovies({query}){
  const [responseMovies,setResponseMovies]=useState([])
    const movies=responseMovies.Search
    console.log(movies)
    const mappedMovies=movies?.map(movies=>({
      id:movies.imdbID,
      title:movies.Title,
      poster:movies.Poster,
      year:movies.Year,
      type:movies.Type
    }))
    const getMovies=()=>{
      if(query){
        fetch(`http://www.omdbapi.com/?apikey=a6158c6f&s=${query}`)
        .then(res=>res.json())
        .then(json=>setResponseMovies(json))
      }else{
        setResponseMovies(noResults)
      }
    } 
    return { movies:mappedMovies,getMovies}
  }
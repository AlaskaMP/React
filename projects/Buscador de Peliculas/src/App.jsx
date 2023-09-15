
import { useState } from 'react'
import './App.css'
export function App(){
  const [query,setQuery]=useState('')
  const [movies,setMovies]=useState()
  
  const getMovies=()=>{
    if(query==='') return
    return fetch(`https://www.omdbapi.com/?apikey=a6158c6f&s=${query}`)
    .then(res=>res.json())
    .then(json=>{
      const reponse=json
      console.log(reponse)
      return reponse
    })
    
  }
  const handleSubmit=(event)=>{
    event.preventDefault()
  //aqui hacer el fetch con la función getMovies()
    getMovies()

  }
  //Actualizar el valor del input al estado query
  const handleChange=(event)=>{
    const newQuery=event.target.value;
    setQuery(newQuery)
  }
  return(
    <header className="cabecera"> 
      <h1>Buscador de Peliculas</h1>
      <form className="formulario" onSubmit={handleSubmit}>
        <input onChange={handleChange} value={query} placeholder='Avengers,Matrix,Jason...' />
        <button>Buscar</button>
      </form>
    </header>
  )
}

import { useEffect, useMemo, useRef, useState } from 'react'
import './App.css'
export function App(){
  const [query,setQuery]=useState('')
  const [movies,setMovies]=useState([])
  const previousQuery=useRef('')
  
  const getMovies= useMemo(()=>{
    return async (query)=>{
        if(query===''){
          setMovies([])
          return null
        }
        if(query===previousQuery.current) return null
        console.log('valor de query antes del fetch',query)
        return fetch(`https://www.omdbapi.com/?apikey=a6158c6f&s=${query}`)
        .then(res=>res.json())
        .then(json=>{
          const reponse=json
          console.log('consulta de la api',reponse)
          return reponse
        })
      }
  },[])
  const handleSubmit=(event)=>{
    event.preventDefault()
  //aqui hacer el fetch con la función getMovies()
    getMovies(query).then(response=>{
      if (response !== null){
        setMovies(response)
        previousQuery.current = query
      }
    })
    previousQuery.current=query

  }
  useEffect(()=>{
    console.log('getmovies')
  },[getMovies])
  //Actualizar el valor del input al estado query
  const handleChange=(event)=>{
    const newQuery=event.target.value;
    setQuery(newQuery)
  }
  console.log('Valor de Movies',movies)
  
  return(
    <div className='App'>
      <header className="cabecera"> 
      <h1>Buscador de Peliculas</h1>
      <form className="formulario" onSubmit={handleSubmit}>
        <input onChange={handleChange} value={query} placeholder='Avengers,Matrix,Jason...' />
        <button>Buscar</button>
      </form>
      </header>
      <main className='main'>
        <ul className='movies'>
          {movies.Response==="True"?(
            movies.Search.map((value)=>(
              <li key={value.imdbID}>
                <h3>{value.Title}</h3>
                <p>{value.Year}</p>
                <img src={value.Poster} alt={value.imdbID}></img>
              </li>
            ))

            ):( <p >no hay resultados</p>

          )}
        </ul>
      </main>
    </div>
    
  )
}

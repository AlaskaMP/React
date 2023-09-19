import { ListOfMovies } from './components/listOfMovies'
import { useMovies } from './Hooks/useMovies'
import { UseQuery } from './Hooks/useQuery'

export function App() {
  const {query,setQuery,error,isFirstInput}=UseQuery()
  const {movies,getMovies}=useMovies({query})
  const handleSubmit=(event)=>{
    event.preventDefault()
    getMovies()
  }

  const handleChange=(event)=>{
    setQuery(event.target.value)
    
  }
  
  return(
    <div className='page'>
    <header className="cabecera">
      <h1>Buscador de Películas</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input onChange={handleChange} value={query} placeholder="Avengers,Star Wars,Barbie..." />
        <button>Buscar</button>
      </form>
      {error && <p style={{color:'red'}}>{error}</p>}
    </header>
    <main>
      { !isFirstInput.current &&<ListOfMovies movies={movies}></ListOfMovies>}
    </main>
    </div>
  )
  }

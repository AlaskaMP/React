export function ListOfMovies({movies}){
    const hasMovies=movies?.length>0
    if(hasMovies){
      return <ul className='Lista'>
        {movies.map(movie=>(
        <li className="movie" key={movie.id}>
          <h3>{movie.title}</h3>
          <p>{movie.year}</p>
          <img src={movie.poster} alt={movie.Title} />
        </li>))}
      </ul>
    }
    else return 'No se encontraron Resultados'
      
    
  }
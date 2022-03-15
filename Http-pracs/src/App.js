import React, { useCallback, useEffect, useState } from 'react';
import MoviesList from './components/MoviesList';
import './App.css';
import AddMovie from './components/AddMovie';

function App() {
  const [movieDetails, setMoviesDetails] = useState([]);
  const [isLoding , setLoding] = useState(false);
  const [error, setError] = useState(null);
  let counter = 0;
  // const movieHandler = ()=>{
  //   fetch("https://swapi.dev/api/films/")
  //     .then((responce)=>{
  //       return responce.json();
  //     })
  //     .then((data)=>{
  //       const trasformMovieData = data.results.map((movieData)=>{
  //         return {
  //             id: movieData.episode_id,
  //             title: movieData.title,
  //             openingText: movieData.opening_crawl,
  //             releaseDate: movieData.release_date
  //         };
  //       });
  //       setMoviesDetails(trasformMovieData)
  //     })
 
  const movieHandler = useCallback(async ()=>
  {
    setLoding(true);
    setError(null);
    try{
      //https://react-http-3f97a-default-rtdb.firebaseio.com/
      const responce = await fetch("https://swapi.dev/api/films/");
      if(!responce.ok){
        throw new Error('Something went wrong');
      }
      const data = await responce.json();  
        const trasformMovieData = data.results.map((movieData)=>{
          return {
              id: movieData.episode_id,
              title: movieData.title,
              openingText: movieData.opening_crawl,
              releaseDate: movieData.release_date
          };
        });
      setMoviesDetails(trasformMovieData);
    }
    catch(error){
      console.log(error.message);
      setError(error.message);
    }
    setLoding(false);
  },[]);

   let content = "Found NO movie";
  if(movieDetails.length > 0){
    content =  <MoviesList movies={movieDetails} />
  }
  if(error !== null){
    content = <p>{error}</p>
  }
  if(isLoding){
    content= <p>Loading...</p>
  }
  
  useEffect(()=>{
    console.log(counter+1);
    movieHandler();
  },[movieHandler]);

  const addMovieToDatabase = (movie)=>{
      console.log("app",movie);
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieToDatabase}/>
      </section>
      <section>
        <button onClick={movieHandler}>Fetch Movies</button>
      </section>
      <section>
        {content}
      </section>
    </React.Fragment>
  );
}

export default App;

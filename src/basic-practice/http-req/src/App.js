import React, { useState, useEffect, useCallback } from 'react';
import { FirebaseURL } from './FirebaseURL';

import MoviesList from './components/MoviesList';
import AddMovie from './components/AddMovie';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const addMovieHandler = async movie => {
    setMovies(prevState => {
      return [...prevState, movie];
    });
    try {
      const response = await fetch(`${FirebaseURL}/movies.json`, {
        method: 'POST',
        body: JSON.stringify(movie),
        headers: {
          'Content-type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('Something went wrong with the server');
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`${FirebaseURL}/movies.json`);

      if (!response.ok) {
        throw new Error('Somthing went wrong');
      }

      const data = await response.json();

      const loadedMovies = [];

      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          releaseDate: data[key].releaseDate,
          openingText: data[key].openingText,
        });
      }

      setMovies(loadedMovies);
    } catch (error) {
      setError(error.message);
    }

    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  let content;

  if (!isLoading) {
    if (movies.length > 0) {
      content = <MoviesList movies={movies} />;
    } else if (movies.length === 0) {
      if (!error) {
        content = <p>Found No Movies.</p>;
      } else {
        content = <p>{error}</p>;
      }
    }
  } else {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;

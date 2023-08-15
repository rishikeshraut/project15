import React, { useEffect, useState } from 'react';

const MovieListPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://hoblist.com/api/movieList', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            category: 'movies',
            language: 'kannada',
            genre: 'all',
            sort: 'voting',
          }),
        });

        const data = await response.json();
        setMovies(data.result);
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Movie List</h2>
      {movies.length > 0 ? (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>{movie.name}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MovieListPage;

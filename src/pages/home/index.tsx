import { useEffect, useState } from 'react';
import { getPopularMovies } from '../../api/movieProvider';
import { MovieListResultItem } from '../../types/movieResultType';
import MovieCard from '../../components/movieCard';

const HomeView = () => {
  const [movies, setMovies] = useState<MovieListResultItem[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const movieType = getPopularMovies();
      return movieType;
    };

    const movieResult = fetchMovies();

    movieResult
      .then((result) => {
        setMovies(result.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h1>Popular Movies</h1>
      <div className='grid gap-8'>
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            release_date={movie.release_date}
            backdrop_path={movie.backdrop_path}
          />
        ))}
      </div>
    </>
  );
};

export default HomeView;

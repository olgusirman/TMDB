import { useEffect, useState } from 'react';
import { getPopularMovies } from '../../api/movieProvider';
import { MovieListResultItem } from '../../types/movieResultType';
import MovieList from '../../components/movieList';

const HomeView = () => {
  const [movies, setMovies] = useState<MovieListResultItem[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const movieType = getPopularMovies();
      return movieType;
    };

    fetchMovies()
      .then((result) => {
        setMovies(result.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h1 className='mb-2 text-lg font-bold'>Popular Movies</h1>
      <MovieList results={movies} />
    </>
  );
};

export default HomeView;

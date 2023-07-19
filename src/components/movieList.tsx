import { MovieListResultItem } from '../types/movieResultType';
import MovieCard from './movieCard';

type MovieListProps = {
  results: MovieListResultItem[];
};

const MovieList = ({ results }: MovieListProps) => {
  return (
    <>
      <div className='grid gap-8'>
        {results.map((movie) => (
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
export default MovieList;

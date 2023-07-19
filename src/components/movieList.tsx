import { MovieListResultItem } from '../types/movieResultType';
import MovieCard from './movieCard';

const MovieList = ({ results }: MovieListResultItem[]) => (
  <>
    {results.map((movie: MovieListResultItem) => {
      <MovieCard
        key={movie.id}
        id={movie.id}
        title={movie.title}
        release_date={movie.release_date}
        vote_average={movie.vote_average}
        vote_count={movie.vote_count}
        overview={movie.overview}
        poster_path={movie.poster_path}
        backdrop_path={movie.backdrop_path}
      />;
    })}
  </>
);

export default MovieList;

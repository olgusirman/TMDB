type MovieCardProps = {
  title: string;
  release_date: string;
  backdrop_path: string | null;
};

const MovieCard = ({ title, release_date, backdrop_path }: MovieCardProps) => {
  return (
    <div className='m-4 mb-8 w-auto px-4 mx-auto sm:w-1/2 md:w-1/3 lg:w-1/4'>
      <div className='rounded-lg bg-white shadow-lg'>
        <img
          src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
          alt={title}
          className='rounded-t-lg'
        />
        <div className='p-4'>
          <h2 className='mb-2 text-lg font-semibold'>{title}</h2>
          <p className='mb-2 text-sm text-gray-700'>{release_date}</p>
          <button
            className='flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200'
            type='button'
            aria-label='Like'
          >
            <svg width='20' height='20' fill='currentColor' aria-hidden='true'>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z'
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

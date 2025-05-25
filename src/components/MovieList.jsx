import { useState } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="movie-list-container">
      <div className="search-container mb-4 flex items-center">
        <input
          type="text"
          placeholder="Пошук фільмів..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input flex-1 border rounded px-3 py-1"
        />
      </div>
      
      {filteredMovies.length > 0 ? (
        <div className="movie-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMovies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="no-results text-center text-gray-600">
          <p>Фільми не знайдено. Спробуйте інший запит.</p>
        </div>
      )}
    </div>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(MovieCard.propTypes.movie).isRequired
};

export default MovieList;

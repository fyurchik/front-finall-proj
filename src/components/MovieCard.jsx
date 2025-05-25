import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const formatDate = (dateString) => {
    const options = { 
      weekday: 'long', 
      day: 'numeric', 
      month: 'long', 
      hour: '2-digit', 
      minute: '2-digit' 
    };
    return new Date(dateString).toLocaleDateString('uk-UA', options);
  };

  const rating = (Math.random() * 2 + 3).toFixed(1);
  
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img 
          src={movie.posterUrl} 
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/300x450/6C5CE7/FFFFFF?text=No+Poster';
          }}
        />
        <div className="movie-rating">
          ⭐ {rating}/5
        </div>
      </div>
      <div className="movie-details">
        <h3 className="movie-title">{movie.title}</h3>
        <span className="movie-genre">{movie.genre}</span>
        <p className="movie-description">{movie.description}</p>
        <div className="movie-showtime">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
          </svg>
          <span>{formatDate(movie.showTime)}</span>
        </div>
        <Link to={`/booking/${movie.id}`} className="btn-book">
          Забронювати
        </Link>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    posterUrl: PropTypes.string.isRequired,
    showTime: PropTypes.string.isRequired
  }).isRequired
};

export default MovieCard;

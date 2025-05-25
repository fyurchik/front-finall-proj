import React from 'react';
import { useParams, Link } from 'react-router-dom';
import CinemaHall from '../components/CinemaHall';
import { movies } from '../data/movies';

const Booking = () => {
  const { id } = useParams();
  const movie = movies.find(m => m.id === parseInt(id, 10));

  if (!movie) {
    return <p>Фільм не знайдено. Поверніться на <Link to="/">головну</Link>.</p>;
  }

  return (
    <div>
      <h2>{movie.title}</h2>
      <CinemaHall />
    </div>
  );
};

export default Booking;

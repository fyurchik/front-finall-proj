import React from 'react';
import MovieList from '../components/MovieList';
import { movies } from '../data/movies';

const Home = () => (
  <div>
    <MovieList movies={movies} />
  </div>
);

export default Home;

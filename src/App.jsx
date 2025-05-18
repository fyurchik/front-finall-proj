import { movies } from './data/movies';
import MovieList from './components/MovieList';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Кіноафіша</h1>
        <p>Актуальні фільми у кінотеатрах</p>
      </header>
      <main>
        <MovieList movies={movies} />
      </main>
      <footer className="app-footer">
        <p>© 2025 Кіноафіша. Всі права захищені.</p>
      </footer>
    </div>
  );
}

export default App;
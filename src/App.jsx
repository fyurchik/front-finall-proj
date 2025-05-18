import { movies } from './data/movies';
import MovieList from './components/MovieList';

function App() {
  return (
    <div className="app">
      <div className="floating-element"></div>
      <div className="floating-element"></div>
      
      <header className="app-header">
        <h1>Кіноафіша</h1>
        <p>Відкрийте для себе найкращі кіноновинки цього сезону</p>
      </header>
      
      <main>
        <MovieList movies={movies} />
      </main>
      
      <footer className="app-footer">
        <p>© {new Date().getFullYear()} Кіноафіша Premium</p>
      </footer>
    </div>
  );
}

export default App;
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './screens/Home';
import { MovieDetails } from './screens/MovieDetails';
import { SearchResults } from './screens/SearchResults';
import { FilteredPage } from './screens/FilteredPage';
import { WebGLBackground } from './components/WebGLBackground';

export default function App() {
  return (
    <Router>
      <div className="relative min-h-screen flex flex-col">
        <WebGLBackground />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/movies" element={<FilteredPage title="Movies" type="movie" />} />
            <Route path="/tv-shows" element={<FilteredPage title="TV Shows" type="tv" />} />
            <Route path="/popular" element={<FilteredPage title="New & Popular" />} />
            <Route path="/my-list" element={<FilteredPage title="My List" />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

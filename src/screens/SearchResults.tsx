import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { MOVIES } from '../data';
import { MovieCard } from '../components/MovieCard';
import { motion } from 'motion/react';
import { Search as SearchIcon } from 'lucide-react';

export const SearchResults: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q')?.toLowerCase() || '';

  const results = MOVIES.filter(movie => 
    movie.title.toLowerCase().includes(query) ||
    movie.genres.some(g => g.toLowerCase().includes(query)) ||
    movie.description.toLowerCase().includes(query)
  );

  return (
    <div className="pt-32 px-6 md:px-12 lg:px-20 min-h-screen">
      <div className="flex items-center gap-4 mb-12">
        <SearchIcon size={32} className="text-netflix-red" />
        <h1 className="text-3xl font-bold">
          {query ? `Results for "${query}"` : 'Search Results'}
        </h1>
      </div>

      {results.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {results.map((movie) => (
            <motion.div
              key={movie.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <MovieCard movie={movie} />
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-gray-400">
          <p className="text-xl mb-4">Your search for "{query}" did not have any matches.</p>
          <p className="text-sm">Suggestions:</p>
          <ul className="list-disc list-inside mt-2 text-sm">
            <li>Try different keywords</li>
            <li>Looking for a movie or TV show?</li>
            <li>Try using a genre, like Action, Comedy, or Sci-Fi</li>
          </ul>
        </div>
      )}
    </div>
  );
};

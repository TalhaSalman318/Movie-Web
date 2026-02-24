import React from 'react';
import { useLocation } from 'react-router-dom';
import { MOVIES } from '../data';
import { MovieCard } from '../components/MovieCard';
import { motion } from 'motion/react';

export const FilteredPage: React.FC<{ title: string; type?: 'movie' | 'tv' }> = ({ title, type }) => {
  const movies = type ? MOVIES.filter(m => m.type === type) : MOVIES;

  return (
    <div className="pt-32 px-6 md:px-12 lg:px-20 min-h-screen">
      <h1 className="text-4xl font-black mb-12 tracking-tighter border-l-8 border-netflix-red pl-6">{title}</h1>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        {movies.map((movie) => (
          <motion.div
            key={movie.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <MovieCard movie={movie} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

import React from 'react';
import { motion } from 'motion/react';
import { Play, Info, Star } from 'lucide-react';
import { Movie } from '../data';
import { Link } from 'react-router-dom';

interface HeroProps {
  movie: Movie;
}

export const Hero: React.FC<HeroProps> = ({ movie }) => {
  return (
    <div className="relative h-[80vh] md:h-[90vh] w-full overflow-hidden">
      {/* Backdrop */}
      <div className="absolute inset-0">
        <img
          src={movie.backdrop}
          alt={movie.title}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-netflix-dark via-netflix-dark/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-netflix-dark via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-12 lg:px-20 max-w-4xl pb-20 md:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="px-2 py-0.5 bg-netflix-red text-[10px] font-bold rounded uppercase tracking-widest">VIP Original</span>
            <div className="flex items-center gap-1 text-yellow-400">
              <Star size={14} fill="currentColor" />
              <span className="text-sm font-bold">{movie.rating}</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-3 tracking-tighter text-shadow-lg leading-[0.9]">
            {movie.title}
          </h1>
          
          <p className="text-base md:text-lg text-gray-200 mb-6 max-w-2xl line-clamp-3 text-shadow-lg font-light leading-relaxed">
            {movie.description}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button className="flex items-center gap-2 px-8 py-3 bg-white text-black rounded-md font-bold hover:bg-white/90 transition-all transform hover:scale-105">
              <Play size={20} fill="black" />
              Play Now
            </button>
            <Link 
              to={`/movie/${movie.id}`}
              className="flex items-center gap-2 px-8 py-3 glass text-white rounded-md font-bold hover:bg-white/20 transition-all transform hover:scale-105"
            >
              <Info size={20} />
              More Info
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Plus, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { Movie } from '../data';
import { cn } from '../lib/utils';

interface MovieCardProps {
  movie: Movie;
  size?: 'md' | 'lg';
}

export const MovieCard: React.FC<MovieCardProps> = ({ movie, size = 'md' }) => {
  const widthClass = size === 'lg' ? 'w-56 md:w-72 lg:w-80' : 'w-40 md:w-56 lg:w-64';
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
      whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ scale: 1.05, y: -10, zIndex: 30, rotateY: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={cn("relative flex-none group cursor-pointer", widthClass)}
      style={{ perspective: "1000px" }}
    >
      <Link to={`/movie/${movie.id}`}>
        <div className="relative aspect-[2/3] rounded-xl overflow-hidden mb-3 shadow-2xl ring-1 ring-white/10 group-hover:ring-netflix-red/50 transition-all duration-500">
          <img
            src={movie.poster}
            alt={movie.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          
          {/* VIP Badge */}
          <div className="absolute top-2 left-2 z-10">
            <span className="px-2 py-0.5 bg-netflix-red/90 backdrop-blur-md text-[8px] font-black rounded uppercase tracking-tighter border border-white/20 shadow-lg">
              VIP 4K
            </span>
          </div>

          {/* Hover Overlay - Glassmorphism */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-5 backdrop-blur-[2px]">
            <div className="flex items-center gap-3 text-[10px] text-gray-200 mb-4 font-bold">
              <span className="text-netflix-red">{movie.year}</span>
              <div className="flex items-center gap-1">
                <Star size={10} fill="currentColor" className="text-yellow-400" />
                <span>8.5</span>
              </div>
              <span className="px-1.5 py-0.5 border border-white/30 rounded-sm text-[8px]">{movie.rating}</span>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black hover:bg-netflix-red hover:text-white transition-all transform hover:scale-110 shadow-xl">
                <Play size={18} fill="currentColor" />
              </div>
              <div className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:bg-white/20 transition-all transform hover:scale-110 shadow-xl">
                <Plus size={18} />
              </div>
            </div>
          </div>
        </div>
        
        <div className="px-1 space-y-1">
          <h3 className="text-sm md:text-base font-bold truncate group-hover:text-netflix-red transition-colors tracking-tight">
            {movie.title}
          </h3>
          <div className="flex items-center gap-2">
            <p className="text-[10px] md:text-xs text-gray-400 font-medium">
              {movie.genres.slice(0, 2).join(' • ')}
            </p>
            <span className="w-1 h-1 bg-gray-600 rounded-full" />
            <p className="text-[10px] md:text-xs text-netflix-red font-black uppercase tracking-tighter">
              {movie.type === 'tv' ? 'Series' : 'Movie'}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

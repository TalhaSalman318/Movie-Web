import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Play, Plus, Share2, Star, Clock, Calendar, Globe, MessageSquare, ChevronLeft } from 'lucide-react';
import { motion } from 'motion/react';
import { MOVIES } from '../data';
import { MovieCard } from '../components/MovieCard';

export const MovieDetails: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = MOVIES.find(m => m.id === id) || MOVIES[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="min-h-screen bg-netflix-dark">
      {/* Hero Section */}
      <div className="relative h-[70vh] w-full">
        <div className="absolute inset-0">
          <img
            src={movie.backdrop}
            alt={movie.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-netflix-dark via-netflix-dark/60 to-transparent" />
        </div>

        <button 
          onClick={() => navigate(-1)}
          className="absolute top-24 left-6 md:left-12 flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-bold hover:bg-white/20 transition-all z-20"
        >
          <ChevronLeft size={18} />
          Back
        </button>

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 lg:p-20 flex flex-col md:flex-row items-end gap-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="hidden md:block w-64 aspect-[2/3] rounded-xl overflow-hidden shadow-2xl border border-white/10"
          >
            <img src={movie.poster} alt={movie.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </motion.div>

          <div className="flex-1 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-4xl md:text-6xl font-black mb-2 tracking-tighter">{movie.title} ({movie.year})</h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300">
                <div className="flex items-center gap-1 text-yellow-400">
                  <Star size={16} fill="currentColor" />
                  <span className="font-bold text-white">8.2</span>
                </div>
                <span className="px-2 py-0.5 border border-white/30 rounded text-xs uppercase">{movie.rating}</span>
                <span>{movie.duration}</span>
                <span>{movie.genres.join(' / ')}</span>
              </div>
            </motion.div>

            <div className="flex flex-wrap items-center gap-4">
              <button className="flex items-center gap-2 px-8 py-3 bg-netflix-red text-white rounded-md font-bold hover:bg-red-700 transition-all transform hover:scale-105">
                <Play size={20} fill="white" />
                Watch Now
              </button>
              <button className="flex items-center gap-2 px-6 py-3 glass text-white rounded-md font-bold hover:bg-white/20 transition-all transform hover:scale-105">
                <Play size={20} />
                Watch Trailer
              </button>
              <button className="flex items-center gap-2 px-6 py-3 glass text-white rounded-md font-bold hover:bg-white/20 transition-all">
                <Plus size={20} />
                Add To List
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Details Grid */}
      <div className="px-6 md:px-12 lg:px-20 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-2 space-y-8"
        >
          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold border-l-4 border-netflix-red pl-4">Storyline</h2>
            <p className="text-gray-300 leading-relaxed text-base md:text-lg font-light">
              {movie.description} In Hollywood, Mia and Sebastian are struggling to make it in their respective careers, about which each has extreme passion. Mia is an actress who moved from small town Nevada and dropped out of college five years ago to pursue her dream. She is enamored with old time Hollywood - the movies on which she grew up - but hates the cattle herding feeling of going on auditions, and her belief that she needs to schmooze at social events to get ahead in the business. Sebastian is a jazz pianist, his style of jazz in the vein of traditionalists like Charlie Parker.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold border-l-4 border-netflix-red pl-4">Cast</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {movie.cast.map((person, i) => (
                <div key={i} className="flex items-center gap-3 glass p-2 rounded-xl">
                  <img src={person.image} alt={person.name} className="w-10 h-10 rounded-full object-cover" referrerPolicy="no-referrer" />
                  <div>
                    <p className="text-xs font-bold">{person.name}</p>
                    <p className="text-[10px] text-gray-400">{person.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl md:text-2xl font-bold border-l-4 border-netflix-red pl-4">Similar Movies</h2>
              <button className="text-xs text-netflix-red font-bold hover:underline uppercase tracking-wider">View All</button>
            </div>
            <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
              {MOVIES.filter(m => m.id !== movie.id).map(m => (
                <MovieCard key={m.id} movie={m} />
              ))}
            </div>
          </section>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-6"
        >
          <div className="glass p-5 rounded-2xl space-y-4">
            <h3 className="text-lg font-bold">Details</h3>
            <div className="space-y-3">
              <DetailItem icon={<Calendar size={16}/>} label="Release Date" value="25 December 2016" />
              <DetailItem icon={<Globe size={16}/>} label="Country" value={movie.country} />
              <DetailItem icon={<MessageSquare size={16}/>} label="Language" value={movie.language} />
              <DetailItem icon={<Star size={16}/>} label="Director" value={movie.director} />
              <DetailItem icon={<Star size={16}/>} label="Writers" value={movie.writers.join(', ')} />
            </div>
          </div>

          <div className="glass p-5 rounded-2xl space-y-3">
            <h3 className="text-lg font-bold">Gallery</h3>
            <div className="grid grid-cols-2 gap-2">
              {[1,2,3,4].map(i => (
                <img key={i} src={`https://picsum.photos/seed/gallery-${i}/300/200`} className="rounded-lg hover:scale-105 transition-transform cursor-pointer" referrerPolicy="no-referrer" />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const DetailItem: React.FC<{ icon: React.ReactNode; label: string; value: string }> = ({ icon, label, value }) => (
  <div className="flex items-start gap-3">
    <div className="text-netflix-red mt-1">{icon}</div>
    <div>
      <p className="text-xs text-gray-400 uppercase tracking-wider">{label}</p>
      <p className="text-sm font-medium">{value}</p>
    </div>
  </div>
);

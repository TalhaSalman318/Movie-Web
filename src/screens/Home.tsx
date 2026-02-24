import React, { useRef } from 'react';
import { MOVIES } from '../data';
import { Hero } from '../components/Hero';
import { MovieCard } from '../components/MovieCard';
import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const Home: React.FC = () => {
  const trending = MOVIES;
  const popular = [...MOVIES].reverse();
  const sciFi = MOVIES.filter(m => m.genres.includes('Sci-Fi'));
  const action = MOVIES.filter(m => m.genres.includes('Action'));

  return (
    <div className="pb-10">
      <Hero movie={MOVIES[0]} />
      
      <div className="relative z-10 -mt-20 md:-mt-32 space-y-12 px-6 md:px-12 lg:px-20">
        <Section title="Trending Now" movies={trending} variant="large" />
        <Section title="Top 10 in Your Country" movies={popular.slice(0, 10)} variant="top10" />
        <Section title="Coming Soon" movies={trending.slice(0, 5).reverse()} />
        <Section title="Sci-Fi Masterpieces" movies={sciFi} />
        <Section title="Action Packed" movies={action} />
        <Section title="Popular on Flixero" movies={popular} />
      </div>
    </div>
  );
};

const Section: React.FC<{ title: string; movies: typeof MOVIES; variant?: 'standard' | 'large' | 'top10' }> = ({ title, movies, variant = 'standard' }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.9, 1, 1, 0.9]);
  const rotateX = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [15, 0, 0, -15]);
  const y = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [50, 0, 0, -50]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <motion.section
      ref={sectionRef}
      style={{ opacity, scale, rotateX, y, perspective: "1200px" }}
      className="relative group/section space-y-3"
    >
      <h2 className="text-xl md:text-2xl font-bold tracking-tight border-l-4 border-netflix-red pl-4">{title}</h2>
      
      <div className="relative">
        <button 
          onClick={() => scroll('left')}
          className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 bg-black/60 backdrop-blur-md border border-white/10 rounded-full opacity-0 group-hover/section:opacity-100 transition-all flex items-center justify-center hover:bg-netflix-red hover:border-netflix-red text-white shadow-[0_0_20px_rgba(229,9,20,0.4)] hover:shadow-[0_0_30px_rgba(229,9,20,0.6)]"
        >
          <ChevronLeft size={24} />
        </button>

        <div 
          ref={scrollRef}
          className="flex gap-4 md:gap-6 overflow-x-auto no-scrollbar pb-4 -mx-4 px-4 snap-x snap-mandatory"
        >
          {movies.map((movie, index) => (
            <div key={movie.id} className="snap-start flex items-center">
              {variant === 'top10' && (
                <span className="text-7xl md:text-9xl font-black text-outline-white text-transparent mr-[-15px] md:mr-[-20px] z-10 select-none">
                  {index + 1}
                </span>
              )}
              <MovieCard movie={movie} size={variant === 'large' ? 'lg' : 'md'} />
            </div>
          ))}
        </div>

        <button 
          onClick={() => scroll('right')}
          className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 bg-black/60 backdrop-blur-md border border-white/10 rounded-full opacity-0 group-hover/section:opacity-100 transition-all flex items-center justify-center hover:bg-netflix-red hover:border-netflix-red text-white shadow-[0_0_20px_rgba(229,9,20,0.4)] hover:shadow-[0_0_30px_rgba(229,9,20,0.6)]"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </motion.section>
  );
};

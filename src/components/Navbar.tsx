import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, Bell, User, Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const searchInputRef = useRef<HTMLInputElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const notificationsRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
      if (notificationsRef.current && !notificationsRef.current.contains(event.target as Node)) {
        setIsNotificationsOpen(false);
      }
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        if (!searchQuery) setIsSearchOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [searchQuery]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
      setIsMobileMenuOpen(false);
      setSearchQuery('');
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Movies', path: '/movies' },
    { name: 'TV Shows', path: '/tv-shows' },
    { name: 'New & Popular', path: '/popular' },
    { name: 'My List', path: '/my-list' },
  ];

  const NotificationItem: React.FC<{ title: string; desc: string; time: string }> = ({ title, desc, time }) => (
    <div 
      onClick={() => setIsNotificationsOpen(false)}
      className="flex flex-col gap-1 p-2 hover:bg-white/5 rounded-lg cursor-pointer transition-colors"
    >
      <div className="flex justify-between items-center">
        <span className="text-sm font-bold text-netflix-red">{title}</span>
        <span className="text-[10px] text-gray-500">{time}</span>
      </div>
      <p className="text-xs text-gray-300 line-clamp-2">{desc}</p>
    </div>
  );

  const ProfileLink: React.FC<{ children: React.ReactNode; icon: React.ReactNode; to?: string }> = ({ children, icon, to = "#" }) => (
    <Link 
      to={to} 
      onClick={() => setIsProfileOpen(false)}
      className="flex items-center gap-3 px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
    >
      {icon}
      {children}
    </Link>
  );

  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 py-2 md:px-8 flex items-center justify-between',
        isScrolled ? 'glass-dark py-2' : 'bg-gradient-to-b from-black/80 to-transparent'
      )}
    >
      <div className="flex items-center gap-6">
        <Link to="/" className="text-netflix-red font-black text-2xl tracking-tighter">
          FLIXERO
        </Link>
        
        <div className="hidden lg:flex items-center gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                'text-xs font-medium transition-colors hover:text-netflix-red',
                location.pathname === link.path ? 'text-white font-bold underline underline-offset-4 decoration-netflix-red decoration-2' : 'text-gray-300'
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center gap-4">
          <div ref={searchRef} className="relative flex items-center">
            {isSearchOpen ? (
              <form onSubmit={handleSearchSubmit} className="flex items-center animate-in fade-in slide-in-from-right-4 duration-300">
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Titles, people, genres"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-black/60 border border-white/30 rounded-full px-4 py-1 text-xs focus:outline-none focus:border-netflix-red w-48 text-white"
                />
                <button type="submit" className="absolute right-3 text-gray-400 hover:text-white">
                  <Search size={14} />
                </button>
              </form>
            ) : (
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="text-white hover:text-netflix-red transition-colors"
              >
                <Search size={18} />
              </button>
            )}
          </div>
          
          <div ref={notificationsRef} className="relative">
            <button 
              onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
              className="text-white hover:text-netflix-red transition-colors relative"
            >
              <Bell size={18} />
              <span className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-netflix-red rounded-full" />
            </button>
            {isNotificationsOpen && (
              <div className="absolute top-full right-0 mt-4 w-80 glass-dark rounded-xl p-4 animate-in fade-in zoom-in duration-200">
                <h3 className="font-bold mb-4">Notifications</h3>
                <div className="space-y-4">
                  <NotificationItem title="New Arrival" desc="Stranger Things Season 5 is now streaming!" time="2h ago" />
                  <NotificationItem title="VIP Exclusive" desc="Watch the latest 4K remaster of Interstellar." time="5h ago" />
                </div>
              </div>
            )}
          </div>
          
          <div ref={profileRef} className="relative">
            <div 
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="w-8 h-8 rounded bg-netflix-red flex items-center justify-center cursor-pointer overflow-hidden hover:ring-2 ring-white transition-all"
            >
               <User size={18} />
            </div>
            {isProfileOpen && (
              <div className="absolute top-full right-0 mt-4 w-48 glass-dark rounded-xl py-2 animate-in fade-in zoom-in duration-200">
                <ProfileLink icon={<User size={14}/>}>Account</ProfileLink>
                <ProfileLink icon={<Bell size={14}/>}>Settings</ProfileLink>
                <div className="h-px bg-white/10 my-2" />
                <ProfileLink icon={<X size={14}/>}>Sign Out</ProfileLink>
              </div>
            )}
          </div>
        </div>
        
        <button 
          className="lg:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 glass-dark border-t border-white/10 p-6 flex flex-col gap-4 lg:hidden animate-in slide-in-from-top duration-300">
          <form onSubmit={handleSearchSubmit} className="relative mb-4">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-netflix-red"
            />
            <Search size={18} className="absolute right-3 top-2.5 text-gray-400" />
          </form>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn(
                "text-lg font-medium transition-colors",
                location.pathname === link.path ? "text-netflix-red" : "text-gray-300 hover:text-white"
              )}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center gap-6 pt-4 border-t border-white/10">
            <button onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2 text-gray-300 hover:text-white">
              <Bell size={20} />
            </button>
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-2 text-gray-300 hover:text-white"
            >
              <div className="w-8 h-8 rounded bg-netflix-red flex items-center justify-center">
                <User size={18} />
              </div>
              <span>Profile</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};


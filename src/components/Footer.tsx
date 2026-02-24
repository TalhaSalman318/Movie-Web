import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-netflix-dark border-t border-white/5 py-10 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="space-y-6">
          <Link to="/" className="text-netflix-red font-black text-2xl tracking-tighter">
            FLIXERO
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed">
            The ultimate VIP experience for movie lovers. Stream the latest blockbusters and originals in stunning 4K quality.
          </p>
          <div className="flex items-center gap-4">
            <SocialIcon icon={<Facebook size={20} />} />
            <SocialIcon icon={<Twitter size={20} />} />
            <SocialIcon icon={<Instagram size={20} />} />
            <SocialIcon icon={<Youtube size={20} />} />
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Platform</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li><FooterLink>Browse Movies</FooterLink></li>
            <li><FooterLink>TV Shows</FooterLink></li>
            <li><FooterLink>VIP Originals</FooterLink></li>
            <li><FooterLink>New Releases</FooterLink></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Support</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li><FooterLink>Help Center</FooterLink></li>
            <li><FooterLink>Terms of Service</FooterLink></li>
            <li><FooterLink>Privacy Policy</FooterLink></li>
            <li><FooterLink>Contact Us</FooterLink></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Newsletter</h4>
          <p className="text-gray-400 text-sm mb-4">Subscribe to get the latest updates on new releases.</p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Your email" 
              className="bg-white/5 border border-white/10 rounded-md px-4 py-2 text-sm flex-1 focus:outline-none focus:border-netflix-red transition-colors"
            />
            <button className="bg-netflix-red text-white px-4 py-2 rounded-md text-sm font-bold hover:bg-red-700 transition-colors">
              Join
            </button>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-xs">
        <p>© 2026 Flixero. All rights reserved.</p>
        <div className="flex gap-6">
          <Link to="#" className="hover:text-white transition-colors">Cookie Preferences</Link>
          <Link to="#" className="hover:text-white transition-colors">Corporate Information</Link>
        </div>
      </div>
    </footer>
  );
};

const FooterLink: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Link to="#" className="hover:text-netflix-red transition-colors">{children}</Link>
);

const SocialIcon: React.FC<{ icon: React.ReactNode }> = ({ icon }) => (
  <Link to="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-netflix-red transition-all">
    {icon}
  </Link>
);

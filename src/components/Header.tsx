import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar } from 'lucide-react';
import { CTAButton } from './CTAButton';
import { INSTAGRAM_LINK, SPOTIFY_PODCAST_LINK } from '../data/config';

/* Spotify SVG icon */
const SpotifyIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
  </svg>
);

/* Instagram SVG icon */
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Método', href: '#metodo' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full h-[76px] transition-all duration-300 ${
        isScrolled
          ? 'bg-brand-bg/95 backdrop-blur-md border-b border-brand-teal/20 shadow-soft-sm'
          : 'bg-brand-bg/90 backdrop-blur-sm border-b border-brand-teal/15'
      }`}
    >
      <div className="max-w-7xl mx-auto h-full px-3 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#inicio" className="flex items-center gap-2 sm:gap-2.5 group text-left flex-shrink-0">
          <div className="w-8 h-8 rounded-lg bg-brand-teal/15 text-brand-teal flex items-center justify-center group-hover:scale-105 group-hover:bg-brand-teal group-hover:text-white transition-all duration-300 shadow-xs flex-shrink-0">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 12C10.5 8.5 7 5 3 6.5C1.5 7.5 1 10 2.5 12C4 14 7 14.5 10 13.5C9 15.5 8 18 9 20C9.5 21 11 21.5 12 20C13 21.5 14.5 21 15 20C16 18 15 15.5 14 13.5C17 14.5 20 14 21.5 12C23 10 22.5 7.5 21 6.5C17 5 13.5 8.5 12 12Z" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-brand-dark group-hover:text-brand-teal transition-colors leading-tight">
              Erica Luena
            </span>
            <span className="font-sans text-[10px] sm:text-[11px] uppercase tracking-widest text-brand-teal font-medium -mt-0.5">
              Psicóloga Clínica
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1">
          {/* Internal page links */}
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="font-sans text-sm font-medium text-brand-dark/80 hover:text-brand-teal transition-colors px-3 py-1.5 rounded-lg hover:bg-brand-teal/8 relative after:content-[''] after:absolute after:bottom-0.5 after:left-3 after:right-3 after:h-0.5 after:bg-brand-teal after:w-0 hover:after:w-[calc(100%-24px)] after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}

          {/* Divider */}
          <span className="w-px h-5 bg-brand-teal/20 mx-1" />

          {/* Podcast tab — Spotify green */}
          <a
            href={SPOTIFY_PODCAST_LINK}
            target="_blank"
            rel="noopener noreferrer"
            title="Podcast: Comportamento e Vida Moderna"
            className="group flex items-center gap-1.5 font-sans text-sm font-medium px-3 py-1.5 rounded-lg text-[#1DB954] hover:bg-[#1DB954]/10 transition-all duration-200"
          >
            <SpotifyIcon className="w-3.5 h-3.5 flex-shrink-0" />
            <span>Podcast</span>
          </a>

          {/* Instagram tab — pink gradient on hover */}
          <a
            href={INSTAGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram @ericaluenapsi"
            className="group flex items-center gap-1.5 font-sans text-sm font-medium px-3 py-1.5 rounded-lg text-pink-500 hover:bg-pink-500/10 transition-all duration-200"
          >
            <InstagramIcon className="w-3.5 h-3.5 flex-shrink-0" />
            <span>Instagram</span>
          </a>
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex items-center">
          <CTAButton href="#cta-final" variant="primary" className="!px-6 !py-2.5 text-sm">
            Agendar Sessão
          </CTAButton>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-2 sm:gap-3">
          <CTAButton href="#cta-final" variant="primary" className="!px-3 sm:!px-4 !py-1.5 sm:!py-2 text-xs">
            Agendar
          </CTAButton>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 sm:p-2 text-brand-dark hover:text-brand-teal focus:outline-none"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-brand-bg/98 backdrop-blur-lg border-b border-brand-teal/15 px-6 py-6 space-y-4 shadow-xl animate-fadeIn">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-sans text-base font-medium text-brand-dark hover:text-brand-teal py-2.5 px-3 rounded-lg hover:bg-brand-teal/8 border-b border-brand-teal/5 transition-colors"
              >
                {link.label}
              </a>
            ))}

            {/* Mobile external links */}
            <div className="pt-2 flex flex-col space-y-1 border-t border-brand-teal/10">
              <a
                href={SPOTIFY_PODCAST_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2.5 font-sans text-base font-medium text-[#1DB954] py-2.5 px-3 rounded-lg hover:bg-[#1DB954]/10 transition-colors"
              >
                <SpotifyIcon className="w-4 h-4 flex-shrink-0" />
                <span>Podcast no Spotify</span>
              </a>
              <a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2.5 font-sans text-base font-medium text-pink-500 py-2.5 px-3 rounded-lg hover:bg-pink-500/10 transition-colors"
              >
                <InstagramIcon className="w-4 h-4 flex-shrink-0" />
                <span>Instagram @ericaluenapsi</span>
              </a>
            </div>

            <div className="pt-2">
              <CTAButton href="#cta-final" variant="primary" fullWidth icon={<Calendar className="w-4 h-4" />}>
                Agendar Sessão
              </CTAButton>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};


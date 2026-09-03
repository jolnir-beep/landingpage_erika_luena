import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar } from 'lucide-react';
import { CTAButton } from './CTAButton';

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
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#inicio" className="flex flex-col group text-left">
          <span className="font-serif text-2xl font-bold tracking-tight text-brand-dark group-hover:text-brand-teal transition-colors">
            Erica Luena
          </span>
          <span className="font-sans text-[11px] uppercase tracking-widest text-brand-teal font-medium -mt-1">
            Psicóloga Clínica
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="font-sans text-sm font-medium text-brand-dark/80 hover:text-brand-teal transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-teal hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex items-center">
          <CTAButton href="#cta-final" variant="primary" className="!px-6 !py-2.5 text-sm">
            Agendar Sessão
          </CTAButton>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-3">
          <CTAButton href="#cta-final" variant="primary" className="!px-4 !py-2 text-xs">
            Agendar
          </CTAButton>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-brand-dark hover:text-brand-teal focus:outline-none"
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
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-sans text-base font-medium text-brand-dark hover:text-brand-teal py-2 border-b border-brand-teal/5"
              >
                {link.label}
              </a>
            ))}
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

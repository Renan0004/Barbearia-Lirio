"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#contato', label: 'Contato' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-secondary-dark/95 backdrop-blur-lg py-2 shadow-lg' : 'bg-transparent py-4'
      }`}
      role="navigation"
      aria-label="Menu principal"
      onKeyDown={handleKeyPress}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="#inicio" 
            className="text-2xl font-bold text-gradient"
            aria-label="Ir para o início"
          >
            LÍRIO
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8" role="menubar">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-primary transition-colors"
                role="menuitem"
                aria-label={`Ir para seção ${link.label}`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="https://wa.me/5541987203046"
              target="_blank"
              className="btn-primary flex items-center gap-2"
              role="menuitem"
              aria-label="Agendar horário pelo WhatsApp"
            >
              <FaWhatsapp size={20} aria-hidden="true" />
              <span>Agendar</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-primary transition-colors p-2"
            aria-expanded={isOpen}
            aria-label="Menu"
            aria-controls="mobile-menu"
          >
            {isOpen ? <FaTimes size={24} aria-hidden="true" /> : <FaBars size={24} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            id="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-secondary-dark/95 backdrop-blur-lg shadow-lg md:hidden"
            role="menu"
            aria-label="Menu mobile"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-300 hover:text-primary transition-colors py-2"
                  role="menuitem"
                  aria-label={`Ir para seção ${link.label}`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="https://wa.me/5541987203046"
                target="_blank"
                onClick={() => setIsOpen(false)}
                className="btn-primary flex items-center justify-center gap-2"
                role="menuitem"
                aria-label="Agendar horário pelo WhatsApp"
              >
                <FaWhatsapp size={20} aria-hidden="true" />
                <span>Agendar Horário</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
} 
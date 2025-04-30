'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
<nav
  className={`fixed top-0 w-full z-50 transition-colors duration-600 ease-in-out ${
    scrolled ? 'bg-white shadow-md' : 'bg-transparent'
  }`}
>

      <div className="flex justify-between items-center max-w-7xl mx-auto p-1">
       <Link href="/" className="flex items-center">
          <Image
            src="/kingbus.png" // Make sure the image is inside the `public` folder
            alt="Kingkus"
            width={150} // Adjust the width as needed
            height={50} // Adjust the height as needed
            className="object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-gray-800 font-medium">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <Link href="/buses" className="hover:text-blue-600">Bus</Link>
          <Link href="/about" className="hover:text-blue-600">About</Link>
          <Link href="/contact" className="hover:text-blue-600">Contact</Link>
        </div>

        {/* Mobile Hamburger Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-800 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${menuOpen ? 'block' : 'hidden'} bg-sky-200/50 p-4`}
      >
        <div className="space-y-4 text-gray-800 font-medium">
          <Link href="/" className="block hover:text-blue-600">Home</Link>
          <Link href="/buses" className="block hover:text-blue-600">Bus</Link>
          <Link href="/about" className="block hover:text-blue-600">About</Link>
          <Link href="/contact" className="block hover:text-blue-600">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

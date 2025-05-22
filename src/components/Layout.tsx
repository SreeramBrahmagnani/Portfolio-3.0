import React, { useEffect, useState } from 'react';
import { MoonIcon, SunIcon, MenuIcon, XIcon } from 'lucide-react';
import { Link } from 'react-scroll';
interface LayoutProps {
  children: React.ReactNode;
  toggleTheme: () => void;
  currentTheme: string;
}
export function Layout({
  children,
  toggleTheme,
  currentTheme
}: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [themeTransition, setThemeTransition] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleThemeToggle = () => {
    setThemeTransition(true);
    toggleTheme();
    setTimeout(() => setThemeTransition(false), 600); // Duration matches animation
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const navItems = [{
    name: 'Home',
    to: 'hero'
  }, {
    name: 'About',
    to: 'about'
  }, {
    name: 'Experience',
    to: 'experience'
  }, {
    name: 'Education',
    to: 'education'
  }, {
    name: 'Skills',
    to: 'skills'
  }, {
    name: 'Projects',
    to: 'projects'
  }, {
    name: 'Achievements',
    to: 'achievements'
  }, {
    name: 'Contact',
    to: 'contact'
  }];
  return <>
      <header
        className="fixed top-0 w-full z-50 transition-all duration-300 shadow-md"
        style={{
          background: currentTheme === 'dark'
            ? 'rgba(24, 36, 60, 0.65)' // dark glass for dark mode
            : 'rgba(255, 255, 255, 0.35)', // whitish glass for light mode
          backdropFilter: 'blur(18px) saturate(180%)',
          WebkitBackdropFilter: 'blur(18px) saturate(180%)',
          borderBottom: currentTheme === 'dark'
            ? '1px solid rgba(24, 36, 60, 0.35)'
            : '1px solid rgba(255, 255, 255, 0.35)',
        }}
      >
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link
            to="hero"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className={`text-xl font-bold cursor-pointer transition-colors duration-300 ${
              currentTheme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
          >
            Portfolio
          </Link>
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => <Link key={item.name} to={item.to} spy={true} smooth={true} offset={-70} duration={500} className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors cursor-pointer">
                {item.name}
              </Link>)}
            <button onClick={handleThemeToggle} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors" aria-label="Toggle theme">
              {currentTheme === 'dark' ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
            </button>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={handleThemeToggle} className="p-2 mr-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors" aria-label="Toggle theme">
              {currentTheme === 'dark' ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
            </button>
            <button onClick={toggleMenu} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors" aria-label="Toggle menu">
              {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </nav>
        {/* Mobile Menu */}
        {isMenuOpen && <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
            <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
              {navItems.map(item => <Link key={item.name} to={item.to} spy={true} smooth={true} offset={-70} duration={500} className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors cursor-pointer" onClick={() => setIsMenuOpen(false)}>
                  {item.name}
                </Link>)}
            </div>
          </div>}
      </header>
      <main>
        {children}
      </main>
    </>;
}
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

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
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const links = [
    { name: 'Demo', path: '/demo' },
    { name: 'Pitch Deck', path: '/pitch-deck' },
    { name: 'Why Us', path: '/why-us' },
    { name: 'Future', path: '/future' },
  ];

  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const navVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.header
      className={`fixed w-full z-40 ${
        scrolled ? 'glass-card bg-dark/80' : 'bg-transparent'
      } transition-all duration-300`}
      initial="hidden"
      animate="visible"
      variants={headerVariants}
    >
      <div className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
        <Link to="/" className="relative z-50">
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-primary to-accent p-2 rounded-lg">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path 
                  d="M12 4L3 8L12 12L21 8L12 4Z" 
                  stroke="#FFFFFF" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
                <path 
                  d="M3 16L12 20L21 16" 
                  stroke="#FFFFFF" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                />
                <path 
                  d="M3 12L12 16L21 12" 
                  stroke="#FFFFFF" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                />
              </svg>
            </div>
            <span className="text-xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              BestzDeal
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-all duration-300 ${
                location.pathname === link.path
                  ? 'text-accent'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/get-started"
            className="neo-button"
          >
            Sign Up Now
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden z-50 relative w-10 h-10 flex items-center justify-center"
          aria-label="Toggle Menu"
        >
          <div className="relative">
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                isOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white mt-1.5 transition-all duration-300 ${
                isOpen ? 'opacity-0' : ''
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white mt-1.5 transition-all duration-300 ${
                isOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden fixed inset-0 bg-dark glass-card pt-20 px-4"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={navVariants}
          >
            <nav className="flex flex-col items-center space-y-6 py-10">
              {links.map((link) => (
                <motion.div key={link.path} variants={itemVariants}>
                  <Link
                    to={link.path}
                    className={`text-lg font-medium ${
                      location.pathname === link.path
                        ? 'text-accent'
                        : 'text-white/70'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={itemVariants}>
                <Link
                  to="/get-started"
                  className="neo-button mt-4 inline-block"
                >
                  Sign Up Now
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;

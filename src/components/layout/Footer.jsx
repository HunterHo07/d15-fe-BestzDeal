import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  const footerLinks = [
    {
      title: 'Pages',
      links: [
        { name: 'Home', path: '/' },
        { name: 'Demo', path: '/demo' },
        { name: 'Pitch Deck', path: '/pitch-deck' },
        { name: 'Why Us', path: '/why-us' },
        { name: 'Future', path: '/future' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'How It Works', path: '/demo' },
        { name: 'For Sellers', path: '/get-started' },
        { name: 'For Buyers', path: '/get-started' },
        { name: 'API Docs', path: '/future' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', path: '/why-us' },
        { name: 'Careers', path: '/future' },
        { name: 'Blog', path: '/future' },
        { name: 'Contact', path: '/get-started' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', path: '/get-started' },
        { name: 'Terms of Service', path: '/get-started' },
        { name: 'Cookie Policy', path: '/get-started' },
      ],
    },
  ];

  const footerAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.footer
      className="bg-dark border-t border-white/10 pt-16 pb-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerAnimation}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {footerLinks.map((section, index) => (
            <motion.div key={index} variants={itemAnimation}>
              <h3 className="text-white font-display text-lg mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      to={link.path}
                      className="text-white/60 hover:text-white text-sm transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div 
          variants={itemAnimation}
          className="glass-card p-8 rounded-2xl flex flex-col md:flex-row justify-between items-center gap-6 mb-12"
        >
          <div className="text-center md:text-left">
            <h3 className="text-xl font-display mb-2">Stay in the loop</h3>
            <p className="text-white/60 text-sm">Sign up to our newsletter for updates and exclusive offers</p>
          </div>
          <div className="w-full md:w-auto flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-white/10 border border-white/20 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="neo-button whitespace-nowrap">Subscribe</button>
          </div>
        </motion.div>

        <motion.div 
          variants={itemAnimation}
          className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-primary to-accent p-1.5 rounded-lg">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            <span className="text-lg font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              BestzDeal
            </span>
          </div>
          <div className="flex space-x-4">
            {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
              <a 
                key={social} 
                href="#" 
                className="text-white/60 hover:text-white transition-colors duration-300 w-8 h-8 flex items-center justify-center rounded-full glass-card"
                aria-label={`Visit our ${social} page`}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path 
                    d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            ))}
          </div>
          <p className="text-white/40 text-sm">© {new Date().getFullYear()} BestzDeal. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;

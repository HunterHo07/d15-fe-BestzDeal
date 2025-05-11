import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { pitchDeckData } from '../data/dummyData';

const PitchDeckPage = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  // For parallax effects
  const progressOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  
  return (
    <div className="pt-24 pb-20 overflow-hidden" ref={containerRef}>
      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-24">
        <motion.div 
          className="text-center max-w-4xl mx-auto relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-primary/20 blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-accent/20 blur-3xl"></div>
          
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 relative z-10">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              BestzDeal Pitch Deck
            </span>
          </h1>
          <p className="text-white/70 text-lg mb-8 relative z-10">
            Our mission is to flip the traditional shopping model on its head, 
            creating a marketplace where <span className="text-primary font-semibold">shops find you</span>, 
            not the other way around.
          </p>
          
          <div className="relative flex items-center justify-center mb-8 z-10">
            <motion.div 
              className="absolute inset-0 border-2 border-primary/30 rounded-full"
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.2, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute inset-0 border-2 border-accent/30 rounded-full"
              animate={{ 
                scale: [1.1, 1, 1.1],
                opacity: [0.3, 0.2, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <div className="glass-card text-2xl p-6 rounded-full">
              🚀
            </div>
          </div>
          
          <motion.p 
            className="text-xl font-display mb-10 relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {pitchDeckData.vision}
          </motion.p>
        </motion.div>
      </section>
      
      {/* Problem & Solution Section */}
      <section className="py-20 bg-dark/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-display font-bold mb-8 relative">
                <span className="text-primary">#</span> The Problem
                <div className="absolute -z-10 -top-10 -left-10 w-40 h-40 rounded-full bg-primary/10 blur-3xl"></div>
              </h2>
              
              <div className="space-y-6">
                {[
                  "Buyers waste hours searching across multiple sites for the best deals",
                  "Small and local sellers struggle to find direct leads and compete with big brands",
                  "Traditional marketplaces favor big sellers, making local options hard to find",
                  "No true reverse marketplace where buyer demand drives seller competition"
                ].map((problem, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="glass-card p-2 rounded-lg mt-1">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 8V12M12 16H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <p className="text-lg text-white/80">{problem}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-display font-bold mb-8 relative">
                <span className="text-accent">#</span> Our Solution
                <div className="absolute -z-10 -top-10 -left-10 w-40 h-40 rounded-full bg-accent/10 blur-3xl"></div>
              </h2>
              
              <div className="space-y-6">
                {[
                  "Buyers post specific product requests with their budget and preferences",
                  "Verified sellers see these requests and compete by offering their best deals",
                  "Buyers select from multiple offers in one place, saving time and money",
                  "Local and boutique sellers get direct access to interested, ready-to-buy customers"
                ].map((solution, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="glass-card p-2 rounded-lg mt-1 text-accent">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <p className="text-lg text-white/80">{solution}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Market & Traction Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                Market Opportunity & Traction
              </span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              BestzDeal is targeting a massive market with early signs of strong demand.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div 
                className="glass-card p-8 rounded-xl mb-8"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-xl font-display font-medium mb-6">Market Size</h3>
                
                <div className="space-y-6">
                  {Object.entries(pitchDeckData.marketSize).map(([key, value], index) => (
                    <motion.div 
                      key={key}
                      className="flex flex-col"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white/60 uppercase text-sm">
                          {key === 'tam' ? 'Total Addressable Market' : 
                           key === 'sam' ? 'Serviceable Available Market' : 
                           'Serviceable Obtainable Market'}
                        </span>
                        <span className="font-medium text-lg">{value}</span>
                      </div>
                      <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-primary to-accent"
                          initial={{ width: 0 }}
                          whileInView={{ width: key === 'tam' ? '100%' : key === 'sam' ? '40%' : '10%' }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div 
                className="glass-card p-8 rounded-xl"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h3 className="text-xl font-display font-medium mb-6">Business Model</h3>
                
                <div className="space-y-4">
                  {pitchDeckData.businessModel.map((item, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="glass-card p-1.5 rounded-md text-primary">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <p className="text-white/80">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {[
                { label: "Early Sign-ups", value: pitchDeckData.traction.users, icon: "👥" },
                { label: "Interested Sellers", value: pitchDeckData.traction.sellers, icon: "🏪" },
                { label: "Avg. Savings", value: pitchDeckData.traction.avgSavings, icon: "💰" },
                { label: "Time Saved", value: pitchDeckData.traction.timeReduction, icon: "⏱️" }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="glass-card p-6 rounded-xl text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-2xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-white/60 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Team & Investment Section */}
      <section className="py-20 bg-gradient-to-b from-dark to-dark/70">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Team Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-display font-bold mb-8 relative">
                <span className="text-primary">#</span> Our Team
                <div className="absolute -z-10 -top-10 -left-10 w-40 h-40 rounded-full bg-primary/10 blur-3xl"></div>
              </h2>
              
              <div className="space-y-6">
                {pitchDeckData.team.map((member, index) => (
                  <motion.div 
                    key={index}
                    className="glass-card p-4 rounded-xl flex items-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-2xl">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">{member.name}</h3>
                      <p className="text-primary text-sm mb-1">{member.title}</p>
                      <p className="text-white/60 text-xs">{member.background}</p>
                    </div>
                  </motion.div>
                ))}
                
                <motion.div 
                  className="glass-card p-4 rounded-xl flex items-center gap-4 border border-dashed border-white/20"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-2xl">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Join Our Team</h3>
                    <p className="text-white/60 text-sm">We're hiring passionate people to help us reshape retail</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            
            {/* Investment Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-display font-bold mb-8 relative">
                <span className="text-accent">#</span> Investment Opportunity
                <div className="absolute -z-10 -top-10 -left-10 w-40 h-40 rounded-full bg-accent/10 blur-3xl"></div>
              </h2>
              
              <motion.div 
                className="glass-card p-8 rounded-xl mb-6"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex justify-between items-center mb-8">
                  <div>
                    <div className="text-white/60 text-sm">Round</div>
                    <div className="text-xl font-medium">{pitchDeckData.investment.round}</div>
                  </div>
                  <div>
                    <div className="text-white/60 text-sm">Raising</div>
                    <div className="text-xl font-medium text-accent">{pitchDeckData.investment.raising}</div>
                  </div>
                  <div>
                    <div className="text-white/60 text-sm">Valuation Cap</div>
                    <div className="text-xl font-medium">{pitchDeckData.investment.valuation}</div>
                  </div>
                </div>
                
                <h3 className="text-lg font-medium mb-4">Use of Funds</h3>
                
                <div className="space-y-4">
                  {pitchDeckData.investment.use.map((item, index) => (
                    <motion.div 
                      key={index}
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white/80">{item}</span>
                        <span className="text-white/60">{parseInt(item.match(/\d+/)[0])}%</span>
                      </div>
                      <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-primary to-accent"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${parseInt(item.match(/\d+/)[0])}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              <div className="text-center">
                <Link to="/get-started" className="neo-button">
                  Contact Us About Investment
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Ready to be part of the shopping revolution?
            </h2>
            <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
              Whether you're a buyer looking for better deals, a seller seeking direct leads, 
              or an investor who sees our potential, we want to connect with you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/get-started" className="neo-button">
                Sign Up Now
              </Link>
              <Link to="/why-us" className="px-8 py-3 rounded-full border border-white/30 hover:border-white transition-all duration-300">
                Why Choose Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PitchDeckPage;

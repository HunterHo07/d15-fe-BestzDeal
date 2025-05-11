import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { roadmapPhases } from '../data/dummyData';

const FutureRoadmapPage = () => {
  const [activePhase, setActivePhase] = useState(0);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  // Progress bar for scroll position
  const progressBarWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  
  return (
    <div className="pt-24 pb-20 overflow-hidden" ref={containerRef}>
      {/* Fixed progress bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent z-50"
        style={{ width: progressBarWidth }}
      />
      
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
              Future Roadmap
            </span>
          </h1>
          <p className="text-white/70 text-lg mb-8 relative z-10">
            Our vision for BestzDeal extends far beyond our current MVP. 
            Here's how we plan to revolutionize shopping over the next two years.
          </p>
        </motion.div>
      </section>
      
      {/* Timeline Navigation */}
      <section className="py-10 mb-16">
        <div className="container mx-auto px-4">
          <div className="relative flex justify-between items-center max-w-4xl mx-auto">
            <div className="absolute left-0 right-0 h-1 bg-white/10"></div>
            {roadmapPhases.map((phase, index) => (
              <motion.button
                key={index}
                className={`w-10 h-10 rounded-full flex items-center justify-center relative z-10 ${
                  index === activePhase ? 'bg-gradient-to-r from-primary to-accent text-white' : 'bg-white/10 text-white/50'
                }`}
                onClick={() => setActivePhase(index)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {index + 1}
                <motion.div 
                  className={`absolute bottom-full mb-2 text-sm font-medium whitespace-nowrap ${
                    index === activePhase ? 'opacity-100' : 'opacity-0'
                  }`}
                  initial={false}
                  animate={{ opacity: index === activePhase ? 1 : 0, y: index === activePhase ? 0 : 10 }}
                >
                  {phase.phase.split(':')[0]}
                </motion.div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Phase Details */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Phase Info */}
            <motion.div
              key={activePhase}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.5 }}
            >
              <div className="glass-card p-8 rounded-xl relative">
                <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-primary/10 blur-3xl"></div>
                
                <div className="mb-6">
                  <div className="text-xs text-white/60 uppercase tracking-wider mb-1">Timeline</div>
                  <div className="text-lg font-medium">{roadmapPhases[activePhase].timeline}</div>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                  {roadmapPhases[activePhase].phase}
                </h2>
                
                <div className="mb-6">
                  <div className="text-sm text-white/60 mb-3">Primary Goal:</div>
                  <p className="text-lg">{roadmapPhases[activePhase].goal}</p>
                </div>
                
                <div>
                  <div className="text-sm text-white/60 mb-3">Key Features:</div>
                  <ul className="space-y-3">
                    {roadmapPhases[activePhase].features.map((feature, index) => (
                      <motion.li 
                        key={index} 
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 13L9 17L19 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-8 flex space-x-4">
                  {activePhase > 0 && (
                    <button 
                      onClick={() => setActivePhase(activePhase - 1)}
                      className="px-4 py-2 rounded-full border border-white/20 hover:border-white/40 transition-all duration-300 flex items-center gap-2"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>Previous Phase</span>
                    </button>
                  )}
                  
                  {activePhase < roadmapPhases.length - 1 && (
                    <button 
                      onClick={() => setActivePhase(activePhase + 1)}
                      className="neo-button flex items-center gap-2"
                    >
                      <span>Next Phase</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
            
            {/* Phase Visualization */}
            <div className="relative h-[500px] glass-card rounded-xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  key={activePhase}
                  className="text-center p-8"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="relative mb-8">
                    {/* Animated orbits around the phase number */}
                    <motion.div 
                      className="w-40 h-40 rounded-full border border-primary/30 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                      animate={{ 
                        rotate: 360,
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                    <motion.div 
                      className="w-60 h-60 rounded-full border border-accent/20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                      animate={{ 
                        rotate: -360,
                      }}
                      transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                    
                    {/* Floating features around the central circle */}
                    {roadmapPhases[activePhase].features.map((feature, index) => {
                      const angle = (index * (360 / roadmapPhases[activePhase].features.length)) * (Math.PI / 180);
                      const radius = 120;
                      const x = Math.cos(angle) * radius;
                      const y = Math.sin(angle) * radius;
                      
                      return (
                        <motion.div
                          key={index}
                          className="absolute w-max max-w-[150px] glass-card p-2 rounded-lg text-xs text-center"
                          style={{
                            top: `calc(50% + ${y}px)`,
                            left: `calc(50% + ${x}px)`,
                            transform: 'translate(-50%, -50%)',
                          }}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: 0.1 + (index * 0.1) }}
                        >
                          {feature.split(' ').slice(0, 3).join(' ')}
                        </motion.div>
                      );
                    })}
                    
                    {/* Central phase number */}
                    <div className="w-24 h-24 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-4xl font-bold z-10 relative mx-auto">
                      {activePhase + 1}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-display font-bold mb-3">
                    {roadmapPhases[activePhase].phase.split(':')[0]}
                  </h3>
                  <div className="text-xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent mb-3">
                    {roadmapPhases[activePhase].timeline}
                  </div>
                  <p className="text-white/70">
                    {roadmapPhases[activePhase].goal}
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Development Strategy */}
      <section className="py-20 bg-dark/50 mt-20">
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
                Development Strategy
              </span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Our approach to building BestzDeal focuses on rapid iteration, user feedback, and continuous improvement.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "User-Centered Design",
                description: "Every feature we build starts with understanding user needs through research, testing, and feedback.",
                icon: "👥"
              },
              {
                title: "Agile Development",
                description: "Two-week sprints with regular releases ensure we're constantly delivering value and iterating based on what works.",
                icon: "🔄"
              },
              {
                title: "Data-Driven Decisions",
                description: "We track key metrics for every feature to make decisions based on user behavior, not assumptions.",
                icon: "📊"
              }
            ].map((strategy, index) => (
              <motion.div 
                key={index}
                className="glass-card p-8 rounded-xl h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4">{strategy.icon}</div>
                <h3 className="text-xl font-display font-bold mb-3">{strategy.title}</h3>
                <p className="text-white/70">{strategy.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Upcoming Features Showcase */}
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
              Exciting Features Coming Soon
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              A sneak peek at some of the innovative features we're most excited to launch.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "AI Deal Matcher",
                description: "Our AI analyzes your request and instantly matches you with the most likely sellers to fulfill it, reducing response time.",
                timeline: "Phase 4",
                icon: "🤖"
              },
              {
                title: "Secure In-App Payments",
                description: "Complete transactions safely within the app with buyer protection and seller verification.",
                timeline: "Phase 3",
                icon: "🔒"
              },
              {
                title: "Real-Time Chat",
                description: "Negotiate directly with sellers in real-time to customize your deal or ask questions about the product.",
                timeline: "Phase 2",
                icon: "💬"
              },
              {
                title: "Mobile Apps",
                description: "Native iOS and Android apps with push notifications for new offers and messages.",
                timeline: "Phase 4",
                icon: "📱"
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                className="glass-card rounded-xl overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="p-6 border-b border-white/10 flex justify-between items-center">
                  <h3 className="text-xl font-display font-bold">{feature.title}</h3>
                  <div className="text-3xl">{feature.icon}</div>
                </div>
                <div className="p-6">
                  <p className="text-white/70 mb-4">{feature.description}</p>
                  <div className="flex justify-between items-center">
                    <div className="text-sm">
                      <span className="text-white/50">Coming in:</span>
                      <span className="ml-2 font-medium bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                        {feature.timeline}
                      </span>
                    </div>
                    <div className="glass-card py-1 px-3 rounded-full text-xs">
                      {feature.timeline === 'Phase 2' ? 'Q3-Q4 2025' :
                       feature.timeline === 'Phase 3' ? 'Q1-Q2 2026' : 'Q3 2026+'}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Early Access */}
      <section className="py-20 relative mt-12">
        <div className="absolute inset-0 glass-card z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto glass-card p-12 rounded-2xl border border-white/10">
            <motion.div 
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-display font-bold mb-4">
                Want Early Access to New Features?
              </h2>
              <p className="text-white/70">
                Join our beta program to test upcoming features before they're released to the public.
              </p>
            </motion.div>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-white/70 mb-1">Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 focus:outline-none focus:border-primary"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm text-white/70 mb-1">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 focus:outline-none focus:border-primary"
                    placeholder="Your email"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm text-white/70 mb-1">Interested In</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 focus:outline-none focus:border-primary">
                  <option value="">Select features you're interested in</option>
                  <option value="messaging">In-app Messaging</option>
                  <option value="payments">Secure Payments</option>
                  <option value="ai">AI Deal Matcher</option>
                  <option value="mobile">Mobile Apps</option>
                  <option value="all">All Features</option>
                </select>
              </div>
              
              <div className="flex items-center gap-2">
                <input type="checkbox" id="buyer" className="rounded bg-white/5 border-white/10 text-primary focus:ring-primary" />
                <label htmlFor="buyer" className="text-sm text-white/70">I'm a buyer</label>
                
                <input type="checkbox" id="seller" className="ml-4 rounded bg-white/5 border-white/10 text-primary focus:ring-primary" />
                <label htmlFor="seller" className="text-sm text-white/70">I'm a seller</label>
              </div>
              
              <button type="submit" className="neo-button w-full">
                Join Beta Program
              </button>
            </form>
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
              Be part of the shopping revolution from day one
            </h2>
            <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
              Get in early and help shape the future of BestzDeal. Early adopters receive lifetime benefits and priority access to new features.
            </p>
            <Link to="/get-started" className="neo-button text-lg px-10 py-4">
              Sign Up Now
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FutureRoadmapPage;

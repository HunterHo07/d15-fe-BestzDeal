import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { demoSteps } from '../data/dummyData';

const DemoPage = () => {
  const [activeStep, setActiveStep] = useState(1);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  
  return (
    <div className="pt-24 pb-20">
      <section className="container mx-auto px-4 mb-16">
        <motion.div 
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              How BestzDeal Works
            </span>
          </h1>
          <p className="text-white/70 text-lg mb-4">
            BestzDeal flips the traditional shopping model on its head. Here's how we make 
            shopping faster, easier, and more competitive for you.
          </p>
        </motion.div>
      </section>
      
      {/* Interactive Demo Section */}
      <section className="py-16 relative bg-dark" ref={containerRef}>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"></div>
        
        <div className="container mx-auto px-4">
          {/* Step Indicators */}
          <div className="flex justify-center mb-16">
            <div className="relative flex items-center">
              {demoSteps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <button
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-xl transition-all duration-300 ${
                      step.id === activeStep
                        ? 'bg-primary text-white scale-125 z-10'
                        : step.id < activeStep
                        ? 'bg-primary/20 text-primary'
                        : 'bg-white/10 text-white/50'
                    }`}
                    onClick={() => setActiveStep(step.id)}
                  >
                    <span>{step.icon}</span>
                  </button>
                  
                  {index < demoSteps.length - 1 && (
                    <div 
                      className="w-16 md:w-24 h-0.5 relative"
                      style={{ 
                        background: index < activeStep - 1 
                          ? 'linear-gradient(to right, var(--primary), var(--accent))' 
                          : 'rgba(255, 255, 255, 0.1)' 
                      }}
                    >
                      {index === activeStep - 2 && (
                        <motion.div 
                          className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-accent"
                          initial={{ width: 0 }}
                          animate={{ width: '100%' }}
                          transition={{ duration: 1 }}
                        />
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Demo Step Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
            {demoSteps.map((step) => (
              <motion.div 
                key={step.id}
                className={`${step.id === activeStep ? 'block' : 'hidden'}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-display font-bold mb-4">
                  <span className="text-accent mr-2">{step.id}.</span> {step.title}
                </h2>
                <p className="text-white/70 text-lg mb-6">{step.description}</p>
                
                <div className="flex gap-3 mt-8">
                  {step.id > 1 && (
                    <button 
                      onClick={() => setActiveStep(step.id - 1)}
                      className="px-6 py-2 rounded-full border border-white/30 hover:border-white flex items-center gap-2 transition-all duration-300"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>Previous</span>
                    </button>
                  )}
                  
                  {step.id < demoSteps.length ? (
                    <button 
                      onClick={() => setActiveStep(step.id + 1)}
                      className="neo-button flex items-center gap-2"
                    >
                      <span>Next</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  ) : (
                    <Link to="/" className="neo-button flex items-center gap-2">
                      <span>Try It Now</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
            
            {/* Step Visualization */}
            <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden glass-card order-first md:order-last">
              {demoSteps.map((step) => (
                <motion.div 
                  key={step.id}
                  className={`absolute inset-0 ${step.id === activeStep ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                  initial={false}
                  animate={{ 
                    opacity: step.id === activeStep ? 1 : 0,
                    scale: step.id === activeStep ? 1 : 0.95
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent"></div>
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="glass-card p-6 rounded-xl max-w-xs text-center transform -translate-y-8">
                      <div className="text-4xl mb-3">{step.icon}</div>
                      <h3 className="text-xl font-medium mb-2">{step.title}</h3>
                      <p className="text-white/70 text-sm">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Interactive Demo */}
      <section className="py-20 container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Interactive Demo
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Try our interactive demo to see how BestzDeal works in action. 
            Follow the steps below to experience the platform.
          </p>
        </motion.div>
        
        <div className="glass-card p-8 rounded-xl">
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
            <div className="flex items-center justify-center h-full bg-dark/50">
              <div className="text-center">
                <div className="text-6xl mb-4">📽️</div>
                <h3 className="text-2xl font-display font-medium mb-3">Demo Video</h3>
                <p className="text-white/70 mb-6 max-w-md mx-auto">
                  Watch a quick walkthrough of how to use BestzDeal to save time and money
                </p>
                <button className="neo-button flex items-center gap-2 mx-auto">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 3L19 12L5 21V3Z" fill="currentColor" />
                  </svg>
                  <span>Watch Demo</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-dark to-dark/70">
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
                Frequently Asked Questions
              </span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Get answers to common questions about how BestzDeal works for both buyers and sellers.
            </p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "How does BestzDeal make money?",
                answer: "BestzDeal is free for buyers. We make money through a small transaction fee when a deal is completed and through premium seller subscriptions that provide additional features and visibility."
              },
              {
                question: "Is BestzDeal secure for payments?",
                answer: "In our MVP, payments are handled directly between buyers and sellers. In Phase 3, we'll introduce secure in-app payments with buyer protection and escrow services for high-value transactions."
              },
              {
                question: "How do you verify sellers?",
                answer: "All sellers go through a basic verification process including email, phone, and business information verification. In future phases, we'll introduce additional verification tiers including business license and identity verification."
              },
              {
                question: "What happens if I get a bad deal?",
                answer: "Our platform includes a rating system for both buyers and sellers. In Phase 3, we'll introduce a formal buyer protection program to ensure you're satisfied with every purchase."
              },
              {
                question: "Is BestzDeal available worldwide?",
                answer: "We're starting in select U.S. cities and will expand based on demand. Phase 4 includes international expansion. Sign up to be notified when we launch in your area!"
              }
            ].map((faq, index) => (
              <motion.div 
                key={index}
                className="glass-card rounded-xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <details className="group">
                  <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                    <h3 className="text-lg font-medium pr-8">
                      {faq.question}
                    </h3>
                    <svg className="transform group-open:rotate-180 transition-transform duration-300" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </summary>
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-white/70">
                      {faq.answer}
                    </p>
                  </div>
                </details>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/get-started" className="neo-button">
              Ready to Try BestzDeal?
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DemoPage;

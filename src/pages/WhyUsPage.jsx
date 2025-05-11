import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { competitorData, testimonials } from '../data/dummyData';

const WhyUsPage = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  // Create a progress bar that shows scroll position
  const progressBarWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  
  // Features comparison data
  const featureComparison = [
    {
      feature: "Buyer-Centric Approach",
      bestzDeal: "Buyers post what they want, sellers compete",
      others: "Sellers post what they have, buyers must search"
    },
    {
      feature: "Time Savings",
      bestzDeal: "85% less time spent searching",
      others: "Hours spent comparing across multiple sites"
    },
    {
      feature: "Price Savings",
      bestzDeal: "12% average savings below retail",
      others: "Inconsistent; often pay retail or higher"
    },
    {
      feature: "Local Business Support",
      bestzDeal: "Equal visibility for small, local businesses",
      others: "Dominated by large retailers and brands"
    },
    {
      feature: "Personalized Offers",
      bestzDeal: "Every offer is tailored to your specific request",
      others: "Generic listings not customized to your needs"
    }
  ];
  
  return (
    <div className="pt-24 pb-20 overflow-hidden" ref={containerRef}>
      {/* Fixed progress bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent z-50"
        style={{ width: progressBarWidth }}
      />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-16">
        <motion.div 
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              Why Choose BestzDeal?
            </span>
          </h1>
          <p className="text-white/70 text-lg mb-8">
            Unlike traditional marketplaces, BestzDeal puts buyers in control,
            making shopping faster, cheaper, and more personalized.
          </p>
        </motion.div>
      </section>
      
      {/* Key Differentiators Section */}
      <section className="py-20 bg-dark/50">
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
                How We're Different
              </span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              BestzDeal flips the traditional shopping model, creating a truly
              buyer-centric marketplace where sellers compete for your business.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Save Time",
                description: "Post once, receive multiple competitive offers. No more endless searching and comparing.",
                icon: "⏱️",
                color: "from-primary to-accent"
              },
              {
                title: "Save Money",
                description: "When sellers compete directly for your business, you get better prices than retail.",
                icon: "💰",
                color: "from-accent to-secondary"
              },
              {
                title: "Discover Local",
                description: "Find local shops you never knew existed that can meet your needs faster and better.",
                icon: "🏪",
                color: "from-secondary to-primary"
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                className="glass-card p-8 rounded-xl text-center relative overflow-hidden h-full"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br opacity-20 blur-2xl" style={{background: `linear-gradient(${feature.color})`}}></div>
                
                <motion.div 
                  className="text-4xl mb-4 relative z-10"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-display font-bold mb-3 relative z-10">{feature.title}</h3>
                <p className="text-white/70 relative z-10">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Comparison Table Section */}
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
              BestzDeal vs. The Competition
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              See how we stack up against traditional marketplaces and deal-finding sites.
            </p>
          </motion.div>
          
          <div className="overflow-x-auto glass-card rounded-xl">
            <table className="w-full min-w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="px-6 py-4 text-left text-sm font-medium text-white/70">Feature</th>
                  {competitorData.map((competitor, index) => (
                    <th 
                      key={index} 
                      className={`px-6 py-4 text-left text-sm font-medium ${
                        competitor.name === "BestzDeal" 
                          ? "text-accent" 
                          : "text-white/70"
                      }`}
                    >
                      {competitor.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/10">
                  <td className="px-6 py-4 text-sm text-white/70">Founded</td>
                  {competitorData.map((competitor, index) => (
                    <td 
                      key={index} 
                      className={`px-6 py-4 text-sm ${
                        competitor.name === "BestzDeal" 
                          ? "text-white font-medium" 
                          : "text-white/60"
                      }`}
                    >
                      {competitor.founded}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-white/10">
                  <td className="px-6 py-4 text-sm text-white/70">Business Model</td>
                  {competitorData.map((competitor, index) => (
                    <td 
                      key={index} 
                      className={`px-6 py-4 text-sm ${
                        competitor.name === "BestzDeal" 
                          ? "text-white font-medium" 
                          : "text-white/60"
                      }`}
                    >
                      {competitor.model}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-white/10">
                  <td className="px-6 py-4 text-sm text-white/70">Pricing Comparison</td>
                  {competitorData.map((competitor, index) => (
                    <td 
                      key={index} 
                      className={`px-6 py-4 text-sm ${
                        competitor.name === "BestzDeal" 
                          ? "text-white font-medium" 
                          : "text-white/60"
                      }`}
                    >
                      {competitor.priceComparison}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-white/10">
                  <td className="px-6 py-4 text-sm text-white/70">User Experience</td>
                  {competitorData.map((competitor, index) => (
                    <td 
                      key={index} 
                      className={`px-6 py-4 text-sm ${
                        competitor.name === "BestzDeal" 
                          ? "text-white font-medium" 
                          : "text-white/60"
                      }`}
                    >
                      <div className="flex items-center">
                        <span className="mr-2">{competitor.userExperience}/5</span>
                        <div className="w-24 bg-white/10 h-2 rounded-full overflow-hidden">
                          <motion.div 
                            className={`h-full ${
                              competitor.name === "BestzDeal"
                                ? "bg-gradient-to-r from-primary to-accent"
                                : "bg-white/30"
                            }`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${(competitor.userExperience / 5) * 100}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                          />
                        </div>
                      </div>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-white/70 align-top">Key Advantages</td>
                  {competitorData.map((competitor, index) => (
                    <td 
                      key={index} 
                      className={`px-6 py-4 text-sm ${
                        competitor.name === "BestzDeal" 
                          ? "text-white" 
                          : "text-white/60"
                      }`}
                    >
                      <ul className="list-disc list-inside space-y-1">
                        {competitor.pros.map((pro, i) => (
                          <motion.li 
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                          >
                            {pro}
                          </motion.li>
                        ))}
                      </ul>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      
      {/* Feature Comparison Section */}
      <section className="py-20 bg-dark/50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Head-to-Head Feature Comparison
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              See exactly how BestzDeal transforms the shopping experience compared to traditional marketplaces.
            </p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto">
            {featureComparison.map((item, index) => (
              <motion.div 
                key={index}
                className="glass-card rounded-xl mb-6 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="p-4 bg-white/5 border-b border-white/10">
                  <h3 className="text-lg font-medium">{item.feature}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="p-5 border-b md:border-b-0 md:border-r border-white/10">
                    <div className="text-sm text-white/50 mb-2">BestzDeal</div>
                    <div className="flex items-center">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center mr-3 flex-shrink-0">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 13L9 17L19 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <p>{item.bestzDeal}</p>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="text-sm text-white/50 mb-2">Other Marketplaces</div>
                    <div className="flex items-center">
                      <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center mr-3 flex-shrink-0">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <p className="text-white/70">{item.others}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-accent/10 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-primary/10 blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                What Our Users Say
              </span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Don't just take our word for it. Hear from real users who have experienced the BestzDeal difference.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={testimonial.id}
                className="glass-card p-8 rounded-xl relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="absolute top-4 right-4 text-4xl opacity-10">"</div>
                <p className="text-white/80 mb-6 relative z-10">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-medium">{testimonial.author}</div>
                    <div className="text-white/60 text-sm flex items-center">
                      <span>{testimonial.role}</span>
                      <span className="mx-2">•</span>
                      <span>{testimonial.location}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
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
              Ready to experience the better way to shop?
            </h2>
            <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
              Join thousands of smart shoppers who are saving time and money with BestzDeal.
            </p>
            <Link to="/get-started" className="neo-button text-lg px-10 py-4">
              Get Started Now
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WhyUsPage;

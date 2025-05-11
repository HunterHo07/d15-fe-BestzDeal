import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    userType: '',
    location: '',
    referral: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  // For background parallax effects
  const parallaxY1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const parallaxY2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const parallaxOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would submit the form to a server
    console.log('Form submitted:', formData);
    localStorage.setItem('bestzDealSignup', JSON.stringify(formData));
    setIsSubmitted(true);
  };
  
  // Benefits data
  const benefits = [
    {
      title: "Early Adopter Perks",
      description: "Sign up now to receive exclusive benefits like 0% transaction fees for 6 months, priority support, and early access to new features.",
      icon: "🏆"
    },
    {
      title: "Shape the Platform",
      description: "Early users help us refine BestzDeal. Your feedback will directly influence our product roadmap and feature prioritization.",
      icon: "🔧"
    },
    {
      title: "Founding Member Status",
      description: "Be recognized as a founding member with a special badge on your profile and exclusive access to founding member events.",
      icon: "🌟"
    },
    {
      title: "Priority Matching",
      description: "Early adopters get priority in our matching algorithm, meaning your requests or offers will be shown first.",
      icon: "✨"
    }
  ];
  
  return (
    <div className="pt-24 pb-20 overflow-hidden min-h-screen" ref={containerRef}>
      {/* Animated Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <motion.div 
          className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-b from-primary/10 to-transparent opacity-30"
          style={{ y: parallaxY1, opacity: parallaxOpacity }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-t from-accent/10 to-transparent opacity-30"
          style={{ y: parallaxY2, opacity: parallaxOpacity }}
        />
      </div>
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-16 relative z-10">
        <motion.div 
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              Get Early Access to BestzDeal
            </span>
          </h1>
          <p className="text-white/70 text-lg mb-8">
            Join the revolution in shopping! Sign up now to be among the first to experience
            the marketplace where <span className="text-primary font-medium">sellers compete for your business</span>,
            not the other way around.
          </p>
        </motion.div>
      </section>
      
      {/* Main Content with Form */}
      <section className="container mx-auto px-4 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Form Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="glass-card p-8 rounded-xl overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent"></div>
              
              {isSubmitted ? (
                <motion.div 
                  className="text-center py-8"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-6xl mb-6">🎉</div>
                  <h2 className="text-2xl font-display font-bold mb-3">
                    You're On The List!
                  </h2>
                  <p className="text-white/70 mb-8 max-w-md mx-auto">
                    Thank you for signing up for early access to BestzDeal! We'll be in touch soon
                    with your exclusive invitation to join the platform.
                  </p>
                  <Link to="/" className="neo-button">
                    Return to Homepage
                  </Link>
                </motion.div>
              ) : (
                <>
                  <h2 className="text-2xl font-display font-bold mb-6">
                    Sign Up For Early Access
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm text-white/70 mb-1">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 focus:outline-none focus:border-primary"
                          placeholder="Your name"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm text-white/70 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 focus:outline-none focus:border-primary"
                          placeholder="you@example.com"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="phoneNumber" className="block text-sm text-white/70 mb-1">
                          Phone Number (Optional)
                        </label>
                        <input
                          type="tel"
                          id="phoneNumber"
                          name="phoneNumber"
                          value={formData.phoneNumber}
                          onChange={handleChange}
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 focus:outline-none focus:border-primary"
                          placeholder="Your phone number"
                        />
                      </div>
                      <div>
                        <label htmlFor="location" className="block text-sm text-white/70 mb-1">
                          Location
                        </label>
                        <input
                          type="text"
                          id="location"
                          name="location"
                          value={formData.location}
                          onChange={handleChange}
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 focus:outline-none focus:border-primary"
                          placeholder="City, State"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="userType" className="block text-sm text-white/70 mb-1">
                        I am primarily interested as a:
                      </label>
                      <select
                        id="userType"
                        name="userType"
                        value={formData.userType}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 focus:outline-none focus:border-primary"
                        required
                      >
                        <option value="">Select your primary role</option>
                        <option value="buyer">Buyer - Looking for best deals</option>
                        <option value="seller">Seller - Want to offer products</option>
                        <option value="both">Both Buyer and Seller</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="referral" className="block text-sm text-white/70 mb-1">
                        How did you hear about us? (Optional)
                      </label>
                      <select
                        id="referral"
                        name="referral"
                        value={formData.referral}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 focus:outline-none focus:border-primary"
                      >
                        <option value="">Select an option</option>
                        <option value="social">Social Media</option>
                        <option value="friend">Friend or Colleague</option>
                        <option value="search">Search Engine</option>
                        <option value="news">News or Blog Article</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div className="flex items-center pt-2">
                      <input
                        type="checkbox"
                        id="terms"
                        className="rounded bg-white/5 border-white/10 text-primary focus:ring-primary"
                        required
                      />
                      <label htmlFor="terms" className="ml-2 text-sm text-white/70">
                        I agree to the <Link to="#" className="text-primary hover:underline">Terms of Service</Link> and <Link to="#" className="text-primary hover:underline">Privacy Policy</Link>
                      </label>
                    </div>
                    
                    <button type="submit" className="neo-button w-full py-3">
                      Join The Waitlist
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
          
          {/* Benefits Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-8">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                Early Adopter Benefits
              </span>
            </h2>
            
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  className="glass-card p-6 rounded-xl flex items-start gap-5"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                >
                  <div className="text-3xl">{benefit.icon}</div>
                  <div>
                    <h3 className="font-medium text-lg mb-2">{benefit.title}</h3>
                    <p className="text-white/70">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="glass-card p-6 rounded-xl mt-8 bg-gradient-to-br from-primary/20 to-accent/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <div className="flex items-start">
                <div className="text-3xl mr-4">⏱️</div>
                <div>
                  <h3 className="font-medium text-lg mb-2">Limited Time Offer</h3>
                  <p className="text-white/70 mb-4">
                    These early adopter benefits are only available for the first 1,000 users
                    who sign up. Don't miss your chance to get in on the ground floor!
                  </p>
                  <div className="bg-white/10 rounded-full h-3 overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-primary to-accent"
                      initial={{ width: 0 }}
                      animate={{ width: "67%" }}
                      transition={{ duration: 1, delay: 0.8 }}
                    />
                  </div>
                  <div className="text-right text-sm mt-1 text-white/50">
                    673 / 1,000 spots claimed
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 bg-dark/50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-display font-bold mb-4">
              What Beta Testers are Saying
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Early testers are already experiencing the BestzDeal difference.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: "I was skeptical at first, but I ended up saving $200 on a new laptop. The sellers really do compete for your business!",
                author: "Jamie S.",
                location: "Seattle, WA",
                avatar: "https://i.pravatar.cc/150?img=32"
              },
              {
                quote: "As a small electronics shop owner, BestzDeal is a game-changer. I can connect directly with buyers who are ready to purchase.",
                author: "Miguel R.",
                location: "Austin, TX",
                avatar: "https://i.pravatar.cc/150?img=59"
              },
              {
                quote: "I love that I can post exactly what I'm looking for and get multiple options without spending hours comparing websites.",
                author: "Priya K.",
                location: "Chicago, IL",
                avatar: "https://i.pravatar.cc/150?img=47"
              }
            ].map((testimonial, index) => (
              <motion.div 
                key={index}
                className="glass-card p-6 rounded-xl relative"
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
                    <div className="text-white/60 text-sm">{testimonial.location}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-display font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                Frequently Asked Questions
              </span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Everything you need to know about joining BestzDeal early.
            </p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "When will BestzDeal officially launch?",
                answer: "Our MVP is launching in selected cities in Q2 2025. Early sign-ups will be the first to receive access as we roll out to new locations."
              },
              {
                question: "Is BestzDeal free to use?",
                answer: "Yes, BestzDeal is completely free for buyers. Sellers can use basic features for free, with premium features available through subscription."
              },
              {
                question: "How do I know I'll get the best deal?",
                answer: "By having multiple sellers compete directly for your business, you'll naturally receive better offers than if you were searching on your own. Our early tests show average savings of 12% compared to traditional shopping."
              },
              {
                question: "What happens after I sign up?",
                answer: "You'll receive a confirmation email immediately. As we approach launch in your area, you'll receive an exclusive invitation to create your account and start using BestzDeal before the general public."
              },
              {
                question: "How are sellers verified?",
                answer: "All sellers go through a verification process that includes email, phone, and business information validation. In future phases, we'll add additional verification tiers including identity verification and business license validation."
              }
            ].map((faq, index) => (
              <motion.div 
                key={index}
                className="glass-card rounded-xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <details className="group">
                  <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                    <h3 className="text-lg font-medium">{faq.question}</h3>
                    <svg className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-white/70">{faq.answer}</p>
                  </div>
                </details>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-white/70 mb-4">Still have questions?</p>
            <button className="neo-button">
              Contact Us
            </button>
          </div>
        </div>
      </section>
      
      {/* Final CTA */}
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
              Don't miss your chance to join the revolution
            </h2>
            <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
              Early adopters get exclusive benefits that won't be available once we launch to the public.
              Sign up now to secure your spot!
            </p>
            <Link to="#top" className="neo-button text-lg px-10 py-4" onClick={() => window.scrollTo(0, 0)}>
              Sign Up Now
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;

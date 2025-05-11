import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { productRequests, sellerOffers } from '../data/dummyData';

const HomePage = () => {
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [filteredOffers, setFilteredOffers] = useState([]);
  const [newRequest, setNewRequest] = useState({
    title: '',
    description: '',
    image: '',
    budget: '',
    location: '',
    deliveryPreference: ''
  });
  
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -100]);
  
  useEffect(() => {
    if (selectedRequest) {
      setFilteredOffers(sellerOffers.filter(offer => offer.productRequestId === selectedRequest.id));
    } else {
      setFilteredOffers([]);
    }
  }, [selectedRequest]);
  
  const handleNewRequestChange = (e) => {
    const { name, value } = e.target;
    setNewRequest(prev => ({ ...prev, [name]: value }));
  };
  
  const handleNewRequestSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send to a database
    alert('Your request has been posted! Waiting for sellers to respond...');
    setNewRequest({
      title: '',
      description: '',
      image: '',
      budget: '',
      location: '',
      deliveryPreference: ''
    });
  };

  return (
    <div className="pt-16 overflow-x-hidden">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="min-h-[90vh] relative flex items-center justify-center overflow-hidden"
      >
        {/* Background Animation */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-dark via-dark to-black">
          {/* Animated gradient orbs */}
          <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-r from-primary/30 to-transparent rounded-full blur-[120px] -translate-x-1/4 -translate-y-1/4"></div>
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-l from-accent/30 to-transparent rounded-full blur-[120px] translate-x-1/4 translate-y-1/4"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2/3 h-1/2 bg-gradient-to-t from-secondary/20 to-transparent rounded-full blur-[100px]"></div>
          
          {/* Floating elements */}
          <div className="absolute inset-0">
            {Array.from({ length: 15 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-white"
                style={{
                  width: Math.random() * 6 + 2,
                  height: Math.random() * 6 + 2,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  opacity: Math.random() * 0.5 + 0.1
                }}
                animate={{ 
                  y: [0, Math.random() * -30 - 20, 0],
                  opacity: [0, 0.8, 0],
                }}
                transition={{
                  duration: Math.random() * 5 + 5,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                  delay: Math.random() * 3,
                }}
              />
            ))}
          </div>
          
          {/* Animated grid lines */}
          <div className="absolute inset-0 opacity-10">
            <div className="h-full w-full" style={{ backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
          </div>
        </div>
        
        <motion.div 
          className="container mx-auto px-4 z-10 text-center relative"
          style={{ opacity: heroOpacity, y: heroY }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-display font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            They Find You, <br />
            Not the Other Way Around
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Post what you want. Sellers compete to offer you the best deal. 
            Save time and money with the world's first reverse marketplace.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link to="/get-started" className="neo-button">
              Get Started
            </Link>
            <Link to="/demo" className="px-8 py-3 rounded-full border border-white/30 hover:border-white transition-all duration-300">
              How It Works
            </Link>
          </motion.div>
          
          <motion.div 
            className="mt-16 animate-float"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <svg width="40" height="40" viewBox="0 0 24 24" className="mx-auto text-white/50">
              <path
                d="M12 5L12 19M12 19L6 13M12 19L18 13"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </motion.div>
      </section>
      
      {/* Main Content - Product Requests & Offers */}
      <section className="py-20 bg-gradient-to-b from-dark to-dark/70">
        <div className="container mx-auto px-4">
          <motion.div 
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                Live Marketplace
              </span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Browse current product requests or create your own. See how sellers compete to give you the best deals.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Product Requests Column */}
            <motion.div 
              className="glass-card p-6 rounded-xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-display font-medium">Product Requests</h3>
                <button 
                  onClick={() => setSelectedRequest(null)}
                  className="text-sm text-primary hover:text-accent"
                >
                  View All
                </button>
              </div>
              
              <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
                {productRequests.map((request) => (
                  <motion.div 
                    key={request.id}
                    className={`p-4 rounded-lg transition-all duration-300 cursor-pointer ${selectedRequest?.id === request.id ? 'bg-primary/20 border border-primary/30' : 'bg-white/5 hover:bg-white/10 border border-white/10'}`}
                    onClick={() => setSelectedRequest(request)}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <div className="flex gap-3">
                      <div className="w-16 h-16 overflow-hidden rounded-lg flex-shrink-0">
                        <img 
                          src={request.image} 
                          alt={request.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-white line-clamp-1">{request.title}</h4>
                        <div className="text-white/60 text-sm mb-1">Budget: {request.budget}</div>
                        <div className="flex items-center gap-2 text-xs text-white/40">
                          <span>{request.location}</span>
                          <span>•</span>
                          <span>{request.postedDate}</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-2 flex justify-between items-center">
                      <div className="flex items-center gap-1.5">
                        <div className="w-5 h-5 rounded-full overflow-hidden">
                          <img 
                            src={request.user.avatar} 
                            alt={request.user.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className="text-xs text-white/60">{request.user.name}</span>
                      </div>
                      <div className="text-xs bg-white/10 text-white/80 px-2 py-0.5 rounded-full">
                        {request.offers} offers
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* Middle Column - Post Request or Request Details */}
            <motion.div 
              className="glass-card p-6 rounded-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {selectedRequest ? (
                <div className="h-full flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-display font-medium">Request Details</h3>
                    <button 
                      onClick={() => setSelectedRequest(null)}
                      className="text-white/60 hover:text-white"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                  
                  <div className="h-[300px] overflow-hidden rounded-lg mb-4 relative">
                    <img 
                      src={selectedRequest.image} 
                      alt={selectedRequest.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <div className="text-sm text-white/70">Best offer so far:</div>
                      <div className="text-xl font-medium text-primary">{selectedRequest.bestPrice}</div>
                    </div>
                  </div>
                  
                  <h2 className="text-xl font-medium mb-2">{selectedRequest.title}</h2>
                  <p className="text-white/70 mb-4">{selectedRequest.description}</p>
                  
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-white/5 p-3 rounded-lg">
                      <div className="text-xs text-white/50 mb-1">Budget</div>
                      <div className="font-medium">{selectedRequest.budget}</div>
                    </div>
                    <div className="bg-white/5 p-3 rounded-lg">
                      <div className="text-xs text-white/50 mb-1">Location</div>
                      <div className="font-medium">{selectedRequest.location}</div>
                    </div>
                    <div className="bg-white/5 p-3 rounded-lg">
                      <div className="text-xs text-white/50 mb-1">Delivery</div>
                      <div className="font-medium">{selectedRequest.deliveryPreference}</div>
                    </div>
                    <div className="bg-white/5 p-3 rounded-lg">
                      <div className="text-xs text-white/50 mb-1">Posted</div>
                      <div className="font-medium">{selectedRequest.postedDate}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                      <img 
                        src={selectedRequest.user.avatar} 
                        alt={selectedRequest.user.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-medium text-sm">{selectedRequest.user.name}</div>
                      <div className="flex items-center text-xs text-white/60">
                        <span className="text-yellow-400">★</span>
                        <span className="ml-1">{selectedRequest.user.rating}/5</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-auto">
                    <button className="neo-button w-full">
                      Make an Offer
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <h3 className="text-xl font-display font-medium mb-4">Post Your Request</h3>
                  <form onSubmit={handleNewRequestSubmit}>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm text-white/70 mb-1">Product Title</label>
                        <input
                          type="text"
                          name="title"
                          value={newRequest.title}
                          onChange={handleNewRequestChange}
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 focus:outline-none focus:border-primary"
                          placeholder="e.g. MacBook Pro M3 Pro 16-inch"
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm text-white/70 mb-1">Description</label>
                        <textarea
                          name="description"
                          value={newRequest.description}
                          onChange={handleNewRequestChange}
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 focus:outline-none focus:border-primary h-24"
                          placeholder="Describe the exact product you're looking for..."
                          required
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm text-white/70 mb-1">Product Link or Image</label>
                          <input
                            type="text"
                            name="image"
                            value={newRequest.image}
                            onChange={handleNewRequestChange}
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 focus:outline-none focus:border-primary"
                            placeholder="URL to product image or page"
                          />
                        </div>
                        <div>
                          <label className="block text-sm text-white/70 mb-1">Budget</label>
                          <input
                            type="text"
                            name="budget"
                            value={newRequest.budget}
                            onChange={handleNewRequestChange}
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 focus:outline-none focus:border-primary"
                            placeholder="e.g. $1,500"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm text-white/70 mb-1">Location</label>
                          <input
                            type="text"
                            name="location"
                            value={newRequest.location}
                            onChange={handleNewRequestChange}
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 focus:outline-none focus:border-primary"
                            placeholder="e.g. New York, NY"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm text-white/70 mb-1">Delivery Preference</label>
                          <select
                            name="deliveryPreference"
                            value={newRequest.deliveryPreference}
                            onChange={handleNewRequestChange}
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 focus:outline-none focus:border-primary"
                            required
                          >
                            <option value="">Select preference</option>
                            <option value="Delivery only">Delivery only</option>
                            <option value="Pickup only">Pickup only</option>
                            <option value="Delivery or pickup">Delivery or pickup</option>
                          </select>
                        </div>
                      </div>
                      
                      <button 
                        type="submit"
                        className="neo-button w-full"
                      >
                        Post Request
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </motion.div>
            
            {/* Seller Offers Column */}
            <motion.div 
              className="glass-card p-6 rounded-xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-xl font-display font-medium mb-6">Seller Offers</h3>
              
              {filteredOffers.length > 0 ? (
                <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
                  {filteredOffers.map((offer) => (
                    <motion.div 
                      key={offer.id}
                      className="p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full overflow-hidden">
                          <img 
                            src={offer.seller.avatar} 
                            alt={offer.seller.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <div className="flex items-center">
                            <h4 className="font-medium text-white">{offer.seller.name}</h4>
                            {offer.seller.verified && (
                              <svg className="w-4 h-4 ml-1 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                            )}
                          </div>
                          <div className="flex items-center text-xs text-white/60">
                            <span className="text-yellow-400">★</span>
                            <span className="ml-1">{offer.seller.rating}/5</span>
                            <span className="mx-1">•</span>
                            <span>{offer.seller.location}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg mb-3">
                        <div className="text-sm text-white/70">Their offer:</div>
                        <div className="text-xl font-medium text-accent">{offer.price}</div>
                      </div>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-sm text-white/70">{offer.deliveryEstimate}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm text-white/70">{offer.condition}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-sm text-white/70">{offer.bonus}</span>
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <button className="neo-button flex-1 py-2">
                          Accept
                        </button>
                        <button className="flex-1 py-2 rounded-full border border-white/30 hover:border-white transition-all duration-300">
                          Message
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="h-[500px] flex flex-col items-center justify-center text-center">
                  <div className="text-5xl mb-4">🔍</div>
                  <h4 className="text-lg font-medium mb-2">No offers to display</h4>
                  <p className="text-white/60 text-sm max-w-xs">
                    {selectedRequest 
                      ? "Be the first to make an offer on this request!"
                      : "Select a product request to view offers from sellers."}
                  </p>
                  {selectedRequest && (
                    <button className="neo-button mt-6">
                      Make an Offer
                    </button>
                  )}
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              Ready to get the best deals on everything you buy?
            </h2>
            <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
              Join thousands of smart shoppers who are saving time and money by letting sellers compete for their business.
            </p>
            <Link to="/get-started" className="neo-button text-lg px-10 py-4">
              Sign Up For Free
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

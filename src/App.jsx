import{ useState } from 'react';
import { 
  Coffee, 
  MapPin, 
  Menu, 
  X, 
  ChevronRight,
  Star
} from 'lucide-react';

export default function KopicebanApp() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const products = [
    {
      id: 1,
      name: "Kopi Susu Ceban",
      description: "Signature espresso blend with creamy milk and a touch of palm sugar.",
      price: "Rp 10.000",
      image: "https://images.unsplash.com/photo-1559525839-b184a4d698c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.8
    },
    {
      id: 2,
      name: "Americano Ceban",
      description: "Strong, bold, and pure black coffee for the true enthusiasts.",
      price: "Rp 10.000",
      image: "https://images.unsplash.com/photo-1551030173-122aabc4489c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.5
    },
    {
      id: 3,
      name: "Matcha Latte",
      description: "Premium green tea matcha mixed with silky steamed milk.",
      price: "Rp 15.000",
      image: "https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.7
    },
    {
      id: 4,
      name: "Chocolate Ceban",
      description: "Rich and thick iced chocolate, perfect for a sweet escape.",
      price: "Rp 10.000",
      image: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.6
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-2">
              <Coffee className="h-8 w-8 text-amber-700" />
              <span className="font-bold text-2xl tracking-tight text-amber-900">Kopiceban</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#home" className="text-stone-600 hover:text-amber-700 font-medium transition-colors">Home</a>
              <a href="#menu" className="text-stone-600 hover:text-amber-700 font-medium transition-colors">Menu</a>
              <a href="#about" className="text-stone-600 hover:text-amber-700 font-medium transition-colors">About</a>
              <a href="#location" className="text-stone-600 hover:text-amber-700 font-medium transition-colors">Location</a>
              <button className="bg-amber-700 text-white px-5 py-2 rounded-full font-medium hover:bg-amber-800 transition-colors shadow-sm">
                Order Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-stone-600 hover:text-amber-700 focus:outline-none"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-stone-200 px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-lg">
            <a href="#home" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-stone-700 hover:text-amber-700 hover:bg-stone-50 rounded-md">Home</a>
            <a href="#menu" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-stone-700 hover:text-amber-700 hover:bg-stone-50 rounded-md">Menu</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-stone-700 hover:text-amber-700 hover:bg-stone-50 rounded-md">About</a>
            <a href="#location" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-stone-700 hover:text-amber-700 hover:bg-stone-50 rounded-md">Location</a>
            <button className="w-full text-left px-3 py-2 mt-2 text-base font-medium bg-amber-700 text-white rounded-md hover:bg-amber-800">
              Order Now
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-12 md:pt-32 md:pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left">
          <span className="inline-block py-1 px-3 rounded-full bg-amber-100 text-amber-800 text-sm font-semibold mb-4 tracking-wide">
            100% INDONESIAN BEANS
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-stone-900 leading-tight mb-6">
            Kopi Enak <br className="hidden md:block"/> 
            <span className="text-amber-700">Gak Harus Mahal.</span>
          </h1>
          <p className="text-lg md:text-xl text-stone-600 mb-8 max-w-2xl mx-auto md:mx-0">
            Enjoy premium quality coffee starting from just Rp 10.000. Crafted with passion, served with a smile. Your daily dose of happiness is here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-amber-700 text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-amber-800 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
              View Menu
              <ChevronRight className="w-5 h-5" />
            </button>
            <button className="bg-white text-stone-800 border-2 border-stone-200 px-8 py-3 rounded-full font-bold text-lg hover:border-amber-700 hover:text-amber-700 transition-all flex items-center justify-center gap-2">
              Find Store
              <MapPin className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="flex-1 relative w-full max-w-lg mx-auto">
          <div className="absolute inset-0 bg-amber-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
          <img 
            src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
            alt="Delicious Iced Coffee" 
            className="relative z-10 w-full h-auto rounded-2xl shadow-2xl object-cover aspect-square"
          />
          {/* Floating badge */}
          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3 z-20 animate-bounce" style={{ animationDuration: '3s'}}>
            <div className="bg-green-100 p-2 rounded-full text-green-600">
              <Star className="w-6 h-6 fill-current" />
            </div>
            <div>
              <p className="text-xs text-stone-500 font-bold uppercase">Customer Rating</p>
              <p className="text-xl font-extrabold text-stone-900">4.9/5.0</p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-16 md:py-24 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">Our Favorites</h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto rounded-full mb-6"></div>
            <p className="text-stone-600 max-w-2xl mx-auto text-lg">
              Discover our most loved beverages. Handcrafted daily just for you.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group">
                <div className="relative overflow-hidden aspect-square">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-sm font-bold text-amber-700 flex items-center gap-1 shadow-sm">
                    <Star className="w-3 h-3 fill-current" /> {product.rating}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-stone-900">{product.name}</h3>
                  </div>
                  <p className="text-stone-500 text-sm mb-4 line-clamp-2">{product.description}</p>
                  <div className="flex justify-between items-center mt-auto">
                    <span className="text-lg font-black text-amber-700">{product.price}</span>
                    <button className="bg-stone-100 text-stone-700 hover:bg-amber-700 hover:text-white p-2 rounded-full transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
             <button className="text-amber-700 font-bold hover:text-amber-800 transition-colors inline-flex items-center gap-1">
                See Full Menu <ChevronRight className="w-4 h-4" />
             </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-amber-900 rounded-3xl overflow-hidden shadow-2xl">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">The Story of Ceban</h2>
              <p className="text-amber-100/80 mb-6 text-lg leading-relaxed">
                It started with a simple idea: everyone deserves a great cup of coffee without breaking the bank. "Ceban" means ten thousand rupiah in local slang, representing our commitment to affordability.
              </p>
              <p className="text-amber-100/80 mb-8 text-lg leading-relaxed">
                We source our beans directly from local Indonesian farmers, ensuring fair trade and the freshest roasts. Every cup is a celebration of our rich coffee heritage.
              </p>
              <div>
                 <button className="bg-white text-amber-900 px-6 py-3 rounded-full font-bold hover:bg-amber-50 transition-colors">
                    Learn More About Us
                 </button>
              </div>
            </div>
            <div className="lg:w-1/2 min-h-[300px] lg:min-h-full relative">
               <img 
                 src="https://images.unsplash.com/photo-1611162458324-aae1eb4129a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                 alt="Coffee beans roasting" 
                 className="absolute inset-0 w-full h-full object-cover"
               />
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Location */}
      <footer id="location" className="bg-stone-900 text-white pt-16 pb-8 border-t-4 border-amber-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            
            {/* Brand Info */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Coffee className="h-8 w-8 text-amber-500" />
                <span className="font-bold text-2xl tracking-tight text-white">Kopiceban</span>
              </div>
              <p className="text-stone-400 mb-6">
                Serving affordable, high-quality coffee for everyone. Taste the local pride in every sip.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-stone-400 hover:text-white transition-colors" aria-label="Instagram">
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="#" className="text-stone-400 hover:text-white transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-6 border-b border-stone-800 pb-2">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="#home" className="text-stone-400 hover:text-amber-500 transition-colors">Home</a></li>
                <li><a href="#menu" className="text-stone-400 hover:text-amber-500 transition-colors">Our Menu</a></li>
                <li><a href="#about" className="text-stone-400 hover:text-amber-500 transition-colors">Our Story</a></li>
                <li><a href="#" className="text-stone-400 hover:text-amber-500 transition-colors">Franchise</a></li>
                <li><a href="#" className="text-stone-400 hover:text-amber-500 transition-colors">Careers</a></li>
              </ul>
            </div>

            {/* Location & Contact */}
            <div>
              <h3 className="text-lg font-bold mb-6 border-b border-stone-800 pb-2">Visit Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-amber-500 flex-shrink-0 mt-1" />
                  <span className="text-stone-400">Jl. Sudirman No. 10,<br/>Jakarta Pusat, 10220</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="h-5 w-5 text-amber-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-stone-400">0812-3456-7890</span>
                </li>
                 <li className="flex items-center gap-3">
                  <svg className="h-5 w-5 text-amber-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-stone-400">Open Daily: 07:00 - 22:00</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-stone-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-stone-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Kopiceban. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm text-stone-500">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
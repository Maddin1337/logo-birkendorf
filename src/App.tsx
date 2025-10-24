import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, Clock, ChevronRight, MessageSquare, Mic, Droplet, Baby } from 'lucide-react';
import Testimonials from './components/Testimonials';
import { PraxisImageSwiper } from './components/ui/praxis-image-swiper';
import BackToTopButton from './components/ui/BackToTopButton';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';

function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      title: 'Sprachtherapie',
      description: 'Behandlung von Sprachstörungen bei Kindern, Jugendlichen und Erwachsenen',
      icon: MessageSquare
    },
    {
      title: 'Sprechtherapie',
      description: 'Behandlung von Sprechstörungen bei Kindern, Jugendlichen und Erwachsenen',
      icon: Mic
    },
    {
      title: 'Schlucktherapie',
      description: 'Behandlung von Schluckstörungen bei Kindern, Jugendlichen und Erwachsenen',
      icon: Droplet
    },
    {
      title: 'Stimmtherapie',
      description: 'Behandlung von Stimmstörungen bei Kindern, Jugendlichen und Erwachsenen',
      icon: Baby
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-white shadow-lg py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2 animate-fade-in">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">L</span>
              </div>
              <span className={`font-bold text-xl transition-colors duration-300 font-sans ${
                scrolled ? 'text-gray-800' : 'text-white'
              }`}>
                <span className="hidden md:inline font-light tracking-wide">Praxis für Logopädie Andrea Birkendorf</span>
                <span className="md:hidden font-light tracking-wide">Praxis für Logopädie</span>
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {['Leistungen', 'Über uns', 'Kontakt'].map((item, index) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className={`transition-all duration-300 hover:scale-105 ${
                    scrolled ? 'text-gray-700 hover:text-teal-600' : 'text-white hover:text-teal-200'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item}
                </a>
              ))}
              <a
                href="#kontakt"
                className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-6 py-2 rounded-full hover:scale-105 hover:shadow-xl transition-all duration-300"
              >
                Termin buchen
              </a>
            </div>

            <div className="flex items-center space-x-2">
              <button
                className={`md:hidden transition-colors duration-300 ${
                  scrolled ? 'text-gray-800' : 'text-white'
                }`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </nav>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg animate-slide-down">
            <div className="container mx-auto px-4 py-4 space-y-4">
              {['Leistungen', 'Über uns', 'Kontakt'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="block text-gray-700 hover:text-teal-600 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <a
                href="#kontakt"
                className="block bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-6 py-2 rounded-full text-center hover:shadow-lg transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Termin buchen
              </a>
            </div>
          </div>
        )}
      </header>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-teal-600 via-cyan-600 to-blue-700">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-300 rounded-full blur-3xl animate-float-delayed"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center text-white space-y-8 animate-fade-in-up">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              Ihre Stimme.
              <br />
              <span className="text-teal-200">Unsere Leidenschaft.</span>
            </h1>
            <p className="text-xl sm:text-2xl text-teal-50 max-w-2xl mx-auto">
              Professionelle logopädische Therapie für Kinder und Erwachsene in herzlicher Atmosphäre
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href="#kontakt"
                className="bg-white text-teal-600 px-8 py-4 rounded-full font-semibold hover:scale-105 hover:shadow-2xl transition-all duration-300 flex items-center gap-2 group"
              >
                Jetzt Termin vereinbaren
                <ChevronRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
              </a>
              <a
                href="#leistungen"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-teal-600 transition-all duration-300"
              >
                Unsere Leistungen
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-scroll"></div>
          </div>
        </div>
      </section>

      <section id="leistungen" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
              Unsere Leistungen
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-cyan-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Individuelle Therapiekonzepte für Ihre Bedürfnisse
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.title}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <IconComponent className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="über-uns" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
              Über unsere Praxis
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-cyan-600 mx-auto mb-6"></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              
              <div className="bg-teal-50 p-6 rounded-2xl border-l-4 border-teal-500">
                <p className="text-lg text-gray-700 leading-relaxed font-medium">
                  In der Praxis für Logopädie Andrea Birkendorf werden Sprach-, Sprech-, Schluck- und Stimmstörungen bei Kindern, Jugendlichen und Erwachsenen behandelt.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Unser Standort</h3>
                      <p className="text-gray-600">
                        Die Praxis befindet sich in der Gemeinde Swisttal, Ortsteil Buschhoven. Kostenfreie Parkplätze sind direkt an der Praxis verfügbar.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Hausbesuche</h3>
                      <p className="text-gray-600">
                        Patienten, die aus gesundheitlichen Gründen häuslich gebunden sind, werden bei ärztlicher Verordnung auch zu Hause behandelt.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Logopädie als Heilmittel</h3>
                      <p className="text-gray-600">
                        Logopädie ist ein Heilmittel, das von Ärzten verschrieben wird und Bestandteil der Krankenkassenleistung ist.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Unser Qualitätsanspruch</h3>
                      <p className="text-gray-600">
                        Wir legen großen Wert auf fachliche Fortbildungen sowie interdisziplinären und kollegialen Austausch.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-2xl text-center">
                <p className="text-gray-700">
                  <span className="font-semibold">Behandelt werden:</span> Kinder, Jugendliche und Erwachsene
                </p>
              </div>
              <div className="grid sm:grid-cols-3 gap-6 pt-6">
                <div className="text-center p-4 bg-teal-50 rounded-xl">
                  <div className="text-3xl font-bold text-teal-600 mb-2">15+</div>
                  <div className="text-gray-600">Jahre Erfahrung</div>
                </div>
                <div className="text-center p-4 bg-cyan-50 rounded-xl">
                  <div className="text-3xl font-bold text-cyan-600 mb-2">2000+</div>
                  <div className="text-gray-600">Behandelte Patienten</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
                  <div className="text-gray-600">Zufriedenheit</div>
                </div>
              </div>
            </div>

            <div className="relative animate-fade-in-up flex items-center justify-center" style={{ animationDelay: '200ms' }}>
              <div className="image-swiper-container">
                <PraxisImageSwiper
                  cardWidth={480}
                  cardHeight={600}
                  className="mx-auto w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      <section id="kontakt" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
              Kontaktieren Sie uns
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-cyan-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">
              Wir freuen uns auf Ihre Nachricht
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-8 animate-fade-in-up">
              <div className="flex items-start gap-4 p-6 bg-teal-50 rounded-xl hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Telefon</h3>
                  <p className="text-gray-600">02226 / 905 917</p>
                  <p className="text-sm text-gray-500 mt-1">Mo-Fr: 8:00 - 18:00 Uhr</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-cyan-50 rounded-xl hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">E-Mail</h3>
                  <p className="text-gray-600">info@logopaedie-birkendorf.de</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-blue-50 rounded-xl hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Adresse</h3>
                  <p className="text-gray-600">
                    Bolsgasse 21<br />
                    53913 Swisttal
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-purple-50 rounded-xl hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Sprechzeiten</h3>
                  <div className="text-gray-600 space-y-1">
                    <p>Mo-Do: 8:00 - 18:00 Uhr</p>
                    <p>Fr: 8:00 - 16:00 Uhr</p>
                    <p className="text-sm text-gray-500 mt-2">Termine nach Vereinbarung</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-teal-500 to-cyan-600 p-8 rounded-2xl text-white animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <h3 className="text-2xl font-bold mb-6">Termin anfragen</h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Ihr Name"
                    className="w-full px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Ihre E-Mail"
                    className="w-full px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Ihre Telefonnummer"
                    className="w-full px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Ihre Nachricht"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300 resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-white text-teal-600 px-6 py-3 rounded-lg font-semibold hover:scale-105 hover:shadow-xl transition-all duration-300"
                >
                  Nachricht senden
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">L</span>
                </div>
                <span className="font-bold text-xl font-light tracking-wide">Praxis für Logopädie Andrea Birkendorf</span>
              </div>
              <p className="text-gray-400">
                Professionelle logopädische Therapie für Kinder und Erwachsene in herzlicher Atmosphäre
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Rechtliches</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/impressum" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">
                    Impressum
                  </Link>
                </li>
                <li>
                  <Link to="/datenschutz" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">
                    Datenschutz
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 LogoPraxis. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
      <BackToTopButton />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
      </Routes>
    </Router>
  );
}

export default App;

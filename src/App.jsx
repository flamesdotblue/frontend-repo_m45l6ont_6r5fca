import Hero from './components/Hero'
import Services from './components/Services'
import Gallery from './components/Gallery'
import FooterCTA from './components/FooterCTA'

function App() {
  return (
    <div className="font-inter text-gray-900 bg-white">
      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-rose-100/60">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="inline-flex items-baseline gap-2">
            <span className="text-xl font-extrabold tracking-tight">Sridevi</span>
            <span className="text-rose-600 font-extrabold tracking-tight">Designer</span>
          </a>
          <nav className="hidden sm:flex items-center gap-6 text-sm font-medium text-gray-700">
            <a href="#services" className="hover:text-rose-700 transition">Services</a>
            <a href="#gallery" className="hover:text-rose-700 transition">Gallery</a>
            <a href="#contact" className="hover:text-rose-700 transition">Contact</a>
          </nav>
          <a href="tel:+1-000-000-0000" className="ml-4 hidden sm:inline-flex items-center rounded-full bg-rose-600 text-white px-4 py-2 text-sm font-semibold shadow shadow-rose-600/20 hover:bg-rose-700 transition">
            Book Now
          </a>
        </div>
      </header>

      <main>
        <Hero />
        <Services />
        <div id="gallery">
          <Gallery />
        </div>
        <FooterCTA />
      </main>
    </div>
  )
}

export default App

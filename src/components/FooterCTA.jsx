import { Phone, MapPin, Instagram } from 'lucide-react'

export default function FooterCTA() {
  return (
    <footer id="contact" className="relative">
      <div className="absolute inset-0 bg-gradient-to-br from-rose-600 via-rose-500 to-amber-400" />
      <div className="relative max-w-7xl mx-auto px-6 py-16 text-white">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <p className="uppercase tracking-widest text-white/80 text-sm">Sridevi Designer</p>
            <h3 className="mt-3 text-3xl sm:text-4xl font-extrabold leading-tight">
              Elegance, tailored to you
            </h3>
            <p className="mt-4 text-white/90 max-w-xl">
              Book a consultation to discuss fabrics, fits, and design possibilities. We craft pieces that make moments unforgettable.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="tel:+1-000-000-0000" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-rose-700 font-semibold shadow hover:scale-[1.02] transition">
                <Phone className="h-5 w-5 mr-2" /> Call Now
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full bg-rose-700/30 px-6 py-3 text-white font-semibold border border-white/20 hover:bg-rose-700/40 transition">
                <Instagram className="h-5 w-5 mr-2" /> Follow on Instagram
              </a>
            </div>
          </div>
          <div className="bg-white/10 rounded-2xl p-6 backdrop-blur">
            <div className="flex items-start gap-3 text-white/90">
              <MapPin className="h-6 w-6 mt-1" />
              <div>
                <p className="font-semibold">Studio & Boutique</p>
                <p className="text-white/80">123 Fashion Street, Design District</p>
                <p className="text-white/80">Open: Tue–Sun, 10am–7pm</p>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-white/80">
              <div className="rounded-xl bg-white/5 p-3">Bridal Wear</div>
              <div className="rounded-xl bg-white/5 p-3">Lehenga & Saree</div>
              <div className="rounded-xl bg-white/5 p-3">Suits & Ethnic</div>
              <div className="rounded-xl bg-white/5 p-3">Alterations</div>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-white/20 text-sm text-white/70 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Sridevi Designer. All rights reserved.</p>
          <p>Crafted with care.</p>
        </div>
      </div>
    </footer>
  )
}

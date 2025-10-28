import { Star, Scissors, Phone } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-white to-amber-50" />
      <div aria-hidden className="absolute -top-24 -right-24 w-[28rem] h-[28rem] rounded-full bg-rose-200/40 blur-3xl" />
      <div aria-hidden className="absolute -bottom-24 -left-24 w-[28rem] h-[28rem] rounded-full bg-amber-200/40 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-16 sm:pt-28 sm:pb-20">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white/60 px-3 py-1 text-sm text-rose-700 shadow-sm backdrop-blur">
              <Scissors className="h-4 w-4" />
              Custom Tailoring & Bespoke Design
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-[1.1]">
              Sridevi Designer
            </h1>
            <p className="mt-5 text-lg text-gray-600 leading-relaxed">
              Where timeless craftsmanship meets modern elegance. From intricate bridal wear to everyday chic, we create garments that fit your body and your story.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#services" className="inline-flex items-center justify-center rounded-full bg-rose-600 px-6 py-3 text-white font-semibold shadow-lg shadow-rose-600/20 hover:bg-rose-700 transition">
                Explore Services
              </a>
              <a href="tel:+1-000-000-0000" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-rose-700 font-semibold border border-rose-200 hover:border-rose-300 hover:bg-rose-50 transition">
                <Phone className="h-5 w-5 mr-2" /> Book a Fitting
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p>Trusted by 500+ happy clients</p>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto rounded-[2rem] overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1616002854760-4d3b5b9f3b0f?q=80&w=1200&auto=format&fit=crop"
                alt="Elegant dress on mannequin in a designer studio"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div className="backdrop-blur bg-white/70 rounded-full px-4 py-2 text-sm font-medium text-gray-700 shadow">
                  Handcrafted Excellence
                </div>
                <div className="rounded-full bg-rose-600 text-white text-xs px-3 py-1 shadow">
                  Since 2012
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

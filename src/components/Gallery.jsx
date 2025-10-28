export default function Gallery() {
  const images = [
    {
      src: 'https://images.unsplash.com/photo-1737846185998-a6b15c507feb?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxGaW5lJTIwZW1icm9pZGVyeSUyMGNsb3NlLXVwfGVufDB8MHx8fDE3NjE2MzY0NTV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
      alt: 'Fine embroidery close-up'
    },
    {
      src: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop',
      alt: 'Designer measuring for bespoke fit'
    },
    {
      src: 'https://images.unsplash.com/photo-1753162659146-c2997eb8bc45?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxEZXNpZ25lciUyMG1lYXN1cmluZyUyMGZvciUyMGJlc3Bva2V8ZW58MHwwfHx8MTc2MTYzNjQ1NXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
      alt: 'Elegant evening wear on rack'
    }
  ]

  return (
    <section className="py-20 bg-rose-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Signature Work</h2>
            <p className="mt-3 text-gray-600 max-w-2xl">A glimpse into textures, finishing, and silhouettes our clients love.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-block rounded-full border border-rose-200 bg-white px-5 py-2 font-medium text-rose-700 hover:bg-rose-50 transition">Enquire</a>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((img, i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl shadow-md">
              <img src={img.src} alt={img.alt} className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

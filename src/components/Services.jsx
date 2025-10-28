import { Scissors, Palette, Star } from 'lucide-react'

const services = [
  {
    icon: Scissors,
    title: 'Bespoke Tailoring',
    desc: 'Perfectly fitted blouses, suits, and ethnic wear crafted to your measurements.'
  },
  {
    icon: Palette,
    title: 'Custom Design',
    desc: 'From sketch to stitch—unique outfits for weddings, festivities, and milestones.'
  },
  {
    icon: Star,
    title: 'Alterations & Restyle',
    desc: 'Give your favorites a second life with precision alterations and modern restyling.'
  }
]

export default function Services() {
  return (
    <section id="services" className="relative py-20 bg-white">
      <div className="absolute inset-x-0 -top-10 mx-auto h-40 w-40 rotate-45 bg-rose-100/60 blur-3xl" aria-hidden />
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Our Craft</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            We blend premium materials, meticulous measurements, and designer sensibilities for an effortlessly flattering fit.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border bg-gradient-to-b from-white to-rose-50/30 border-rose-100 p-6 shadow-sm hover:shadow-xl transition">
              <div className="h-12 w-12 rounded-xl bg-rose-600/10 text-rose-700 flex items-center justify-center mb-4 group-hover:bg-rose-600 group-hover:text-white transition">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

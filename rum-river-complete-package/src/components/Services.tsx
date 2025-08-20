import Image from 'next/image'

const servicesData = [
  {
    title: "Weddings",
    description: "Your perfect day deserves the perfect setting. Full venue access, customizable packages, and our signature &quot;yes&quot; to all your dreams.",
    price: "From $5,000",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600"
  },
  {
    title: "Corporate Events", 
    description: "Inspire your team in a setting that sparks creativity. Perfect for retreats, celebrations, and memorable company gatherings.",
    price: "From $2,000",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600"
  },
  {
    title: "Celebrations",
    description: "Birthdays, anniversaries, reunions—every milestone deserves a spectacular venue. Flexible spaces for parties of all sizes.", 
    price: "From $1,500",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600"
  }
]

export default function Services() {
  return (
    <section className="py-32 bg-gradient-to-b from-warm-cream to-white divider-wave-up relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,<svg width='60' height='60' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='dots' x='0' y='0' width='60' height='60' patternUnits='userSpaceOnUse'><circle cx='30' cy='30' r='1' fill='rgba(139, 99, 55, 0.05)'/></pattern></defs><rect width='60' height='60' fill='url(%23dots)'/></svg>")`
      }} />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-playfair text-deep-brown mb-5">
            Celebrate Every Moment
          </h2>
          <p className="text-xl text-text-light max-w-2xl mx-auto">
            From intimate gatherings to grand celebrations, we&apos;re here for all of life&apos;s milestones
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-10">
          {servicesData.map((service, index) => (
            <div 
              key={index}
              className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-brown/90 via-deep-brown/30 to-deep-brown/30 group-hover:from-deep-brown/95 group-hover:via-deep-brown/70 transition-all duration-500" />
              
              <div className="absolute top-8 right-8 bg-accent-gold text-white px-5 py-2 rounded-full font-medium">
                {service.price}
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-10">
                <h3 className="text-3xl font-playfair text-white mb-4 transform transition-transform duration-500 group-hover:-translate-y-2">
                  {service.title}
                </h3>
                <p className="text-white/90 leading-relaxed opacity-0 transform translate-y-5 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
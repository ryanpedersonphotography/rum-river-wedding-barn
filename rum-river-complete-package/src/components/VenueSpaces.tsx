import Image from 'next/image'

const venueData = [
  {
    number: "01",
    title: "The Historic Barn",
    description: "Step into a piece of Minnesota history. Our meticulously restored barn combines century-old craftsmanship with modern amenities, creating the perfect backdrop for your celebration.",
    features: [
      "Climate-controlled comfort year-round",
      "Original exposed beam architecture", 
      "Capacity for up to 300 guests",
      "State-of-the-art lighting system"
    ],
    image: "https://images.unsplash.com/photo-1510076857177-7470076d4098?w=800",
    badge: "100+ Years"
  },
  {
    number: "02", 
    title: "Vineyard Ceremonies",
    description: "Exchange vows surrounded by rolling hills and grape vines. Our vineyard offers multiple ceremony sites, each with its own unique charm and breathtaking views.",
    features: [
      "Sunset ceremony perfection",
      "Natural amphitheater setting",
      "Rain backup in covered pavilion", 
      "Complimentary wine tasting for couples"
    ],
    image: "https://images.unsplash.com/photo-1474112704314-8162b7749a90?w=800",
    badge: "5 Locations"
  },
  {
    number: "03",
    title: "Enchanted Forest", 
    description: "Wander through our mile-long paths beneath ancient oaks and whispering pines. The forest provides endless opportunities for stunning photography and intimate moments.",
    features: [
      "Professional trail lighting available",
      "Hidden clearings for portraits",
      "Seasonal wildflower meadows",
      "Private couple's photography hour"
    ],
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800",
    badge: "400 Acres"
  }
]

export default function VenueSpaces() {
  return (
    <section className="py-32 bg-gradient-to-b from-deep-brown to-dark-bg divider-wave-down">
      <div className="container mx-auto px-4 lg:px-8">
        {venueData.map((venue, index) => (
          <div 
            key={venue.number}
            className={`grid lg:grid-cols-2 gap-20 items-center mb-32 last:mb-0 ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
              <div className="text-8xl font-bold text-accent-gold opacity-50 leading-none mb-5">
                {venue.number}
              </div>
              <h3 className="text-4xl lg:text-5xl font-playfair text-white mb-6">
                {venue.title}
              </h3>
              <p className="text-lg leading-relaxed text-white/90 mb-8">
                {venue.description}
              </p>
              <ul className="space-y-3 mb-8">
                {venue.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-white/80">
                    <span className="text-accent-gold font-bold text-lg mr-3">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="border-2 border-accent-gold text-accent-gold px-8 py-3 hover:bg-accent-gold hover:text-white transition-all duration-300 uppercase tracking-wide text-sm">
                Explore {venue.title.split(' ')[1] || 'Space'}
              </button>
            </div>
            
            <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={venue.image}
                  alt={venue.title}
                  width={600}
                  height={500}
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute top-8 right-8 bg-wine text-white px-6 py-3 rounded-full text-sm font-medium uppercase tracking-wide">
                  {venue.badge}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
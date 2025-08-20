interface HeroProps {
  hero?: {
    title?: string
    subtitle?: string
    tagline?: string
    description?: string
    yearEstablished?: string
    backgroundImage?: unknown
    primaryButton?: {
      text?: string
      link?: string
    }
    secondaryButton?: {
      text?: string
      link?: string
    }
  }
}

export default function Hero({ hero }: HeroProps) {
  const defaultHero = {
    title: "Rum River\nBarn",
    subtitle: "Minnesota's Premier Venue",
    tagline: "Where rustic charm meets\nmodern elegance",
    yearEstablished: "EST. 2005",
    primaryButton: { text: "Discover Our Story", link: "#about" },
    secondaryButton: { text: "Schedule Your Visit", link: "#contact" },
  }

  const heroData = { ...defaultHero, ...hero }

  return (
    <section id="home" className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-deep-brown/85 via-dark-bg/60 to-deep-brown/85 z-10" />
        <div 
          className="w-full h-full bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: heroData.backgroundImage 
              ? `url(${heroData.backgroundImage})` 
              : 'linear-gradient(135deg, var(--deep-brown) 0%, var(--dark-bg) 100%)'
          }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-20">
        <div className="max-w-3xl">
          {/* Year */}
          {heroData.yearEstablished && (
            <div className="text-lg text-accent-gold mb-10 font-normal tracking-wide opacity-90" style={{ fontFamily: 'Georgia, sans-serif' }}>
              {heroData.yearEstablished}
            </div>
          )}

          {/* Subtitle */}
          {heroData.subtitle && (
            <div className="text-sm uppercase tracking-wider text-warm-cream mb-5 opacity-80" style={{ fontFamily: 'Georgia, sans-serif' }}>
              {heroData.subtitle}
            </div>
          )}

          {/* Main Title */}
          <h1 className="font-playfair text-6xl md:text-7xl lg:text-8xl font-light leading-none text-warm-cream mb-8 tracking-tight">
            {heroData.title.split('\n').map((line, index) => (
              <div key={index}>{line}</div>
            ))}
          </h1>

          {/* Tagline */}
          {heroData.tagline && (
            <p className="text-xl md:text-2xl leading-relaxed text-warm-cream opacity-90 font-light mb-12">
              {heroData.tagline.split('\n').map((line, index) => (
                <div key={index}>{line}</div>
              ))}
            </p>
          )}

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-8 mt-12">
            {heroData.primaryButton && (
              <a
                href={heroData.primaryButton.link}
                className="btn-light inline-block px-12 py-4 bg-white/95 backdrop-blur-md text-deep-brown text-sm font-medium uppercase tracking-wide hover:bg-white hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 text-center"
                style={{ fontFamily: 'Georgia, sans-serif' }}
              >
                {heroData.primaryButton.text}
              </a>
            )}
            {heroData.secondaryButton && (
              <a
                href={heroData.secondaryButton.link}
                className="btn-outline inline-block px-11 py-3 bg-transparent text-warm-cream border-2 border-warm-cream text-sm font-medium uppercase tracking-wide hover:bg-warm-cream hover:text-deep-brown transition-all duration-300 text-center"
                style={{ fontFamily: 'Georgia, sans-serif' }}
              >
                {heroData.secondaryButton.text}
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Decorative overlay */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        <svg 
          className="absolute bottom-0 w-full h-32 text-deep-brown opacity-10" 
          viewBox="0 0 1920 320" 
          preserveAspectRatio="none"
        >
          <path 
            fill="currentColor" 
            d="M0,160 Q480,80 960,160 T1920,160 L1920,320 L0,320 Z"
          />
        </svg>
      </div>
    </section>
  )
}
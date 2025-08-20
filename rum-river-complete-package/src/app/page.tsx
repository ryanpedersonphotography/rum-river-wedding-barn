'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
// import SectionDivider, { DividerPresets } from '../components/SectionDivider'

export default function Home() {
  useEffect(() => {
    // Enhanced header scroll effect
    const handleScroll = () => {
      const header = document.getElementById('header')
      if (header) {
        if (window.scrollY > 100) {
          header.classList.add('scrolled')
        } else {
          header.classList.remove('scrolled')
        }
      }
    }

    window.addEventListener('scroll', handleScroll)

    // Smooth scrolling with offset for fixed header
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault()
        const href = (e.currentTarget as HTMLAnchorElement).getAttribute('href')
        if (href) {
          const target = document.querySelector(href)
          if (target) {
            const headerOffset = 80
            const elementPosition = target.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            })
          }
        }
      })
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      {/* Modern Header */}
      <header id="header">
        <div className="container">
          <div className="header-content">
            <div className="logo-wrapper">
              <div className="logo-circle">R</div>
            </div>
            <nav>
              <ul className="nav-menu">
                <li><Link href="#home" className="active">HOME</Link></li>
                <li><Link href="#about">ABOUT</Link></li>
                <li><Link href="#services">SERVICES</Link></li>
                <li><Link href="#gallery">GALLERY</Link></li>
                <li><Link href="#contact">CONTACT</Link></li>
              </ul>
            </nav>
            <div className="menu-toggle">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </header>

      {/* Social Sidebar */}
      <div className="social-sidebar">
        <a href="#">FB</a>
        <a href="#">IG</a>
        <a href="#">TW</a>
      </div>

      {/* Navigation Dots */}
      <div className="nav-dots">
        <span className="active" data-section="home"></span>
        <span data-section="about"></span>
        <span data-section="services"></span>
        <span data-section="gallery"></span>
        <span data-section="contact"></span>
      </div>

      {/* Modern Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-year">EST. 2015</div>
            <div className="hero-subtitle">Rustic Elegance</div>
            <h1>Rum River<br />Wedding Barn</h1>
            <p className="lead-text">
              Where timeless romance meets<br />countryside charm
            </p>
            <div className="hero-buttons">
              <a href="#about" className="btn btn-light">Discover Our Story</a>
              <a href="#contact" className="btn btn-outline">Schedule Your Visit</a>
            </div>
          </div>
        </div>
      </section>

      {/* Hero to About Transition - Flowing Fabric Divider */}
      <section id="about" className="alternating-blocks section-divider divider-flowing-fabric divider-prominent divider-dark-to-light divider-slow-animation divider-parallax">
        <div className="container">
          <div className="block-item">
            <div className="block-content">
              <div className="number">01</div>
              <h3>The Historic Barn</h3>
              <p>Step into a piece of Minnesota history. Our meticulously restored barn combines century-old craftsmanship with modern amenities, creating the perfect backdrop for your celebration.</p>
              <ul className="feature-list">
                <li>Climate-controlled comfort year-round</li>
                <li>Original exposed beam architecture</li>
                <li>Capacity for up to 300 guests</li>
                <li>State-of-the-art lighting system</li>
              </ul>
              <a href="#" className="btn-outline">Explore The Barn</a>
            </div>
            <div className="block-image">
              <Image src="https://images.unsplash.com/photo-1510076857177-7470076d4098?w=800" alt="Historic barn interior" width={800} height={500} />
              <span className="image-badge">100+ Years</span>
            </div>
          </div>

          <div className="block-item reverse">
            <div className="block-content">
              <div className="number">02</div>
              <h3>Vineyard Ceremonies</h3>
              <p>Exchange vows surrounded by rolling hills and grape vines. Our vineyard offers multiple ceremony sites, each with its own unique charm and breathtaking views.</p>
              <ul className="feature-list">
                <li>Sunset ceremony perfection</li>
                <li>Natural amphitheater setting</li>
                <li>Rain backup in covered pavilion</li>
                <li>Complimentary wine tasting for couples</li>
              </ul>
              <a href="#" className="btn-outline">View Ceremony Sites</a>
            </div>
            <div className="block-image">
              <Image src="https://images.unsplash.com/photo-1474112704314-8162b7749a90?w=800" alt="Vineyard ceremony site" width={800} height={500} />
              <span className="image-badge">5 Locations</span>
            </div>
          </div>

          <div className="block-item">
            <div className="block-content">
              <div className="number">03</div>
              <h3>Enchanted Forest</h3>
              <p>Wander through our mile-long paths beneath ancient oaks and whispering pines. The forest provides endless opportunities for stunning photography and intimate moments.</p>
              <ul className="feature-list">
                <li>Professional trail lighting available</li>
                <li>Hidden clearings for portraits</li>
                <li>Seasonal wildflower meadows</li>
                <li>Private couple&apos;s photography hour</li>
              </ul>
              <a href="#" className="btn-outline">Discover The Grounds</a>
            </div>
            <div className="block-image">
              <Image src="https://images.unsplash.com/photo-1519741497674-611481863552?w=800" alt="Enchanted forest" width={800} height={500} />
              <span className="image-badge">400 Acres</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services to Venue Transition - Botanical Divider */}
      <section id="services" className="services-reveal section-divider divider-botanical divider-standard divider-cream-to-white divider-botanical-accents">
        <div className="container">
          <div className="services-header">
            <h2>Celebrate Every Moment</h2>
            <p className="subtitle">From intimate gatherings to grand celebrations, we&apos;re here for all of life&apos;s milestones</p>
          </div>
          <div className="services-cards">
            <div className="service-card">
              <Image src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600" alt="Wedding" width={600} height={400} className="service-bg" />
              <div className="service-overlay">
                <span className="service-price">From $5,000</span>
                <h3 className="service-title">Weddings</h3>
                <p className="service-description">Your perfect day deserves the perfect setting. Full venue access, customizable packages, and our signature &quot;yes&quot; to all your dreams.</p>
              </div>
            </div>
            <div className="service-card">
              <Image src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600" alt="Corporate Event" width={600} height={400} className="service-bg" />
              <div className="service-overlay">
                <span className="service-price">From $2,000</span>
                <h3 className="service-title">Corporate Events</h3>
                <p className="service-description">Inspire your team in a setting that sparks creativity. Perfect for retreats, celebrations, and memorable company gatherings.</p>
              </div>
            </div>
            <div className="service-card">
              <Image src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600" alt="Special Celebration" width={600} height={400} className="service-bg" />
              <div className="service-overlay">
                <span className="service-price">From $1,500</span>
                <h3 className="service-title">Celebrations</h3>
                <p className="service-description">Birthdays, anniversaries, reunions—every milestone deserves a spectacular venue. Flexible spaces for parties of all sizes.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Soft Curve Bottom to Sage */}
        <div className="shape-divider bottom soft-curve">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,40 Q600,80 1200,40 L1200,120 L0,120 Z" fill="#7A8B7F"></path>
          </svg>
        </div>
      </section>

      {/* Social Proof Section - Dark Sage */}
      <section className="social-proof">
        <div className="container social-content">
          <div className="social-logos">
            <span className="social-logo">THE KNOT</span>
            <span className="social-logo">WEDDINGWIRE</span>
            <span className="social-logo">MARTHA STEWART</span>
            <span className="social-logo">MINNESOTA BRIDE</span>
          </div>
          <p className="social-text">
            &quot;Rum River Barn isn&apos;t just a venue—it&apos;s <span className="highlight">where dreams come to life</span>. 
            Their commitment to saying &apos;yes&apos; to every couple&apos;s vision sets them apart as 
            <span className="highlight">Minnesota&apos;s most accommodating wedding destination</span>.&quot;
          </p>
        </div>
        
      </section>

      {/* Venue Spaces - Romantic Arch Divider */}
      <section id="venue" className="venue-showcase section-divider divider-romantic-arch divider-prominent divider-accent-gold divider-accent-hearts divider-slow-animation divider-interactive">
        
        <div className="container venue-content">
          <div className="venue-header">
            <h2>Explore Our Spaces</h2>
            <p>Every corner tells a story, every space creates memories</p>
          </div>
          <div className="venue-tabs">
            <button className="venue-tab active">The Barn</button>
            <button className="venue-tab">Bridal Suite</button>
            <button className="venue-tab">Groom&apos;s Quarters</button>
            <button className="venue-tab">Garden Pavilion</button>
          </div>
          <div className="venue-display">
            <div className="venue-main-image">
              <Image src="https://images.unsplash.com/photo-1564069114553-7215e1ff1890?w=800" alt="The Historic Barn" width={800} height={500} />
            </div>
            <div className="venue-details">
              <h3>The Historic Barn</h3>
              <p>Our crown jewel, this beautifully restored barn features soaring ceilings, original timber beams, and modern amenities seamlessly integrated into its historic charm.</p>
              <div className="venue-features">
                <div className="venue-feature">
                  <h5>Capacity</h5>
                  <p>Up to 300 guests</p>
                </div>
                <div className="venue-feature">
                  <h5>Features</h5>
                  <p>Built-in bar & dance floor</p>
                </div>
                <div className="venue-feature">
                  <h5>Lighting</h5>
                  <p>Edison bulbs & chandeliers</p>
                </div>
                <div className="venue-feature">
                  <h5>Climate</h5>
                  <p>Heated & air conditioned</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </section>

      {/* Packages Section - Wood Grain Divider */}
      <section id="packages" className="packages-section section-divider divider-wood-grain divider-subtle divider-cream-to-white">
        <div className="container">
          <div className="packages-header">
            <p className="script-font">Investment in Memories</p>
            <h2>Wedding Packages</h2>
          </div>
          <div className="packages-grid">
            <div className="package-card">
              <div className="package-header">
                <h3 className="package-name">Intimate</h3>
                <div className="package-price">
                  $3,500
                  <span>/ up to 75 guests</span>
                </div>
              </div>
              <div className="package-body">
                <ul className="package-features">
                  <li>6-hour venue rental</li>
                  <li>Ceremony & reception spaces</li>
                  <li>Tables, chairs & linens</li>
                  <li>Bridal suite access</li>
                  <li>Setup & breakdown assistance</li>
                </ul>
                <button className="package-btn">Learn More</button>
              </div>
            </div>

            <div className="package-card featured">
              <div className="package-header">
                <h3 className="package-name">Classic</h3>
                <div className="package-price">
                  $5,500
                  <span>/ up to 150 guests</span>
                </div>
              </div>
              <div className="package-body">
                <ul className="package-features">
                  <li>10-hour venue rental</li>
                  <li>Full property access</li>
                  <li>Premium décor package</li>
                  <li>Both suites included</li>
                  <li>Day-before setup time</li>
                  <li>Complimentary rehearsal</li>
                </ul>
                <button className="package-btn">Most Popular Choice</button>
              </div>
            </div>

            <div className="package-card">
              <div className="package-header">
                <h3 className="package-name">Grand</h3>
                <div className="package-price">
                  $8,500
                  <span>/ up to 300 guests</span>
                </div>
              </div>
              <div className="package-body">
                <ul className="package-features">
                  <li>Full weekend rental</li>
                  <li>All venue spaces included</li>
                  <li>Luxury décor collection</li>
                  <li>Golf cart transportation</li>
                  <li>Fire pit & s&apos;mores bar</li>
                  <li>Morning-after brunch setup</li>
                </ul>
                <button className="package-btn">Ultimate Experience</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section - Botanical Divider */}
      <section id="team" className="team-section section-divider divider-botanical divider-standard divider-cream-to-white divider-botanical-accents">
        <div className="container">
          <div className="team-header">
            <p className="script-font">Meet Our Family</p>
            <h2>The Family Behind the Farm</h2>
          </div>
          <div className="team-grid">
            <div className="team-member">
              <div className="team-photo">
                <Image src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400" alt="John Peterson" width={200} height={200} />
              </div>
              <h3>John Peterson</h3>
              <p>Founder & Visionary</p>
            </div>
            <div className="team-member">
              <div className="team-photo">
                <Image src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400" alt="Sarah Peterson" width={200} height={200} />
              </div>
              <h3>Sarah Peterson</h3>
              <p>Event Coordinator</p>
            </div>
            <div className="team-member">
              <div className="team-photo">
                <Image src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400" alt="Mike Johnson" width={200} height={200} />
              </div>
              <h3>Mike Johnson</h3>
              <p>Grounds Keeper</p>
            </div>
            <div className="team-member">
              <div className="team-photo">
                <Image src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400" alt="Emma Davis" width={200} height={200} />
              </div>
              <h3>Emma Davis</h3>
              <p>Wedding Planner</p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section - Wood Grain Divider */}
      <section id="blog" className="blog-section section-divider divider-wood-grain divider-subtle divider-cream-to-white">
        <div className="container">
          <div className="blog-header">
            <h2>Stories from the Barn</h2>
            <p>Insights, inspiration, and behind-the-scenes moments</p>
          </div>
          <div className="blog-grid">
            <div className="blog-card">
              <div className="blog-image">
                <Image src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600" alt="Fall Wedding" width={350} height={250} />
              </div>
              <div className="blog-content">
                <span className="blog-category">Planning Tips</span>
                <h3>Creating Your Perfect Fall Wedding</h3>
                <p>Discover how autumn colors and seasonal touches can make your wedding day magical...</p>
                <div className="blog-meta">
                  <span>October 15, 2024</span>
                  <span>5 min read</span>
                </div>
              </div>
            </div>
            <div className="blog-card">
              <div className="blog-image">
                <Image src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600" alt="Real Wedding" width={350} height={250} />
              </div>
              <div className="blog-content">
                <span className="blog-category">Real Weddings</span>
                <h3>Sarah &amp; Michael&apos;s Rustic Romance</h3>
                <p>A beautiful June celebration that perfectly blended elegant details with countryside charm...</p>
                <div className="blog-meta">
                  <span>September 28, 2024</span>
                  <span>8 min read</span>
                </div>
              </div>
            </div>
            <div className="blog-card">
              <div className="blog-image">
                <Image src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600" alt="Winter Wedding" width={350} height={250} />
              </div>
              <div className="blog-content">
                <span className="blog-category">Seasonal Guide</span>
                <h3>Winter Wonderland Weddings</h3>
                <p>Embrace the magic of winter with cozy details and breathtaking snowy landscapes...</p>
                <div className="blog-meta">
                  <span>September 12, 2024</span>
                  <span>6 min read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Section - Fabric Divider */}
      <section id="instagram" className="instagram-section section-divider divider-flowing-fabric divider-standard divider-cream-to-brown divider-slow-animation">
        <div className="container">
          <div className="instagram-header">
            <h2>Follow Our Journey</h2>
            <p>@rumriverbarn</p>
          </div>
          <div className="instagram-grid">
            <div className="instagram-item">
              <Image src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=400" alt="Instagram post 1" width={300} height={300} />
            </div>
            <div className="instagram-item">
              <Image src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=400" alt="Instagram post 2" width={300} height={300} />
            </div>
            <div className="instagram-item">
              <Image src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400" alt="Instagram post 3" width={300} height={300} />
            </div>
            <div className="instagram-item">
              <Image src="https://images.unsplash.com/photo-1519741497674-611481863552?w=400" alt="Instagram post 4" width={300} height={300} />
            </div>
            <div className="instagram-item">
              <Image src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=400" alt="Instagram post 5" width={300} height={300} />
            </div>
            <div className="instagram-item">
              <Image src="https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=400" alt="Instagram post 6" width={300} height={300} />
            </div>
            <div className="instagram-item">
              <Image src="https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800" alt="Instagram post 7" width={300} height={300} />
            </div>
            <div className="instagram-item">
              <Image src="https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1200" alt="Instagram post 8" width={300} height={300} />
            </div>
          </div>
        </div>
      </section>

      {/* Real Weddings Gallery Section */}
      <section className="real-weddings-section">
        <div className="container">
          <div className="real-weddings-header">
            <p className="script-font">Real Love Stories</p>
            <h2>WEDDINGS AT THE BARN</h2>
            <p className="subtitle">Every celebration tells a unique story of love, laughter, and happily ever after</p>
          </div>
          
          <div className="wedding-gallery">
            {/* Row 1: Large feature + side images */}
            <div className="gallery-row row-1">
              <div className="gallery-item large-feature">
                <div className="gallery-image">
                  <Image src="https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1200" alt="Summer barn wedding" width={1200} height={500} />
                  <div className="gallery-overlay">
                    <h3>Emma & James</h3>
                    <p className="wedding-season">Summer 2024</p>
                    <p className="wedding-detail">200 Guests • Vineyard Ceremony</p>
                  </div>
                </div>
                <div className="gallery-caption">
                  <h4>A Midsummer Dream</h4>
                  <p className="location-style">Garden Party Romance</p>
                </div>
              </div>
              
              <div className="gallery-item vertical">
                <div className="gallery-image">
                  <Image src="https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800" alt="Romantic first dance" width={800} height={500} />
                  <div className="gallery-overlay">
                    <h3>Sarah & Michael</h3>
                    <p className="wedding-season">Fall 2024</p>
                    <p className="wedding-detail">150 Guests • Barn Reception</p>
                  </div>
                </div>
                <div className="gallery-caption">
                  <h4>Autumn Elegance</h4>
                  <p className="location-style">Rustic Luxe</p>
                </div>
              </div>
            </div>

            {/* Row 2: Mixed layout */}
            <div className="gallery-row row-2">
              <div className="gallery-item medium">
                <div className="gallery-image">
                  <Image src="https://images.unsplash.com/photo-1519741497674-611481863552?w=800" alt="Outdoor ceremony" width={800} height={380} />
                  <div className="gallery-overlay">
                    <h3>Rachel & David</h3>
                    <p className="wedding-season">Spring 2024</p>
                    <p className="wedding-detail">100 Guests • Forest Ceremony</p>
                  </div>
                </div>
                <div className="gallery-caption">
                  <h4>Enchanted Forest</h4>
                  <p className="location-style">Woodland Wedding</p>
                </div>
              </div>
              
              <div className="gallery-item horizontal">
                <div className="gallery-image">
                  <Image src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1000" alt="Golden hour portraits" width={1000} height={380} />
                  <div className="gallery-overlay">
                    <h3>Jessica & Ryan</h3>
                    <p className="wedding-season">Summer 2024</p>
                    <p className="wedding-detail">175 Guests • Sunset Reception</p>
                  </div>
                </div>
                <div className="gallery-caption">
                  <h4>Golden Hour Magic</h4>
                  <p className="location-style">Vineyard Views</p>
                </div>
              </div>
            </div>

            {/* Row 3: Feature layout */}
            <div className="gallery-row row-3">
              <div className="gallery-item square">
                <div className="gallery-image">
                  <Image src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800" alt="Intimate celebration" width={800} height={350} />
                  <div className="gallery-overlay">
                    <h3>Amanda & Chris</h3>
                    <p className="wedding-season">Winter 2023</p>
                    <p className="wedding-detail">75 Guests • Candlelit Dinner</p>
                  </div>
                </div>
                <div className="gallery-caption">
                  <h4>Winter Warmth</h4>
                  <p className="location-style">Intimate Celebration</p>
                </div>
              </div>
              
              <div className="gallery-item wide">
                <div className="gallery-image">
                  <Image src="https://images.unsplash.com/photo-1525772764200-be829a350797?w=1200" alt="Reception details" width={1200} height={350} />
                  <div className="gallery-overlay">
                    <h3>Lauren & Mark</h3>
                    <p className="wedding-season">Fall 2023</p>
                    <p className="wedding-detail">250 Guests • Full Weekend</p>
                  </div>
                </div>
                <div className="gallery-caption">
                  <h4>Harvest Celebration</h4>
                  <p className="location-style">Farm Table Feast</p>
                </div>
              </div>
              
              <div className="gallery-item small">
                <div className="gallery-image">
                  <Image src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600" alt="Bridal party" width={600} height={350} />
                  <div className="gallery-overlay">
                    <h3>Nicole & Tom</h3>
                    <p className="wedding-season">Spring 2024</p>
                    <p className="wedding-detail">125 Guests</p>
                  </div>
                </div>
                <div className="gallery-caption">
                  <h4>Spring Blooms</h4>
                  <p className="location-style">Garden Party</p>
                </div>
              </div>
            </div>

            {/* Row 4: Bottom feature */}
            <div className="gallery-row row-4">
              <div className="gallery-item medium-vertical">
                <div className="gallery-image">
                  <Image src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800" alt="Dance floor celebration" width={800} height={400} />
                  <div className="gallery-overlay">
                    <h3>Olivia & Daniel</h3>
                    <p className="wedding-season">Summer 2023</p>
                    <p className="wedding-detail">200 Guests • Barn Dance</p>
                  </div>
                </div>
                <div className="gallery-caption">
                  <h4>Dance Till Dawn</h4>
                  <p className="location-style">Barn Celebration</p>
                </div>
              </div>
              
              <div className="gallery-item extra-wide">
                <div className="gallery-image">
                  <Image src="https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=1400" alt="Twilight ceremony" width={1400} height={400} />
                  <div className="gallery-overlay">
                    <h3>Victoria & Andrew</h3>
                    <p className="wedding-season">Fall 2024</p>
                    <p className="wedding-detail">300 Guests • Grand Celebration</p>
                  </div>
                </div>
                <div className="gallery-caption">
                  <h4>Twilight Romance</h4>
                  <p className="location-style">Under the Stars</p>
                </div>
              </div>
            </div>
          </div>

          {/* View More Button */}
          <div className="gallery-footer">
            <a href="#" className="btn-outline">View Full Gallery</a>
            <p className="gallery-note">Each wedding at Rum River Barn is uniquely crafted to reflect our couples&apos; love stories</p>
          </div>
        </div>
      </section>

      {/* Contact Form Section - Arch Divider */}
      <section id="contact" className="cta-contact-section section-divider divider-romantic-arch divider-prominent divider-accent-sage divider-accent-hearts divider-slow-animation divider-interactive divider-parallax">
        <div className="cta-contact-container">
          <div className="cta-contact-header">
            <p className="script-font">Let&apos;s Connect</p>
            <h2>Start Planning Your Perfect Day</h2>
            <p>We&apos;d love to hear about your vision and show you around our beautiful venue.</p>
          </div>
          <form className="cta-contact-form" id="contactForm">
            <div className="cta-form-row">
              <div className="cta-form-group">
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" name="firstName" required />
              </div>
              <div className="cta-form-group">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" name="lastName" required />
              </div>
            </div>
            <div className="cta-form-row">
              <div className="cta-form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="cta-form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" />
              </div>
            </div>
            <div className="cta-form-row">
              <div className="cta-form-group">
                <label htmlFor="eventDate">Preferred Event Date</label>
                <input type="date" id="eventDate" name="eventDate" />
              </div>
              <div className="cta-form-group">
                <label htmlFor="guestCount">Estimated Guest Count</label>
                <select id="guestCount" name="guestCount">
                  <option value="">Select Range</option>
                  <option value="50-100">50-100 Guests</option>
                  <option value="100-150">100-150 Guests</option>
                  <option value="150-200">150-200 Guests</option>
                  <option value="200+">200+ Guests</option>
                </select>
              </div>
            </div>
            <div className="cta-form-group cta-full-width">
              <label htmlFor="message">Tell Us About Your Dream Wedding</label>
              <textarea id="message" name="message" placeholder="Share your vision with us..."></textarea>
            </div>
            <button type="submit" className="cta-submit-button">
              <span>SEND MESSAGE</span>
            </button>
          </form>
        </div>
      </section>

      {/* Section 10: Map & Directions */}
      <section className="map-section">
        <div className="map-container">
          <div className="map-info">
            <h2>Find Your Way to Forever</h2>
            <div className="location-details">
              <div className="location-item">
                <div className="location-icon">📍</div>
                <div className="location-text">
                  <h4>Address</h4>
                  <p>12500 Rum River Drive<br />Princeton, MN 55371</p>
                </div>
              </div>
              <div className="location-item">
                <div className="location-icon">🚗</div>
                <div className="location-text">
                  <h4>Easy Access From</h4>
                  <p>45 min from Minneapolis<br />30 min from St. Cloud<br />1 hour from Brainerd</p>
                </div>
              </div>
              <div className="location-item">
                <div className="location-icon">✈️</div>
                <div className="location-text">
                  <h4>Nearest Airport</h4>
                  <p>Minneapolis-St. Paul International<br />55 miles (1 hour drive)</p>
                </div>
              </div>
              <div className="location-item">
                <div className="location-icon">🏨</div>
                <div className="location-text">
                  <h4>Accommodations</h4>
                  <p>Partner hotels in Princeton & Milaca<br />Group rates available</p>
                </div>
              </div>
            </div>
          </div>
          <div className="map-embed">
            <div className="map-placeholder">
              <p>Interactive Map</p>
              <p style={{fontSize: '16px', marginTop: '10px'}}>Click to view on Google Maps</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Wood Grain Divider */}
      <section id="faq" className="faq-section section section-divider divider-wood-grain divider-subtle divider-cream-to-white">
        <div className="container">
          <div className="section-header">
            <p className="script-font">Questions?</p>
            <h2>Everything You Need to Know</h2>
          </div>
          <div className="faq-container">
            <div className="faq-item">
              <div className="faq-question">
                <h3>Can we bring our own vendors?</h3>
                <span className="faq-toggle">+</span>
              </div>
              <div className="faq-answer">
                <p>Absolutely! We believe in giving you complete creative freedom. Bring your preferred caterers, florists, photographers, and musicians. We also have a list of trusted local vendors if you need recommendations.</p>
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question">
                <h3>What&apos;s included with the venue rental?</h3>
                <span className="faq-toggle">+</span>
              </div>
              <div className="faq-answer">
                <p>Your rental includes exclusive use of our historic barn, ceremony sites, bridal suite, groom&apos;s quarters, tables, chairs, and access to our 400-acre property for photos. We also provide setup and breakdown assistance.</p>
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question">
                <h3>Do you have indoor and outdoor options?</h3>
                <span className="faq-toggle">+</span>
              </div>
              <div className="faq-answer">
                <p>Yes! Our property offers multiple ceremony sites including the vineyard overlook, oak grove, and brookside garden. Our barn provides a beautiful indoor space that can be decorated to match any theme or season.</p>
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question">
                <h3>How far in advance should we book?</h3>
                <span className="faq-toggle">+</span>
              </div>
              <div className="faq-answer">
                <p>We recommend booking 12-18 months in advance, especially for peak season dates (May through October). However, we sometimes have last-minute availability, so don&apos;t hesitate to call us at 612-801-0546.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section - Botanical Divider */}
      <section id="gallery" className="gallery-section section section-divider divider-botanical divider-standard divider-cream-to-white divider-botanical-accents">
        <div className="container">
          <div className="section-header">
            <p className="script-font">Explore</p>
            <h2>Our Scenic Spaces</h2>
          </div>
          <div className="gallery-filters">
            <button className="filter-btn active">All</button>
            <button className="filter-btn">Ceremony</button>
            <button className="filter-btn">Reception</button>
            <button className="filter-btn">Grounds</button>
            <button className="filter-btn">Details</button>
          </div>
          <div className="gallery-grid">
            <div className="gallery-item">
              <Image src="https://images.unsplash.com/photo-1519741497674-611481863552?w=600" alt="Barn Interior" width={600} height={400} />
              <div className="gallery-overlay">
                <h4>The Historic Barn</h4>
                <p>Restored with love, ready for celebration</p>
              </div>
            </div>
            <div className="gallery-item tall">
              <Image src="https://images.unsplash.com/photo-1474112704314-8162b7749a90?w=600" alt="Vineyard View" width={600} height={400} />
              <div className="gallery-overlay">
                <h4>Vineyard Overlook</h4>
                <p>Say &quot;I do&quot; with stunning views</p>
              </div>
            </div>
            <div className="gallery-item">
              <Image src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600" alt="Reception Setup" width={600} height={400} />
              <div className="gallery-overlay">
                <h4>Reception Ready</h4>
                <p>Elegant rustic dining spaces</p>
              </div>
            </div>
            <div className="gallery-item">
              <Image src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600" alt="Oak Grove" width={600} height={400} />
              <div className="gallery-overlay">
                <h4>Century Oak Grove</h4>
                <p>Natural cathedral for ceremonies</p>
              </div>
            </div>
            <div className="gallery-item">
              <Image src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600" alt="Sunset Photos" width={600} height={400} />
              <div className="gallery-overlay">
                <h4>Golden Hour Magic</h4>
                <p>Perfect lighting for photos</p>
              </div>
            </div>
            <div className="gallery-item tall">
              <Image src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600" alt="Brook Path" width={600} height={400} />
              <div className="gallery-overlay">
                <h4>Whispering Brook Trail</h4>
                <p>Romantic walks and photo ops</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Gallery to Footer Fabric Divider */}
      <footer className="footer-contact section-divider divider-flowing-fabric divider-prominent divider-light-to-dark">
        <div className="footer-container">
          <h2>Begin Your Love Story</h2>
          <p className="footer-contact-info">
            Let us help you create the wedding of your dreams<br />
            at Rum River Barn & Vineyard
          </p>
          <div className="footer-buttons">
            <a href="#" className="footer-contact-button">SCHEDULE A TOUR</a>
            <a href="#" className="footer-contact-button">REQUEST PRICING</a>
          </div>
          <p className="footer-address">
            📍 12500 Rum River Drive, Princeton, MN 55371<br />
            📞 (555) 123-4567 | ✉️ weddings@rumriverbarn.com
          </p>
        </div>
      </footer>

      <style jsx global>{`
        /* Social Sidebar */
        .social-sidebar {
          position: fixed;
          left: 3rem;
          top: 50%;
          transform: translateY(-50%);
          z-index: 100;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .social-sidebar a {
          color: var(--warm-cream);
          font-size: 1rem;
          transition: var(--transition);
          opacity: 0.6;
          font-family: 'Georgia', sans-serif;
          font-weight: 300;
          text-decoration: none;
        }

        .social-sidebar a:hover {
          color: var(--accent-gold);
          transform: translateX(5px);
          opacity: 1;
        }

        /* Navigation Dots */
        .nav-dots {
          position: fixed;
          right: 3rem;
          top: 50%;
          transform: translateY(-50%);
          z-index: 100;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .nav-dots span {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--warm-cream);
          opacity: 0.3;
          cursor: pointer;
          transition: var(--transition);
        }

        .nav-dots span.active {
          opacity: 1;
          background: var(--accent-gold);
          transform: scale(1.5);
        }

        .nav-dots span:hover {
          opacity: 0.8;
          transform: scale(1.3);
        }

        /* Hero Section */
        .hero {
          position: relative;
          height: 100vh;
          min-height: 700px;
          display: flex;
          align-items: center;
          background-image: linear-gradient(rgba(31, 29, 26, 0.5), rgba(31, 29, 26, 0.7)),
                          url('https://images.unsplash.com/photo-1544986581-efac024faf62?w=1920&h=1080&fit=crop&crop=center');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          overflow: hidden;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080"><rect fill="transparent" width="1920" height="1080"/><g opacity="0.05"><path fill="%23ffffff" d="M0,540 Q480,400 960,540 T1920,540 L1920,1080 L0,1080 Z"/></g></svg>');
          opacity: 0.1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 700px;
        }

        .hero-year {
          font-family: 'Georgia', sans-serif;
          font-size: 1.125rem;
          color: var(--accent-gold);
          margin-bottom: 2.5rem;
          font-weight: 400;
          letter-spacing: 0.3em;
          opacity: 0.9;
        }

        .hero-subtitle {
          font-family: 'Georgia', sans-serif;
          font-size: 0.9375rem;
          text-transform: uppercase;
          letter-spacing: 0.4em;
          color: var(--warm-cream);
          margin-bottom: 1.25rem;
          opacity: 0.8;
        }

        .hero h1 {
          font-family: var(--font-playfair), Georgia, serif;
          font-size: clamp(3.5rem, 7vw, 6rem);
          line-height: 1.1;
          font-weight: 300;
          letter-spacing: -0.03em;
          color: var(--warm-cream);
          margin-bottom: 2rem;
          text-shadow: 0 2px 20px rgba(0,0,0,0.3);
        }

        .lead-text {
          font-size: 1.25rem;
          line-height: 1.8;
          color: var(--warm-cream);
          opacity: 0.9;
          font-weight: 300;
          margin-bottom: 3rem;
        }

        .hero-buttons {
          display: flex;
          gap: 2rem;
          margin-top: 3rem;
        }

        /* Section 2: Alternating Content Blocks */
        .alternating-blocks {
          padding: 120px 0;
          background: linear-gradient(180deg, var(--dark-bg) 0%, var(--medium-bg) 100%);
          position: relative;
        }

        .alternating-blocks h3,
        .alternating-blocks .number {
          color: white;
        }

        .alternating-blocks p,
        .alternating-blocks .feature-list li {
          color: rgba(255, 255, 255, 0.8);
        }

        .alternating-blocks .btn-outline {
          border-color: var(--accent-gold);
          color: var(--accent-gold);
        }

        .alternating-blocks .btn-outline:hover {
          background: var(--accent-gold);
          color: white;
        }

        .block-item {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
          margin-bottom: 120px;
        }

        .block-item:last-child {
          margin-bottom: 0;
        }

        .block-item.reverse {
          direction: rtl;
        }

        .block-item.reverse .block-content {
          direction: ltr;
        }

        .block-content {
          padding: 40px;
        }

        .block-content .number {
          font-size: 80px;
          color: var(--accent-gold);
          opacity: 0.5;
          font-weight: bold;
          line-height: 1;
          margin-bottom: 20px;
        }

        .block-content h3 {
          font-size: 42px;
          margin-bottom: 25px;
        }

        .block-content p {
          font-size: 17px;
          line-height: 1.8;
          margin-bottom: 30px;
        }

        .feature-list {
          list-style: none;
          margin-bottom: 30px;
        }

        .feature-list li {
          padding: 12px 0;
          position: relative;
          padding-left: 30px;
        }

        .feature-list li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--accent-gold);
          font-weight: bold;
          font-size: 18px;
        }

        .block-image {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 25px 50px rgba(0,0,0,0.3);
        }

        .block-image img {
          width: 100%;
          height: 500px;
          object-fit: cover;
        }

        .image-badge {
          position: absolute;
          top: 30px;
          right: 30px;
          background: var(--wine);
          color: white;
          padding: 15px 25px;
          border-radius: 50px;
          font-size: 14px;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        /* Section 3: Services */
        .services-reveal {
          padding: 120px 0;
          background: linear-gradient(180deg, var(--warm-cream) 0%, var(--soft-white) 100%);
          position: relative;
        }

        .services-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .services-header h2 {
          font-size: 48px;
          color: var(--deep-brown);
          margin-bottom: 20px;
        }

        .services-header .subtitle {
          font-size: 18px;
          color: var(--text-light);
          max-width: 600px;
          margin: 0 auto;
        }

        .services-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 40px;
        }

        .service-card {
          position: relative;
          height: 400px;
          border-radius: 20px;
          overflow: hidden;
          cursor: pointer;
          transition: var(--transition);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }

        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 30px 60px rgba(0,0,0,0.2);
        }

        .service-bg {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .service-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(31,29,26,0.9) 0%, rgba(74,52,38,0.8) 100%);
          padding: 40px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          color: white;
          opacity: 0;
          transition: var(--transition);
        }

        .service-card:hover .service-overlay {
          opacity: 1;
        }

        .service-price {
          position: absolute;
          top: 30px;
          right: 30px;
          background: var(--accent-gold);
          color: white;
          padding: 10px 20px;
          border-radius: 25px;
          font-size: 14px;
          font-weight: 600;
        }

        .service-title {
          font-size: 32px;
          margin-bottom: 15px;
        }

        .service-description {
          font-size: 16px;
          line-height: 1.6;
          opacity: 0.9;
        }

        /* Shape Dividers - Modern Minimal Reusable Classes */
        .shape-divider {
          position: absolute;
          left: 0;
          width: 100%;
          overflow: hidden;
          line-height: 0;
          z-index: 1;
        }

        .shape-divider.top {
          top: 0;
        }

        .shape-divider.bottom {
          bottom: 0;
        }

        .shape-divider svg {
          position: relative;
          display: block;
          width: calc(100% + 1.3px);
        }

        /* Soft Curve - Minimal curve */
        .shape-divider.soft-curve svg {
          height: 50px;
        }

        /* Social Proof Section - Dark Sage */
        .social-proof {
          padding: 80px 0;
          background: linear-gradient(90deg, var(--sage-green) 0%, var(--deep-brown) 100%);
          position: relative;
          overflow: hidden;
        }

        .social-proof::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="stars" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="1" fill="rgba(255, 255, 255, 0.1)"/><circle cx="90" cy="30" r="1" fill="rgba(255, 255, 255, 0.1)"/><circle cx="50" cy="50" r="1" fill="rgba(255, 255, 255, 0.1)"/><circle cx="30" cy="80" r="1" fill="rgba(255, 255, 255, 0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23stars)"/></svg>');
        }

        .social-content {
          position: relative;
          z-index: 1;
          text-align: center;
        }

        .social-logos {
          display: flex;
          justify-content: center;
          gap: 60px;
          margin-bottom: 40px;
          flex-wrap: wrap;
          opacity: 0.6;
        }

        .social-logo {
          color: white;
          font-size: 14px;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .social-text {
          font-size: 32px;
          color: white;
          max-width: 900px;
          margin: 0 auto;
          line-height: 1.4;
        }

        .social-text .highlight {
          color: var(--accent-gold);
          font-style: italic;
        }

        /* Section 4: Venue Showcase */
        .venue-showcase {
          padding: 120px 0;
          background: var(--warm-cream);
        }

        .venue-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .venue-header h2 {
          font-size: 48px;
          color: var(--deep-brown);
          margin-bottom: 20px;
        }

        .venue-header p {
          font-size: 18px;
          color: var(--text-light);
        }

        .venue-tabs {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-bottom: 60px;
        }

        .venue-tab {
          padding: 15px 30px;
          background: transparent;
          border: 2px solid var(--primary-brown);
          color: var(--primary-brown);
          font-family: 'Georgia', serif;
          font-size: 16px;
          cursor: pointer;
          transition: var(--transition);
        }

        .venue-tab.active,
        .venue-tab:hover {
          background: var(--primary-brown);
          color: white;
        }

        .venue-display {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .venue-main-image {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 25px 50px rgba(0,0,0,0.15);
        }

        .venue-main-image img {
          width: 100%;
          height: 500px;
          object-fit: cover;
        }

        .venue-details h3 {
          font-size: 42px;
          color: var(--deep-brown);
          margin-bottom: 25px;
        }

        .venue-details > p {
          font-size: 18px;
          color: var(--text-light);
          line-height: 1.8;
          margin-bottom: 40px;
        }

        .venue-features {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
        }

        .venue-feature h5 {
          font-size: 16px;
          font-weight: 600;
          color: var(--accent-gold);
          margin-bottom: 8px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .venue-feature p {
          font-size: 16px;
          color: var(--text-dark);
        }

        /* Section 5: Packages */
        .packages-section {
          padding: 120px 0;
          background: linear-gradient(180deg, var(--blush) 0%, var(--soft-white) 100%);
        }

        .packages-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .packages-header .script-font {
          font-size: 24px;
          color: var(--accent-gold);
          margin-bottom: 15px;
        }

        .packages-header h2 {
          font-size: 48px;
          color: var(--deep-brown);
        }

        .packages-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 40px;
          margin-top: 80px;
        }

        .package-card {
          background: white;
          border-radius: 20px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.08);
          overflow: hidden;
          transition: var(--transition);
          position: relative;
        }

        .package-card.featured {
          transform: scale(1.05);
          box-shadow: 0 30px 60px rgba(139,99,55,0.2);
        }

        .package-card.featured::before {
          content: 'Most Popular';
          position: absolute;
          top: 20px;
          right: -30px;
          background: var(--wine);
          color: white;
          padding: 8px 40px;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          transform: rotate(45deg);
          z-index: 2;
        }

        .package-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 30px 60px rgba(0,0,0,0.15);
        }

        .package-card.featured:hover {
          transform: scale(1.05) translateY(-10px);
        }

        .package-header {
          padding: 40px 40px 20px;
          text-align: center;
        }

        .package-name {
          font-size: 28px;
          color: var(--deep-brown);
          margin-bottom: 20px;
        }

        .package-price {
          font-size: 48px;
          font-weight: 600;
          color: var(--accent-gold);
          line-height: 1;
        }

        .package-price span {
          font-size: 16px;
          color: var(--text-light);
          font-weight: 400;
          display: block;
          margin-top: 8px;
        }

        .package-body {
          padding: 0 40px 40px;
        }

        .package-features {
          list-style: none;
          margin-bottom: 40px;
        }

        .package-features li {
          padding: 12px 0;
          color: var(--text-dark);
          position: relative;
          padding-left: 25px;
          border-bottom: 1px solid #f0f0f0;
        }

        .package-features li:last-child {
          border-bottom: none;
        }

        .package-features li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--accent-gold);
          font-weight: bold;
        }

        .package-btn {
          width: 100%;
          padding: 15px;
          background: var(--primary-brown);
          color: white;
          border: none;
          border-radius: 10px;
          font-family: 'Georgia', serif;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition);
        }

        .package-btn:hover {
          background: var(--deep-brown);
          transform: translateY(-2px);
        }

        .package-card.featured .package-btn {
          background: var(--wine);
        }

        .package-card.featured .package-btn:hover {
          background: var(--accent-gold);
        }

        /* Section 6: Team Section */
        .team-section {
          padding: 120px 0;
          background: linear-gradient(180deg, var(--wine) 0%, var(--deep-brown) 100%);
          color: white;
        }

        .team-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .team-header .script-font {
          font-size: 24px;
          color: var(--accent-gold);
          margin-bottom: 15px;
        }

        .team-header h2 {
          font-size: 48px;
          color: white;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 60px;
          margin-top: 80px;
        }

        .team-member {
          text-align: center;
        }

        .team-photo {
          width: 200px;
          height: 200px;
          margin: 0 auto 30px;
          border-radius: 50%;
          overflow: hidden;
          border: 4px solid var(--accent-gold);
          position: relative;
        }

        .team-photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .team-member h3 {
          font-size: 24px;
          margin-bottom: 10px;
          color: white;
        }

        .team-member p {
          font-size: 16px;
          color: var(--accent-gold);
          font-style: italic;
        }

        /* Section 7: Blog Section */
        .blog-section {
          padding: 120px 0;
          background: var(--warm-cream);
        }

        .blog-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .blog-header h2 {
          font-size: 48px;
          color: var(--deep-brown);
          margin-bottom: 20px;
        }

        .blog-header p {
          font-size: 18px;
          color: var(--text-light);
        }

        .blog-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 40px;
        }

        .blog-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0,0,0,0.08);
          transition: var(--transition);
        }

        .blog-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 30px 60px rgba(0,0,0,0.15);
        }

        .blog-image {
          position: relative;
          height: 250px;
          overflow: hidden;
        }

        .blog-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: var(--transition);
        }

        .blog-card:hover .blog-image img {
          transform: scale(1.1);
        }

        .blog-content {
          padding: 30px;
        }

        .blog-category {
          background: var(--accent-gold);
          color: white;
          padding: 6px 15px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .blog-content h3 {
          font-size: 24px;
          color: var(--deep-brown);
          margin: 20px 0 15px;
          line-height: 1.3;
        }

        .blog-content p {
          font-size: 16px;
          color: var(--text-light);
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .blog-meta {
          display: flex;
          justify-content: space-between;
          font-size: 14px;
          color: var(--text-light);
          border-top: 1px solid #f0f0f0;
          padding-top: 20px;
        }

        /* Section 8: Instagram Section */
        .instagram-section {
          padding: 120px 0;
          background: linear-gradient(180deg, var(--blush) 0%, var(--soft-white) 100%);
        }

        .instagram-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .instagram-header h2 {
          font-size: 48px;
          color: var(--deep-brown);
          margin-bottom: 20px;
        }

        .instagram-header p {
          font-size: 20px;
          color: var(--accent-gold);
          font-weight: 600;
        }

        .instagram-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .instagram-item {
          position: relative;
          aspect-ratio: 1;
          overflow: hidden;
          border-radius: 15px;
          cursor: pointer;
          transition: var(--transition);
        }

        .instagram-item:hover {
          transform: scale(1.05);
        }

        .instagram-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* Real Weddings Gallery Section */
        .real-weddings-section {
          padding: 120px 0;
          background: linear-gradient(180deg, white 0%, var(--warm-cream) 100%);
          position: relative;
        }

        .real-weddings-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .real-weddings-header .script-font {
          font-size: 32px;
          color: var(--accent-gold);
          margin-bottom: 15px;
          font-style: italic;
        }

        .real-weddings-header h2 {
          font-size: 56px;
          color: var(--deep-brown);
          margin-bottom: 20px;
          letter-spacing: 0.08em;
          font-weight: 300;
        }

        .real-weddings-header .subtitle {
          font-size: 18px;
          color: var(--text-light);
          max-width: 700px;
          margin: 0 auto;
          font-style: italic;
        }

        /* Gallery Grid System */
        .wedding-gallery {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .gallery-row {
          display: grid;
          gap: 30px;
          margin-bottom: 30px;
        }

        /* Row 1: Large feature + vertical */
        .gallery-row.row-1 {
          grid-template-columns: 2fr 1fr;
        }

        /* Row 2: Mixed layout */
        .gallery-row.row-2 {
          grid-template-columns: 1fr 1.5fr;
        }

        /* Row 3: Three column layout */
        .gallery-row.row-3 {
          grid-template-columns: 1fr 2fr 0.8fr;
        }

        /* Row 4: Bottom feature */
        .gallery-row.row-4 {
          grid-template-columns: 1fr 2.5fr;
        }

        /* Gallery Items */
        .gallery-item {
          position: relative;
          overflow: hidden;
          border-radius: 0;
          cursor: pointer;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .gallery-item:hover {
          transform: scale(1.02);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);
          z-index: 10;
        }

        /* Image container */
        .gallery-image {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
          background: var(--deep-brown);
        }

        .gallery-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .gallery-item:hover .gallery-image img {
          transform: scale(1.1);
          filter: brightness(0.7);
        }

        /* Specific item heights */
        .gallery-item.large-feature .gallery-image {
          height: 500px;
        }

        .gallery-item.vertical .gallery-image {
          height: 500px;
        }

        .gallery-item.medium .gallery-image {
          height: 380px;
        }

        .gallery-item.horizontal .gallery-image {
          height: 380px;
        }

        .gallery-item.square .gallery-image {
          height: 350px;
        }

        .gallery-item.wide .gallery-image {
          height: 350px;
        }

        .gallery-item.small .gallery-image {
          height: 350px;
        }

        .gallery-item.medium-vertical .gallery-image {
          height: 400px;
        }

        .gallery-item.extra-wide .gallery-image {
          height: 400px;
        }

        /* Gallery Overlay */
        .gallery-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(180deg, 
            rgba(44, 36, 22, 0) 0%, 
            rgba(44, 36, 22, 0.2) 50%, 
            rgba(44, 36, 22, 0.9) 100%);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 40px;
          opacity: 0;
          transition: opacity 0.5s ease;
        }

        .gallery-item:hover .gallery-overlay {
          opacity: 1;
        }

        .gallery-overlay h3 {
          font-family: 'Playfair Display', serif;
          font-size: 32px;
          color: white;
          margin-bottom: 10px;
          transform: translateY(20px);
          transition: transform 0.5s ease;
        }

        .gallery-item:hover .gallery-overlay h3 {
          transform: translateY(0);
        }

        .wedding-season {
          font-size: 14px;
          color: var(--accent-gold);
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 5px;
          transform: translateY(20px);
          transition: transform 0.5s ease 0.1s;
        }

        .gallery-item:hover .wedding-season {
          transform: translateY(0);
        }

        .wedding-detail {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.8);
          transform: translateY(20px);
          transition: transform 0.5s ease 0.2s;
        }

        .gallery-item:hover .wedding-detail {
          transform: translateY(0);
        }

        /* Gallery Caption */
        .gallery-caption {
          padding: 25px 30px;
          background: white;
          border-bottom: 3px solid var(--accent-gold);
          transition: all 0.3s ease;
        }

        .gallery-item:hover .gallery-caption {
          background: var(--soft-white);
          border-bottom-width: 5px;
        }

        .gallery-caption h4 {
          font-family: 'Playfair Display', serif;
          font-size: 22px;
          color: var(--deep-brown);
          margin-bottom: 8px;
        }

        .location-style {
          font-size: 14px;
          color: var(--text-light);
          letter-spacing: 1px;
          text-transform: uppercase;
          font-style: italic;
        }

        /* Gallery Footer */
        .gallery-footer {
          text-align: center;
          margin-top: 80px;
        }

        .gallery-footer .btn-outline {
          background: transparent;
          color: var(--deep-brown);
          border: 2px solid var(--primary-brown);
          padding: 18px 50px;
          font-size: 14px;
          letter-spacing: 2px;
          text-transform: uppercase;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-block;
        }

        .gallery-footer .btn-outline:hover {
          background: var(--primary-brown);
          color: white;
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(139, 99, 55, 0.3);
        }

        .gallery-note {
          margin-top: 30px;
          font-size: 16px;
          color: var(--text-light);
          font-style: italic;
        }

        /* Section 10: Map */
        .map-section {
          padding: 0;
          background: var(--warm-cream);
          position: relative;
        }

        .map-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 600px;
        }

        .map-info {
          padding: 80px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background: white;
        }

        .map-info h2 {
          font-size: 42px;
          color: var(--deep-brown);
          margin-bottom: 30px;
        }

        .location-details {
          margin-bottom: 40px;
        }

        .location-item {
          display: flex;
          align-items: start;
          margin-bottom: 25px;
          color: var(--text-dark);
        }

        .location-icon {
          width: 40px;
          height: 40px;
          background: var(--accent-gold);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          margin-right: 20px;
          flex-shrink: 0;
        }

        .location-text h4 {
          color: var(--deep-brown);
          margin-bottom: 5px;
          font-size: 18px;
        }

        .location-text p {
          color: var(--text-light);
          line-height: 1.6;
          margin: 0;
        }

        .map-embed {
          background: var(--deep-brown);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 24px;
          position: relative;
          overflow: hidden;
        }

        .map-embed::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(122, 139, 127, 0.9) 0%, rgba(74, 52, 38, 0.9) 100%);
        }

        .map-placeholder {
          position: relative;
          z-index: 1;
          text-align: center;
        }

        /* Placeholder Images */
        .placeholder-image {
          background: linear-gradient(135deg, var(--primary-brown) 0%, var(--accent-gold) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 600;
          font-size: 16px;
          text-align: center;
          width: 100%;
          height: 100%;
          min-height: 200px;
          position: relative;
        }

        .service-bg.placeholder-image {
          min-height: 400px;
        }

        .team-photo .placeholder-image {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          min-height: auto;
          font-size: 24px;
          font-weight: 700;
        }

        .blog-image .placeholder-image {
          min-height: 250px;
        }

        .venue-main-image .placeholder-image {
          min-height: 500px;
          font-size: 24px;
        }

        .masonry-item .placeholder-image,
        .instagram-item .placeholder-image {
          min-height: 100%;
          border-radius: 15px;
        }

        .block-image .placeholder-image {
          min-height: 500px;
          border-radius: 20px;
          font-size: 18px;
        }

        @media (max-width: 768px) {
          .hero-buttons {
            flex-direction: column;
            gap: 1rem;
          }

          .btn {
            width: 100%;
            text-align: center;
          }

          .block-item,
          .block-item.reverse {
            grid-template-columns: 1fr;
            gap: 40px;
            direction: ltr;
          }

          .venue-display {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .venue-tabs {
            flex-wrap: wrap;
            gap: 10px;
          }

          .venue-tab {
            padding: 10px 20px;
            font-size: 14px;
          }

          .services-cards {
            grid-template-columns: 1fr;
          }

          .packages-grid {
            grid-template-columns: 1fr;
          }

          .package-card.featured {
            transform: none;
          }

          .package-card.featured:hover {
            transform: translateY(-10px);
          }

          .team-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 40px;
          }

          .blog-grid {
            grid-template-columns: 1fr;
          }

          .instagram-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
          }

          .masonry-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
          }

          .masonry-item.large-feature,
          .masonry-item.vertical,
          .masonry-item.medium,
          .masonry-item.horizontal,
          .masonry-item.square,
          .masonry-item.wide,
          .masonry-item.small,
          .masonry-item.medium-vertical,
          .masonry-item.extra-wide {
            grid-column: span 1;
            grid-row: span 2;
          }

          .contact-content {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .contact-details {
            grid-template-columns: 1fr;
            gap: 30px;
          }
        }

        @media (max-width: 480px) {
          .team-grid {
            grid-template-columns: 1fr;
          }

          .instagram-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .masonry-grid {
            grid-template-columns: 1fr;
          }
        }

        /* Beautiful CTA Contact Form Section */
        .cta-contact-section {
          padding: 100px 40px;
          background: linear-gradient(135deg, var(--deep-brown) 0%, var(--primary-brown) 100%);
          position: relative;
          overflow: hidden;
        }

        .cta-contact-section::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(212, 165, 116, 0.1) 0%, transparent 70%);
          animation: rotate 30s linear infinite;
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .cta-contact-container {
          max-width: 800px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .cta-contact-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .cta-contact-header h2 {
          font-size: 48px;
          color: white;
          margin-bottom: 15px;
          letter-spacing: 2px;
        }

        .cta-contact-header .script-font {
          font-size: 28px;
          color: var(--accent-gold);
          margin-bottom: 20px;
        }

        .cta-contact-header p {
          font-size: 18px;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.8;
        }

        .cta-contact-form {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          padding: 50px;
          border-radius: 20px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.3);
        }

        .cta-form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
          margin-bottom: 30px;
        }

        .cta-form-group {
          position: relative;
        }

        .cta-form-group.cta-full-width {
          grid-column: 1 / -1;
        }

        .cta-form-group label {
          display: block;
          margin-bottom: 10px;
          color: var(--text-dark);
          font-size: 14px;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .cta-form-group input,
        .cta-form-group select,
        .cta-form-group textarea {
          width: 100%;
          padding: 15px;
          border: 2px solid rgba(139, 99, 55, 0.1);
          border-radius: 10px;
          font-size: 16px;
          font-family: 'Georgia', serif;
          transition: all 0.3s ease;
          background: white;
        }

        .cta-form-group input:focus,
        .cta-form-group select:focus,
        .cta-form-group textarea:focus {
          outline: none;
          border-color: var(--accent-gold);
          box-shadow: 0 0 0 3px rgba(212, 165, 116, 0.1);
        }

        .cta-form-group textarea {
          resize: vertical;
          min-height: 120px;
        }

        .cta-submit-button {
          background: var(--accent-gold);
          color: white;
          padding: 18px 50px;
          border: none;
          border-radius: 50px;
          font-size: 16px;
          letter-spacing: 2px;
          cursor: pointer;
          transition: all 0.4s ease;
          box-shadow: 0 6px 25px rgba(212, 165, 116, 0.4);
          display: block;
          margin: 40px auto 0;
          position: relative;
          overflow: hidden;
        }

        .cta-submit-button::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: var(--primary-brown);
          transform: translate(-50%, -50%);
          transition: width 0.6s ease, height 0.6s ease;
        }

        .cta-submit-button span {
          position: relative;
          z-index: 1;
        }

        .cta-submit-button:hover::before {
          width: 300px;
          height: 300px;
        }

        .cta-submit-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 30px rgba(212, 165, 116, 0.5);
        }

        /* Mobile responsive for CTA form */
        @media (max-width: 768px) {
          .cta-contact-section {
            padding: 60px 20px;
          }

          .cta-contact-header h2 {
            font-size: 36px;
          }

          .cta-form-row {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .cta-contact-form {
            padding: 30px;
          }
        }

        /* Mobile Responsive Updates for Gallery */
        @media (max-width: 1024px) {
          .gallery-row.row-1,
          .gallery-row.row-2,
          .gallery-row.row-3,
          .gallery-row.row-4 {
            grid-template-columns: 1fr 1fr;
          }

          .gallery-item .gallery-image {
            height: 350px !important;
          }
        }

        @media (max-width: 768px) {
          .real-weddings-header h2 {
            font-size: 36px;
          }

          .gallery-row {
            gap: 20px;
            margin-bottom: 20px;
          }

          .gallery-row.row-1,
          .gallery-row.row-2,
          .gallery-row.row-3,
          .gallery-row.row-4 {
            grid-template-columns: 1fr;
          }

          .gallery-item .gallery-image {
            height: 300px !important;
          }

          .gallery-overlay {
            padding: 25px;
          }

          .gallery-overlay h3 {
            font-size: 24px;
          }

          .gallery-caption {
            padding: 20px;
          }

          .map-container {
            grid-template-columns: 1fr;
          }

          .map-info {
            padding: 40px 20px;
          }
        }

        /* FAQ Section - Design System Applied */
        .faq-section {
          background: var(--soft-white);
        }

        .faq-container {
          max-width: 900px;
          margin: 0 auto;
        }

        .faq-item {
          background: var(--warm-cream);
          margin-bottom: 20px;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 5px 20px rgba(0,0,0,0.05);
          transition: all 0.3s ease;
        }

        .faq-item:hover {
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }

        .faq-question {
          padding: 30px;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: white;
          transition: all 0.3s ease;
        }

        .faq-question:hover {
          background: var(--warm-cream);
        }

        .faq-question h3 {
          font-size: 1.25rem;  /* Design system H4 */
          color: var(--text-dark);
          margin: 0;
        }

        .faq-toggle {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: var(--accent-gold);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 20px;
          transition: transform 0.3s ease;
        }

        .faq-item.active .faq-toggle {
          transform: rotate(45deg);
        }

        .faq-answer {
          padding: 0 30px;
          max-height: 0;
          overflow: hidden;
          transition: all 0.3s ease;
          background: var(--warm-cream);
        }

        .faq-item.active .faq-answer {
          padding: 20px 30px 30px;
          max-height: 500px;
        }

        .faq-answer p {
          font-size: 1rem;      /* Design system body */
          line-height: 1.6;
          color: var(--text-dark);
          margin: 0;
        }

        /* Gallery Section - Design System Applied */
        .gallery-section {
          background: var(--warm-cream);
        }

        .gallery-filters {
          display: flex;
          justify-content: center;
          gap: var(--space-lg);  /* Design system spacing */
          margin-bottom: var(--space-4xl);
          flex-wrap: wrap;
        }

        .filter-btn {
          padding: 12px 30px;
          background: white;
          border: 2px solid var(--accent-gold);
          border-radius: 30px;
          color: var(--primary-brown);
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 14px;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .filter-btn.active,
        .filter-btn:hover {
          background: var(--accent-gold);
          color: white;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--space-xl);  /* Design system spacing */
        }

        .gallery-item {
          position: relative;
          overflow: hidden;
          border-radius: 15px;
          cursor: pointer;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          transition: all 0.4s ease;
          height: 300px;
        }

        .gallery-item:hover {
          transform: scale(1.05);
          box-shadow: 0 15px 40px rgba(0,0,0,0.15);
        }

        .gallery-item.tall {
          grid-row: span 2;
          height: 630px;
        }

        .gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .gallery-item:hover img {
          transform: scale(1.1);
        }

        .gallery-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(180deg, transparent 0%, rgba(44, 36, 22, 0.9) 100%);
          padding: 30px 20px 20px;
          transform: translateY(100%);
          transition: transform 0.4s ease;
        }

        .gallery-item:hover .gallery-overlay {
          transform: translateY(0);
        }

        .gallery-overlay h4 {
          color: var(--warm-cream);
          font-size: 1.25rem;  /* Design system H4 */
          margin-bottom: 0.5rem;
          font-family: var(--font-playfair), 'Georgia', serif;
          font-weight: 500;
        }

        .gallery-overlay p {
          color: rgba(250, 246, 242, 0.8);
          font-size: 0.875rem;  /* Design system small text */
          margin: 0;
          line-height: 1.5;
        }

        /* Footer - Contact Section */
        .footer-contact {
          padding: 100px 50px;
          background: linear-gradient(135deg, var(--text-dark) 0%, var(--sage-green) 100%);
          color: var(--soft-white);
          text-align: center;
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .footer-contact h2 {
          font-size: 48px;
          margin-bottom: 30px;
          letter-spacing: 2px;
          color: var(--soft-white);
        }

        .footer-contact-info {
          font-size: 20px;
          margin-bottom: 40px;
          opacity: 0.9;
          line-height: 1.6;
        }

        .footer-buttons {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }

        .footer-contact-button {
          display: inline-block;
          padding: 15px 40px;
          background: var(--soft-white);
          color: var(--text-dark);
          text-decoration: none;
          font-size: 18px;
          letter-spacing: 2px;
          border-radius: 50px;
          transition: all 0.4s ease;
          font-weight: 500;
        }

        .footer-contact-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(255,255,255,0.3);
          background: var(--accent-gold);
          color: var(--text-dark);
        }

        .footer-address {
          margin-top: var(--space-2xl);
          opacity: 0.8;
          font-size: 1rem;  /* Design system body */
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .footer-contact {
            padding: 80px 20px;
          }
          
          .footer-contact h2 {
            font-size: 36px;
          }
          
          .footer-buttons {
            flex-direction: column;
            align-items: center;
            gap: 15px;
          }
          
          .footer-contact-button {
            width: 100%;
            max-width: 300px;
          }
        }
      `}</style>

      <script dangerouslySetInnerHTML={{
        __html: `
          // FAQ Accordion
          document.addEventListener('DOMContentLoaded', function() {
            document.querySelectorAll('.faq-question').forEach(question => {
              question.addEventListener('click', () => {
                const item = question.parentElement;
                const wasActive = item.classList.contains('active');
                
                // Close all items
                document.querySelectorAll('.faq-item').forEach(faqItem => {
                  faqItem.classList.remove('active');
                });
                
                // Open clicked item if it wasn't active
                if (!wasActive) {
                  item.classList.add('active');
                }
              });
            });

            // Gallery Filter functionality
            document.querySelectorAll('.filter-btn').forEach(btn => {
              btn.addEventListener('click', () => {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                // Add filtering logic here if needed
              });
            });
          });
        `
      }} />
    </>
  )
}

'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header id="header" className={isScrolled ? 'scrolled' : ''}>
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
  )
}
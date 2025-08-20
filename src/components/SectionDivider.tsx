'use client'

import React from 'react'

export interface DividerProps {
  type?: 'fabric' | 'botanical' | 'arch' | 'wood'
  size?: 'subtle' | 'standard' | 'prominent'
  color?: 'dark-to-light' | 'cream-to-white' | 'brown-to-cream' | 'light-to-dark' | 'cream-to-brown' | 'accent-gold' | 'accent-sage'
  animation?: 'slow' | 'standard' | 'fast' | 'none'
  accents?: boolean
  flip?: boolean
  interactive?: boolean
  parallax?: boolean
  className?: string
  children?: React.ReactNode
  sectionId?: string
}

const SectionDivider: React.FC<DividerProps> = ({
  type = 'fabric',
  size = 'standard',
  color = 'dark-to-light',
  animation = 'standard',
  accents = false,
  flip = false,
  interactive = false,
  parallax = false,
  className = '',
  children,
  sectionId,
  ...props
}) => {
  const getDividerClasses = () => {
    const classes = ['section-divider']
    
    // Base divider type
    switch (type) {
      case 'fabric':
        classes.push('divider-flowing-fabric')
        break
      case 'botanical':
        classes.push('divider-botanical')
        if (accents) classes.push('divider-botanical-accents')
        break
      case 'arch':
        classes.push('divider-romantic-arch')
        if (accents) classes.push('divider-accent-hearts')
        break
      case 'wood':
        classes.push('divider-wood-grain')
        break
    }
    
    // Size variant
    classes.push(`divider-${size}`)
    
    // Color variant
    classes.push(`divider-${color}`)
    
    // Animation speed
    if (animation === 'slow') classes.push('divider-slow-animation')
    if (animation === 'fast') classes.push('divider-fast-animation')
    if (animation === 'none') classes.push('divider-no-animation')
    
    // Modifiers
    if (flip) classes.push('divider-flip')
    if (interactive) classes.push('divider-interactive')
    if (parallax) classes.push('divider-parallax')
    
    // Custom className
    if (className) classes.push(className)
    
    return classes.join(' ')
  }

  return (
    <section id={sectionId} className={getDividerClasses()} {...props}>
      {children}
    </section>
  )
}

// Preset configurations for common use cases
export const DividerPresets = {
  heroToAbout: {
    type: 'fabric' as const,
    size: 'prominent' as const,
    color: 'dark-to-light' as const,
    animation: 'slow' as const,
    parallax: true
  },
  
  servicesToVenue: {
    type: 'botanical' as const,
    size: 'standard' as const,
    color: 'cream-to-white' as const,
    accents: true,
    animation: 'standard' as const
  },
  
  venueToPackages: {
    type: 'arch' as const,
    size: 'prominent' as const,
    color: 'accent-gold' as const,
    accents: true,
    animation: 'slow' as const,
    interactive: true
  },
  
  subtleTransition: {
    type: 'wood' as const,
    size: 'subtle' as const,
    color: 'cream-to-white' as const,
    animation: 'none' as const
  },
  
  galleryToFooter: {
    type: 'fabric' as const,
    size: 'standard' as const,
    color: 'cream-to-brown' as const,
    animation: 'standard' as const,
    flip: true
  },
  
  ceremonialHighlight: {
    type: 'arch' as const,
    size: 'prominent' as const,
    color: 'accent-sage' as const,
    accents: true,
    animation: 'slow' as const,
    interactive: true,
    parallax: true
  }
}

export default SectionDivider
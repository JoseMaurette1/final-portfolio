// Animation configuration for the entire application
export const ANIMATION_CONFIG = {
  // Easing functions
  ease: {
    smooth: [0.25, 0.46, 0.45, 0.94],
    bounce: [0.68, -0.55, 0.265, 1.55],
    elastic: [0.175, 0.885, 0.32, 1.275],
  },

  // Duration presets
  duration: {
    fast: 0.2,
    normal: 0.5,
    slow: 0.8,
    verySlow: 1.2,
  },

  // Stagger delays
  stagger: {
    fast: 0.05,
    normal: 0.1,
    slow: 0.15,
    verySlow: 0.2,
  },
}

// Page-level animations
export const PAGE_ANIMATIONS = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: ANIMATION_CONFIG.stagger.slow,
        delayChildren: ANIMATION_CONFIG.stagger.normal,
      },
    },
  },

  section: {
    hidden: {
      opacity: 0,
      y: 30,
      filter: 'blur(10px)',
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      scale: 1,
      transition: {
        duration: ANIMATION_CONFIG.duration.slow,
        ease: ANIMATION_CONFIG.ease.smooth,
      },
    },
  },

  pageTransition: {
    initial: {
      opacity: 0,
      y: 20,
      scale: 0.98,
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: ANIMATION_CONFIG.duration.slow,
        ease: ANIMATION_CONFIG.ease.smooth,
        staggerChildren: ANIMATION_CONFIG.stagger.normal,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.98,
      transition: {
        duration: ANIMATION_CONFIG.duration.fast,
        ease: ANIMATION_CONFIG.ease.smooth,
      },
    },
  },
}

// Component-level animations
export const COMPONENT_ANIMATIONS = {
  item: {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: ANIMATION_CONFIG.duration.normal,
        ease: ANIMATION_CONFIG.ease.smooth,
      },
    },
  },

  card: {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: ANIMATION_CONFIG.duration.slow,
        ease: ANIMATION_CONFIG.ease.smooth,
      },
    },
  },

  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: ANIMATION_CONFIG.stagger.normal,
        delayChildren: ANIMATION_CONFIG.stagger.normal,
      },
    },
  },
}

// Header and footer animations
export const LAYOUT_ANIMATIONS = {
  header: {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: ANIMATION_CONFIG.duration.slow,
        ease: ANIMATION_CONFIG.ease.smooth,
        staggerChildren: ANIMATION_CONFIG.stagger.normal,
      },
    },
  },

  footer: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: ANIMATION_CONFIG.duration.slow,
        ease: ANIMATION_CONFIG.ease.smooth,
        delay: 0.3,
      },
    },
  },
}

// Hover animations
export const HOVER_ANIMATIONS = {
  scale: {
    small: { scale: 1.02 },
    medium: { scale: 1.05 },
    large: { scale: 1.1 },
  },

  lift: {
    small: { y: -3 },
    medium: { y: -5 },
    large: { y: -8 },
  },

  tap: {
    scale: 0.95,
  },
}

// Floating elements animation
export const FLOATING_ANIMATION = {
  animate: {
    y: [0, -30, 0],
    x: [0, 15, 0],
    opacity: [0.3, 0.8, 0.3],
  },
  transition: {
    duration: 20,
    repeat: Infinity,
    ease: 'easeInOut',
  },
}

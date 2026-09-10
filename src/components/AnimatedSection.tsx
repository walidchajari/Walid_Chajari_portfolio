import { motion, useInView } from 'framer-motion'
import { ReactNode, useRef } from 'react'

interface Props {
  children: ReactNode
  className?: string
  delay?: number
}

export default function AnimatedSection({ children, className = '', delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <div ref={ref} className={`relative ${className}`}>
      {/* Scan line — sweeps left→right when element enters viewport */}
      <motion.div
        aria-hidden
        initial={{ scaleX: 0, opacity: 0 }}
        animate={
          inView
            ? {
                scaleX: [0, 1, 1],
                opacity: [0, 0.75, 0],
                transition: {
                  duration: 0.55,
                  delay,
                  times: [0, 0.55, 1],
                  ease: [0.76, 0, 0.24, 1],
                },
              }
            : {}
        }
        style={{
          position: 'absolute',
          top: 0, left: 0, right: 0,
          height: 1,
          transformOrigin: 'left',
          background:
            'linear-gradient(90deg, transparent, rgba(59,130,246,0.7), rgba(8,145,178,0.5), transparent)',
          pointerEvents: 'none',
          zIndex: 10,
        }}
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 26 }}
        animate={
          inView
            ? {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.6,
                  delay: delay + 0.08,
                  ease: [0.16, 1, 0.3, 1],
                },
              }
            : {}
        }
      >
        {children}
      </motion.div>
    </div>
  )
}

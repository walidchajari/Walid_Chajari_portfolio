import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
  delay?: number
}

const variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function AnimatedSection({ children, className = '', delay = 0 }: Props) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={{
        ...variants,
        visible: {
          ...variants.visible,
          transition: { ...variants.visible.transition, delay },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

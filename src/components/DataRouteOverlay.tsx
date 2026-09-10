import { motion, AnimatePresence } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

const LINES = [
  '10110100 01001010 11010010 00101101',
  '01100101 10011010 00110110 11001010',
  '11001010 00101101 10100101 01010110',
]

export default function DataRouteOverlay() {
  const location = useLocation()
  const [active, setActive] = useState(false)
  const [key, setKey] = useState(0)

  useEffect(() => {
    setKey(k => k + 1)
    setActive(true)
    const t = setTimeout(() => setActive(false), 750)
    return () => clearTimeout(t)
  }, [location.pathname])

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          key={key}
          className="fixed inset-0 pointer-events-none flex flex-col items-center justify-center gap-2"
          style={{ zIndex: 9997, background: 'var(--bg)' }}
          initial={{ clipPath: 'inset(0 100% 0 0)' }}
          animate={{ clipPath: 'inset(0 0% 0 0)' }}
          exit={{ clipPath: 'inset(0 0 0 100%)' }}
          transition={{ duration: 0.36, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Scan edge glow */}
          <motion.div
            className="absolute top-0 bottom-0"
            style={{
              width: 3,
              background: 'linear-gradient(to bottom, transparent, var(--accent), var(--accent-2), transparent)',
              filter: 'blur(1.5px)',
              boxShadow: '0 0 12px var(--accent)',
            }}
            initial={{ left: 0 }}
            animate={{ left: '100%' }}
            transition={{ duration: 0.36, ease: [0.76, 0, 0.24, 1] }}
          />

          {/* Binary lines */}
          <div className="space-y-1.5 font-mono text-xs tracking-widest" style={{ color: 'var(--accent)', opacity: 0.22 }}>
            {LINES.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07, duration: 0.2 }}
              >
                {line}
              </motion.div>
            ))}
          </div>

          {/* Progress bar */}
          <motion.div
            className="absolute bottom-8 h-px"
            style={{ width: 120, background: 'var(--surface2)', left: '50%', transform: 'translateX(-50%)' }}
          >
            <motion.div
              className="h-full"
              style={{ background: 'linear-gradient(90deg, var(--accent), var(--accent-2))' }}
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 0.36 }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

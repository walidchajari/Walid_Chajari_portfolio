import { motion } from 'framer-motion'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Projects from '../sections/Projects'
import Skills from '../sections/Skills'
import Experience from '../sections/Experience'
import Research from '../sections/Research'
import Contact from '../sections/Contact'

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0, filter: 'blur(6px)', scale: 0.995 }}
      animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
      exit={{ opacity: 0, filter: 'blur(6px)', scale: 1.005 }}
      transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
    >
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Research />
      <Contact />
    </motion.main>
  )
}

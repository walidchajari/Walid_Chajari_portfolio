import { useEffect, useRef } from 'react'

const CHARS = '01アイウエオ∑∏∫∂∇λμσπ<>{}[]01110100 01100001 01110100 01100001'

interface Props { opacity?: number }

export default function MatrixRain({ opacity = 0.07 }: Props) {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current!
    const ctx = canvas.getContext('2d')!
    let raf: number

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()

    const fontSize = 10
    let columns = Math.floor(canvas.width / fontSize)
    let drops = Array.from({ length: columns }, () => Math.random() * -80)

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = 'rgba(59,130,246,0.55)'
      ctx.font = `${fontSize}px "JetBrains Mono", monospace`

      for (let i = 0; i < drops.length; i++) {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)]
        const y = drops[i] * fontSize
        if (y > 0) ctx.fillText(char, i * fontSize, y)

        if (y > canvas.height && Math.random() > 0.97) drops[i] = 0
        drops[i] += 0.4
      }

      raf = requestAnimationFrame(draw)
    }
    raf = requestAnimationFrame(draw)

    const onResize = () => {
      resize()
      columns = Math.floor(canvas.width / fontSize)
      drops = Array.from({ length: columns }, () => Math.random() * -80)
    }
    window.addEventListener('resize', onResize)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', onResize) }
  }, [])

  return (
    <canvas
      ref={ref}
      aria-hidden
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity, zIndex: 0 }}
    />
  )
}

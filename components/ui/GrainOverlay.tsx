'use client'

import { useEffect, useRef } from 'react'

export function GrainOverlay() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resize()
    window.addEventListener('resize', resize)

    let animationFrame: number

    const drawGrain = () => {
      const imageData = ctx.createImageData(canvas.width, canvas.height)
      const data = imageData.data

      for (let i = 0; i < data.length; i += 4) {
        const value = Math.random() * 30 + 5
        data[i] = value
        data[i + 1] = value
        data[i + 2] = value
        data[i + 3] = Math.random() * 10
      }

      ctx.putImageData(imageData, 0, 0)
      animationFrame = requestAnimationFrame(drawGrain)
    }

    drawGrain()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50 opacity-30 mix-blend-overlay"
      style={{ width: '100vw', height: '100vh' }}
    />
  )
}
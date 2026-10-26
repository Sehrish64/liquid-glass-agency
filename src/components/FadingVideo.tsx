import { useEffect, useRef, useState } from 'react'
import type { CSSProperties } from 'react'

interface FadingVideoProps {
  src: string | string[]
  className?: string
  style?: CSSProperties
}

export default function FadingVideo({ src, className, style }: FadingVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const rafRef = useRef<number | null>(null)
  const [index, setIndex] = useState(0)

  const sources = Array.isArray(src) ? src : [src]
  const currentSrc = sources[index % sources.length]

  const fadeTo = (target: number, duration: number) => {
    const video = videoRef.current
    if (!video) return
    if (rafRef.current) cancelAnimationFrame(rafRef.current)
    const start = parseFloat(video.style.opacity || '0')
    const startTime = performance.now()
    const step = (now: number) => {
      const t = Math.min((now - startTime) / duration, 1)
      const value = start + (target - start) * t
      video.style.opacity = String(value)
      if (t < 1) {
        rafRef.current = requestAnimationFrame(step)
      }
    }
    rafRef.current = requestAnimationFrame(step)
  }

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    video.style.opacity = '0'

    const handleLoadedData = () => {
      fadeTo(1, 500)
      video.play().catch(() => {})
    }
    const handleTimeUpdate = () => {
      if (!video.duration) return
      const remaining = video.duration - video.currentTime
      if (remaining <= 0.55) {
        fadeTo(0, 550)
      }
    }
    const handleEnded = () => {
      if (Array.isArray(src)) {
        setIndex((prev) => (prev + 1) % src.length)
      } else {
        video.currentTime = 0
        video.play().catch(() => {})
        fadeTo(1, 500)
      }
    }

    video.addEventListener('loadeddata', handleLoadedData)
    video.addEventListener('timeupdate', handleTimeUpdate)
    video.addEventListener('ended', handleEnded)
    return () => {
      video.removeEventListener('loadeddata', handleLoadedData)
      video.removeEventListener('timeupdate', handleTimeUpdate)
      video.removeEventListener('ended', handleEnded)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSrc])

  return (
    <video
      ref={videoRef}
      src={currentSrc}
      className={className}
      style={{ opacity: 0, ...style }}
      autoPlay
      muted
      playsInline
      preload="auto"
    />
  )
}

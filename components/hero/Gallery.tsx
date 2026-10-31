import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import GalleryItem from './GalleryItem'
import HeroCTA from './CTA'
import { GALLERY_IMAGES, GALLERY_SIZES } from './constants'

export function Gallery() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const images = gsap.utils.toArray<HTMLElement>('.gallery-image')
      
      images.forEach((img, i) => {
        gsap.fromTo(
          img,
          { scale: 0.8, opacity: 0.3 },
          {
            scale: 1,
            opacity: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: img,
              start: 'top bottom-=20%',
              end: 'top center',
              scrub: 0.5,
            },
          }
        )

        gsap.fromTo(
          img,
          { scale: 1, opacity: 1 },
          {
            scale: 0.8,
            opacity: 0.3,
            ease: 'none',
            scrollTrigger: {
              trigger: img,
              start: 'bottom center',
              end: 'bottom top+=20%',
              scrub: 0.5,
            },
          }
        )
      })

      gsap.to(containerRef.current, {
        y: '-10%',
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative z-10 bg-black min-h-screen"
      style={{ height: '200vh' }}
    >
      <div className="fixed inset-0 bg-black overflow-y-auto">
        <div className="container mx-auto px-4 py-24">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] gap-4 max-w-7xl mx-auto">
            {GALLERY_IMAGES.map((src, index) => (
              <GalleryItem
                key={index}
                src={src}
                index={index}
                size={GALLERY_SIZES[index % GALLERY_SIZES.length]}
              />
            ))}
          </div>
          <HeroCTA />
        </div>
      </div>
    </div>
  )
}
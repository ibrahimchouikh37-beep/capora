import { memo, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface GalleryItemProps {
  src: string
  index: number
  size: string
}

const GalleryItem = memo(function GalleryItem({ src, index, size }: GalleryItemProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <motion.div
      className={`gallery-image relative overflow-hidden ${size}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      whileHover={{ scale: 1.02 }}
    >
      <Image
        src={src}
        alt={`Gallery ${index + 1}`}
        fill
        className={`object-cover transition-transform duration-700 hover:scale-110 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        loading={index < 2 ? 'eager' : 'lazy'}
        priority={index < 2}
        onLoad={() => setIsLoaded(true)}
        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
      />
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-800 animate-pulse" />
      )}
    </motion.div>
  )
})

export default GalleryItem
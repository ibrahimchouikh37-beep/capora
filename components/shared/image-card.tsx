'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { hoverScale } from '@/lib/animations';

interface ImageCardProps {
  image: string;
  title: string;
  description?: string;
  category?: string;
  onClick?: () => void;
}

export default function ImageCard({
  image,
  title,
  description,
  category,
  onClick,
}: ImageCardProps) {
  return (
    <motion.div
      {...hoverScale}
      onClick={onClick}
      className="group relative overflow-hidden rounded-lg cursor-pointer"
    >
      <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-muted">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        {category && (
          <p className="text-xs font-semibold uppercase tracking-wider mb-2 text-accent">
            {category}
          </p>
        )}
        <h3 className="text-lg sm:text-xl font-semibold mb-2 line-clamp-2">{title}</h3>
        {description && (
          <p className="text-sm text-white/80 line-clamp-2">{description}</p>
        )}
      </div>
    </motion.div>
  );
}

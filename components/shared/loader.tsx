'use client';

import { motion } from 'framer-motion';

export default function Loader() {
  return (
    <div className="flex items-center justify-center">
      <div className="relative w-8 h-8">
        <motion.div
          className="absolute inset-0 border-2 border-transparent border-t-primary border-r-primary rounded-full"
          animate={{ rotate: 360 }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        <motion.div
          className="absolute inset-2 border-2 border-transparent border-b-accent rounded-full"
          animate={{ rotate: -360 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>
    </div>
  );
}

'use client';

import { motion, useInView } from 'framer-motion';
import { ReactNode, useRef } from 'react';

interface RevealProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  delay?: number;
  width?: 'fit-content' | '100%';
  className?: string;
  type?: 'fade-up' | 'clip-path' | 'simple-fade';
}

export default function Reveal({
  children,
  direction = 'up',
  duration = 0.8,
  delay = 0.1,
  width = '100%',
  className = '',
  type = 'fade-up',
}: RevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' });

  const getVariants = () => {
    const easeTuple: [number, number, number, number] = [0.16, 1, 0.3, 1];

    if (type === 'simple-fade') {
      return {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      };
    }

    if (type === 'clip-path') {
      const clipDirection = {
        up: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',
        down: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
        left: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
        right: 'polygon(0 0, 0 0, 0 100%, 0 100%)',
        none: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
      }[direction];

      return {
        hidden: {
          clipPath: clipDirection,
          scale: 1.05,
        },
        visible: {
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
          scale: 1,
          transition: {
            clipPath: { duration, ease: easeTuple, delay },
            scale: { duration: duration + 0.4, ease: easeTuple, delay },
          },
        },
      };
    }

    // Default: fade-up (or side fades)
    const offsets = {
      up: { y: 40, x: 0 },
      down: { y: -40, x: 0 },
      left: { y: 0, x: 40 },
      right: { y: 0, x: -40 },
      none: { y: 0, x: 0 },
    }[direction];

    return {
      hidden: { opacity: 0, ...offsets },
      visible: {
        opacity: 1,
        y: 0,
        x: 0,
        transition: {
          duration,
          ease: easeTuple,
          delay,
        },
      },
    };
  };

  if (type === 'clip-path') {
    return (
      <div
        ref={ref}
        style={{ width, overflow: 'hidden', position: 'relative' }}
        className={className}
      >
        <motion.div
          variants={getVariants()}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          style={{ width: '100%', height: '100%' }}
        >
          {children}
        </motion.div>
      </div>
    );
  }

  return (
    <div ref={ref} style={{ width }} className={className}>
      <motion.div
        variants={getVariants()}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {children}
      </motion.div>
    </div>
  );
}

// Helper container for staggered children reveals
interface StaggerContainerProps {
  children: ReactNode;
  delay?: number;
  staggerChildren?: number;
  className?: string;
}

export function StaggerContainer({
  children,
  delay = 0,
  staggerChildren = 0.1,
  className = '',
}: StaggerContainerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: delay,
        staggerChildren,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Child element for StaggerContainer
interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  yOffset?: number;
}

export function StaggerItem({ children, className = '', yOffset = 25 }: StaggerItemProps) {
  const itemVariants = {
    hidden: { opacity: 0, y: yOffset },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
}

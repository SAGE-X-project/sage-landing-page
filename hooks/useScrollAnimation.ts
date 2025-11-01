'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

export function useScrollAnimation() {
  const ref = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.2,
    margin: "0px 0px -100px 0px"
  });

  return { ref, isInView: mounted ? isInView : false };
}

export function useParallax(speed: number = 0.5) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      if (!ref.current) return;
      try {
        const rect = ref.current.getBoundingClientRect();
        const scrolled = window.scrollY;
        const offset = (rect.top + scrolled) * speed;
        ref.current.style.transform = `translateY(${offset}px)`;
      } catch (error) {
        // Silently fail if there's an error
        console.warn('Parallax scroll error:', error);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return ref;
}


import React, { useEffect, useRef, useState } from 'react';

type AnimationType = 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'zoom-in';

interface ScrollAnimationProps {
  children: React.ReactNode;
  animation?: AnimationType;
  duration?: number;
  delay?: number; // in ms
  className?: string;
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({ 
  children, 
  animation = 'fade-up', 
  duration = 800, 
  delay = 0,
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.15, // Trigger when 15% visible
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  const getBaseStyles = () => {
    // We use inline styles for dynamic duration/delay to avoid massive tailwind safelists
    // But we use tailwind classes for the transition properties
    return {
      transitionDuration: `${duration}ms`,
      transitionDelay: `${delay}ms`,
    };
  };

  const getTransformClasses = () => {
    const base = "transition-all ease-out";
    
    if (isVisible) {
      return `${base} opacity-100 translate-y-0 translate-x-0 scale-100`;
    }

    switch (animation) {
      case 'fade-up':
        return `${base} opacity-0 translate-y-12`;
      case 'fade-in':
        return `${base} opacity-0`;
      case 'slide-left':
        return `${base} opacity-0 -translate-x-12`;
      case 'slide-right':
        return `${base} opacity-0 translate-x-12`;
      case 'zoom-in':
        return `${base} opacity-0 scale-90`;
      default:
        return `${base} opacity-0`;
    }
  };

  return (
    <div 
      ref={elementRef} 
      className={`${getTransformClasses()} ${className}`}
      style={getBaseStyles()}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;

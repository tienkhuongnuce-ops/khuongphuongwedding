import React, { useEffect, useRef, useState } from 'react';

type AnimationVariant = 'fade-up' | 'fade-left' | 'fade-right' | 'zoom-in';

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  variant?: AnimationVariant;
  delay?: number; // in milliseconds
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({ 
  children, 
  className = "", 
  variant = 'fade-up',
  delay = 0 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add a small delay if specified
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          
          // Unobserve after animating once to keep it visible
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        threshold: 0, // Trigger as soon as any pixel is visible
        rootMargin: '0px 0px -20px 0px', // Trigger slightly before the absolute bottom
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  // Define initial and final states based on variant
  const getTransformClasses = () => {
    switch (variant) {
      case 'fade-left':
        // Starts from the right, moves to center
        return isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20';
      case 'fade-right':
         // Starts from the left, moves to center
        return isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20';
      case 'zoom-in':
        return isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90';
      case 'fade-up':
      default:
        // Starts lower, moves up
        return isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20';
    }
  };

  return (
    <div 
      ref={ref} 
      // Added 'transform' and 'will-change-transform' to ensure browser optimizes the animation
      className={`transform transition-all duration-1000 ease-out will-change-transform ${getTransformClasses()} ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;
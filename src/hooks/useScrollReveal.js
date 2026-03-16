import { useEffect, useRef, useState } from "react";

/**
 * useScrollReveal - detects when an element enters the viewport and triggers animation.
 * @param {string} animationClass - CSS class to add when element is visible (default: "revealed")
 * @param {number} threshold - how much of element must be visible (0.0 - 1.0)
 */
export function useScrollReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Only animate once
        }
      },
      { threshold }
    );

    const el = ref.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [threshold]);

  return { ref, isVisible };
}

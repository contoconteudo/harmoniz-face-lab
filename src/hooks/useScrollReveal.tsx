import { useEffect, useRef, useState } from "react";

export const useScrollReveal = (threshold = 0.15) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
};

export const revealClass = (isVisible: boolean, delay = 0) =>
  `transition-all duration-700 ease-out ${
    isVisible
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-6"
  } ${delay ? `delay-[${delay}ms]` : ""}`;

// Pre-defined delay style for dynamic delays (Tailwind can't handle dynamic delay classes)
export const revealStyle = (isVisible: boolean, delay = 0): React.CSSProperties => ({
  transition: `all 0.7s ease-out ${delay}ms`,
  opacity: isVisible ? 1 : 0,
  transform: isVisible ? "translateY(0)" : "translateY(24px)",
});

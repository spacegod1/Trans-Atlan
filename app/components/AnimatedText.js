"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimatedText = ({
  text,
  className = "",
  tag = "h3",
  delay = 0.05,
  duration = 0.6,
  ease = "power3.out",
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const chars = containerRef.current.querySelectorAll('.char');
    
    // Set initial state
    gsap.set(chars, { opacity: 0, y: 50 });

    // Create scroll-triggered animation
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 80%",
      once: true,
      onEnter: () => {
        gsap.to(chars, {
          opacity: 1,
          y: 0,
          duration: duration,
          ease: ease,
          stagger: delay,
        });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === containerRef.current) st.kill();
      });
    };
  }, [text, delay, duration, ease]);

  const renderText = () => {
    return text.split('').map((char, index) => (
      <span key={index} className="char inline-block" style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}>
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  const TagComponent = tag;

  return (
    <TagComponent ref={containerRef} className={className}>
      {renderText()}
    </TagComponent>
  );
};

export default AnimatedText;

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Snow({ children }: { children: React.ReactNode }) {
  const snowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const snow = snowRef.current;

    if (snow) {
      gsap.to(Array.from(snow.children), {
        y: "100vh",
        repeat: -1,
        duration: 5,
        ease: "linear",
        stagger: {
          each: 0.1,
          repeat: -1,
        },
      });
    }
  }, []);

  return (
    <div className="h-screen overflow-x-hidden">
      <div ref={snowRef} className="absolute inset-0 pointer-events-none z-10">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              top: `${Math.random() * -100}vh`,
              left: `${Math.random() * 100}vw`,
              width: "5px",
              height: "5px",
            }}
          />
        ))}
      </div>
      {children}
    </div>
  );
}
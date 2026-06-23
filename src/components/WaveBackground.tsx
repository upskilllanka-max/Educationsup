import { useState, useEffect } from "react";

export function WaveBackground() {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      // Map mouse position to range [-1, 1]
      const nx = (e.clientX / innerWidth) * 2 - 1;
      const ny = (e.clientY / innerHeight) * 2 - 1;
      // Scale coordinates for smooth shifting (different multipliers per depth layer)
      setMouseOffset({
        x: nx,
        y: ny,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-80 select-none">
      {/* Dynamic Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px]" />

      {/* Wave Layer 1 (Furthest Back - Cyber Green) */}
      <div
        className="absolute inset-0 transition-transform duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform"
        style={{
          transform: `translate3d(${mouseOffset.x * -16}px, ${mouseOffset.y * -12}px, 0) scale(1.05)`,
        }}
      >
        <svg
          className="absolute -bottom-[10%] left-[-20%] w-[140%] h-[80%] opacity-35 dark:opacity-20 animate-wave-slow pointer-events-none"
          viewBox="0 0 1440 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="wave1-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00e5a0" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#00c880" stopOpacity="0.3" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0,224 C288,128 576,320 864,256 C1152,192 1296,64 1440,128 L1440,800 L0,800 Z"
            fill="url(#wave1-grad)"
          />
        </svg>
      </div>

      {/* Wave Layer 2 (Middle Back - Electric Violet) */}
      <div
        className="absolute inset-0 transition-transform duration-[1000ms] ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform"
        style={{
          transform: `translate3d(${mouseOffset.x * 24}px, ${mouseOffset.y * -20}px, 0) scale(1.08)`,
        }}
      >
        <svg
          className="absolute -bottom-[5%] left-[-10%] w-[130%] h-[75%] opacity-40 dark:opacity-25 animate-wave-medium pointer-events-none"
          viewBox="0 0 1440 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="wave2-grad" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#a855f7" stopOpacity="0.75" />
              <stop offset="60%" stopColor="#c084fc" stopOpacity="0.25" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0,160 C144,224 288,96 432,128 C576,160 720,320 864,288 C1008,256 1152,96 1296,64 C1440,32 1440,32 1440,32 L1440,800 L0,800 Z"
            fill="url(#wave2-grad)"
          />
        </svg>
      </div>

      {/* Wave Layer 3 (Middle Front - Deep Sky Blue) */}
      <div
        className="absolute inset-0 transition-transform duration-[1200ms] ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform"
        style={{
          transform: `translate3d(${mouseOffset.x * -32}px, ${mouseOffset.y * 18}px, 0) scale(1.1)`,
        }}
      >
        <svg
          className="absolute -bottom-[12%] left-[-15%] w-[135%] h-[78%] opacity-35 dark:opacity-20 animate-wave-fast pointer-events-none"
          viewBox="0 0 1440 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="wave3-grad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0,96 C144,192 288,256 432,224 C576,192 720,64 864,128 C1008,192 1152,320 1296,256 C1440,192 1440,192 1440,192 L1440,800 L0,800 Z"
            fill="url(#wave3-grad)"
          />
        </svg>
      </div>

      {/* Wave Layer 4 (Foremost - Elegant Amber) */}
      <div
        className="absolute inset-0 transition-transform duration-[1400ms] ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform"
        style={{
          transform: `translate3d(${mouseOffset.x * 12}px, ${mouseOffset.y * 28}px, 0) scale(1.05)`,
        }}
      >
        <svg
          className="absolute -bottom-[8%] left-[-25%] w-[150%] h-[70%] opacity-25 dark:opacity-15 animate-wave-extra pointer-events-none"
          viewBox="0 0 1440 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="wave4-grad" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.6" />
              <stop offset="60%" stopColor="#f59e0b" stopOpacity="0.15" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0,288 C144,320 288,224 432,224 C576,224 720,320 864,288 C1008,256 1152,192 1296,224 C1440,256 1440,256 1440,256 L1440,800 L0,800 Z"
            fill="url(#wave4-grad)"
          />
        </svg>
      </div>

      {/* Embedded Ambient Orbs that rotate softly to add extra floating dust/glow depth */}
      <div 
        className="absolute bottom-[20%] left-[10%] w-[35vw] h-[35vw] rounded-full mix-blend-screen pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0, 229, 160, 0.15) 0%, transparent 70%)',
          transform: `translate3d(${mouseOffset.x * -20}px, ${mouseOffset.y * -15}px, 0)`,
          filter: 'blur(120px)',
          animation: 'drift-slow 22s infinite alternate ease-in-out'
        }}
      />
      <div 
        className="absolute top-[30%] right-[15%] w-[40vw] h-[40vw] rounded-full mix-blend-screen pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.13) 0%, transparent 70%)',
          transform: `translate3d(${mouseOffset.x * 30}px, ${mouseOffset.y * -25}px, 0)`,
          filter: 'blur(140px)',
          animation: 'drift-medium 18s infinite alternate-reverse ease-in-out'
        }}
      />
    </div>
  );
}

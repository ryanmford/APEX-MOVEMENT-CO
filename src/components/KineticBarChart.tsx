import React, { useRef, useState, useEffect } from 'react';
import { motion, useSpring, useTransform, useMotionValue } from 'motion/react';
import { useAppContext } from '../contexts/AppContext';

export function KineticBarChart() {
  const { theme } = useAppContext();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Mock data for progression over 12 months
  const data = [12, 18, 25, 30, 42, 55, 68, 72, 85, 90, 95, 100];
  const maxVal = Math.max(...data);

  return (
    <div 
      className="w-full h-full min-h-[250px] md:min-h-[300px] flex items-end justify-between gap-1 p-4 md:p-8 relative"
      ref={containerRef}
      onMouseLeave={() => {
        setHoveredIndex(null);
      }}
    >
      {/* Background grid lines */}
      <div className="absolute inset-0 p-4 md:p-8 flex flex-col justify-between pointer-events-none opacity-20">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className={`w-full h-px ${theme === 'dark' ? 'bg-white' : 'bg-black'}`} />
        ))}
      </div>

      {data.map((val, i) => {
        // Calculate dynamic height
        const heightPercent = (val / maxVal) * 100;
        
        // Determine distance from hovered index
        let distance = 0;
        if (hoveredIndex !== null) {
          distance = Math.abs(hoveredIndex - i);
        }

        // Apply macOS dock-like scaling based on distance
        let scaleY = 1;
        let opacity = 0.5;
        if (hoveredIndex !== null) {
          if (distance === 0) { scaleY = 1.1; opacity = 1; }
          else if (distance === 1) { scaleY = 1.05; opacity = 0.8; }
          else if (distance === 2) { scaleY = 1.02; opacity = 0.6; }
          else { opacity = 0.3; }
        }

        return (
          <motion.div
            key={i}
            className={`relative flex-1 rounded-t-sm origin-bottom ${theme === 'dark' ? 'bg-amber-500' : 'bg-amber-500'}`}
            initial={{ height: 0, opacity: 0 }}
            whileInView={{ height: `${heightPercent}%`, opacity: 0.5 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ 
              height: { type: "spring", stiffness: 50, damping: 15, delay: i * 0.05 },
              opacity: { duration: 0.5, delay: i * 0.05 }
            }}
            animate={hoveredIndex !== null ? { 
              scaleY, 
              opacity 
            } : { 
              scaleY: 1, 
              opacity: 0.5 
            }}
            onMouseEnter={() => setHoveredIndex(i)}
            style={{
              minHeight: '2px'
            }}
          >
            {/* Tooltip on hover */}
            {hoveredIndex === i && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: -25 }}
                className={`absolute -top-4 left-1/2 -translate-x-1/2 text-[10px] font-black pointer-events-none whitespace-nowrap ${theme === 'dark' ? 'text-white' : 'text-black'}`}
              >
                {val} pts
              </motion.div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}

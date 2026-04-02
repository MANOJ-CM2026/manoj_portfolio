"use client";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";

// Exact unique photos without repetition
const achievementsPhotos = [
  "/images/achievements/award-1.jpg",
  "/images/achievements/award-2.jpg",
  "/images/achievements/award-3.jpg",
  "/images/achievements/award-4.jpg",
  "/images/achievements/award-5.jpg",
  "/images/achievements/award-6.jpeg",
  "/images/achievements/award-7.jpeg",
  "/images/achievements/award-8.jpeg"
];

const Achievements = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const items = container.querySelectorAll<HTMLElement>('.globe-item');
    // Because we have fewer items (8), we drastically increase the radius and node size to make it feel epic
    const radius = window.innerWidth < 768 ? 140 : 250; 
    let mouseX = 0;
    let mouseY = 0;
    
    // Physics variables
    let targetRotationX = 0;
    let targetRotationY = 0;
    let currentRotationX = 0;
    let currentRotationY = 0;
    
    // Base auto-movement
    const baseSpeedX = -0.0008;
    const baseSpeedY = -0.002;
    let isInteracting = false;
    let isHoveringNode = false;

    // Advanced Golden Spiral distribution (perfect for small numbers of items like 8)
    const positions: {x: number, y: number, z: number}[] = [];
    const n = items.length;
    
    for (let i = 0; i < n; i++) {
      // Golden ratio algorithm for optimal spherical spread
      const phi = Math.acos(1 - 2 * (i + 0.5) / n);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      
      positions.push({
        x: radius * Math.cos(theta) * Math.sin(phi),
        y: radius * Math.sin(theta) * Math.sin(phi),
        z: radius * Math.cos(phi)
      });
    }

    let animId: number;
    let time = 0;

    const renderLoop = () => {
      time += 0.015; // Drives the organic 'breathing' wave

      // 1. Calculate Target Physics (Fluid Inertia)
      if (!isHoveringNode) {
        targetRotationY += baseSpeedY;
        targetRotationX += baseSpeedX;
      }

      if (isInteracting && !isHoveringNode) {
        targetRotationY += mouseX * 0.0001;
        targetRotationX -= mouseY * 0.0001;
      }

      // Linear Interpolation (Lerp) creates the ultra-smooth sliding weight effect
      currentRotationX += (targetRotationX - currentRotationX) * 0.06;
      currentRotationY += (targetRotationY - currentRotationY) * 0.06;

      const cosY = Math.cos(currentRotationY);
      const sinY = Math.sin(currentRotationY);
      const cosX = Math.cos(currentRotationX);
      const sinX = Math.sin(currentRotationX);
      
      // Floating offset to give the illusion of zero gravity
      const breatheY = Math.sin(time) * 12;

      items.forEach((item, i) => {
        const p = positions[i];
        
        // Compute 3D transformations dynamically
        let x1 = p.x * cosY - p.z * sinY;
        let z1 = p.z * cosY + p.x * sinY;
        
        let y1 = p.y * cosX - z1 * sinX;
        let z2 = z1 * cosX + p.y * sinX;

        // Cinematic projection formulas
        const perspective = 900;
        const depth = z2 + radius; // 0 to 2*radius
        const scale = perspective / (perspective - z2);
        const alpha = depth / (2 * radius); // Maps depth to 0..1
        
        // Depth-of-Field & Lighting Optics
        const brightness = 0.5 + (alpha * 0.5); // Back is darker
        const blurAmount = (1 - alpha) * 8; // Back is out of focus

        const isHoveredLocal = item.dataset.hovered === 'true';
        const finalScale = isHoveredLocal ? scale * 1.15 : scale;
        
        item.style.transform = `translate(-50%, -50%) translate3d(${x1}px, ${y1 + breatheY}px, 0) scale(${finalScale})`;
        item.style.zIndex = Math.round(depth).toString();
        
        // Rendering physical traits based on distance z-index
        if (isHoveredLocal) {
            item.style.filter = `brightness(1.1) drop-shadow(0 20px 40px rgba(234, 88, 12, 0.5))`;
            item.style.opacity = '1';
        } else {
            item.style.filter = `blur(${blurAmount}px) brightness(${brightness})`;
            item.style.opacity = (alpha * 0.7 + 0.3).toString();
        }
      });

      animId = requestAnimationFrame(renderLoop);
    };

    const handleMouseMove = (e: MouseEvent) => {
      isInteracting = true;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      mouseX = e.clientX - (rect.left + rect.width / 2);
      mouseY = e.clientY - (rect.top + rect.height / 2);
    };

    const handleMouseLeave = () => {
        isInteracting = false;
        mouseX = 0;
        mouseY = 0;
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    // Dynamic focus capabilities
    items.forEach(item => {
        item.addEventListener('mouseenter', () => {
            isHoveringNode = true;
            item.dataset.hovered = 'true';
        });
        item.addEventListener('mouseleave', () => {
            isHoveringNode = false;
            item.dataset.hovered = 'false';
        });
    });

    animId = requestAnimationFrame(renderLoop);

    return () => {
      cancelAnimationFrame(animId);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      // Clean up item listeners
      items.forEach(item => {
          item.replaceWith(item.cloneNode(true));
      });
    };
  }, []);

  return (
    <section>
      <div className="bg-white overflow-hidden">
        <div className="container overflow-visible">
          <div className="py-16 xl:py-32">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16"
            >
              <h2>Achievements</h2>
              <p className="text-xl text-orange-500">( 05 )</p>
            </motion.div>
            
            <div className="w-full flex justify-center items-center py-10 lg:py-32 relative z-10">
               {/* Advanced Anti-Gravity Sphere Engine Container */}
               <div 
                 ref={containerRef}
                 className="relative w-[340px] h-[340px] md:w-[600px] md:h-[600px] flex justify-center items-center cursor-default"
               >
                 {/* Ethereal Glow effect behind the globe */}
                 <div className="absolute inset-0 m-auto w-[70%] h-[70%] bg-gradient-to-tr from-orange-500/10 to-transparent rounded-full blur-[80px] -z-10 animate-pulse duration-3000" />
                 <div className="absolute inset-0 m-auto w-[40%] h-[40%] bg-black/5 rounded-full blur-[40px] -z-10" />

                 {achievementsPhotos.map((photo, i) => (
                   <motion.div 
                     key={i} 
                     initial={{ opacity: 0, scale: 0 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.8, delay: i * 0.1, type: "spring" }}
                     className="globe-item absolute left-1/2 top-1/2 w-[90px] h-[90px] md:w-[150px] md:h-[150px] rounded-full overflow-hidden border-[3px] border-white ring-2 ring-orange-500/50 bg-white shadow-2xl flex justify-center items-center transition-[filter,opacity] duration-300"
                   >
                     <Image 
                       src={photo} 
                       alt={`Achievement Award ${i+1}`} 
                       fill
                       className="object-cover pointer-events-none"
                     />
                     {/* Premium Glass reflection overlay */}
                     <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent opacity-50 z-10 pointer-events-none rounded-full" />
                   </motion.div>
                 ))}
               </div>
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mt-6 lg:mt-12"
            >
               <p className="text-gray-500 italic flex items-center justify-center gap-2">
                 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                   <path d="M12 5v14M5 12h14"></path>
                 </svg>
                 Explore the orbit array. Hover an award to pause the gyroscope.
               </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;

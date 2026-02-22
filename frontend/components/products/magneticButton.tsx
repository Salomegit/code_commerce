import React, { useRef, useState, ReactNode, MouseEvent } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

export function MagneticButton({ children, className, href = "#", onClick }: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPos({ x: x * 0.35, y: y * 0.35 });
  };

  const reset = () => { setPos({ x: 0, y: 0 }); setHovered(false); };

  return (
    <a
      ref={ref}
      href={href}
      onClick={onClick}  
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={reset}
      className={className}
      style={{
        transform: `translate(${pos.x}px, ${pos.y}px) scale(${hovered ? 1.08 : 1})`,
        transition: hovered ? "transform 0.15s ease" : "transform 0.4s cubic-bezier(.23,1,.32,1)",
        display: "inline-block",
      }}
    >
      {children}
    </a>
  );
}
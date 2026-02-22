import React, { useRef, useState, useEffect } from "react";

type CounterProps = {
  to: number;
  suffix?: string;
};

export function Counter({ to, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        let start = 0;
        const step = Math.ceil(to / 60);
        const timer = setInterval(() => {
          start += step;
          if (start >= to) { setCount(to); clearInterval(timer); }
          else setCount(start);
        }, 16);
      }
    });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [to]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}
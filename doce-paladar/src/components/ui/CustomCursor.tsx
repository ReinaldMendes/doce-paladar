"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const over = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      setIsHovering(
        el.closest("a, button, [data-cursor-hover]") !== null
      );
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);

  return (
    <>
      {/* Main dot */}
      <motion.div
        className="fixed top-0 left-0 z-[99999] pointer-events-none"
        animate={{ x: pos.x - 6, y: pos.y - 6 }}
        transition={{ type: "spring", stiffness: 800, damping: 35 }}
      >
        <div
          className="w-3 h-3 rounded-full"
          style={{ background: "var(--rose-deep)", opacity: 0.9 }}
        />
      </motion.div>

      {/* Trailing ring */}
      <motion.div
        className="fixed top-0 left-0 z-[99998] pointer-events-none"
        animate={{
          x: pos.x - (isHovering ? 20 : 16),
          y: pos.y - (isHovering ? 20 : 16),
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 20 }}
      >
        <div
          className="rounded-full border"
          style={{
            width: isHovering ? 40 : 32,
            height: isHovering ? 40 : 32,
            borderColor: "var(--rose-medium)",
            opacity: 0.5,
            transition: "width 0.2s, height 0.2s",
          }}
        />
      </motion.div>
    </>
  );
}

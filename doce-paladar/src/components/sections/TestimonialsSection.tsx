"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Testimonial } from "@/types/content";

interface Props {
  testimonials: Testimonial[];
}

export function TestimonialsSection({ testimonials }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const navigate = (dir: number) => {
    setDirection(dir);
    setCurrent((c) => (c + dir + testimonials.length) % testimonials.length);
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 60 : -60,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({
      x: dir > 0 ? -60 : 60,
      opacity: 0,
    }),
  };

  return (
    <section
      id="depoimentos"
      className="py-32 px-6"
      style={{ background: "var(--nude-light)" }}
    >
      <div className="max-w-4xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span
            className="font-body text-xs tracking-[0.3em] uppercase mb-3 block"
            style={{ color: "var(--rose-deep)" }}
          >
            Depoimentos
          </span>
          <h2
            className="font-display text-4xl md:text-6xl italic"
            style={{ color: "var(--chocolate)" }}
          >
            O que dizem sobre{" "}
            <span className="shimmer-text">nós</span>
          </h2>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Main card */}
          <div
            className="relative rounded-[2.5rem] p-10 md:p-14 overflow-hidden"
            style={{
              background: "white",
              boxShadow: "0 20px 80px rgba(107,74,62,0.08)",
              border: "1px solid rgba(242,196,192,0.3)",
            }}
          >
            {/* Large quote */}
            <div
              className="absolute top-8 left-10 font-display text-[8rem] leading-none opacity-10 pointer-events-none"
              style={{ color: "var(--rose-deep)" }}
            >
              "
            </div>

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonials[current].stars }).map((_, i) => (
                    <span key={i} style={{ color: "var(--rose-deep)" }}>★</span>
                  ))}
                </div>

                {/* Text */}
                <p
                  className="font-display text-xl md:text-2xl italic leading-relaxed mb-8"
                  style={{ color: "var(--chocolate)" }}
                >
                  "{testimonials[current].text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center font-display text-xl text-white"
                    style={{ background: "var(--rose-deep)" }}
                  >
                    {testimonials[current].name[0]}
                  </div>
                  <div>
                    <p
                      className="font-body font-medium text-sm"
                      style={{ color: "var(--chocolate)" }}
                    >
                      {testimonials[current].name}
                    </p>
                    <p
                      className="font-body text-xs"
                      style={{ color: "var(--mocha)", opacity: 0.6 }}
                    >
                      {testimonials[current].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                  }}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === current ? 24 : 8,
                    height: 8,
                    background: i === current ? "var(--rose-deep)" : "var(--rose-soft)",
                  }}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-3">
              <button
                onClick={() => navigate(-1)}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{
                  border: "1px solid var(--rose-medium)",
                  color: "var(--rose-deep)",
                }}
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => navigate(1)}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{
                  background: "var(--rose-deep)",
                  color: "white",
                }}
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </motion.div>

        {/* All reviews grid (desktop extra) */}
        <div className="hidden lg:grid grid-cols-4 gap-4 mt-12">
          {testimonials.map((t, i) => (
            <motion.button
              key={i}
              onClick={() => {
                setDirection(i > current ? 1 : -1);
                setCurrent(i);
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + i * 0.07 }}
              className="rounded-2xl p-4 text-left transition-all duration-200"
              style={{
                background: current === i ? "white" : "rgba(242,196,192,0.1)",
                border: `1px solid ${current === i ? "rgba(201,123,123,0.3)" : "transparent"}`,
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center text-xs text-white font-body"
                  style={{ background: "var(--rose-deep)" }}
                >
                  {t.name[0]}
                </div>
                <span className="font-body text-xs font-medium" style={{ color: "var(--mocha)" }}>
                  {t.name}
                </span>
              </div>
              <p
                className="font-body text-[11px] leading-relaxed line-clamp-2"
                style={{ color: "var(--mocha)", opacity: 0.6 }}
              >
                {t.text}
              </p>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}

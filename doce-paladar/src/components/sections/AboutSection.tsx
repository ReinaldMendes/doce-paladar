"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { AboutContent } from "@/types/content";

interface Props {
  content: AboutContent;
  isEditing: boolean;
  onEdit: (field: string, value: string | string[]) => void;
}

export function AboutSection({ content, isEditing, onEdit }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" className="py-32 px-6 overflow-hidden" style={{ background: "var(--nude-light)" }}>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center" ref={ref}>
        
        {/* Left — Visual */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Background shape */}
          <div
            className="absolute inset-0 rounded-[3rem] -rotate-3"
            style={{ background: "rgba(242,196,192,0.25)" }}
          />

          {/* Main image area */}
          <div
            className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5]"
            style={{
              background: "linear-gradient(135deg, var(--rose-blush) 0%, var(--nude-medium) 100%)",
              boxShadow: "0 30px 80px rgba(107,74,62,0.1)",
            }}
          >
            {/* Decorative content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-8">
              <motion.div
                className="text-8xl"
                animate={{ rotate: [0, 5, -3, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              >
                👩‍🍳
              </motion.div>

              <div className="text-center">
                <p className="font-script text-3xl" style={{ color: "var(--rose-deep)" }}>
                  Gabriela Carmo
                </p>
                <p className="font-body text-sm mt-1" style={{ color: "var(--mocha)", opacity: 0.7 }}>
                  Confeiteira & Criadora
                </p>
              </div>

              {/* Stats row */}
              <div className="flex gap-8 mt-4">
                {[
                  { num: "5+", label: "Anos" },
                  { num: "200+", label: "Clientes" },
                  { num: "∞", label: "Amor" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <p
                      className="font-display text-3xl font-bold"
                      style={{ color: "var(--rose-deep)" }}
                    >
                      {s.num}
                    </p>
                    <p
                      className="font-body text-xs tracking-wider uppercase"
                      style={{ color: "var(--mocha)", opacity: 0.6 }}
                    >
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative elements overlay */}
            <div className="absolute top-6 right-6 text-3xl animate-float">🌸</div>
            <div className="absolute bottom-6 left-6 text-2xl animate-float" style={{ animationDelay: "2s" }}>✨</div>
          </div>

          {/* Badge */}
          <motion.div
            className="absolute -bottom-6 -right-6 glass-card rounded-2xl px-5 py-3 shadow-xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <p
              className="font-body text-xs font-medium"
              style={{ color: "var(--rose-deep)" }}
            >
              🏆 {isEditing ? (
                <input
                  className="bg-transparent outline-none"
                  value={content.badge}
                  onChange={(e) => onEdit("badge", e.target.value)}
                />
              ) : content.badge}
            </p>
          </motion.div>
        </motion.div>

        {/* Right — Text */}
        <motion.div
          className="flex flex-col gap-6"
          initial={{ opacity: 0, x: 60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        >
          <div>
            <span
              className="font-body text-xs tracking-[0.3em] uppercase"
              style={{ color: "var(--rose-deep)" }}
            >
              Nossa história
            </span>
          </div>

          <h2
            className="font-display text-4xl md:text-5xl italic leading-tight"
            style={{ color: "var(--chocolate)" }}
          >
            {isEditing ? (
              <textarea
                className="bg-transparent outline-none w-full resize-none font-display text-4xl md:text-5xl italic"
                value={content.title}
                onChange={(e) => onEdit("title", e.target.value)}
                rows={2}
                style={{ color: "var(--chocolate)" }}
              />
            ) : (
              content.title.split("\n").map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))
            )}
          </h2>

          <div
            className="w-12 h-0.5"
            style={{ background: "linear-gradient(90deg, var(--rose-deep), transparent)" }}
          />

          <div className="flex flex-col gap-4">
            {content.paragraphs.map((para, i) => (
              <p
                key={i}
                className="font-body text-base leading-[1.8]"
                style={{ color: "var(--mocha)", opacity: 0.85 }}
              >
                {isEditing ? (
                  <textarea
                    className="bg-transparent outline-none w-full resize-none font-body text-base"
                    value={para}
                    onChange={(e) => {
                      const updated = [...content.paragraphs];
                      updated[i] = e.target.value;
                      onEdit("paragraphs", updated);
                    }}
                    rows={3}
                    style={{ color: "var(--mocha)" }}
                  />
                ) : (
                  para
                )}
              </p>
            ))}
          </div>

          {/* Signature */}
          <div className="flex items-center gap-3 mt-2">
            <div
              className="w-10 h-px"
              style={{ background: "var(--rose-medium)" }}
            />
            <span className="font-script text-2xl" style={{ color: "var(--rose-deep)" }}>
              Gabriela Carmo
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

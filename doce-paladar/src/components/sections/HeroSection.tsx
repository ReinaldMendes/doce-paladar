"use client";

import { motion } from "framer-motion";
import { HeroContent } from "@/types/content";

interface Props {
  content: HeroContent;
  isEditing: boolean;
  onEdit: (key: keyof HeroContent, value: string) => void;
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

export function HeroSection({ content, isEditing, onEdit }: Props) {
  const whatsappUrl = `https://wa.me/5541999999999?text=${encodeURIComponent("Olá Gabriela! Vim pelo site e gostaria de fazer um pedido 🌸")}`;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "var(--cream)" }}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large soft circle - top right */}
        <motion.div
          className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(249,232,227,0.6) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.05, 1], opacity: [0.6, 0.8, 0.6] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Soft circle - bottom left */}
        <motion.div
          className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(242,196,192,0.4) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        {/* Floating petals */}
        {[
          { top: "15%", left: "8%", size: 40, delay: 0 },
          { top: "70%", left: "5%", size: 28, delay: 1.5 },
          { top: "25%", right: "10%", size: 50, delay: 0.8 },
          { top: "60%", right: "8%", size: 32, delay: 2.2 },
          { top: "45%", left: "15%", size: 22, delay: 3 },
        ].map((petal, i) => (
          <motion.div
            key={i}
            className="absolute opacity-20"
            style={{ top: petal.top, left: (petal as any).left, right: (petal as any).right }}
            animate={{
              y: [0, -15, 0],
              rotate: [0, 10, -5, 0],
              opacity: [0.15, 0.3, 0.15],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: petal.delay,
            }}
          >
            <svg
              width={petal.size}
              height={petal.size}
              viewBox="0 0 50 50"
              fill="none"
            >
              <ellipse
                cx="25"
                cy="25"
                rx="20"
                ry="12"
                fill="var(--rose-medium)"
                transform="rotate(0 25 25)"
              />
              <ellipse
                cx="25"
                cy="25"
                rx="20"
                ry="12"
                fill="var(--rose-soft)"
                opacity="0.6"
                transform="rotate(60 25 25)"
              />
              <ellipse
                cx="25"
                cy="25"
                rx="20"
                ry="12"
                fill="var(--rose-medium)"
                opacity="0.4"
                transform="rotate(120 25 25)"
              />
            </svg>
          </motion.div>
        ))}

        {/* Thin decorative lines */}
        <div
          className="absolute top-1/3 left-0 w-24 h-px"
          style={{ background: "linear-gradient(90deg, transparent, var(--rose-soft))" }}
        />
        <div
          className="absolute top-2/3 right-0 w-24 h-px"
          style={{ background: "linear-gradient(90deg, var(--rose-soft), transparent)" }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-16 items-center w-full">
        {/* Left — Text */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-6"
        >
          {/* Tagline pill */}
          <motion.div variants={fadeUp}>
            <span
              className="inline-flex items-center gap-2 font-body text-xs tracking-[0.2em] uppercase px-4 py-2 rounded-full"
              style={{
                background: "rgba(242,196,192,0.3)",
                color: "var(--mocha)",
                border: "1px solid rgba(201,123,123,0.2)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--rose-deep)" }} />
              {isEditing ? (
                <input
                  className="bg-transparent outline-none w-48"
                  value={content.tagline}
                  onChange={(e) => onEdit("tagline", e.target.value)}
                />
              ) : (
                content.tagline
              )}
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            variants={fadeUp}
            className="font-display text-5xl md:text-7xl leading-[1.05]"
            style={{ color: "var(--chocolate)" }}
          >
            {isEditing ? (
              <textarea
                className="bg-transparent outline-none w-full resize-none font-display text-5xl md:text-7xl leading-[1.05]"
                value={content.headline}
                onChange={(e) => onEdit("headline", e.target.value)}
                rows={3}
                style={{ color: "var(--chocolate)" }}
              />
            ) : (
              content.headline.split("\n").map((line, i) => (
                <span key={i} className={`block ${i === 1 ? "italic shimmer-text" : ""}`}>
                  {line}
                </span>
              ))
            )}
          </motion.h1>

          {/* Sub */}
          <motion.p
            variants={fadeUp}
            className="font-body text-base leading-relaxed max-w-md"
            style={{ color: "var(--mocha)", opacity: 0.85 }}
          >
            {isEditing ? (
              <textarea
                className="bg-transparent outline-none w-full resize-none font-body text-base"
                value={content.subheadline}
                onChange={(e) => onEdit("subheadline", e.target.value)}
                rows={3}
                style={{ color: "var(--mocha)" }}
              />
            ) : (
              content.subheadline
            )}
          </motion.p>

          {/* CTA */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden font-body text-sm font-medium px-8 py-4 rounded-full text-white transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5"
              style={{ background: "var(--rose-deep)" }}
            >
              <span className="relative z-10">{content.cta}</span>
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{ background: "var(--mocha)" }}
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </a>

            <a
              href="#produtos"
              className="font-body text-sm font-medium px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-0.5"
              style={{
                border: "1px solid var(--rose-medium)",
                color: "var(--mocha)",
              }}
            >
              Ver cardápio
            </a>
          </motion.div>

          {/* Social proof */}
          <motion.div variants={fadeUp} className="flex items-center gap-4 mt-2">
            <div className="flex -space-x-2">
              {["A", "R", "M", "J"].map((l, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-body font-medium text-white border-2 border-white"
                  style={{
                    background: ["#C97B7B", "#D4A0A0", "#E8A0A0", "#C97B7B"][i],
                  }}
                >
                  {l}
                </div>
              ))}
            </div>
            <p className="font-body text-xs" style={{ color: "var(--mocha)", opacity: 0.7 }}>
              <span className="font-medium" style={{ opacity: 1 }}>+200 clientes</span> encantados
            </p>
          </motion.div>
        </motion.div>

        {/* Right — Visual centerpiece */}
        <motion.div
          className="relative flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          {/* Outer glow ring */}
          <motion.div
            className="absolute w-[420px] h-[420px] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(249,232,227,0.8) 0%, rgba(242,196,192,0.3) 50%, transparent 75%)",
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          />

          {/* Dashed circle */}
          <motion.div
            className="absolute w-[380px] h-[380px] rounded-full"
            style={{
              border: "1px dashed rgba(201,123,123,0.3)",
            }}
            animate={{ rotate: -360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          />

          {/* Main visual card */}
          <motion.div
            className="relative z-10 w-72 h-72 rounded-[2.5rem] glass-card flex items-center justify-center shadow-2xl"
            style={{ boxShadow: "0 25px 80px rgba(201,123,123,0.2)" }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Emoji cake display */}
            <div className="text-center">
              <div className="text-[100px] leading-none mb-2">🎂</div>
              <p
                className="font-script text-lg"
                style={{ color: "var(--rose-deep)" }}
              >
                Feito com amor
              </p>
            </div>

            {/* Corner petals */}
            <div className="absolute -top-4 -right-4 text-4xl animate-float">🌸</div>
            <div className="absolute -bottom-4 -left-4 text-3xl animate-float" style={{ animationDelay: "1.5s" }}>🌹</div>
          </motion.div>

          {/* Floating badges */}
          <motion.div
            className="absolute top-4 -left-4 glass-card rounded-2xl px-4 py-2 shadow-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <p className="font-body text-xs" style={{ color: "var(--mocha)" }}>⭐ 5.0</p>
            <p className="font-body text-[10px]" style={{ color: "var(--mocha)", opacity: 0.6 }}>Avaliação</p>
          </motion.div>

          <motion.div
            className="absolute bottom-8 -right-4 glass-card rounded-2xl px-4 py-2 shadow-lg"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
          >
            <p className="font-body text-xs font-medium" style={{ color: "var(--rose-deep)" }}>100% Artesanal</p>
            <p className="font-body text-[10px]" style={{ color: "var(--mocha)", opacity: 0.6 }}>Sem conservantes</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <p className="font-body text-[10px] tracking-widest uppercase" style={{ color: "var(--mocha)", opacity: 0.4 }}>
          Scroll
        </p>
        <motion.div
          className="w-px h-12"
          style={{ background: "linear-gradient(to bottom, var(--rose-medium), transparent)" }}
          animate={{ scaleY: [1, 0.5, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
}

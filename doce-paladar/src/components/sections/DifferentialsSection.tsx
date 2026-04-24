"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Leaf, Heart, Star, Clock, Award, Package } from "lucide-react";
import { Differential } from "@/types/content";

const iconMap: Record<string, React.ReactNode> = {
  Leaf: <Leaf size={22} />,
  Heart: <Heart size={22} />,
  Star: <Star size={22} />,
  Clock: <Clock size={22} />,
  Award: <Award size={22} />,
  Package: <Package size={22} />,
};

interface Props {
  differentials: Differential[];
}

export function DifferentialsSection({ differentials }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="py-32 px-6 relative overflow-hidden"
      style={{ background: "var(--chocolate)" }}
    >
      {/* Background texture */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full -translate-y-1/2"
          style={{ background: "radial-gradient(circle, rgba(201,123,123,0.08) 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full translate-y-1/2"
          style={{ background: "radial-gradient(circle, rgba(242,196,192,0.06) 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span
            className="font-body text-xs tracking-[0.3em] uppercase mb-3 block"
            style={{ color: "var(--rose-medium)" }}
          >
            Por que nos escolher
          </span>
          <h2 className="font-display text-4xl md:text-6xl italic text-white">
            O que nos torna{" "}
            <span style={{ color: "var(--rose-soft)" }}>especiais</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentials.map((diff, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative rounded-[1.5rem] p-7 transition-all duration-300 cursor-default"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(242,196,192,0.1)",
              }}
              whileHover={{
                background: "rgba(201,123,123,0.1)",
                borderColor: "rgba(201,123,123,0.3)",
              }}
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300"
                style={{
                  background: "rgba(201,123,123,0.15)",
                  color: "var(--rose-soft)",
                }}
              >
                {iconMap[diff.icon] || <Star size={22} />}
              </div>

              <h3
                className="font-display text-xl italic mb-2"
                style={{ color: "white" }}
              >
                {diff.title}
              </h3>

              <p
                className="font-body text-sm leading-relaxed"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                {diff.description}
              </p>

              {/* Hover accent */}
              <div
                className="absolute top-0 left-7 right-7 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "linear-gradient(90deg, transparent, var(--rose-medium), transparent)" }}
              />
            </motion.div>
          ))}
        </div>

        {/* Center statement */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <p
            className="font-display text-2xl md:text-3xl italic"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            "Cada mordida é uma{" "}
            <span style={{ color: "var(--rose-soft)" }}>memória afetiva</span>{" "}
            que dura para sempre."
          </p>
          <p
            className="font-body text-sm mt-3"
            style={{ color: "rgba(255,255,255,0.2)" }}
          >
            — Gabriela Carmo
          </p>
        </motion.div>
      </div>
    </section>
  );
}

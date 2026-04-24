"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageCircle, Instagram } from "lucide-react";
import { CTAContent } from "@/types/content";

interface Props {
  content: CTAContent;
  instagram: string;
}

export function CTASection({ content, instagram }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const whatsappUrl = `https://wa.me/${content.whatsapp}?text=${encodeURIComponent(content.message)}`;

  return (
    <section
      id="contato"
      className="py-32 px-6 relative overflow-hidden"
      style={{ background: "var(--cream)" }}
    >
      {/* Decorative circles */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(249,232,227,0.5) 0%, transparent 70%)" }}
        />
        <div
          className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(242,196,192,0.4) 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto" ref={ref}>
        <motion.div
          className="text-center rounded-[3rem] px-8 py-20 md:px-20"
          style={{
            background: "white",
            boxShadow: "0 30px 100px rgba(107,74,62,0.08)",
            border: "1px solid rgba(242,196,192,0.4)",
          }}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Floral decoration */}
          <motion.div
            className="text-5xl mb-6"
            animate={{ rotate: [0, 10, -5, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
          >
            🌸
          </motion.div>

          <span
            className="font-body text-xs tracking-[0.3em] uppercase mb-4 block"
            style={{ color: "var(--rose-deep)" }}
          >
            Vamos conversar
          </span>

          <h2
            className="font-display text-4xl md:text-6xl italic mb-5 leading-tight"
            style={{ color: "var(--chocolate)" }}
          >
            {content.headline}
          </h2>

          <p
            className="font-body text-base leading-relaxed max-w-lg mx-auto mb-10"
            style={{ color: "var(--mocha)", opacity: 0.75 }}
          >
            {content.subtext}
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 font-body text-base font-medium px-8 py-4 rounded-full text-white transition-all duration-300"
              style={{ background: "var(--rose-deep)" }}
              whileHover={{ scale: 1.04, boxShadow: "0 20px 60px rgba(201,123,123,0.35)" }}
              whileTap={{ scale: 0.97 }}
            >
              <MessageCircle size={20} />
              {content.buttonText}
            </motion.a>

            <motion.a
              href={instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-body text-sm px-6 py-4 rounded-full transition-all duration-300"
              style={{
                border: "1px solid var(--rose-medium)",
                color: "var(--mocha)",
              }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <Instagram size={18} />
              Seguir no Instagram
            </motion.a>
          </div>

          {/* Bottom trust note */}
          <p
            className="font-body text-xs mt-8"
            style={{ color: "var(--mocha)", opacity: 0.4 }}
          >
            Resposta rápida • Entrega com carinho • 100% artesanal
          </p>
        </motion.div>
      </div>
    </section>
  );
}

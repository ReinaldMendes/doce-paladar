"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Product } from "@/types/content";

interface Props {
  products: Product[];
  isEditing: boolean;
  onEdit: (id: number, field: keyof Product, value: string) => void;
}

const tagColors: Record<string, string> = {
  "Mais pedido": "var(--rose-deep)",
  Exclusivo: "var(--mocha)",
  Premium: "#7B5EA7",
  Favorito: "#C97B7B",
  "Para festas": "#8B7355",
  Sazonal: "#6B8C5E",
};

export function ProductsSection({ products, isEditing, onEdit }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="produtos"
      className="py-32 px-6"
      style={{ background: "var(--cream)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span
            className="font-body text-xs tracking-[0.3em] uppercase mb-3 block"
            style={{ color: "var(--rose-deep)" }}
          >
            Nosso cardápio
          </span>
          <h2
            className="font-display text-4xl md:text-6xl italic"
            style={{ color: "var(--chocolate)" }}
          >
            Criações que encantam
          </h2>
          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="w-16 h-px" style={{ background: "var(--rose-medium)" }} />
            <span className="text-xl">🌸</span>
            <div className="w-16 h-px" style={{ background: "var(--rose-medium)" }} />
          </div>
        </motion.div>

        {/* Product grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -8, scale: 1.01 }}
              className="group relative rounded-[2rem] overflow-hidden cursor-pointer"
              style={{
                background: "var(--nude-light)",
                border: "1px solid rgba(242,196,192,0.3)",
                boxShadow: "0 4px 20px rgba(107,74,62,0.06)",
              }}
            >
              {/* Hover gradient overlay */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: "linear-gradient(135deg, rgba(249,232,227,0.8) 0%, rgba(242,196,192,0.4) 100%)",
                }}
              />

              <div className="relative z-10 p-7">
                {/* Tag */}
                <div className="flex items-center justify-between mb-5">
                  <span
                    className="font-body text-[10px] tracking-widest uppercase px-3 py-1 rounded-full text-white"
                    style={{ background: tagColors[product.tag] || "var(--rose-deep)" }}
                  >
                    {product.tag}
                  </span>
                  <motion.span
                    className="text-4xl"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4 + i, repeat: Infinity }}
                  >
                    {product.emoji}
                  </motion.span>
                </div>

                {/* Name */}
                <h3
                  className="font-display text-2xl italic mb-2"
                  style={{ color: "var(--chocolate)" }}
                >
                  {isEditing ? (
                    <input
                      className="bg-transparent outline-none w-full font-display text-2xl italic"
                      value={product.name}
                      onChange={(e) => onEdit(product.id, "name", e.target.value)}
                      style={{ color: "var(--chocolate)" }}
                    />
                  ) : (
                    product.name
                  )}
                </h3>

                {/* Description */}
                <p
                  className="font-body text-sm leading-relaxed mb-5"
                  style={{ color: "var(--mocha)", opacity: 0.75 }}
                >
                  {isEditing ? (
                    <textarea
                      className="bg-transparent outline-none w-full resize-none font-body text-sm"
                      value={product.description}
                      onChange={(e) => onEdit(product.id, "description", e.target.value)}
                      rows={2}
                      style={{ color: "var(--mocha)" }}
                    />
                  ) : (
                    product.description
                  )}
                </p>

                {/* Price + CTA */}
                <div className="flex items-center justify-between">
                  <span
                    className="font-body text-sm font-medium"
                    style={{ color: "var(--rose-deep)" }}
                  >
                    {isEditing ? (
                      <input
                        className="bg-transparent outline-none"
                        value={product.price}
                        onChange={(e) => onEdit(product.id, "price", e.target.value)}
                        style={{ color: "var(--rose-deep)" }}
                      />
                    ) : (
                      product.price
                    )}
                  </span>

                  <motion.button
                    className="font-body text-xs px-4 py-2 rounded-full transition-all"
                    style={{
                      border: "1px solid var(--rose-medium)",
                      color: "var(--rose-deep)",
                    }}
                    whileHover={{
                      background: "var(--rose-deep)",
                      color: "white",
                      borderColor: "var(--rose-deep)",
                    }}
                    onClick={() => {
                      const url = `https://wa.me/5542991240940?text=${encodeURIComponent(`Olá! Gostaria de encomendar: ${product.name} 🌸`)}`;
                      window.open(url, "_blank");
                    }}
                  >
                    Encomendar
                  </motion.button>
                </div>
              </div>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-px origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                style={{ background: "linear-gradient(90deg, var(--rose-medium), var(--rose-deep), var(--rose-medium))" }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <p className="font-body text-sm mb-4" style={{ color: "var(--mocha)", opacity: 0.6 }}>
            Não encontrou o que procura?
          </p>
          <a
            href="https://wa.me/5542991240940?text=Olá! Gostaria de um pedido personalizado 🌸"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm font-medium underline"
            style={{ color: "var(--rose-deep)" }}
          >
            Solicite um pedido personalizado →
          </a>
        </motion.div>
      </div>
    </section>
  );
}

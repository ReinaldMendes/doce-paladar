"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Início", href: "#hero" },
  { label: "Sobre", href: "#sobre" },
  { label: "Cardápio", href: "#produtos" },
  { label: "Depoimentos", href: "#depoimentos" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-500"
        style={{
          background: scrolled
            ? "rgba(255, 253, 248, 0.85)"
            : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(242,196,192,0.2)" : "none",
        }}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Logo text */}
          <a href="#hero" className="group flex flex-col leading-none">
            <span
              className="font-script text-2xl"
              style={{ color: "var(--rose-deep)" }}
            >
              Doce Paladar
            </span>
            <span
              className="font-body text-[10px] tracking-[0.3em] uppercase"
              style={{ color: "var(--mocha)", opacity: 0.7 }}
            >
              Gabriela Carmo
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-sm tracking-wide relative group"
                style={{ color: "var(--mocha)" }}
              >
                {link.label}
                <span
                  className="absolute -bottom-1 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                  style={{ background: "var(--rose-deep)" }}
                />
              </a>
            ))}
            <a
              href="#contato"
              className="font-body text-sm px-5 py-2 rounded-full transition-all duration-300 hover:shadow-lg"
              style={{
                background: "var(--rose-deep)",
                color: "white",
              }}
            >
              Encomendar
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
            style={{ color: "var(--mocha)" }}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8"
            style={{ background: "rgba(255, 253, 248, 0.97)", backdropFilter: "blur(20px)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {links.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-display text-4xl italic"
                style={{ color: "var(--mocha)" }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.07 }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#contato"
              onClick={() => setOpen(false)}
              className="font-body text-sm px-8 py-3 rounded-full mt-4"
              style={{ background: "var(--rose-deep)", color: "white" }}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Encomendar
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

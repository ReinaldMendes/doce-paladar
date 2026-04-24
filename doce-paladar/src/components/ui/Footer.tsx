"use client";

import { Instagram, MessageCircle, Heart } from "lucide-react";

interface Props {
  instagram: string;
  whatsapp: string;
}

export function Footer({ instagram, whatsapp }: Props) {
  const year = new Date().getFullYear();

  return (
    <footer
      className="py-12 px-6"
      style={{
        background: "var(--chocolate)",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="text-center md:text-left">
            <span className="font-script text-2xl" style={{ color: "var(--rose-soft)" }}>
              Doce Paladar
            </span>
            <p
              className="font-body text-[10px] tracking-[0.3em] uppercase mt-1"
              style={{ color: "rgba(255,255,255,0.3)" }}
            >
              Gabriela Carmo
            </p>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-8">
            {[
              { label: "Início", href: "#hero" },
              { label: "Sobre", href: "#sobre" },
              { label: "Cardápio", href: "#produtos" },
              { label: "Contato", href: "#contato" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-xs tracking-wide transition-colors duration-200"
                style={{ color: "rgba(255,255,255,0.4)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--rose-soft)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social */}
          <div className="flex items-center gap-3">
            <a
              href={instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200"
              style={{
                background: "rgba(255,255,255,0.06)",
                color: "rgba(255,255,255,0.5)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(201,123,123,0.2)";
                (e.currentTarget as HTMLElement).style.color = "var(--rose-soft)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)";
                (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.5)";
              }}
            >
              <Instagram size={16} />
            </a>
            <a
              href={`https://wa.me/${whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200"
              style={{
                background: "rgba(255,255,255,0.06)",
                color: "rgba(255,255,255,0.5)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(201,123,123,0.2)";
                (e.currentTarget as HTMLElement).style.color = "var(--rose-soft)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)";
                (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.5)";
              }}
            >
              <MessageCircle size={16} />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-2"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <p
            className="font-body text-[11px]"
            style={{ color: "rgba(255,255,255,0.2)" }}
          >
            © {year} Doce Paladar · Gabriela Carmo. Todos os direitos reservados.
          </p>
          <p
            className="font-body text-[11px] flex items-center gap-1"
            style={{ color: "rgba(255,255,255,0.2)" }}
          >
            Feito com <Heart size={10} fill="currentColor" style={{ color: "var(--rose-medium)" }} /> e muito açúcar
          </p>
        </div>
      </div>
    </footer>
  );
}

"use client";

const items = [
  "Macarons Artesanais",
  "🌸",
  "Bolos Decorados",
  "✦",
  "Trufas Belgas",
  "🌸",
  "Docinhos Finos",
  "✦",
  "Cheesecake",
  "🌸",
  "Encomende Já",
  "✦",
];

export function MarqueeBanner() {
  const doubled = [...items, ...items];

  return (
    <div
      className="relative overflow-hidden py-4 border-y"
      style={{
        background: "var(--rose-deep)",
        borderColor: "rgba(201,123,123,0.3)",
      }}
    >
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-block mx-6 font-body text-sm tracking-[0.15em] uppercase font-medium text-white opacity-90"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

# 🎂 Doce Paladar — Gabriela Carmo

Landing page premium para confeitaria artesanal. Desenvolvida com Next.js 14, TailwindCSS e Framer Motion.

---

## ✨ Funcionalidades

- **Hero animado** com partículas flutuantes e efeito shimmer
- **6 seções completas**: Hero, Sobre, Produtos, Diferenciais, Depoimentos, CTA
- **Sistema de edição inline** — edite textos diretamente na página (botão "Editar")
- **Cursor personalizado** (desktop)
- **Animações** com Framer Motion em toda a página
- **Marquee banner** animado
- **Carrossel** de depoimentos com animação de entrada/saída
- **Design responsivo** mobile-first
- **SEO básico** configurado
- **Integração WhatsApp** em todos os CTAs
- **Paleta rosé** fiel à identidade da marca

---

## 🚀 Rodando localmente

### Pré-requisitos
- Node.js 18+
- npm ou yarn

### Instalação

```bash
# Clone o projeto
cd doce-paladar

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Acesse: [http://localhost:3000](http://localhost:3000)

---

## ✏️ Sistema de Edição

1. Acesse a landing page no navegador
2. Clique no botão **"Editar"** (canto inferior direito)
3. Clique em qualquer texto para editar diretamente na página
4. Clique em **"Salvar"** para persistir as alterações

As alterações são salvas no arquivo `src/lib/content.json`.

---

## 🎨 Personalizando

### Textos e conteúdo
Edite diretamente o arquivo `src/lib/content.json`:

```json
{
  "hero": { ... },
  "about": { ... },
  "products": [ ... ],
  "differentials": [ ... ],
  "testimonials": [ ... ],
  "cta": { ... },
  "footer": { ... }
}
```

### WhatsApp
No `content.json`, altere:
```json
"cta": {
  "whatsapp": "5541999999999",  // DDD + número sem espaços
  "message": "Olá Gabriela! ..."
}
```

### Instagram
```json
"footer": {
  "instagram": "https://instagram.com/seu_perfil"
}
```

### Cores
Edite as variáveis CSS em `src/app/globals.css`:
```css
:root {
  --rose-deep: #C97B7B;
  --rose-medium: #E8A0A0;
  --mocha: #6B4A3E;
  /* ... */
}
```

---

## 📦 Deploy na Vercel

### Opção 1 — Interface Vercel (recomendado)

1. Crie uma conta em [vercel.com](https://vercel.com)
2. Clique em **"Add New Project"**
3. Importe este repositório do GitHub (faça push primeiro)
4. Clique em **"Deploy"** — a Vercel detecta Next.js automaticamente

### Opção 2 — CLI

```bash
# Instale a CLI
npm i -g vercel

# Deploy
vercel

# Deploy produção
vercel --prod
```

### ⚠️ Nota sobre edição na Vercel

O sistema de edição salva em arquivo local (`content.json`). Na Vercel, o filesystem é **read-only** em produção. Para edição persistente em produção, considere:

- **Vercel KV** (banco key-value serverless da Vercel)
- **PlanetScale** ou **Supabase** (banco de dados)
- **Contentful / Sanity** (CMS headless)

Para um site estático simples, edite o `content.json` localmente e faça push para redesenhar.

---

## 🏗️ Estrutura do projeto

```
doce-paladar/
├── src/
│   ├── app/
│   │   ├── api/content/route.ts   # API de edição
│   │   ├── globals.css            # Estilos globais + variáveis
│   │   ├── layout.tsx             # Layout raiz + fontes
│   │   └── page.tsx               # Página principal
│   ├── components/
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── ProductsSection.tsx
│   │   │   ├── DifferentialsSection.tsx
│   │   │   ├── TestimonialsSection.tsx
│   │   │   └── CTASection.tsx
│   │   └── ui/
│   │       ├── Navbar.tsx
│   │       ├── Footer.tsx
│   │       ├── CustomCursor.tsx
│   │       ├── MarqueeBanner.tsx
│   │       └── EditToggle.tsx
│   ├── lib/
│   │   └── content.json           # Todo o conteúdo editável
│   └── types/
│       └── content.ts             # TypeScript types
├── tailwind.config.ts
├── next.config.js
└── README.md
```

---

## 🛠️ Stack

| Tecnologia | Uso |
|---|---|
| Next.js 14 | Framework React (App Router) |
| TypeScript | Tipagem estática |
| TailwindCSS | Estilos utilitários |
| Framer Motion | Animações |
| Lucide React | Ícones |
| Google Fonts | Cormorant Garamond + Dancing Script + Jost |

---

## 💌 Presente de aniversário

Esta landing page foi criada com muito carinho como presente de aniversário. 
Que os sabores do **Doce Paladar** continuem encantando cada vez mais pessoas! 🌸🎂

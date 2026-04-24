"use client";

import { useState, useEffect, useCallback } from "react";
import { SiteContent } from "@/types/content";
import contentData from "@/lib/content.json";

// Components
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Navbar } from "@/components/ui/Navbar";
import { MarqueeBanner } from "@/components/ui/MarqueeBanner";
import { EditToggle } from "@/components/ui/EditToggle";
import { Footer } from "@/components/ui/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { DifferentialsSection } from "@/components/sections/DifferentialsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  const [content, setContent] = useState<SiteContent>(contentData as SiteContent);
  const [originalContent, setOriginalContent] = useState<SiteContent>(contentData as SiteContent);
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  // Deep clone helper
  const deepClone = (obj: unknown) => JSON.parse(JSON.stringify(obj));

  const handleToggleEdit = () => {
    if (isEditing) {
      // Cancel — restore original
      setContent(deepClone(originalContent));
    } else {
      // Enter edit mode — save current as original
      setOriginalContent(deepClone(content));
    }
    setIsEditing(!isEditing);
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const res = await fetch("/api/content", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(content),
      });
      if (res.ok) {
        setOriginalContent(deepClone(content));
        setIsEditing(false);
      } else {
        alert("Erro ao salvar. Tente novamente.");
      }
    } catch {
      alert("Erro ao salvar. Verifique sua conexão.");
    } finally {
      setIsSaving(false);
    }
  };

  // Hero edits
  const handleHeroEdit = useCallback(
    (key: keyof SiteContent["hero"], value: string) => {
      setContent((c) => ({ ...c, hero: { ...c.hero, [key]: value } }));
    },
    []
  );

  // About edits
  const handleAboutEdit = useCallback(
    (field: string, value: string | string[]) => {
      setContent((c) => ({ ...c, about: { ...c.about, [field]: value } }));
    },
    []
  );

  // Product edits
  const handleProductEdit = useCallback(
    (id: number, field: keyof SiteContent["products"][0], value: string) => {
      setContent((c) => ({
        ...c,
        products: c.products.map((p) =>
          p.id === id ? { ...p, [field]: value } : p
        ),
      }));
    },
    []
  );

  return (
    <>
      <CustomCursor />
      <Navbar />

      <main>
        <HeroSection
          content={content.hero}
          isEditing={isEditing}
          onEdit={handleHeroEdit}
        />

        <MarqueeBanner />

        <AboutSection
          content={content.about}
          isEditing={isEditing}
          onEdit={handleAboutEdit}
        />

        <ProductsSection
          products={content.products}
          isEditing={isEditing}
          onEdit={handleProductEdit}
        />

        <DifferentialsSection differentials={content.differentials} />

        <TestimonialsSection testimonials={content.testimonials} />

        <CTASection
          content={content.cta}
          instagram={content.footer.instagram}
        />
      </main>

      <Footer
        instagram={content.footer.instagram}
        whatsapp={content.footer.whatsapp}
      />

      <EditToggle
        isEditing={isEditing}
        onToggle={handleToggleEdit}
        onSave={handleSave}
        isSaving={isSaving}
      />
    </>
  );
}

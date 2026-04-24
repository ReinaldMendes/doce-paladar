"use client";

import { motion } from "framer-motion";
import { Edit3, Save, X } from "lucide-react";

interface Props {
  isEditing: boolean;
  onToggle: () => void;
  onSave: () => void;
  isSaving: boolean;
}

export function EditToggle({ isEditing, onToggle, onSave, isSaving }: Props) {
  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-2 items-end">
      {isEditing && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          className="glass-card rounded-2xl px-4 py-2"
          style={{ border: "1px solid rgba(242,196,192,0.4)" }}
        >
          <p className="font-body text-xs" style={{ color: "var(--mocha)" }}>
            ✏️ Modo edição ativo — clique nos textos
          </p>
        </motion.div>
      )}

      <div className="flex gap-2">
        {isEditing && (
          <motion.button
            onClick={onSave}
            disabled={isSaving}
            className="flex items-center gap-2 font-body text-sm font-medium px-5 py-3 rounded-full text-white shadow-xl transition-all"
            style={{ background: "#4CAF50" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Save size={16} />
            {isSaving ? "Salvando..." : "Salvar"}
          </motion.button>
        )}

        <motion.button
          onClick={onToggle}
          className="flex items-center gap-2 font-body text-sm font-medium px-5 py-3 rounded-full text-white shadow-xl"
          style={{ background: isEditing ? "#888" : "var(--rose-deep)" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isEditing ? <X size={16} /> : <Edit3 size={16} />}
          {isEditing ? "Cancelar" : "Editar"}
        </motion.button>
      </div>
    </div>
  );
}

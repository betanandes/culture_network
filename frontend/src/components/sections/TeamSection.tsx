import { Users } from "lucide-react";

import { Section } from "@/components/layout/Section";
import { SectionTitle } from "@/components/common/SectionTitle";

export function TeamSection() {
  return (
    <Section>
      <SectionTitle
        badge="Equipe"
        title="Construindo juntos."
        description="A Culture Network é formada por pessoas apaixonadas por cultura, tecnologia e comunidade."
      />

      <div className="mx-auto max-w-3xl rounded-3xl border border-dashed border-[#ED1E79]/30 p-14 text-center">
        <Users size={70} className="mx-auto mb-8 text-[#ED1E79]" />

        <h3 className="mb-4 text-3xl font-bold">Nossa equipe está crescendo</h3>

        <p className="text-zinc-400">
          Em breve apresentaremos todos os integrantes, colaboradores e
          parceiros da CUNET.
        </p>
      </div>
    </Section>
  );
}

import { Gem, Clock3 } from "lucide-react";

import { Section } from "@/components/layout/Section";
import { SectionTitle } from "@/components/common/SectionTitle";

export function CollectionSection() {
  return (
    <Section>
      <SectionTitle
        badge="Digital Collection"
        title="Sua coleção digital está chegando."
        description="Estamos desenvolvendo uma experiência inédita para colecionadores da comunidade CUNET."
      />

      <div className="mx-auto max-w-5xl overflow-hidden rounded-[32px] border border-[#ED1E79]/20 bg-gradient-to-br from-[#ED1E79]/10 via-zinc-900 to-black p-12">
        <div className="flex items-center gap-4">
          <div className="rounded-2xl bg-[#ED1E79]/10 p-4">
            <Gem className="text-[#ED1E79]" size={36} />
          </div>

          <div>
            <h3 className="text-3xl font-bold">Digital Collection</h3>

            <p className="text-zinc-400">
              Inspirado nos melhores sistemas de coleção digital.
            </p>
          </div>
        </div>

        <div className="my-10 h-3 overflow-hidden rounded-full bg-zinc-800">
          <div className="h-full w-2/5 rounded-full bg-[#ED1E79]" />
        </div>

        <div className="flex items-center gap-3 text-zinc-400">
          <Clock3 />
          Em desenvolvimento • Lançamento futuro
        </div>
      </div>
    </Section>
  );
}

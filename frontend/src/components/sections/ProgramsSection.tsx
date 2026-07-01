import { BookOpen, CalendarDays, Users, GraduationCap } from "lucide-react";

import { Section } from "@/components/layout/Section";
import { SectionTitle } from "@/components/common/SectionTitle";

const items = [
  {
    icon: GraduationCap,
    title: "Workshops",
    description:
      "Cursos, oficinas e encontros para desenvolver novas habilidades.",
  },
  {
    icon: CalendarDays,
    title: "Eventos",
    description:
      "Participação em eventos culturais, tecnológicos e da comunidade.",
  },
  {
    icon: BookOpen,
    title: "Conteúdos",
    description: "Guias, artigos, vídeos e materiais produzidos pela CUNET.",
  },
  {
    icon: Users,
    title: "Comunidade",
    description: "Um espaço para conectar pessoas com os mesmos interesses.",
  },
];

export function ProgramsSection() {
  return (
    <Section>
      <SectionTitle
        badge="Programas"
        title="Aprenda, participe e evolua."
        description="A CUNET busca criar experiências além de projetos, promovendo conhecimento e colaboração."
      />

      <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8 transition hover:border-[#ED1E79]"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ED1E79]/10">
                <Icon className="text-[#ED1E79]" />
              </div>

              <h3 className="mb-3 text-2xl font-bold">{item.title}</h3>

              <p className="text-zinc-400">{item.description}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

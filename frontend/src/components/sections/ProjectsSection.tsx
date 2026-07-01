import { Rocket, Users, Sparkles } from "lucide-react";

import { Section } from "@/components/layout/Section";
import { SectionTitle } from "@/components/common/SectionTitle";
import { ProjectCard } from "@/components/cards/ProjectCard";

export function ProjectsSection() {
  return (
    <Section>
      <SectionTitle
        badge="Projetos"
        title="Conheça o ecossistema da CUNET"
        description="Cada projeto nasce com um propósito: conectar cultura, criatividade e comunidade em experiências digitais."
      />

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <ProjectCard
          icon={Rocket}
          title="CU²"
          description="Plataforma principal da CUNET, voltada para conexão e experiências digitais."
          link="/projects"
        />

        <ProjectCard
          icon={Users}
          title="CUPOPPERS"
          description="Comunidade pop da CUNET, focada em interação, conteúdo e cultura."
          link="/projects"
        />

        <ProjectCard
          icon={Sparkles}
          title="CUNET+"
          description="Novos recursos e experiências em desenvolvimento dentro do ecossistema."
          link="/projects"
          status="Em breve"
        />
      </div>
    </Section>
  );
}

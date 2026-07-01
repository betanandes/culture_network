import { Section } from "@/components/layout/Section";
import { SectionTitle } from "@/components/common/SectionTitle";

export function AboutSection() {
  return (
    <Section>
      <SectionTitle
        badge="Quem somos"
        title="Uma rede para conectar pessoas, projetos e cultura."
        description="A Culture Network nasceu para reunir iniciativas, conteúdos, programas e comunidades em um único lugar, fortalecendo conexões e incentivando a colaboração."
      />
    </Section>
  );
}

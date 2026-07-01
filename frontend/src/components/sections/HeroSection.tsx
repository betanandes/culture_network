import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { Glow } from "@/components/layout/Glow";
import { Section } from "@/components/layout/Section";
import { Logo } from "@/components/common/Logo";
import { PrimaryButton } from "@/components/common/PrimaryButton";

export function HeroSection() {
  return (
    <Section className="min-h-[85vh] flex items-center justify-center">
      <Glow className="left-1/2 top-40 h-[420px] w-[420px] -translate-x-1/2" />

      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="mb-8 h-28 w-auto">
          <Logo />
        </div>

        <span className="mb-6 rounded-full border border-[#ED1E79]/20 bg-[#ED1E79]/10 px-5 py-2 text-sm text-[#ED1E79]">
          Plataforma Oficial da Culture Network
        </span>

        <h1 className="max-w-5xl text-5xl font-black leading-tight md:text-7xl">
          Conectando
          <span className="block text-[#ED1E79]">
            Cultura. Criatividade. Comunidade.
          </span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
          Reunimos projetos, conteúdos, programas e experiências digitais em um
          único ecossistema.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-5">
          <Link to="/register">
            <PrimaryButton>
              Criar Conta
              <ArrowRight className="ml-2 h-5 w-5" />
            </PrimaryButton>
          </Link>

          <Link to="/projects">
            <button className="rounded-xl border border-zinc-700 px-7 py-4 transition hover:border-[#ED1E79]">
              Explorar Projetos
            </button>
          </Link>
        </div>
      </div>
    </Section>
  );
}

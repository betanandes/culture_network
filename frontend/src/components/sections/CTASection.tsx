import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { Section } from "@/components/layout/Section";
import { PrimaryButton } from "@/components/common/PrimaryButton";

export function CTASection() {
  return (
    <Section>
      <div className="rounded-[40px] border border-[#ED1E79]/20 bg-gradient-to-br from-[#ED1E79] via-[#d81b70] to-[#9c1452] p-16 text-center shadow-[0_0_80px_rgba(237,30,121,.25)]">
        <h2 className="text-5xl font-black text-white">
          Faça parte da Culture Network
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-pink-100">
          Crie sua conta gratuitamente e acompanhe projetos, programas,
          novidades e, futuramente, sua coleção digital exclusiva.
        </p>

        <div className="mt-10">
          <Link to="/register">
            <PrimaryButton className="bg-white text-[#ED1E79] hover:bg-pink-50">
              Criar minha conta
              <ArrowRight className="ml-2 h-5 w-5" />
            </PrimaryButton>
          </Link>
        </div>
      </div>
    </Section>
  );
}

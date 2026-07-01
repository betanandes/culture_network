import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

import { Logo } from "../common/Logo";
import { PrimaryButton } from "../common/PrimaryButton";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-[#090909]/90 backdrop-blur-lg">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link to="/">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          <Link
            to="/"
            className="transition-transform duration-300 hover:scale-105"
          >
            Home
          </Link>

          <Link
            to="/projects"
            className="transition-transform duration-300 hover:scale-105"
          >
            Projetos
          </Link>

          <Link
            to="/programs"
            className="transition-transform duration-300 hover:scale-105"
          >
            Programas
          </Link>

          <Link
            to="/team"
            className="transition-transform duration-300 hover:scale-105"
          >
            Equipe
          </Link>

          <Link
            to="/channels"
            className="transition-transform duration-300 hover:scale-105"
          >
            Canais
          </Link>

          <Link
            to="/collection"
            className="transition-transform duration-300 hover:scale-105"
          >
            Digital Collection
          </Link>
        </nav>

        <div className="hidden lg:block">
          <Link to="/login">
            <PrimaryButton>Entrar</PrimaryButton>
          </Link>
        </div>

        <button className="lg:hidden">
          <Menu />
        </button>
      </div>
    </header>
  );
}

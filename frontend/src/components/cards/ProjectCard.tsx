import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  link: string;
  status?: string;
}

export function ProjectCard({
  icon: Icon,
  title,
  description,
  link,
  status,
}: ProjectCardProps) {
  return (
    <div
      className="
        group
        rounded-3xl
        border
        border-zinc-800
        bg-zinc-900/40
        p-8
        backdrop-blur-lg
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-[#ED1E79]
        hover:shadow-[0_0_50px_rgba(237,30,121,.15)]
      "
    >
      {status && (
        <span className="mb-5 inline-block rounded-full bg-[#ED1E79]/10 px-3 py-1 text-xs font-medium text-[#ED1E79]">
          {status}
        </span>
      )}

      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ED1E79]/10">
        <Icon className="text-[#ED1E79]" />
      </div>

      <h3 className="mb-4 text-2xl font-bold">{title}</h3>

      <p className="mb-8 text-zinc-400">{description}</p>

      <Link
        to={link}
        className="inline-flex items-center gap-2 text-[#ED1E79] transition-all duration-300 group-hover:gap-3"
      >
        Saiba mais
        <ArrowRight size={18} />
      </Link>
    </div>
  );
}

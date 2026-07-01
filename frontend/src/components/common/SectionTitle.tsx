interface SectionTitleProps {
  badge?: string;
  title: string;
  description?: string;
}

export function SectionTitle({ badge, title, description }: SectionTitleProps) {
  return (
    <div className="mx-auto mb-14 max-w-3xl text-center">
      {badge && (
        <span className="mb-4 inline-block rounded-full bg-[#ED1E79]/10 px-4 py-2 text-sm font-medium text-[#ED1E79]">
          {badge}
        </span>
      )}

      <h2 className="text-4xl font-black md:text-5xl">{title}</h2>

      {description && (
        <p className="mt-6 text-lg leading-8 text-zinc-400">{description}</p>
      )}
    </div>
  );
}

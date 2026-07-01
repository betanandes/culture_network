interface GlowProps {
  className?: string;
}

export function Glow({ className = "" }: GlowProps) {
  return (
    <div
      className={`
        absolute
        rounded-full
        bg-[#ED1E79]/20
        blur-[120px]
        ${className}
      `}
    />
  );
}

import { ReactNode } from "react";

interface PageBackgroundProps {
  children: ReactNode;
}

export function PageBackground({ children }: PageBackgroundProps) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#090909] text-white">
      {children}
    </div>
  );
}

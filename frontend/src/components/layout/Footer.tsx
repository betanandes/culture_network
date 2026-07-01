import { Logo } from "../common/Logo";

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6">
        <Logo />

        <p className="text-sm text-zinc-400">© 2026 CUNET • Culture Network</p>

        <p className="text-xs text-zinc-600">Version 1.0.0</p>
      </div>
    </footer>
  );
}

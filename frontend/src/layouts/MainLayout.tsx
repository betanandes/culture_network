import { Outlet } from "react-router-dom";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageBackground } from "@/components/layout/PageBackground";

export function MainLayout() {
  return (
    <PageBackground>
      <Header />

      <main className="min-h-screen">
        <Outlet />
      </main>

      <Footer />
    </PageBackground>
  );
}

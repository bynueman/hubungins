// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import PricingSection from "./PricingSection";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import ServicesSection from "./ServicesSection";
import ColabSection from "./ColabSection";

// Portofolio (ringkas & halaman penuh)
import PortfolioFeatured from "./PortfolioFeatured";
import PortfolioPage from "./PortfolioPage";

function Home() {
  return (
    <>
      {/* HERO */}
      <Hero />

      {/* Sections lain */}
      <ColabSection />
      <ServicesSection />

      {/* Portofolio ringkas (acak) */}
      <section className="container mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
        <div className="mt-10">
          {/* Tombol “Lihat Semua” akan menuju /portfolio */}
          <PortfolioFeatured allHref="/portfolio" />
        </div>
      </section>

      <PricingSection />
      <AboutSection />
      <ContactSection />

      <footer className="shadow">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 py-8 text-sm text-slate-500 text-center">
          © {new Date().getFullYear()} Hubung’ins. All rights reserved.
        </div>
      </footer>
    </>
  );
}

export default function App() {
  return (
    <div className="min-h-dvh bg-white text-slate-900 overflow-x-hidden relative">
      {/* === BACKDROP GLOBAL: radial glow + grid halus (brand #156773) === */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(70rem 60rem at 85% -10%, rgba(21,103,115,0.12), transparent 60%), radial-gradient(60rem 50rem at -15% 30%, rgba(21,103,115,0.08), transparent 60%)",
        }}
      />
      <svg
        aria-hidden
        className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-0 opacity-[0.06] -z-10"
        width="1600"
        height="500"
      >
        <defs>
          <pattern id="app-grid" width="28" height="28" patternUnits="userSpaceOnUse">
            <path d="M28 0H0V28" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="1600" height="500" fill="url(#app-grid)" />
      </svg>

      {/* ROUTER + HEADER */}
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          {/* Halaman portofolio lengkap + filter kategori */}
          <Route path="/portfolio" element={<PortfolioPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

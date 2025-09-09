import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";
import logo from "./assets/logo.png";
import heroMark from "./assets/logo.png";
import PortfolioCarousel from "./portfoliocarousel";
import PricingSection from "./PricingSection";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";

export default function App() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="min-h-dvh bg-white text-slate-900 overflow-x-hidden">
      {/* ================= Header ================= */}
      <header className="fixed inset-x-0 top-0 z-40 bg-white/90 backdrop-blur shadow">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 h-14 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-2">
            <img src={logo} alt="Hubung’ins" className="h-6 w-auto" />
            <span className="font-semibold tracking-tight">Hubung’ins</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm">
            <a href="#hero" className="hover:text-[#156773]">Beranda</a>
            <a href="#services" className="hover:text-[#156773]">Layanan</a>
            <a href="#portfolio" className="hover:text-[#156773]">Portofolio</a>
            <a href="#pricing" className="hover:text-[#156773]">Harga</a>
            <a href="#about" className="hover:text-[#156773]">Tentang Kami</a>
            <a
              href="#contact"
              className="text-white rounded-lg bg-[#156773] px-4 py-2 font-medium text-slate-900 hover:brightness-95"
            >
              Kontak
            </a>
          </nav>
          {/* Hamburger (mobile) */}
          <button
            className="md:hidden p-2 focus:outline-none"
            onClick={() => setNavOpen(!navOpen)}
            aria-label="Toggle Menu"
          >
            {navOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {/* Mobile nav panel */}
        {navOpen && (
          <nav className="md:hidden absolute top-14 left-0 right-0 bg-white border-b shadow-sm flex flex-col items-center gap-4 py-4 z-50 animate-fade-in-down">
            <a href="#hero" onClick={() => setNavOpen(false)}>Beranda</a>
            <a href="#services" onClick={() => setNavOpen(false)}>Layanan</a>
            <a href="#portfolio" onClick={() => setNavOpen(false)}>Portofolio</a>
            <a href="#pricing" onClick={() => setNavOpen(false)}>Harga</a>
            <a href="#about" onClick={() => setNavOpen(false)}>Tentang Kami</a>
            <a
              href="#contact"
              className="text-white rounded-lg bg-[#156773] px-4 py-2 font-medium text-slate-900 hover:brightness-95"
              onClick={() => setNavOpen(false)}
            >
              Kontak
            </a>
          </nav>
        )}
      </header>

      {/* ================= Hero ================= */}
      <section id="hero" className="relative">
        {/* Logo besar: hanya tampil di sm ke atas */}
        <img
          src={heroMark}
          alt=""
          aria-hidden
          className="hidden sm:block pointer-events-none select-none absolute -right-10 -top-6 w-[480px] md:w-[600px] lg:w-[700px] rotate-15"
        />
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 pt-32 md:pt-44 pb-2 md:pb-24 relative">
          <div className="grid grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-start">
            {/* Kiri: teks */}
            <div className="col-span-12 lg:col-span-7">
              <motion.h1
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight"
              >
                Kalo Soal Ngonten, <br /> Gampang Dihubungin!
              </motion.h1>
              <p className="mt-5 text-slate-900 max-w-[58ch] text-lg">
                Spesialis Konten Video Singkat Paling Asik No.1 di Indonesia
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="https://wa.me/62881023513057" className="text-white rounded-xl bg-[#156773] px-5 py-3 font-medium text-slate-900 hover:brightness-95 w-full sm:w-auto">
                  Konsultasi
                </a>
                <a href="#portfolio" className="rounded-xl border border-slate-300 px-5 py-3 font-medium hover:border-slate-400 w-full sm:w-auto">
                  Lihat Portofolio
                </a>
              </div>
              <div className="mt-6 flex items-center gap-2 text-sm text-slate-500">
                <Phone className="size-4" />
                <span>Respon cepat • Konsultasi gratis</span>
              </div>
            </div>
            {/* Kanan: area kosong */}
            <div className="col-span-12 lg:col-span-5 h-64 md:h-80 lg:h-96" />
          </div>
        </div>
      </section>

      {/* ================= Services ================= */}
      <section id="services" className="container mx-auto max-w-7xl px-4 sm:px-6 pt-2 sm:pt-16 pb-16 sm:pb-24">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-center">Layanan Kami</h2>
        <p className="mt-3 text-center text-slate-600">Solusi yang paling sering dipesan klien kami.</p>
        <div className="mt-10 sm:mt-12 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "TikTok Management",
            "Instagram Management",
            "Short Content Production (TikTok & Reels)",
            "Social Media Branding",
            "Short Course",
          ].map((s, i) => (
            <div
              key={i}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-3">
                <div className="size-8 flex items-center justify-center rounded-full bg-[#156773] text-white font-bold">{i + 1}</div>
                <h3 className="font-semibold">{s}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= Portfolio ================= */}
      <section id="portfolio" className="container mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-center">Portofolio</h2>
        <p className="mt-3 text-center text-slate-600">Beberapa proyek yang pernah kami kerjakan.</p>
        <div className="mt-8">
          <PortfolioCarousel />
        </div>
      </section>

      {/* ================= Pricing ================= */}
      <PricingSection />

      {/* ================= About ================= */}
      <AboutSection />

      {/* ================= Contact ================= */}
      <ContactSection />

      {/* ================= Footer ================= */}
      <footer className="shadow">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 py-8 text-sm text-slate-500 text-center">
          © {new Date().getFullYear()} Hubung’ins. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

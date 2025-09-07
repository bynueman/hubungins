import { motion } from "framer-motion"
import { Phone } from "lucide-react"
import logo from "./assets/logo.png"                  // logo kecil di header
import heroMark from "./assets/logo.png"             // dipakai juga sebagai dekor hero
import PortfolioCarousel from "./PortfolioCarousel"
import PricingSection from "./PricingSection"
import AboutSection from "./AboutSection"
import ContactSection from "./ContactSection"

export default function App() {
  return (
    <div className="min-h-dvh bg-white text-slate-900 overflow-x-hidden">
      {/* ================= Header ================= */}
      <header className="fixed inset-x-0 top-0 z-40 bg-white/90 backdrop-blur border-b">
  <div className="container mx-auto max-w-7xl px-6 h-14 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-2">
            <img src={logo} alt="Hubung’ins" className="h-6 w-auto" />
            <span className="font-semibold tracking-tight">Hubung’ins</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#hero"      className="hover:text-[#156773]">Beranda</a>
            <a href="#services"  className="hover:text-[#156773]">Layanan</a>
            <a href="#portfolio" className="hover:text-[#156773]">Portofolio</a>
            <a href="#pricing"   className="hover:text-[#156773]">Harga</a>
            <a href="#about"     className="hover:text-[#156773]">Tentang Kami</a>
            <a
              href="#contact"
              className="text-white rounded-lg bg-[#156773] px-4 py-2 font-medium text-slate-900 hover:brightness-95"
            >
              Kontak
            </a>
          </nav>
        </div>
      </header>

      {/* ================= Hero ================= */}
      <section id="hero" className="relative">
        {/* Dekor logo besar (kanan atas) */}
        <img
          src={heroMark}
          alt=""
          aria-hidden
          className="pointer-events-none select-none absolute -right-24 -top-6 w-[560px] md:w-[720px] lg:w-[820px] rotate-15"
        />


  <div className="container mx-auto max-w-7xl px-6 pt-20 md:pt-50 pb-24 relative">
    <div className="grid grid-cols-12 items-start gap-12 lg:gap-16">
      {/* Kiri: teks */}
      <div className="col-span-12 lg:col-span-7">
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight"
        >
          Kalo Soal Ngonten, <br /> Gampang Dihubungin!
        </motion.h1>

        <p className="mt-5 text-slate-600 max-w-[58ch]">
          Spesialis Konten Video Singkat No.1 di Jogja
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a href="#contact" className="text-white rounded-xl bg-[#156773] px-5 py-3 font-medium text-slate-900 hover:brightness-95">
            Konsultasi
          </a>
          <a href="#portfolio" className="rounded-xl border border-slate-300 px-5 py-3 font-medium hover:border-slate-400">
            Lihat Portofolio
          </a>
        </div>

        <div className="mt-6 flex items-center gap-2 text-sm text-slate-500">
          <Phone className="size-4" />
          <span>Respon cepat • Konsultasi gratis</span>
        </div>
      </div>

      {/* Kanan: HAPUS placeholder yg “menghalangi” */}
      {/* Kalau masih butuh area kosong, biarkan div kosong transparan ini */}
      <div className="col-span-12 lg:col-span-5 h-[320px] md:h-[380px] lg:h-[420px]" />
      {/* Atau kalau ingin panel samar di atas dekor, gunakan ini sebagai alternatif:
      <div className="col-span-12 lg:col-span-5 rounded-2xl bg-white/40 backdrop-blur-sm ring-1 ring-slate-200/40 h-[320px] md:h-[380px] lg:h-[420px]" />
      */}
    </div>
  </div>
</section>


      {/* ================= Services ================= */}
      <section id="services" className="container mx-auto max-w-7xl px-6 py-24">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center">Layanan Kami</h2>
        <p className="mt-3 text-center text-slate-600">Solusi yang paling sering dipesan klien kami.</p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
                <div className="size-8 flex items-center justify-center rounded-full bg-[#156773] text-white font-bold">
                  {i + 1}
                </div>
                <h3 className="font-semibold">{s}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= Portfolio ================= */}
      <section id="portfolio" className="container mx-auto max-w-7xl px-6 py-24">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center">Portofolio</h2>
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
      <footer className="border-t">
        <div className="container mx-auto max-w-7xl px-6 py-8 text-sm text-slate-500">
          © {new Date().getFullYear()} Hubung’ins. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

import { useState } from "react"

const DATA = {
  tiktok: [
    {
      name: "Basic",
      popular: false,
      features: [
        "8 konten softsell (15–30 dtk)",
        "Ide konsep + naskah ringan",
        "Take HP tim (min. iPhone 12/13)",
        "Caption + hashtag",
        "Active admin 1x/Minggu",
        "8x posting",
        "1x revisi/konten",
      ],
    },
    {
      name: "Growth",
      popular: true,
      features: [
        "7 softsell + 1 hardsell",
        "Strategi konten awal bulan",
        "Take iPhone 13 + mic eksternal",
        "Ikuti tren TikTok",
        "Basic Ads setup 1x (10k–50k views)",
        "Review performa bulanan",
        "Caption + hashtag",
        "Interactive admin full",
        "8x posting • Bebas revisi",
      ],
    },
  ],
  instagram: [
    {
      name: "Basic",
      popular: false,
      features: [
        "8 Reels softsell (15–30 dtk)",
        "Ide konsep + naskah ringan",
        "Take HP tim (min. iPhone 12/13)",
        "Caption + hashtag + visual identity sederhana",
        "Active admin 1x/Minggu",
        "8x posting",
        "1x revisi/konten",
      ],
    },
    {
      name: "Growth",
      popular: true,
      features: [
        "7 softsell + 1 hardsell",
        "Strategi konten awal bulan",
        "Take iPhone 13 + mic eksternal",
        "Ikuti tren Reels",
        "Basic Ads setup 1x (10k–50k views)",
        "Review performa bulanan",
        "Caption + hashtag",
        "Interactive admin",
        "8x posting • Bebas revisi",
      ],
    },
  ],
  oneTime: [
    {
      title: "Short Content Production",
      subtitle: "Untuk yang butuh video saja",
      badge: "Reguler",
      bullets: [
        "8 video (15–45 dtk) untuk Reels & TikTok",
        "Konsep/ide/script dikembangkan Hubung’ins",
        "Device iPhone 11–13 Pro Max + Mic",
        "1x revisi per video",
      ],
    },
    {
      title: "Comedy/Sketsa",
      subtitle: "Series/cerita character-based",
      badge: "Premium",
      bullets: [
        "8 video (2 hardsell)",
        "Skenario & naskah komedi full",
        "Cinema camera SONY A6400",
        "Complicated backsound & color grading",
      ],
    },
    {
      title: "Social Media Branding",
      subtitle: "One-time project",
      badge: "UMKM Murah",
      bullets: [
        "Guideline sheet & pembuatan logo",
        "Optimasi IG & TikTok",
      ],
    },
    {
      title: "Brand Reset Starter",
      subtitle: "",
      badge: "Starter",
      bullets: [
        "Riset & analisis pasar",
        "Strategi pengembangan bisnis",
        "Brand identity, tagline & audit akun",
      ],
    },
    {
      title: "Brand Identity Plus",
      subtitle: "",
      badge: "Plus",
      bullets: [
        "Semua di Starter",
        "Visual style guide (font/warna/mood)",
        "Mapping pilar konten + 1x workshop internal",
      ],
    },
  ],
}

// Komponen kecil Negotiable
function NegotiablePill({ className = "" }) {
  return (
    <span
      className={
        "inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold " +
        "bg-gradient-to-r from-emerald-600 to-cyan-600 text-white shadow-sm ring-1 ring-emerald-500/40 " +
        "hover:brightness-105 transition " +
        className
      }
    >
      Negotiable
    </span>
  )
}

export default function PricingSection() {
  const [tab, setTab] = useState("tiktok")
  const plans = DATA[tab]

  return (
    <section id="pricing">
      <div className="container mx-auto max-w-7xl px-6 py-20 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center">
          Harga & Paket
        </h2>
        <p className="mt-3 text-center text-slate-600">
          Pilih paket sesuai kebutuhanmu. Semua harga fleksibel & bisa dikustom sesuai brief.
        </p>

        {/* Tabs */}
        <div className="mt-8 flex justify-center gap-2">
          <button
            onClick={() => setTab("tiktok")}
            className={`rounded-full px-4 py-2 text-sm border transition ${
              tab === "tiktok"
                ? "bg-[#156773] text-white border-[#156773]"
                : "bg-white text-slate-700 border-slate-300 hover:border-slate-400"
            }`}
          >
            TikTok Management
          </button>
          <button
            onClick={() => setTab("instagram")}
            className={`rounded-full px-4 py-2 text-sm border transition ${
              tab === "instagram"
                ? "bg-[#156773] text-white border-[#156773]"
                : "bg-white text-slate-700 border-slate-300 hover:border-slate-400"
            }`}
          >
            Instagram Management
          </button>
        </div>

        {/* Cards (Basic + Growth) */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-2xl border p-6 shadow-sm transition ${
                p.popular
                  ? "border-[#156773] ring-2 ring-[#156773]/10"
                  : "border-slate-200"
              }`}
            >
              {p.popular && (
                <span className="absolute -top-3 right-4 rounded-full bg-[#156773] px-3 py-1 text-xs font-semibold text-white shadow">
                  Paling Populer
                </span>
              )}

              <div className="flex items-start justify-between gap-3">
                <h3 className="text-xl font-bold">{p.name}</h3>
                <NegotiablePill />
              </div>

              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {p.features.map((f, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-1 inline-block size-1.5 rounded-full bg-[#156773]" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* One-time projects */}
        <h3 className="mt-14 text-2xl font-bold tracking-tight text-center">
          Proyek Sekali Jalan
        </h3>
        <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {DATA.oneTime.map((o, i) => (
            <div key={i} className="rounded-2xl border border-slate-200 p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500">{o.subtitle}</p>
                  <h4 className="text-lg font-semibold">{o.title}</h4>
                </div>
                {o.badge && (
                  <span className="rounded-full bg-[#156773]/10 px-3 py-1 text-xs font-semibold text-[#156773]">
                    {o.badge}
                  </span>
                )}
              </div>

              <div className="mt-3">
                <NegotiablePill />
              </div>

              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {o.bullets.map((b, j) => (
                  <li key={j} className="flex gap-2">
                    <span className="mt-1 inline-block size-1.5 rounded-full bg-[#156773]" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Global CTA */}
        <div className="mt-10 flex justify-center">
          <a
            href="#contact"
            className="rounded-xl bg-[#156773] px-6 py-3 text-base font-semibold text-white shadow hover:brightness-110 transition"
          >
            Hubungi Kami
          </a>
        </div>

        <p className="mt-6 text-xs text-slate-500 text-center">
          * Semua paket bersifat fleksibel & bisa dinegosiasikan sesuai kebutuhan dan target brand.
        </p>
      </div>
    </section>
  )
}

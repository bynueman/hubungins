// src/ServicesSection.jsx
import React from "react";
import { PhoneCall } from "lucide-react";

// ✅ karena file ini di src/, pakai "./assets/..."
import podcastProd from "./assets/services/podcastprod.png";
import contentProd from "./assets/services/contentprod.png";

export default function ServicesSection() {
  const services = [
    {
      title: "Podcast Production",
      description:
        "Produksi podcast profesional dengan kualitas audio terbaik, alur konten yang engaging, serta potongan clipper (shorts/highlight) siap upload untuk IG, TikTok, dan Reels.",
      image: podcastProd,
      chips: ["Pra-produksi", "Recording", "Editing", "Clipper"], // ← kamu bisa hapus "Clipper" jika tak perlu
    },
    {
      title: "Content Production",
      description:
        "Produksi video/shorts kreatif untuk IG & TikTok: dari konsep, shooting, hingga editing.",
      image: contentProd,
      chips: ["Scripting", "Shooting", "Editing"],
    },
  ];

  return (
    <section
      id="services"
      className="
        relative overflow-hidden container mx-auto max-w-7xl
        px-4 sm:px-6
        pt-8 sm:pt-12 pb-10 sm:pb-16
        scroll-mt-24 sm:scroll-mt-28 lg:scroll-mt-32
      "
      style={{ fontFamily: '"Helvetica Now", Helvetica, Arial, sans-serif' }}
    >
      {/* === BACKDROP: brand glow + grid halus === */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(55rem 45rem at 85% -10%, rgba(21,103,115,0.12), transparent 60%), radial-gradient(48rem 38rem at -12% 30%, rgba(21,103,115,0.08), transparent 62%)",
        }}
      />
      <svg
        aria-hidden
        className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-0 opacity-[0.06] -z-10"
        width="1400"
        height="320"
      >
        <defs>
          <pattern id="services-grid" width="28" height="28" patternUnits="userSpaceOnUse">
            <path d="M28 0H0V28" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="1400" height="320" fill="url(#services-grid)" />
      </svg>

      {/* Heading */}
      <h2 className="text-[clamp(1.6rem,4vw,2.5rem)] font-extrabold tracking-tight text-center">
        Layanan Kami
      </h2>
      <p className="mt-2 text-center text-slate-600 text-[clamp(.95rem,1.3vw,1.05rem)]">
        Solusi yang paling sering dipesan klien kami.
      </p>

      {/* Grid kartu */}
      <div className="mt-8 sm:mt-10 grid items-stretch gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 max-w-4xl mx-auto">
        {services.map(({ title, description, image, chips }, i) => (
          <article
            key={i}
            className="
              group relative h-full rounded-2xl p-[1px]
              bg-gradient-to-br from-[#156773] via-[#23A3B3] to-transparent
              shadow-[0_8px_20px_rgba(2,6,23,0.08)]
              hover:shadow-[0_12px_26px_rgba(2,6,23,0.12)]
              transition-transform duration-300 hover:-translate-y-0.5 hover:scale-[1.01]
            "
          >
            {/* inner card */}
            <div
              className="
                relative rounded-2xl bg-white h-full overflow-hidden
                p-6 sm:p-7 md:p-8
                ring-1 ring-slate-200/60 transition
                group-hover:ring-[#156773]/25
                flex flex-col
              "
            >
              {/* sheen / glow */}
              <span
                className="
                  pointer-events-none absolute inset-0
                  bg-gradient-to-r from-transparent via-[#156773]/10 to-transparent
                  opacity-0 blur-lg transition-opacity duration-700
                  group-hover:opacity-100
                "
              />
              {/* highlight strip */}
              <span className="pointer-events-none absolute -top-px left-10 right-10 h-[2px] bg-gradient-to-r from-transparent via-[#156773] to-transparent opacity-70" />

              {/* icon / image */}
              <div className="relative mb-4 sm:mb-5">
                <div className="absolute inset-0 -z-10 rounded-xl bg-[radial-gradient(circle_at_30%_30%,rgba(21,103,115,0.18),transparent_55%)]" />
                <img
                  src={image}
                  alt={title}
                  className="
                    w-14 h-14 sm:w-16 sm:h-16 object-contain rounded-xl
                    border border-slate-100 bg-white shadow-sm
                    transition-transform duration-500
                    group-hover:-translate-y-1 group-hover:scale-[1.03]
                    animate-float-slow
                  "
                  loading="lazy"
                />
              </div>

              {/* copy */}
              <h3 className="text-[clamp(1.05rem,1.6vw,1.25rem)] font-extrabold text-[#156773]">
                {title}
              </h3>
              <p className="mt-2 text-slate-700 leading-relaxed text-[clamp(.95rem,1.2vw,1.05rem)]">
                {description}
              </p>

              {/* chips */}
              <div className="mt-4 sm:mt-5 flex flex-wrap gap-2">
                {chips.map((b) => (
                  <span
                    key={b}
                    className="
                      rounded-full border border-slate-200 bg-slate-50
                      px-3 py-1 text-[11.5px] sm:text-xs font-semibold text-slate-700
                    "
                  >
                    {b}
                  </span>
                ))}
              </div>

              {/* bottom gradient pad subtle (aksi visual) */}
              <div
                aria-hidden
                className="pointer-events-none absolute left-0 right-0 bottom-0 h-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    "linear-gradient(to top, rgba(21,103,115,0.07), rgba(21,103,115,0))",
                }}
              />
            </div>
          </article>
        ))}
      </div>

      {/* CTA */}
      <div className="flex justify-center mt-10">
        <a
          href="https://wa.me/62881023513057"
          aria-label="Konsultasi Gratis"
          className="
            group relative inline-flex items-center gap-3
            rounded-[30px] px-7 sm:px-9 py-3.5 sm:py-4
            text-white font-semibold
            shadow-lg shadow-teal-900/10 ring-1 ring-white/10
            transition active:scale-[0.985]
          "
          style={{
            background: "linear-gradient(90deg, #156773, #1A8A98, #23A3B3, #156773)",
            backgroundSize: "200% 100%",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundPosition = "100% 0")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundPosition = "0% 0")}
        >
          <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-[30px]">
            <span className="absolute -left-1/3 top-0 h-full w-1/3 translate-x-[-100%] bg-white/25 blur-md transition-transform duration-700 group-hover:translate-x-[260%]" />
          </span>
          <PhoneCall className="size-5 opacity-90" />
          <span>Konsultasi Gratis</span>
        </a>
      </div>

      {/* Animasi & helpers */}
      <style>{`
        @keyframes floatY {
          0%,100% { transform: translateY(0); }
          50%     { transform: translateY(-6px); }
        }
        .animate-float-slow { animation: floatY 4.6s ease-in-out infinite; }

        @media (prefers-reduced-motion: reduce) {
          .animate-float-slow { animation: none !important; }
        }
      `}</style>
    </section>
  );
}

import React from "react";
import { PhoneCall } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      title: "Podcast Production",
      description:
        "Produksi podcast profesional dengan kualitas audio terbaik dan konten menarik.",
      image: "public/services/podcastprod.png",
    },
    {
      title: "Content Production",
      description:
        "Pembuatan konten video dan audio berkualitas tinggi yang sesuai dengan kebutuhan Anda.",
      image: "public/services/contentprod.png",
    },
  ];

  return (
    <section
  id="services"
  className="
    relative overflow-hidden container mx-auto max-w-7xl
    px-4 sm:px-6
    pt-6 sm:pt-10 pb-6 sm:pb-16
    md:mt-0                        /* <-- hapus margin negatifnya */
    scroll-mt-24 sm:scroll-mt-28 lg:scroll-mt-32  /* <-- offset utk header fixed */
  "
  style={{ fontFamily: '"Helvetica Now", Helvetica, Arial, sans-serif' }}
>
      {/* === BACKDROP: radial glow + grid halus (brand #156773) === */}
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
      {/* === END BACKDROP === */}

      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-center">
        Layanan Kami
      </h2>
      <p className="mt-3 text-center text-slate-600">
        Solusi yang paling sering dipesan klien kami.
      </p>

      <div className="mt-10 sm:mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 max-w-3xl mx-auto">
        {services.map(({ title, description, image }, i) => (
          <div
            key={i}
            className="
              group relative flex flex-col items-center text-center
              rounded-2xl bg-white p-8
              shadow-[0_10px_24px_rgba(21,103,115,0.14)]
              hover:shadow-[0_18px_38px_rgba(21,103,115,0.24)]
              transition-transform duration-300
              hover:-translate-y-1 hover:scale-[1.02]
              card-glow
            "
          >
            {/* soft glow sweep on hover */}
            <span className="
              pointer-events-none absolute inset-0 rounded-2xl
              bg-gradient-to-r from-[#156773]/0 via-[#156773]/10 to-[#156773]/0
              opacity-0 blur-xl transition-opacity duration-500
              group-hover:opacity-100
            " />
            {/* thin highlight strip (aksen) */}
            <span className="pointer-events-none absolute -top-px left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#156773] to-transparent opacity-70" />

            <img
              src={image}
              alt={title}
              className="mb-4 w-16 h-16 object-contain rounded-xl shadow-sm border border-slate-100 bg-white"
              loading="lazy"
            />
            <h3 className="text-xl font-semibold text-[#156773]">{title}</h3>
            <p className="mt-2 text-slate-700">{description}</p>
          </div>
        ))}
      </div>

      {/* CTA sama seperti sebelumnya */}
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
            background:
              "linear-gradient(90deg, #156773, #1A8A98, #23A3B3, #156773)",
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

      {/* Animasi shadow breathing (halus) */}
      <style>{`
        @keyframes cardGlow {
          0%,100% { box-shadow: 0 10px 24px rgba(21,103,115,.14); }
          50%     { box-shadow: 0 16px 36px rgba(21,103,115,.22); }
        }
        .card-glow { animation: cardGlow 4.2s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .card-glow { animation: none; }
        }
      `}</style>
    </section>
  );
}

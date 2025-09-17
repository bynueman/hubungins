// src/ServicesSection.jsx
import React from "react";
import { PhoneCall } from "lucide-react";
import { useInView } from "react-intersection-observer";

import podcastProd from "./assets/services/podcastprod.png";
import contentProd from "./assets/services/contentprod.png";

import dokPodcast from "./assets/services/dok-podcastprod.jpg";
import dokContent from "./assets/services/dok-contentprod.jpg";

export default function ServicesSection() {
  const services = [
    {
      title: "Podcast Production",
      description:
        "Produksi podcast profesional dengan kualitas audio terbaik, alur konten yang engaging, serta potongan clipper (shorts/highlight) siap upload untuk IG, TikTok, dan Reels.",
      image: podcastProd,
      docImage: dokPodcast,
      chips: ["Pra-produksi", "Recording", "Editing", "Clipper"],
    },
    {
      title: "Content Production",
      description:
        "Produksi video/shorts kreatif untuk IG & TikTok: dari konsep, shooting, hingga editing.",
      image: contentProd,
      docImage: dokContent,
      chips: ["Scripting", "Shooting", "Editing"],
    },
  ];

  // Custom hook untuk animasi fade-in dan slide-up
  function AnimatedArticle({ children }) {
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });

    return (
      <article
        ref={ref}
        className={`group relative rounded-xl border border-slate-200 bg-white shadow-md transition-shadow duration-300 transform ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        } hover:shadow-lg hover:-translate-y-1`}
        style={{ transitionProperty: "opacity, transform, box-shadow" }}
      >
        {children}
      </article>
    );
  }

  return (
    <section
      id="services"
      className="relative container mx-auto max-w-7xl px-4 sm:px-6 pt-10 pb-16 scroll-mt-24 sm:scroll-mt-28 lg:scroll-mt-32"
      style={{ fontFamily: '"Helvetica Now", Helvetica, Arial, sans-serif' }}
    >
      {/* BACKDROP */}
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
        className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-0 opacity-5 -z-10"
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
      <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-center text-[#156773]">
        Layanan Kami
      </h2>
      <p className="mt-3 text-center text-slate-600 text-base max-w-xl mx-auto">
        Solusi yang paling sering dipesan klien kami.
      </p>

      {/* Grid kartu */}
      <div className="mt-10 grid gap-8 sm:gap-10 grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto">
        {services.map(({ title, description, image, docImage, chips }, i) => (
          <AnimatedArticle key={i}>
            <div className="md:flex h-full">
              {/* Kiri: dokumentasi */}
              <div className="md:w-2/5 overflow-hidden rounded-t-xl md:rounded-l-xl md:rounded-tr-none">
                <img
                  src={docImage}
                  alt={`${title} — dokumentasi`}
                  loading="lazy"
                  className="w-full h-48 md:h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
              </div>

              {/* Kanan: konten */}
              <div className="md:w-3/5 p-6 flex flex-col justify-between">
                <div>
                  <div className="mb-4">
                    <img
                      src={image}
                      alt={title}
                      loading="lazy"
                      className="w-12 h-12 sm:w-14 sm:h-14 object-contain rounded-lg border border-slate-100 bg-white shadow-sm transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-[#156773] transition-transform duration-300 group-hover:translate-y-[-4px]">
                    {title}
                  </h3>
                  <p className="mt-2 text-slate-700 text-sm sm:text-base leading-relaxed transition-opacity duration-300 group-hover:opacity-90">
                    {description}
                  </p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {chips.map((chip) => (
                    <span
                      key={chip}
                      className="rounded-full border border-slate-300 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700 select-none cursor-default transition-transform duration-200 hover:scale-110 hover:bg-[#156773] hover:text-white"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedArticle>
        ))}
      </div>

      {/* CTA */}
      <div className="flex justify-center mt-12">
        <a
          href="https://wa.me/62881023513057"
          aria-label="Konsultasi Gratis"
          className="inline-flex items-center gap-3 rounded-[15px] bg-gradient-to-r from-[#156773] via-[#23A3B3] to-[#1A8A98] px-8 py-3 text-white font-semibold text-lg shadow-lg transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#23A3B3]/50 animate-pulse-slow"
          style={{ animationTimingFunction: "ease-in-out" }}
        >
          <PhoneCall className="w-5 h-5 opacity-90" />
          <span>Konsultasi Gratis</span>
        </a>
      </div>

      {/* Custom animation for pulse slow */}
      <style>{`
        @keyframes pulse-slow {
          0%, 100% {
            box-shadow: 0 0 10px 0 rgba(35,163,179,0.7);
          }
          50% {
            box-shadow: 0 0 20px 5px rgba(35,163,179,0.4);
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s infinite;
        }
      `}</style>
    </section>
  );
}

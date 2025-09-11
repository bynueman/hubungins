import { useEffect, useRef, useState } from "react";

/* -------- Counter (tidak diubah, hanya dipoles minor) -------- */
function CountUp({ target, duration = 1000, start = false }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startVal = 0;
    const number = parseInt(target);
    const step = number / (duration / 18);
    function animate() {
      startVal += step;
      if (startVal >= number) setCount(number);
      else {
        setCount(Math.floor(startVal));
        requestAnimationFrame(animate);
      }
    }
    animate();
  }, [start, target, duration]);
  return (
    <>
      {count}
      {target.includes("+") && "+"}
    </>
  );
}

/* -------- Section About with visual upgrades -------- */
export default function AboutSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative overflow-hidden">
      {/* BACKDROP: grid halus + radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60rem 60rem at 80% -10%, rgba(21,103,115,0.12), transparent 60%), radial-gradient(50rem 40rem at -10% 30%, rgba(21,103,115,0.08), transparent 60%)",
        }}
      />
      <svg
        aria-hidden
        className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 opacity-[0.06]"
        width="1400"
        height="400"
      >
        <defs>
          <pattern id="grid" width="28" height="28" patternUnits="userSpaceOnUse">
            <path d="M28 0H0V28" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="1400" height="400" fill="url(#grid)" />
      </svg>

      <div className="container mx-auto max-w-7xl px-6 py-20 md:py-24">
        {/* Heading */}
        <div
          className={`mx-auto max-w-3xl text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#156773] ring-1 ring-[#156773]/20">
            <span className="inline-block size-1.5 rounded-full bg-[#156773]" />
            Agency Creative
          </span>

          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Kalo Soal Ngonten, Gampang Dihubungin!
            </span>
          </h2>

          <p className="mt-4 text-slate-600">
            Short Video Content Specialist No.1 di Yogyakarta, kami bantu brand tampil beda
            dengan konten desain & video pendek yang fresh dan berdampak.
          </p>
        </div>

        {/* What makes us different + Tantangan */}
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div
            className={`group rounded-2xl border border-slate-200 bg-white/80 backdrop-blur p-6 shadow-sm transition-all duration-500 hover:shadow-lg hover:-translate-y-0.5 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-[#156773]/10 px-3 py-1 text-xs font-semibold text-[#156773] ring-1 ring-[#156773]/20">
              Kenapa Hubung’ins?
            </div>
            <p className="mt-3 text-sm text-slate-600">
              Kami nggak sekadar ikut tren, kami bantu kamu jadi trendsetter lewat solusi kreatif
              yang dirancang khusus untuk kebutuhan brand-mu.
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                "Ide fresh yang nggak pasaran",
                "Tim gesit: eksekusi cepat tanpa ribet",
                "Layanan super personal & tailored",
                "Fokus ke hasil yang bisa dilihat & dirasakan",
              ].map((t, i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-1 inline-block size-1.5 rounded-full bg-[#156773]" />
                  <span className="transition-colors group-hover:text-slate-800">{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className={`group rounded-2xl border border-slate-200 bg-white/80 backdrop-blur p-6 shadow-sm transition-all duration-500 hover:shadow-lg hover:-translate-y-0.5 ${
              isVisible ? "opacity-100 translate-y-0 delay-100" : "opacity-0 translate-y-3"
            }`}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-900/5 px-3 py-1 text-xs font-semibold text-slate-800 ring-1 ring-slate-200">
              Tantangan yang sering kamu hadapi
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                "Pengen konten keren, bingung mulai dari mana",
                "Produksi, operasional, marketing dipegang sendiri",
                "Nggak sempat riset tren, konsep, syuting, editing, algoritma",
                "Posting asal-asalan, performa jalan di tempat",
              ].map((t, i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-1 inline-block size-1.5 rounded-full bg-[#156773]" />
                  <span className="transition-colors group-hover:text-slate-800">{t}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-sm text-slate-600">
              Saatnya bikin brand kamu <span className="font-semibold">stand out</span> bareng Hubung’ins.
            </p>
          </div>
        </div>

        {/* Proof / social numbers */}
        <div
          className={`mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {[
            { k: "9+", v: "Clients (UMKM, Universitas, Startup)" },
            { k: "10+", v: "Kolaborasi B2B" },
            { k: "50+", v: "Talent & KOL Partners" },
            { k: "4", v: "Program pemberdayaan komunitas" },
          ].map((s, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-0.5 hover:shadow-lg"
            >
              {/* ring gradient sebagai aksen */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-transparent"
                style={{
                  boxShadow:
                    "inset 0 0 0 1px rgba(21,103,115,0.10), 0 1px 0 rgba(255,255,255,0.6)",
                }}
              />
              <div className="mb-1 text-center text-3xl md:text-4xl font-extrabold leading-tight bg-gradient-to-r from-[#156773] to-[#1d8a99] bg-clip-text text-transparent">
                <CountUp target={s.k} duration={1000 + i * 350} start={isVisible} />
              </div>
              <div className="text-center text-sm text-slate-600">{s.v}</div>

              {/* highlight strip halus di bawah */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#156773]/30 to-transparent" />
            </div>
          ))}
        </div>

        {/* Philosophy / commitment */}
        <div
          className={`mt-12 relative rounded-2xl border border-[#156773]/20 bg-[#156773]/5 p-6 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          {/* garis aksen tipis */}
          <div className="absolute -top-px left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-[#156773] to-transparent opacity-70" />
          <p className="text-sm text-slate-700">
            Kita percaya setiap brand layak dapet perhatian asik dan personal. Karena itu, klien
            tiap bulan kita batasin, supaya ide tetep fresh, kreativitas ngalir, dan setiap proyek
            bisa kita garap dengan penuh asik dan totalitas.
          </p>
        </div>

        {/* CTA */}
        <div
          className={`mt-10 flex flex-col items-center gap-3 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
        >
          <a
            href="#contact"
            className="rounded-xl bg-[#156773] px-6 py-3 text-base font-semibold text-white shadow hover:brightness-110 active:scale-[0.99] transition"
          >
            Konsultasi Gratis
          </a>
          <p className="text-xs text-slate-500">
            Mau buat konten? Konsultasi sekarang.
          </p>
        </div>
      </div>
    </section>
  );
}

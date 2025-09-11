import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Rocket, Users, TrendingUp, PhoneCall } from "lucide-react";

/* -------- Counter (tetap) -------- */
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

/* -------- Section About (fokus: Kenapa Hubung’ins + animasi) -------- */
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

  // Variants animasi
  const fadeUp = {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
  };
  const stagger = {
    show: { transition: { staggerChildren: 0.12 } },
  };

  const REASONS = [
    {
      icon: Sparkles,
      title: "Ide Fresh",
      desc: "Nggak pasaran—selalu kontekstual sama persona brand kamu.",
    },
    {
      icon: Rocket,
      title: "Eksekusi Gesit",
      desc: "Workflow rapi: konsep → produksi → publish cepat tanpa ribet.",
    },
    {
      icon: Users,
      title: "Super Personal",
      desc: "Beneran tailored: komunikasi intens & 1 tim fokus ke projectmu.",
    },
    {
      icon: TrendingUp,
      title: "Hasil Terukur",
      desc: "Ngonten yang keliatan dampaknya, bukan sekadar ‘rame doang’.",
    },
  ];

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
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isVisible ? "show" : "hidden"}
          className="mx-auto max-w-3xl text-center"
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
            Short Video Content Specialist Paling Asik No.1 di Indonesia, kami bantu brand tampil beda
            dengan konten desain &amp; video pendek yang fresh dan berdampak.
          </p>
        </motion.div>

        {/* Kenapa Hubung’ins? */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isVisible ? "show" : "hidden"}
          className="mt-12"
        >
          <motion.div variants={fadeUp} className="mb-5">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#156773]/10 px-3 py-1 text-xs font-semibold text-[#156773] ring-1 ring-[#156773]/20">
              Kenapa Hubung’ins?
            </div>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2">
            {REASONS.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                variants={fadeUp}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white/80 backdrop-blur p-6 shadow-sm"
              >
                {/* aksen garis tipis */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-transparent"
                  style={{ boxShadow: "inset 0 0 0 1px rgba(21,103,115,0.08)" }} />

                <div className="flex items-start gap-4">
                  <div className="shrink-0 rounded-xl bg-[#156773]/10 p-3 text-[#156773] ring-1 ring-[#156773]/15">
                    <Icon className="size-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold">{title}</h3>
                    <p className="mt-1 text-sm text-slate-600">{desc}</p>
                  </div>
                </div>

                {/* highlight strip on hover */}
                <span className="pointer-events-none absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#156773]/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Proof / social numbers */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isVisible ? "show" : "hidden"}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {[
            { k: "15+", v: "Clients (UMKM, Universitas, Startup, Personal Content)" },
            { k: "10+", v: "Kolaborasi B2B" },
            { k: "50+", v: "Talent & KOL Partners" },
            { k: "4", v: "Program pemberdayaan komunitas" },
          ].map((s, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="relative overflow-hidden rounded-xl border border-slate-200 bg-white p-8 shadow-sm"
            >
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
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#156773]/30 to-transparent" />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isVisible ? "show" : "hidden"}
          className="mt-10 flex flex-col items-center gap-3"
        >
          <a
            href="#contact"
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
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundPosition = "100% 0")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundPosition = "0% 0")
            }
          >
            {/* shine effect */}
            <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-[30px]">
              <span className="absolute -left-1/3 top-0 h-full w-1/3 translate-x-[-100%] bg-white/25 blur-md transition-transform duration-700 group-hover:translate-x-[260%]" />
            </span>
            <PhoneCall className="size-5 opacity-90" />
            <span>Konsultasi Gratis</span>
          </a>

          <p className="text-xs text-slate-500">
            Mau buat konten? Konsultasi sekarang.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

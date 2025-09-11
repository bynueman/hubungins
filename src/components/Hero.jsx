import { motion, useMotionValue, useTransform, useReducedMotion } from "framer-motion";
import { Phone } from "lucide-react";
import { useEffect } from "react";
import logo from "../assets/logo.png";

export default function Hero({
  title = <>Kalo Soal Ngonten, <br className="hidden sm:block" /> Gampang Dihubungin!</>,
  subtitle = "Spesialis Konten Video Singkat Paling Asik No.1 di Indonesia",
  primaryCtaLabel = "Konsultasi",
  primaryCtaHref = "https://wa.me/62881023513057",
  secondaryCtaLabel = "Lihat Portofolio",
  secondaryCtaHref = "#portfolio",
}) {
  const prefersReduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const tx1 = useTransform(mx, [-1, 1], ["-1.5%", "1.5%"]);
  const ty1 = useTransform(my, [-1, 1], ["-1.5%", "1.5%"]);
  const tx2 = useTransform(mx, [-1, 1], ["1.2%", "-1.2%"]);
  const ty2 = useTransform(my, [-1, 1], ["0.8%", "-0.8%"]);

  useEffect(() => {
    if (prefersReduce) return;
    const onMove = (e) => {
      const { innerWidth: w, innerHeight: h } = window;
      const nx = (e.clientX / w) * 2 - 1;
      const ny = (e.clientY / h) * 2 - 1;
      mx.set(nx); my.set(ny);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [mx, my, prefersReduce]);

  const reveal = {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
  };

  return (
    <section
      id="hero"
      className="relative min-h-[70svh] sm:min-h-[70vh] md:min-h-[75vh] flex items-center overflow-visible pt-[max(4.5rem,env(safe-area-inset-top))] sm:pt-24 pb-8 md:pb-12"
      style={{ fontFamily: '"Helvetica Now", Helvetica, Arial, sans-serif' }}
    >
      {/* Logo besar (≥ sm) — pos/rotasi mengikuti referensi */}
      {/* Logo mark — mobile kecil di pojok kanan atas, desktop besar & miring */}
{/* Desktop logo (≥ sm) – pastikan di atas background */}
<img
  src={logo}
  alt=""
  aria-hidden
  className="
    hidden sm:block
    pointer-events-none select-none
    absolute -right-10 -top-1
    w-[480px] md:w-[600px] lg:w-[700px]
    -rotate-8
    z-10            /* <-- ini penting */
  "
/>
{/* Logo kecil (mobile) */}
<img
  src={logo}
  alt=""
  aria-hidden
  className="
    sm:hidden pointer-events-none select-none
    absolute right-4
    w-[64px] h-auto rounded-xl shadow-md opacity-90
  "
  style={{
    top: "calc(var(--header-height, 64px) + 25px)" // header + 48px
  }}
/>




      {/* === Background bubbles (tetap) === */}
      <motion.div className="absolute left-0 top-0 w-full h-full pointer-events-none z-0"
        initial={prefersReduce ? { opacity: 1 } : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}>
        <motion.div style={{ x: tx1, y: ty1 }} className="absolute inset-0">
          <motion.div className="absolute bg-[#156773] opacity-10 rounded-full left-[-12vw] top-[-14vw] w-[42vw] h-[42vw] min-w-[160px] min-h-[160px] sm:min-w-[200px] sm:min-h-[200px]"
            initial={{ scale: 1, opacity: 0.12 }}
            animate={prefersReduce ? { opacity: 0.12 } : { scale: [1, 1.12, 1], opacity: [0.12, 0.18, 0.12] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />
          <motion.div className="absolute bg-[#156773] opacity-10 rounded-full left-[38vw] top-[14vh] w-[18vw] h-[18vw] min-w-[90px] min-h-[90px] max-w-[220px] max-h-[220px]"
            initial={{ scale: 1.02, opacity: 0.08 }}
            animate={prefersReduce ? { opacity: 0.08 } : { scale: [1.02, 0.94, 1.02], opacity: [0.08, 0.12, 0.08] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} />
          <motion.div className="absolute bg-[#156773] opacity-10 rounded-full left-[1vw] bottom-[6vw] w-[30vw] h-[30vw] min-w-[140px] min-h-[140px] max-w-[340px] max-h-[340px]"
            initial={{ scale: 1, opacity: 0.14 }}
            animate={prefersReduce ? { opacity: 0.14 } : { scale: [1, 1.22, 1], opacity: [0.14, 0.2, 0.14] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }} />
        </motion.div>
        <motion.div style={{ x: tx2, y: ty2 }} className="absolute inset-0">
          <motion.div className="absolute bg-[#156773] opacity-10 rounded-full right-[-12vw] top-[-11vw] w-[30vw] h-[30vw] min-w-[120px] min-h-[120px] max-w-[420px] max-h-[420px]"
            initial={{ scale: 0.98, opacity: 0.09 }}
            animate={prefersReduce ? { opacity: 0.09 } : { scale: [0.98, 1.16, 0.98], opacity: [0.09, 0.15, 0.09] }}
            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }} />
          <motion.div className="absolute bg-[#156773] opacity-10 rounded-full right-[14vw] bottom-[8vw] w-[28vw] h-[28vw] min-w-[150px] min-h-[150px] max-w-[320px] max-h-[320px]"
            initial={{ scale: 1, opacity: 0.12 }}
            animate={prefersReduce ? { opacity: 0.12 } : { scale: [1, 1.18, 1], opacity: [0.12, 0.18, 0.12] }}
            transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }} />
          <motion.div className="absolute bg-[#156773] opacity-10 rounded-full right-[16vw] top-[10vh] w-[8vw] h-[8vw] min-w-[44px] min-h-[44px] max-w-[120px] max-h-[120px]"
            initial={{ scale: 1, opacity: 0.07 }}
            animate={prefersReduce ? { opacity: 0.07 } : { scale: [1, 1.08, 1], opacity: [0.07, 0.11, 0.07] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }} />
        </motion.div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#156773]/40 to-transparent" />
      </motion.div>

      {/* === HERO CONTENT === */}
      <div className="relative z-20 w-full">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 pt-20 sm:pt-24 md:pt-36 pb-2 md:pb-18">
          <div className="grid grid-cols-12 gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-start">
            <div className="col-span-12 lg:col-span-7">
              <motion.h1 variants={reveal} initial="hidden" animate="show"
                className="text-[clamp(1.9rem,4.8vw,3.75rem)] sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight">
                {title}
              </motion.h1>

              <motion.p variants={reveal} initial="hidden" animate="show"
                transition={{ delay: 0.08, duration: 0.5, ease: "easeOut" }}
                className="mt-4 sm:mt-5 text-slate-900 max-w-[65ch] text-base sm:text-lg">
                {subtitle}
              </motion.p>

              {/* === CTA Buttons (animated) === */}
              <motion.div variants={reveal} initial="hidden" animate="show"
                transition={{ delay: 0.16, duration: 0.5, ease: "easeOut" }}
                className="mt-7 sm:mt-8 flex flex-wrap gap-3 sm:gap-4">

                {/* Primary CTA */}
                <motion.a
                  href={primaryCtaHref}
                  className="group relative inline-flex items-center gap-2 rounded-xl bg-[#156773] px-5 py-3 font-semibold text-white overflow-hidden shadow-md cta-breathe w-full sm:w-auto"
                  whileHover={prefersReduce ? undefined : { y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.985 }}
                >
                  <motion.span
                    initial={false}
                    animate={prefersReduce ? {} : { rotate: [0, -8, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                    className="inline-flex"
                  >
                    <Phone className="size-4 opacity-90" />
                  </motion.span>
                  <span className="relative z-10">{primaryCtaLabel}</span>

                  {/* sheen on hover */}
                  {!prefersReduce && (
                    <span className="pointer-events-none absolute inset-0">
                      <span className="cta-sheen absolute -left-1/3 top-0 h-full w-1/3 bg-white/30 blur-md rotate-12 opacity-0 group-hover:opacity-100" />
                    </span>
                  )}
                  {/* subtle ring mask */}
                  <span className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-white/40 [mask-image:linear-gradient(white,transparent)]" />
                </motion.a>

                {/* Secondary CTA */}
                <motion.a
                  href={secondaryCtaHref}
                  className="group relative rounded-xl border border-slate-300 px-5 py-3 font-medium w-full sm:w-auto bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 overflow-hidden"
                  whileHover={prefersReduce ? undefined : { y: -2 }}
                  whileTap={{ scale: 0.985 }}
                >
                  <span className="relative z-10">{secondaryCtaLabel}</span>
                  {/* gentle hover wash */}
                  <span className="pointer-events-none absolute inset-0 bg-slate-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </motion.a>
              </motion.div>

              <motion.div variants={reveal} initial="hidden" animate="show"
                transition={{ delay: 0.24, duration: 0.5, ease: "easeOut" }}
                className="mt-5 sm:mt-6 flex items-center gap-2 text-sm text-slate-500">
                <Phone className="size-4" />
                <span>Respon cepat • Konsultasi gratis</span>
              </motion.div>
            </div>

            <div className="col-span-12 lg:col-span-5 h-28 sm:h-36 md:h-72 lg:h-96" />
          </div>
        </div>
      </div>

      {/* CTA animations (CSS) */}
      <style>{`
        @keyframes ctaSheen {
          from { transform: translateX(-120%) rotate(20deg); }
          to   { transform: translateX(220%)  rotate(20deg); }
        }
        @keyframes ctaBreathe {
          0%,100% { box-shadow: 0 10px 18px rgba(21,103,115,.18); }
          50%     { box-shadow: 0 14px 26px rgba(21,103,115,.28); }
        }
        .cta-breathe { animation: ctaBreathe 3.6s ease-in-out infinite; }
        .group:hover .cta-sheen { animation: ctaSheen 1s ease forwards; }

        /* Respect user's reduced motion preference */
        @media (prefers-reduced-motion: reduce) {
          .cta-breathe, .cta-sheen { animation: none !important; }
        }
      `}</style>
    </section>
  );
}

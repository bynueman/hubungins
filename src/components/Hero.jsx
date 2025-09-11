import { motion, useMotionValue, useTransform, useReducedMotion } from "framer-motion";
import { Phone } from "lucide-react";
import { useEffect } from "react";
import logo from "../assets/logo.png";

/**
 * Hero Section (Responsive + Improved Animations + Parallax)
 * Font: "Helvetica Now", fallback Helvetica, Arial, sans-serif
 */
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
      mx.set(nx);
      my.set(ny);
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
      className="
        relative
        min-h-[70svh] sm:min-h-[70vh] md:min-h-[75vh]
        flex items-center
        overflow-visible
        pt-[max(4.5rem,env(safe-area-inset-top))]
        sm:pt-24
        pb-8 md:pb-12
      "
      style={{ fontFamily: '"Helvetica Now", Helvetica, Arial, sans-serif' }}
    >
      {/* Logo besar (hanya ≥ lg) */}
      {/* Logo besar (hanya ≥ lg) */}
{/* Logo besar (≥ lg) — rotasi + kompensasi posisi */}
<img
  src={logo}
  alt=""
  aria-hidden
className="hidden sm:block pointer-events-none select-none absolute -right-10 -top-1 w-[480px] md:w-[600px] lg:w-[700px] -rotate-8"
/>



      {/* Background bubbles */}
      <motion.div
        className="absolute left-0 top-0 w-full h-full pointer-events-none z-0"
        initial={prefersReduce ? { opacity: 1 } : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div style={{ x: tx1, y: ty1 }} className="absolute inset-0">
          <motion.div
            className="absolute bg-[#156773] opacity-10 rounded-full left-[-12vw] top-[-14vw]
                       w-[42vw] h-[42vw] min-w-[160px] min-h-[160px] sm:min-w-[200px] sm:min-h-[200px]"
            initial={{ scale: 1, opacity: 0.12 }}
            animate={prefersReduce ? { opacity: 0.12 } : { scale: [1, 1.12, 1], opacity: [0.12, 0.18, 0.12] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bg-[#156773] opacity-10 rounded-full left-[38vw] top-[14vh]
                       w-[18vw] h-[18vw] min-w-[90px] min-h-[90px] max-w-[220px] max-h-[220px]"
            initial={{ scale: 1.02, opacity: 0.08 }}
            animate={prefersReduce ? { opacity: 0.08 } : { scale: [1.02, 0.94, 1.02], opacity: [0.08, 0.12, 0.08] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bg-[#156773] opacity-10 rounded-full left-[1vw] bottom-[6vw]
                       w-[30vw] h-[30vw] min-w-[140px] min-h-[140px] max-w-[340px] max-h-[340px]"
            initial={{ scale: 1, opacity: 0.14 }}
            animate={prefersReduce ? { opacity: 0.14 } : { scale: [1, 1.22, 1], opacity: [0.14, 0.2, 0.14] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        <motion.div style={{ x: tx2, y: ty2 }} className="absolute inset-0">
          <motion.div
            className="absolute bg-[#156773] opacity-10 rounded-full right-[-12vw] top-[-11vw]
                       w-[30vw] h-[30vw] min-w-[120px] min-h-[120px] max-w-[420px] max-h-[420px]"
            initial={{ scale: 0.98, opacity: 0.09 }}
            animate={prefersReduce ? { opacity: 0.09 } : { scale: [0.98, 1.16, 0.98], opacity: [0.09, 0.15, 0.09] }}
            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bg-[#156773] opacity-10 rounded-full right-[14vw] bottom-[8vw]
                       w-[28vw] h-[28vw] min-w-[150px] min-h-[150px] max-w-[320px] max-h-[320px]"
            initial={{ scale: 1, opacity: 0.12 }}
            animate={prefersReduce ? { opacity: 0.12 } : { scale: [1, 1.18, 1], opacity: [0.12, 0.18, 0.12] }}
            transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bg-[#156773] opacity-10 rounded-full right-[16vw] top-[10vh]
                       w-[8vw] h-[8vw] min-w-[44px] min-h-[44px] max-w-[120px] max-h-[120px]"
            initial={{ scale: 1, opacity: 0.07 }}
            animate={prefersReduce ? { opacity: 0.07 } : { scale: [1, 1.08, 1], opacity: [0.07, 0.11, 0.07] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#156773]/40 to-transparent" />
      </motion.div>

      {/* === HERO CONTENT === */}
      <div className="relative z-20 w-full">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 pt-20 sm:pt-24 md:pt-36 pb-2 md:pb-18">
          <div className="grid grid-cols-12 gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-start">
            <div className="col-span-12 lg:col-span-7">
              <motion.h1
                variants={reveal}
                initial="hidden"
                animate="show"
                className="
                  text-[clamp(1.9rem,4.8vw,3.75rem)]
                  sm:text-4xl md:text-5xl lg:text-6xl
                  font-extrabold leading-[1.08] tracking-tight
                "
              >
                {title}
              </motion.h1>

              <motion.p
                variants={reveal}
                initial="hidden"
                animate="show"
                transition={{ delay: 0.08, duration: 0.5, ease: "easeOut" }}
                className="mt-4 sm:mt-5 text-slate-900 max-w-[65ch] text-base sm:text-lg"
                // Regular/body default
              >
                {subtitle}
              </motion.p>

              <motion.div
                variants={reveal}
                initial="hidden"
                animate="show"
                transition={{ delay: 0.16, duration: 0.5, ease: "easeOut" }}
                className="mt-7 sm:mt-8 flex flex-wrap gap-3 sm:gap-4"
              >
                <a
                  href={primaryCtaHref}
                  className="relative text-white rounded-xl bg-[#156773] px-5 py-3 font-semibold hover:brightness-95 w-full sm:w-auto"
                  // CTA lebih tebal: font-semibold
                >
                  {!prefersReduce && (
                    <span className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-white/40 [mask-image:linear-gradient(white,transparent)]" />
                  )}
                  {primaryCtaLabel}
                </a>
                <a
                  href={secondaryCtaHref}
                  className="rounded-xl border border-slate-300 px-5 py-3 font-medium hover:border-slate-400 w-full sm:w-auto bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60"
                >
                  {secondaryCtaLabel}
                </a>
              </motion.div>

              <motion.div
                variants={reveal}
                initial="hidden"
                animate="show"
                transition={{ delay: 0.24, duration: 0.5, ease: "easeOut" }}
                className="mt-5 sm:mt-6 flex items-center gap-2 text-sm text-slate-500"
              >
                <Phone className="size-4" />
                <span>Respon cepat • Konsultasi gratis</span>
              </motion.div>
            </div>

            <div className="col-span-12 lg:col-span-5 h-28 sm:h-36 md:h-72 lg:h-96" />
          </div>
        </div>
      </div>
    </section>
  );
}

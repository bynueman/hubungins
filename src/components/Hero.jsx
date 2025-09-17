import {
  motion,
  useMotionValue,
  useTransform,
  useReducedMotion,
  AnimatePresence,
  useScroll,
} from "framer-motion";
import { Phone, Play, Sparkles } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import logo from "../assets/logo.png";

const ROTATING = ["Cepat", "Asik", "Strategis", "Kreatif"];

export default function Hero({
  title = (
    <>
      Kalo Soal Ngonten, <br className="hidden sm:block " /> Gampang Dihubungin!
    </>
  ),
  subtitle = "Spesialis Konten Video Singkat Paling Asik No.1 di Indonesia",
  primaryCtaLabel = "Konsultasi Gratis",
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

  const { scrollY, scrollYProgress } = useScroll();

  const logoOpacity = useTransform(scrollYProgress, [0, 0.04], [1, 0]);
  const logoY = useTransform(scrollYProgress, [0, 0.04], ["0%", "-150%"]);
  
  const contentY = useTransform(scrollYProgress, [0, 0.15], ["0%", "-25%"]);


  const [showQuickActions, setShowQuickActions] = useState(false);
  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setShowQuickActions(latest > 350);
    });
  }, [scrollY]);

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

  const [rotIdx, setRotIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setRotIdx((i) => (i + 1) % ROTATING.length), 1800);
    return () => clearInterval(t);
  }, []);

  const chips = useMemo(
    () => ["UGC", "Ads Creative", "IG/TikTok Reels", "Konten Edukasi", "Event Coverage", "Brand Strategy"],
    []
  );
  const stats = useMemo(
    () => [
      { k: "30+", v: "Klien" },
      { k: "100+", v: "Video" },
      { k: "60 jt+", v: "Views" },
    ],
    []
  );

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        ease: "easeOut",
      },
    },
  };
  const staggerItem = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="hero"
      className="relative min-h-[70svh] sm:min-h-[70vh] md:min-h-[75vh] flex items-center overflow-visible pt-[max(4.5rem,env(safe-area-inset-top))] sm:pt-24 pb-8 md:pb-12"
      style={{ fontFamily: '"Helvetica Now", Helvetica, Arial, sans-serif' }}
    >
      {/* === Mobile-only ambient: spotlight + grid (TEAL) === */}
      <div className="sm:hidden absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120vw 60vw at 50% -10%, rgba(21,103,115,0.22)), radial-gradient(90vw 60vw at 50% 80%, rgba(21,103,115,0.12), transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #0f172a11 1px, transparent 1px), linear-gradient(to bottom, #0f172a11 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      {/* Logo desktop */}
      <img
        src={logo}
        alt=""
        aria-hidden
        className="hidden sm:block pointer-events-none select-none absolute -right-10 -top-1 w-[480px] md:w-[600px] lg:w-[700px] -rotate-8 z-10"
      />
      {/* Logo kecil (mobile) — dipusatkan */}
      <motion.img
        src={logo}
        alt=""
        aria-hidden
        className="sm:hidden pointer-events-none select-none absolute left-1/2 -translate-x-1/2 w-[68px] h-auto rounded-xl opacity-95"
        style={{
          top: "calc(var(--header-height, 64px) + 18px)",
          opacity: prefersReduce ? 1 : logoOpacity,
          y: prefersReduce ? 0 : logoY,
        }}
      />

      {/* === Background bubbles (tetap TEAL) === */}
      <motion.div
        className="absolute left-0 top-0 w-full h-full pointer-events-none z-0"
        initial={prefersReduce ? { opacity: 1 } : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div style={{ x: tx1, y: ty1 }} className="absolute inset-0">
          <motion.div
            className="absolute bg-[#156773] opacity-10 rounded-full left-[-12vw] top-[-14vw] w-[42vw] h-[42vw] min-w-[160px] min-h-[160px] sm:min-w-[200px] sm:min-h-[200px]"
            initial={{ scale: 1, opacity: 0.12 }}
            animate={prefersReduce ? { opacity: 0.12 } : { scale: [1, 1.12, 1], opacity: [0.12, 0.18, 0.12] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bg-[#156773] opacity-10 rounded-full left-[38vw] top-[14vh] w-[18vw] h-[18vw] min-w-[90px] min-h-[90px] max-w-[220px] max-h-[220px]"
            initial={{ scale: 1.02, opacity: 0.08 }}
            animate={prefersReduce ? { opacity: 0.08 } : { scale: [1.02, 0.94, 1.02], opacity: [0.08, 0.12, 0.08] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bg-[#156773] opacity-10 rounded-full left-[1vw] bottom-[6vw] w-[30vw] h-[30vw] min-w-[140px] min-h-[140px] max-w-[340px] max-h-[340px]"
            initial={{ scale: 1, opacity: 0.14 }}
            animate={prefersReduce ? { opacity: 0.14 } : { scale: [1, 1.22, 1], opacity: [0.14, 0.2, 0.14] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
        <motion.div style={{ x: tx2, y: ty2 }} className="absolute inset-0">
          <motion.div
            className="absolute bg-[#156773] opacity-10 rounded-full right-[-12vw] top-[-11vw] w-[30vw] h-[30vw] min-w-[120px] min-h-[120px] max-w-[420px] max-h-[420px]"
            initial={{ scale: 0.98, opacity: 0.09 }}
            animate={prefersReduce ? { opacity: 0.09 } : { scale: [0.98, 1.16, 0.98], opacity: [0.09, 0.15, 0.09] }}
            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bg-[#156773] opacity-10 rounded-full right-[14vw] bottom-[8vw] w-[28vw] h-[28vw] min-w-[150px] min-h-[150px] max-w-[320px] max-h-[320px]"
            initial={{ scale: 1, opacity: 0.12 }}
            animate={prefersReduce ? { opacity: 0.12 } : { scale: [1, 1.18, 1], opacity: [0.12, 0.18, 0.12] }}
            transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bg-[#156773] opacity-10 rounded-full right-[16vw] top-[10vh] w-[8vw] h-[8vw] min-w-[44px] min-h-[44px] max-w-[120px] max-h-[120px]"
            initial={{ scale: 1, opacity: 0.07 }}
            animate={prefersReduce ? { opacity: 0.07 } : { scale: [1, 1.08, 1], opacity: [0.07, 0.11, 0.07] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#156773]/40 to-transparent" />
      </motion.div>

      {/* === HERO CONTENT === */}
      <div className="relative z-20 w-full">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 pt-24 sm:pt-28 md:pt-40 pb-2 md:pb-18">
          <div className="grid grid-cols-12 gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-start">
            <motion.div
              className="col-span-12 lg:col-span-7"
              style={{ y: prefersReduce ? 0 : contentY }}
            >
              <motion.h1
                variants={reveal}
                initial="hidden"
                animate="show"
                className="text-[clamp(2rem,6vw,3.75rem)] sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight text-center sm:text-left text-[#156773]"
              >
                {title}
              </motion.h1>

              <div className="mt-4 sm:mt-5 max-w-[65ch] mx-auto sm:mx-0">
                <div className="sm:hidden text-slate-900 text-base text-center">
                  <span>Spesialis Konten Video </span>
                  <span className="inline-flex items-center gap-1 font-bold">
                    <AnimatePresence mode="wait" initial={false}>
                      <motion.span
                        key={rotIdx}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.28, ease: "easeOut" }}
                        className="text-[#156773]"
                      >
                        {ROTATING[rotIdx]}
                      </motion.span>
                    </AnimatePresence>
                    <Sparkles className="size-4 text-[#156773]" />
                  </span>
                </div>
                <motion.p
                  variants={reveal}
                  initial="hidden"
                  animate="show"
                  transition={{ delay: 0.08, duration: 0.5, ease: "easeOut" }}
                  className="hidden sm:block text-slate-900 text-lg"
                >
                  {subtitle}
                </motion.p>
              </div>

              <motion.div
                variants={reveal}
                initial="hidden"
                animate="show"
                transition={{ delay: 0.16, duration: 0.5, ease: "easeOut" }}
                className="mt-6 sm:mt-8 flex flex-row gap-3 items-center justify-center sm:justify-start" // ✨ Gap dikurangi
              >
                <motion.a
                  href={primaryCtaHref}
                  className="group relative flex-1 whitespace-nowrap inline-flex items-center justify-center gap-2 rounded-xl bg-[#156773] px-4 py-2 font-semibold text-white overflow-hidden shadow-md cta-breathe" // ✨ flex-1 dan whitespace-nowrap
                  whileHover={prefersReduce ? undefined : { y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.985 }}
                >
                  <Phone className="size-4 opacity-90" />
                  <span className="relative z-10">{primaryCtaLabel}</span>
                  {!prefersReduce && (
                    <span className="pointer-events-none absolute inset-0">
                      <span className="cta-sheen absolute -left-1/3 top-0 h-full w-1/3 bg-white/30 blur-md rotate-12 opacity-0 group-hover:opacity-100" />
                    </span>
                  )}
                  <span className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-white/40 [mask-image:linear-gradient(white,transparent)]" />
                </motion.a>

                <motion.a
                  href={secondaryCtaHref}
                  className="group relative whitespace-nowrap inline-flex items-center justify-center gap-2 rounded-xl border border-[#156773]/30 px-4 py-2 font-semibold bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 overflow-hidden text-[#0f172a]" // ✨ whitespace-nowrap
                  whileHover={prefersReduce ? undefined : { y: -2 }}
                  whileTap={{ scale: 0.985 }}
                >
                  <Play className="size-4 opacity-80 text-[#156773]" />
                  <span className="relative z-10">{secondaryCtaLabel}</span>
                  <span className="pointer-events-none absolute inset-0 bg-[#156773]/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </motion.a>
              </motion.div>

              <div className="sm:hidden mt-5 -mx-4 px-4">
                <motion.ul
                  className="flex gap-2 overflow-x-auto snap-x snap-mandatory scrollbar-hide justify-center"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.4 }}
                >
                  {chips.map((c) => (
                    <motion.li
                      key={c}
                      className="snap-start shrink-0"
                      variants={staggerItem}
                    >
                      <span className="inline-block rounded-full bg-white px-3 py-1 text-[12px] font-semibold text-slate-800 border border-[#156773]/20 shadow-sm">
                        {c}
                      </span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>

              <motion.div
                className="sm:hidden mt-4 grid grid-cols-3 gap-2 max-w-sm mx-auto"
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
              >
                {stats.map((s) => (
                  <motion.div
                    key={s.v}
                    className="rounded-lg border border-[#156773]/25 bg-white/85 p-3 text-center shadow-sm"
                    variants={staggerItem}
                  >
                    <div className="text-base font-extrabold text-slate-900 leading-none">{s.k}</div>
                    <div className="text-[11px] text-slate-600">{s.v}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <div className="col-span-12 lg:col-span-5 h-28 sm:h-36 md:h-72 lg:h-96" />
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showQuickActions && (
          <motion.div
            className="sm:hidden fixed left-0 right-0 bottom-4 z-30 px-4"
            initial={{ y: "120%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "120%", opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mx-auto max-w-md flex items-center gap-2">
              <a
                href={primaryCtaHref}
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[#156773] text-white font-semibold py-3 shadow-lg"
              >
                <Phone className="size-4" />
                Konsultasi Gratis
              </a>
              <a
                href={secondaryCtaHref}
                className="inline-flex items-center justify-center rounded-xl bg-white text-slate-900 font-semibold py-3 px-4 border border-[#156773]/25 shadow-lg"
              >
                Portofolio
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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

        @media (prefers-reduced-motion: reduce) {
          .cta-breathe, .cta-sheen { animation: none !important; }
        }
      `}</style>
    </section>
  );
}
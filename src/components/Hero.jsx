// src/components/Header.jsx
import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png"; // sesuaikan jika path berbeda

const NAV = [
  { label: "Home", href: "#hero" },
  { label: "Portofolio", href: "#portfolio" },
  { label: "Layanan", href: "#services" },
  { label: "Kontak", href: "#contact" },
];

export default function Header() {
  const prefersReduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [elevated, setElevated] = useState(false);
  const barRef = useRef(null);

  // Catat tinggi header ke CSS var agar section lain bisa offset pakai scroll-mt-*
  useEffect(() => {
    const el = barRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => {
      const h = el.getBoundingClientRect().height;
      document.documentElement.style.setProperty("--header-height", `${Math.round(h)}px`);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Tambah bayangan ringan saat scroll
  useEffect(() => {
    const onScroll = () => setElevated(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Kunci scroll saat menu terbuka
  useEffect(() => {
    const root = document.documentElement;
    if (!open) return;
    const prev = root.style.overflow;
    root.style.overflow = "hidden";
    return () => { root.style.overflow = prev; };
  }, [open]);

  // Tutup dengan ESC
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const variants = useMemo(
    () => ({
      sheet: {
        initial: { y: -12, opacity: 0 },
        animate: {
          y: 0,
          opacity: 1,
          transition: prefersReduce
            ? { duration: 0.18 }
            : { type: "spring", stiffness: 360, damping: 30 },
        },
        exit: { y: -10, opacity: 0, transition: { duration: 0.16, ease: "easeOut" } },
      },
      item: {
        initial: { opacity: 0, y: 8 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.18, ease: "easeOut" } },
        exit: { opacity: 0, y: 6, transition: { duration: 0.12 } },
      },
    }),
    [prefersReduce]
  );

  return (
    <header
      ref={barRef}
      className={`fixed inset-x-0 top-0 z-50 transition
        ${elevated
          ? "bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70 shadow-sm ring-1 ring-slate-900/5"
          : "bg-white/65 backdrop-blur-sm supports-[backdrop-filter]:bg-white/55"}
      `}
      style={{ fontFamily: '"Helvetica Now", Helvetica, Arial, sans-serif' }}
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between py-3">
          {/* Brand */}
          <a href="/#hero" className="flex items-center gap-2 min-w-0 select-none">
            <img src={logo} alt="Hubung’ins" className="h-7 sm:h-8 w-auto" />
            <span className="truncate font-extrabold text-lg sm:text-xl">Hubung’ins</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="text-slate-700 hover:text-slate-900 font-medium">
                {n.label}
              </a>
            ))}
            <a
              href="https://wa.me/62881023513057"
              className="rounded-lg bg-[#156773] text-white px-4 py-2 font-semibold hover:brightness-110"
            >
              Konsultasi
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            aria-label="Buka menu"
            onClick={() => setOpen(true)}
            className="md:hidden inline-flex items-center justify-center rounded-lg p-2 ring-1 ring-slate-300 bg-white/70"
          >
            <Menu className="size-5" />
          </button>
        </div>
      </div>

      {/* Mobile sheet */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.button
              aria-label="Tutup menu"
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-slate-900/30 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.18 } }}
              exit={{ opacity: 0, transition: { duration: 0.14 } }}
            />

            {/* Lembaran menu turun dari bawah header */}
            <motion.nav
              role="dialog"
              aria-modal="true"
              aria-label="Navigasi"
              className="fixed left-0 right-0 z-50 rounded-b-2xl bg-white shadow-lg ring-1 ring-slate-900/5 origin-top will-change-transform transform-gpu"
              style={{ top: "var(--header-height, 64px)" }}
              variants={variants.sheet}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <div className="px-4 sm:px-6 py-4">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-900">Menu</span>
                  <button
                    aria-label="Tutup menu"
                    onClick={() => setOpen(false)}
                    className="inline-flex items-center justify-center rounded-md p-2 hover:bg-slate-100"
                  >
                    <X className="size-5" />
                  </button>
                </div>

                <ul className="mt-2 divide-y divide-slate-100">
                  {NAV.map((n, i) => (
                    <motion.li
                      key={n.href}
                      className="py-3"
                      variants={variants.item}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      transition={{ delay: prefersReduce ? 0 : 0.02 * i }}
                    >
                      <a
                        href={n.href}
                        onClick={() => setOpen(false)}
                        className="block text-slate-800 font-medium"
                      >
                        {n.label}
                      </a>
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-3 pt-3 border-t border-slate-100">
                  <a
                    href="https://wa.me/62881023513057"
                    onClick={() => setOpen(false)}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#156773] text-white font-semibold px-4 py-3 shadow-md active:scale-[0.99]"
                  >
                    Konsultasi
                  </a>
                </div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png"; // Pastikan path ke logo Anda sudah benar

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Efek untuk deteksi scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Efek untuk mengunci scroll body saat menu mobile terbuka
  useEffect(() => {
    const body = document.body;
    if (navOpen) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "";
    }
    return () => {
      body.style.overflow = "";
    };
  }, [navOpen]);

  // Varian animasi untuk panel menu "mengambang"
  const menuVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 25 },
    },
    closed: {
      opacity: 0,
      y: "-20%",
      transition: { duration: 0.2 },
    },
  };

  const listVariants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.1 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 30,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  const navLinks = [
    { label: "Beranda", href: "/#hero" },
    { label: "Layanan", href: "/#services" },
    { label: "Portofolio", href: "/#portfolio" },
    { label: "Harga", href: "/#pricing" },
    { label: "Tentang Kami", href: "/#about" },
    { label: "Kontak", href: "/#contact" },
  ];

  return (
    <header
      className={`w-full fixed top-0 z-50 transition-all duration-300 ease-in-out ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md border-b border-slate-200"
          : "bg-white/50 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 xl:px-8 flex items-center justify-between transition-all duration-300 ease-in-out ${
          scrolled ? "h-16" : "h-20"
        }`}
      >
        <a href="/#hero" className="flex items-center gap-2 select-none min-w-0">
          <img
            src={logo}
            alt="Hubung’ins"
            className={`w-auto transition-all duration-300 ease-in-out ${
              scrolled ? "h-7" : "h-8"
            }`}
          />
          <span
            className="font-bold text-lg sm:text-xl truncate text-[#156773]"
            style={{ fontFamily: '"Roca", Helvetica, Arial, sans-serif', fontSize: "24px"  }}
          >
            Hubung’ins
          </span>
        </a>

        <nav className="hidden lg:flex items-center">
          <div className="flex gap-2 xl:gap-3 rounded-full px-2 py-2 shadow-sm bg-white/50 backdrop-blur-md border border-white/50">
            {navLinks.slice(0, -1).map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="px-5 py-2.5 xl:px-7 xl:py-3 rounded-full text-sm lg:text-base font-medium transition hover:bg-slate-100 whitespace-nowrap"
                style={{ fontFamily: '"Helvetica Now", Helvetica, Arial, sans-serif', color: "#000000ff" }}
              >
                {label}
              </a>
            ))}
            <a
              href="/#contact"
              className="px-5 py-2.5 xl:px-7 xl:py-3 rounded-full font-semibold bg-[#156773] text-white shadow hover:brightness-110 transition whitespace-nowrap"
              style={{ fontFamily: '"Helvetica Now", Helvetica, Arial, sans-serif' }}
            >
              Kontak
            </a>
          </div>
        </nav>

        <button
          className="lg:hidden p-2 z-70"
          onClick={() => setNavOpen((s) => !s)}
          aria-label={navOpen ? "Tutup menu" : "Buka menu"}
        >
          {navOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        <AnimatePresence>
          {navOpen && (
            <>
              {/* Lapisan overlay (motion.div) telah dihapus dari sini */}
              <motion.nav
                className="lg:hidden fixed top-24 right-4 z-60 w-5/6 max-w-sm bg-white border border-slate-200 shadow-2xl rounded-2xl p-6" // ✨ Perubahan di sini
                variants={menuVariants}
                initial="closed"
                animate="open"
                exit="closed"
              >
                <motion.div
                  className="flex flex-col gap-3"
                  variants={listVariants}
                >
                  {navLinks.map(({ label, href }) => (
                    <motion.a
                      key={label}
                      href={href}
                      onClick={() => setNavOpen(false)}
                      className={`block text-center px-6 py-3 rounded-xl text-base font-semibold w-full transition ${
                        label === "Kontak"
                          ? "bg-[#156773] text-white shadow hover:brightness-110"
                          : "bg-slate-100 hover:bg-slate-200 text-[#222]"
                      }`}
                      style={{ fontFamily: '"Helvetica Now", Helvetica, Arial, sans-serif' }}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {label}
                    </motion.a>
                  ))}
                </motion.div>
              </motion.nav>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
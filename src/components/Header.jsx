import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png"; // pastikan path benar

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);

  // >>> Lock body scroll saat menu mobile terbuka
  useEffect(() => {
    const body = document.body;
    if (navOpen) {
      body.style.overflow = "hidden";
      body.style.touchAction = "none"; // cegah scroll/touch backscroll di iOS
    } else {
      body.style.overflow = "";
      body.style.touchAction = "";
    }
    return () => {
      body.style.overflow = "";
      body.style.touchAction = "";
    };
  }, [navOpen]);
  // <<<

  return (
    <header className="w-full fixed top-0 z-50 bg-white/50 backdrop-blur-sm border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 xl:px-8 h-16 sm:h-16 md:h-18 lg:h-20 flex items-center justify-between">
        {/* Logo kiri: image + text */}
        <a href="/#hero" className="flex items-center gap-2 select-none min-w-0">
          <img src={logo} alt="Hubung’ins" className="h-7 sm:h-8 w-auto" />
          <span
            className="font-bold text-lg sm:text-xl truncate"
            style={{
              fontFamily: '"Helvetica Now", Helvetica, Arial, sans-serif',
              userSelect: "none",
            }}
          >
            Hubung’ins
          </span>
        </a>

        {/* Menu desktop (tampil mulai >= lg) */}
        <nav className="hidden lg:flex items-center">
          <div className="flex gap-2 xl:gap-3 rounded-full px-2 py-2 shadow-sm bg-white/50 backdrop-blur-md border border-white/50">
            {[
              { label: "Beranda", href: "/#hero" },
              { label: "Layanan", href: "/#services" },
              { label: "Portofolio", href: "/#portfolio" }, // halaman penuh
              { label: "Harga", href: "/#pricing" },
              { label: "Tentang Kami", href: "/#about" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="px-5 py-2.5 xl:px-7 xl:py-3 rounded-full text-sm lg:text-base font-medium transition hover:bg-slate-100 whitespace-nowrap"
                style={{
                  fontFamily: '"Helvetica Now", Helvetica, Arial, sans-serif',
                  color: "#000000ff",
                }}
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

        {/* Hamburger (Mobile & Tablet) — disembunyikan di >= lg */}
        <button
          className="lg:hidden p-2 z-30 fixed top-3.5 sm:top-4 right-3.5 sm:right-4 bg-white rounded-lg shadow"
          onClick={() => setNavOpen((s) => !s)}
          aria-label={navOpen ? "Close menu" : "Open menu"}
        >
          {navOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* Mobile/Tablet Menu (full cover + close button, no scroll) */}
        <nav
          className={`lg:hidden fixed inset-0 h-[100dvh] z-40
            bg-white/95 backdrop-blur-sm
            flex flex-col items-center justify-center
            overflow-hidden overscroll-none
            transition-transform duration-300
            ${navOpen ? "translate-x-0" : "translate-x-full"}
          `}
          style={{ WebkitOverflowScrolling: "auto" }}
        >
          {/* Tombol X di dalam menu */}
          <button
            className="absolute top-5 right-5 p-2 rounded-full bg-white shadow border"
            onClick={() => setNavOpen(false)}
            aria-label="Tutup menu"
          >
            <X size={26} />
          </button>

          <div className="flex flex-col gap-4 sm:gap-5 w-[86%] max-w-sm text-center">
            {[
              { label: "Beranda", href: "/#hero" },
              { label: "Layanan", href: "/#services" },
              { label: "Portofolio", href: "/#portfolio" }, // halaman penuh
              { label: "Harga", href: "/#pricing" },
              { label: "Tentang Kami", href: "/#about" },
              { label: "Kontak", href: "/#contact" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={() => setNavOpen(false)}
                className={`block px-6 sm:px-7 py-3 rounded-full text-base sm:text-lg font-semibold w-full transition
                  ${
                    label === "Kontak"
                      ? "bg-[#156773] text-white shadow hover:brightness-110 hover:text-white"
                      : "bg-slate-100 hover:bg-slate-200 text-[#222]"
                  }`}
                style={{ fontFamily: '"Helvetica Now", Helvetica, Arial, sans-serif' }}
              >
                {label}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}

// src/ContactSection.jsx
import { Mail, Phone, ExternalLink } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "./assets/logo.png";

export default function ContactSection() {
  const prefersReduce = useReducedMotion();

  // Jam lokal WIB (optional, biar tetap informatif)
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 60_000);
    return () => clearInterval(id);
  }, []);
  const wibTime = now.toLocaleTimeString("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Asia/Jakarta",
  });

  const fadeUp = {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
  };
  const stagger = { show: { transition: { staggerChildren: 0.12 } } };

  return (
    <section id="contact" className="relative overflow-hidden bg-[#156773]/5">
      {/* backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60rem 50rem at 90% -10%, rgba(21,103,115,0.12), transparent 60%), radial-gradient(48rem 40rem at -12% 30%, rgba(21,103,115,0.08), transparent 62%)",
        }}
      />
      <svg
        aria-hidden
        className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-0 opacity-[0.06] -z-10"
        width="1400"
        height="320"
      >
        <defs>
          <pattern id="contact-grid" width="28" height="28" patternUnits="userSpaceOnUse">
            <path d="M28 0H0V28" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="1400" height="320" fill="url(#contact-grid)" />
      </svg>

      <div className="container mx-auto max-w-7xl px-6 py-16 md:py-20">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto text-center mb-8 md:mb-10"
        >
          <h2 className="text-[clamp(1.6rem,4vw,2.6rem)] font-extrabold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0f3f47] via-[#156773] to-[#23A3B3]">
              Hubungi Kami
            </span>
          </h2>
          <p className="mt-2 text-slate-600 text-[clamp(.95rem,1.2vw,1.05rem)]">
            Konsultasi gratis untuk kebutuhan konten & branding. Chat cepat via WhatsApp atau kirim email.
          </p>

          {/* chip jam */}
          <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs text-slate-700">
            <span>WIB {wibTime}</span>
          </div>
        </motion.div>

        {/* Konten utama */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col md:flex-row items-start justify-center gap-10 lg:gap-12 text-slate-700"
        >
          {/* Kiri: Logo + 2 tombol vertikal */}
          <motion.div variants={fadeUp} className="w-full md:w-1/2 space-y-8 md:space-y-10">
            {/* Logo — tanpa efek fader/float */}
            <img src={logo} alt="Hubung’ins" className="h-20 w-auto mx-auto md:mx-0" />

            {/* Hanya tombol (atas–bawah) */}
            <div className="flex flex-col gap-3 max-w-md md:max-w-none">
              <a
                href="https://wa.me/62881023513057"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group relative rounded-2xl p-[1px]
                  bg-gradient-to-br from-[#156773] via-[#23A3B3] to-[#156773]
                  shadow-[0_10px_24px_rgba(21,103,115,0.18)]
                  hover:shadow-[0_16px_32px_rgba(21,103,115,0.26)]
                  transition-transform hover:-translate-y-0.5
                "
              >
                <div className="rounded-2xl bg-white p-5 flex items-center gap-4">
                  <div className="rounded-xl bg-[#156773]/10 p-3 text-[#156773] ring-1 ring-[#156773]/15">
                    <Phone className="size-5" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold leading-tight text-[#0f3f47]">WhatsApp</div>
                    <div className="text-sm text-slate-600">+62 881-0235-13057 (Fanhur)</div>
                  </div>
                  <ExternalLink className="size-4 text-slate-500" />
                </div>
              </a>

              <a
                href="mailto:hubugins@gmail.com"
                className="
                  group relative rounded-2xl p-[1px]
                  bg-gradient-to-br from-[#156773] via-[#23A3B3] to-[#156773]
                  shadow-[0_10px_24px_rgba(21,103,115,0.18)]
                  hover:shadow-[0_16px_32px_rgba(21,103,115,0.26)]
                  transition-transform hover:-translate-y-0.5
                "
              >
                <div className="rounded-2xl bg-white p-5 flex items-center gap-4">
                  <div className="rounded-xl bg-[#156773]/10 p-3 text-[#156773] ring-1 ring-[#156773]/15">
                    <Mail className="size-5" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold leading-tight text-[#0f3f47]">Email</div>
                    <div className="text-sm text-slate-600">hubugins@gmail.com</div>
                  </div>
                  <ExternalLink className="size-4 text-slate-500" />
                </div>
              </a>
            </div>
          </motion.div>

          {/* Kanan: Google Maps */}
          <motion.div
            variants={fadeUp}
            whileHover={prefersReduce ? undefined : { y: -4, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
            className="group relative w-full md:w-1/2 rounded-xl overflow-hidden shadow border border-slate-200 bg-white"
          >
            <span className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-transparent group-hover:ring-[#156773]/20" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#156773]/30 to-transparent" />

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.08925529642715!2d110.34509723254747!3d-7.744335318498182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a589037fba58f%3A0x928298e99002d48d!2s784W%2B63J%2C%20Unnamed%20Road%2C%20Kranggahan%20II%2C%20Trihanggo%2C%20Kec.%20Gamping%2C%20Kabupaten%20Sleman%2C%20Daerah%20Istimewa%20Yogyakarta%2055291!5e0!3m2!1sen!2sid!4v1757522300163!5m2!1sen!2sid"
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Hubung’ins"
            />

            <div className="absolute left-3 right-3 bottom-3 flex justify-end">
              <a
                href="https://maps.google.com/?q=-7.7443353,110.3450972"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur px-3.5 py-2 text-sm font-semibold text-slate-800 shadow border border-slate-200 hover:bg-white"
              >
                Buka di Google Maps <ExternalLink className="size-4" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

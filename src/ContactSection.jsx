import { Mail, Phone, MapPin } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import logo from "./assets/logo.png";

export default function ContactSection() {
  const prefersReduce = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
  };
  const stagger = { show: { transition: { staggerChildren: 0.12 } } };

  return (
    <section id="contact" className="relative overflow-hidden bg-[#156773]/5">
      {/* BACKDROP: radial glow + grid halus */}
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
          className="mx-auto max-w-2xl text-center mb-10 md:mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Hubungi Kami</h2>
          <p className="mt-3 text-slate-600">
            Konsultasi gratis untuk semua kebutuhan konten &amp; branding. Hubungi langsung via WhatsApp/Email.
          </p>
        </motion.div>

        {/* Container utama */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col md:flex-row items-start justify-center gap-12 text-slate-700"
        >
          {/* Kiri: Logo + Kontak */}
          <motion.div
            variants={fadeUp}
            className="w-full md:w-1/2 space-y-10 md:space-y-12"
          >
            {/* Logo (fade + slight float) */}
            <motion.img
              src={logo}
              alt="Hubung’ins"
              className="h-20 w-auto mx-auto md:mx-0"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              animate={
                prefersReduce
                  ? undefined
                  : { y: [0, -2, 0] }
              }
              transition={
                prefersReduce
                  ? undefined
                  : { duration: 6, repeat: Infinity, ease: "easeInOut" }
              }
            />

            {/* Kontak (staggered items) */}
            <div className="space-y-8 md:space-y-12">
              {/* WhatsApp */}
              <motion.div
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="group flex items-start gap-3"
              >
                <div className="relative">
                  <span className="absolute -top-1 -right-1 inline-flex h-2 w-2">
                    {/* ping halus di WA */}
                    {!prefersReduce && (
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500/70 opacity-75" />
                    )}
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <div className="rounded-xl bg-[#156773]/10 p-2.5 text-[#156773] ring-1 ring-[#156773]/15 group-hover:ring-[#156773]/30 transition">
                    <Phone className="size-5" />
                  </div>
                </div>
                <div className="text-left">
                  <p className="font-medium">WhatsApp</p>
                  <a
                    href="https://wa.me/62881023513057"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#156773] hover:underline"
                  >
                    +62 881-0235-13057 | Fanhur
                  </a>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="group flex items-start gap-3"
              >
                <div className="rounded-xl bg-[#156773]/10 p-2.5 text-[#156773] ring-1 ring-[#156773]/15 group-hover:ring-[#156773]/30 transition">
                  <Mail className="size-5" />
                </div>
                <div className="text-left">
                  <p className="font-medium">Email</p>
                  <a
                    href="mailto:hubugins@gmail.com"
                    className="text-[#156773] hover:underline"
                  >
                    hubugins@gmail.com
                  </a>
                </div>
              </motion.div>

              {/* Alamat */}
              <motion.div
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="group flex items-start gap-3"
              >
                <div className="rounded-xl bg-[#156773]/10 p-2.5 text-[#156773] ring-1 ring-[#156773]/15 group-hover:ring-[#156773]/30 transition">
                  <MapPin className="size-5" />
                </div>
                <div className="text-left">
                  <p className="font-medium">Alamat</p>
                  <p>
                    Kranggahan II, Trihanggo, Kec. Gamping, Kabupaten Sleman,
                    Daerah Istimewa Yogyakarta 55291
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Kanan: Google Maps (reveal + hover glow) */}
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -4, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
            className="relative w-full md:w-1/2 rounded-xl overflow-hidden shadow border border-slate-200 bg-white"
          >
            {/* glow ring halus pada hover */}
            <span className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-transparent group-hover:ring-[#156773]/20" />
            {/* shine garis tipis */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#156773]/30 to-transparent" />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.08925529642715!2d110.34509723254747!3d-7.744335318498182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a589037fba58f%3A0x928298e99002d48d!2s784W%2B63J%2C%20Unnamed%20Road%2C%20Kranggahan%20II%2C%20Trihanggo%2C%20Kec.%20Gamping%2C%20Kabupaten%20Sleman%2C%20Daerah%20Istimewa%20Yogyakarta%2055291!5e0!3m2!1sen!2sid!4v1757522300163!5m2!1sen!2sid"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Hubung’ins"
            />
            {/* gradient overlay lembut saat hover */}
            {!prefersReduce && (
              <motion.div
                aria-hidden
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.08 }}
                className="absolute inset-0 bg-[radial-gradient(80%_60%_at_80%_0%,#156773_0%,transparent_60%)] pointer-events-none"
              />
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

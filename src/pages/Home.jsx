import { motion } from "framer-motion"
import { Phone } from "lucide-react"

export default function Home() {
  return (
    <section className="container mx-auto max-w-7xl px-6 pt-24 pb-28 md:py-20">
      <div className="grid grid-cols-12 items-start gap-12 lg:gap-16">
        <div className="col-span-12 lg:col-span-7">
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight"
          >
            Kalo Soal Ngonten, <br /> Gampang Dihubungin!
          </motion.h1>
          <p className="mt-5 text-slate-600 max-w-58ch]">
            Spesialis Konten Video Singkat No.1 di Jogja
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="/contact" className="rounded-xl bg-[#FFD166] px-5 py-3 font-medium text-slate-900 hover:brightness-95">
              Minta Penawaran
            </a>
            <a href="/portfolio" className="rounded-xl border border-slate-300 px-5 py-3 font-medium hover:border-slate-400">
              Lihat Portofolio
            </a>
          </div>
          <div className="mt-6 flex items-center gap-2 text-sm text-slate-500">
            <Phone className="size-4" />
            <span>Respons cepat • Konsultasi gratis</span>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: .96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: .1 }}
          className="col-span-12 lg:col-span-5 rounded-2xl border border-slate-200 bg-slate-50 h-[320px] md:h-[380px] lg:h-[420px]"
        />
      </div>
    </section>
  )
}

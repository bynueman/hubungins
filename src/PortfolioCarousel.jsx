import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"

/* Data contoh — tambahkan thumb jika ada (opsional) */
const DATA = [
  { title: "UTY Campus Campaign",   tag: "Lembaga Pendidikan", url: "https://www.instagram.com/utycampus/",           thumb: "/portfolio/utycampus.png" },
  { title: "UTY Creative Hub",      tag: "Media Kreatif",      url: "https://www.instagram.com/utycreative/",         thumb: "/portfolio/uch.png" },
  { title: "KUY! Roti Bakar",       tag: "Makanan & Minuman",  url: "https://www.instagram.com/tibatibakuy/",         thumb: "/portfolio/kuyrotibakar.png" },
  { title: "Mindcura",              tag: "Teknologi",          url: "https://www.youtube.com/@MindCura",         thumb: "/portfolio/mindcura.png" },
  { title: "Growpath Expo",         tag: "Event",              url: "https://www.instagram.com/utygrowpath.expo/",    thumb: "/portfolio/growpathexpo.png" },
  { title: "Perspektif UTY",        tag: "Organisasi",         url: "https://www.instagram.com/perspektif.uty/",      thumb: "/portfolio/perspektif.png" },
  { title: "Nawasena Omah Hipnoterapi", tag: "Kesehatan",      url: "https://www.instagram.com/nawasena.hipnoterapi/",thumb: "/portfolio/nawasena.png" },
  { title: "Nawa Skincare",         tag: "Kesehatan",          url: "https://www.instagram.com/nawaskincare.id/",     thumb: "/portfolio/nawaskin.png" },
]

export default function PortfolioCarousel({ items = DATA, auto = true, interval = 2800 }) {
  const wrapRef = useRef(null)
  const cardRef = useRef(null)
  const autoRef = useRef(null)
  const [hover, setHover] = useState(false)
  const [page, setPage] = useState(0)

  // 4 per view (desktop), 2 (tablet), 1 (mobile)
  const perView = usePerView()
  const pages = Math.max(1, Math.ceil(items.length / perView))

  const step = () => {
    const card = cardRef.current
    return card ? card.getBoundingClientRect().width + 16 : 280 // width + gap-4
  }

  const goTo = (p) => {
    const el = wrapRef.current
    if (!el) return
    const sLeft = p * step() * perView
    el.scrollTo({ left: sLeft, behavior: "smooth" })
    setPage(p)
  }

  const next = () => goTo((page + 1) % pages)
  const prev = () => goTo((page - 1 + pages) % pages)

  // sync page saat user drag/scroll manual
  const onScroll = () => {
    const el = wrapRef.current
    if (!el) return
    const p = Math.round(el.scrollLeft / (step() * perView))
    setPage(Math.min(pages - 1, Math.max(0, p)))
  }

  // autoplay (pause saat hover)
  useEffect(() => {
    if (!auto || hover) return
    autoRef.current = setInterval(next, interval)
    return () => clearInterval(autoRef.current)
  }, [hover, page, perView, pages])

  return (
    <div
      className="relative p-5"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white to-transparent" />

      {/* track */}
      <div
        ref={wrapRef}
        onScroll={onScroll}
        className="scroll-smooth snap-x snap-mandatory overflow-x-auto overscroll-x-contain scrollbar-hide"
      >
        <ul className="flex gap-4 pr-2">
          {items.map((it, i) => (
            <li
              key={i}
              ref={i === 0 ? cardRef : null}
              className="snap-start shrink-0"
              style={{ width: `calc((100% - ${gapFor(perView)}px) / ${perView})` }}
            >
              <a
                href={it.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                aria-label={it.title}
              >
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="rounded-xl border border-slate-200 bg-white p-3 hover:shadow-md transition"
                >
                  {/* PREVIEW 9:16 — pakai thumb jika ada, kalau tidak fallback abu-abu */}
                  <div className="relative w-full aspect-[9/16] overflow-hidden rounded-lg bg-slate-200">
                    {it.thumb && (
                      <img
                        src={it.thumb}
                        alt={it.title}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    )}
                  </div>

                  {/* Caption ringkas */}
                  <div className="mt-3">
                    <h3 className="text-sm font-semibold line-clamp-1">{it.title}</h3>
                    <p className="text-xs text-slate-600">{it.tag}</p>
                  </div>
                </motion.div>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* arrows */}
      <button
        aria-label="Prev"
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-slate-300 bg-white p-2 hover:border-slate-400 shadow"
      >
        <ChevronLeft className="size-5" />
      </button>
      <button
        aria-label="Next"
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-slate-300 bg-white p-2 hover:border-slate-400 shadow"
      >
        <ChevronRight className="size-5" />
      </button>

      {/* dots */}
      <div className="mt-4 flex justify-center gap-2">
        {Array.from({ length: pages }).map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-2.5 rounded-full transition-all ${i === page ? "w-6 bg-slate-900" : "w-2.5 bg-slate-300"}`}
            aria-label={`Halaman ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

/* ===== helpers ===== */
function usePerView() {
  const [pv, setPv] = useState(getPV())
  useEffect(() => {
    const onR = () => setPv(getPV())
    window.addEventListener("resize", onR)
    return () => window.removeEventListener("resize", onR)
  }, [])
  return pv
}
function getPV() {
  const w = window.innerWidth
  if (w >= 1024) return 4   // desktop: 4 kartu
  if (w >= 640) return 2    // tablet: 2
  return 1                  // mobile: 1
}
function gapFor(perView) {
  const gap = 16 // Tailwind gap-4
  return gap * (perView - 1)
}

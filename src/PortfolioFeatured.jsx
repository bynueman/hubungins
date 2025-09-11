// components/PortfolioFeatured.jsx
import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "UTY Campus Campaign", tag: "Lembaga Pendidikan", url: "https://www.instagram.com/utycampus/", thumb: "public/portfolio/utycampus.png", featured: true },
  { title: "UTY Creative Hub", tag: "Media Kreatif", url: "https://www.instagram.com/utycreative/", thumb: "public/portfolio/uch.png", featured: true },
  { title: "KUY! Roti Bakar", tag: "Makanan & Minuman", url: "https://www.instagram.com/tibatibakuy/", thumb: "public/portfolio/kuyrotibakar.png", featured: true },
  { title: "Mindcura", tag: "Teknologi", url: "https://www.youtube.com/@MindCura", thumb: "public/portfolio/mindcura.png", featured: true },
  { title: "Growpath Expo", tag: "Event", url: "https://www.instagram.com/utygrowpath.expo/", thumb: "public/portfolio/growpathexpo.png" },
  { title: "Perspektif UTY", tag: "Organisasi", url: "https://www.instagram.com/perspektif.uty/", thumb: "public/portfolio/perspektif.png" },
  { title: "Nawasena Hipnoterapi", tag: "Kesehatan", url: "https://www.instagram.com/nawasena.hipnoterapi/", thumb: "public/portfolio/nawasena.png" },
  { title: "Nawa Skincare", tag: "Kesehatan", url: "https://www.instagram.com/nawaskincare.id/", thumb: "public/portfolio/nawaskin.png" },
    {
    title: "Unteyo Journey",
    tag: "Media",
    url: "https://www.instagram.com/unteyojourney/",
    thumb: "public/portfolio/unteyo.png",
    featured: false,
  },
  {
    title: "Mojok – IG Reels",
    tag: "Media",
    url: "https://www.instagram.com/p/DONEqIMkv5m/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    thumb: "public/portfolio/mojok.png",
    featured: false,
  },
];

function shuffle(a) {
  const arr = [...a];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function PortfolioFeatured({
  items = DEFAULT_ITEMS,
  allHref = "/portfolio",
  maxItems = 8,
  auto = true,
  interval = 3200,
}) {
  const data = useMemo(() => {
    const prim = items.filter(i => i.featured);
    const rest = items.filter(i => !i.featured);
    return shuffle([...prim, ...shuffle(rest)]).slice(0, Math.min(maxItems, 8));
  }, [items, maxItems]);

  const wrapRef = useRef(null);
  const cardRef = useRef(null);
  const timerRef = useRef(null);

  const [hover, setHover] = useState(false);
  const [page, setPage] = useState(0);

  const perView = usePerView();
  const pages = Math.max(1, Math.ceil(data.length / perView));

  // === tighten spacing
  const GAP_PX = 12; // sebelumnya 16
  const SECTION_X = "px-4 sm:px-5"; // sebelumnya sm:px-6

  const step = () => {
    const card = cardRef.current;
    return card ? card.getBoundingClientRect().width + GAP_PX : 260;
  };

  const goTo = (p) => {
    const el = wrapRef.current;
    if (!el) return;
    el.scrollTo({ left: p * step() * perView, behavior: "smooth" });
    setPage(p);
  };
  const next = () => goTo((page + 1) % pages);
  const prev = () => goTo((page - 1 + pages) % pages);

  const onScroll = () => {
    const el = wrapRef.current;
    if (!el) return;
    const p = Math.round(el.scrollLeft / (step() * perView));
    setPage(Math.min(pages - 1, Math.max(0, p)));
  };

  useEffect(() => {
    if (!auto || hover) return;
    timerRef.current = setInterval(next, interval);
    return () => clearInterval(timerRef.current);
  }, [hover, page, perView, pages, interval, auto]);

  return (
    <section
  id="portfolio"
  className={`container mx-auto max-w-7xl ${SECTION_X} py-8
              scroll-mt-24 sm:scroll-mt-28 lg:scroll-mt-32`}  // <= offset utk header fixed
  style={{ fontFamily: '"Helvetica Now", Helvetica, Arial, sans-serif' }}
>

      {/* Header lebih rapat */}
      <div className="mb-4 flex items-end justify-between gap-3">
        <h2 className="text-[clamp(1.55rem,3vw,2.2rem)] font-extrabold tracking-tight">
          Portofolio
        </h2>
        <a
          href={allHref}
          className="hidden sm:inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/80 px-3.5 py-2 text-sm font-semibold text-slate-800 shadow hover:bg-white transition"
        >
          Lihat semua portofolio
          <svg xmlns="http://www.w3.org/2000/svg" className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </a>
      </div>

      {/* Carousel */}
      <div
        className="relative"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {/* edge fades — diperkecil */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-6 sm:w-6 md:w-7 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-6 sm:w-6 md:w-7 bg-gradient-to-l from-white to-transparent z-10" />

        {/* track */}
        <div
          ref={wrapRef}
          onScroll={onScroll}
          className="scroll-smooth snap-x snap-mandatory overflow-x-auto overscroll-x-contain scrollbar-hide"
        >
          <ul className="flex gap-3 pr-2"> {/* sebelumnya gap-4 */}
            {data.map((it, i) => (
              <li
                key={it.title + i}
                ref={i === 0 ? cardRef : null}
                className="snap-start shrink-0 h-full"
                style={{
                  width: `calc((100% - ${GAP_PX * (perView - 1)}px) / ${perView})`,
                }}
              >
                <a
                  href={it.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={it.title}
                  className="group block h-full"
                >
                  {/* CARD padat */}
                  <div className="h-full rounded-lg border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition flex flex-col">
                    {/* Thumb 16:9 */}
                    <div className="relative aspect-[16/9] bg-slate-100 shrink-0">
                      {it.thumb && (
                        <img
                          src={it.thumb}
                          alt={it.title}
                          className="absolute inset-0 h-full w-full object-cover"
                          loading="lazy"
                        />
                      )}
                      <span className="absolute right-2 top-2 inline-flex items-center justify-center size-7 rounded-full bg-white text-slate-700 shadow ring-1 ring-slate-200 opacity-0 group-hover:opacity-100 transition">
                        <ExternalLink className="size-4" />
                      </span>
                    </div>

                    {/* Copy area lebih pendek */}
                    <div className="p-2.5 flex flex-col min-h-[100px] sm:min-h-[100px]">
                      <h3 className="text-sm font-semibold line-clamp-1">{it.title}</h3>
                      <p className="mt-0.5 text-xs text-slate-600 line-clamp-2">
                        {it.desc || it.tag}
                      </p>
                      <div className="mt-auto pt-1.5 flex flex-wrap gap-1.5">
                        <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10.5px] font-semibold text-slate-700 border border-slate-200">
                          {it.tag}
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* arrows (tetap) */}
        <button
          aria-label="Prev"
          onClick={prev}
          className="absolute left-1.5 top-1/2 -translate-y-1/2 rounded-full border border-slate-300 bg-white p-2 hover:border-slate-400 shadow z-10"
        >
          <ChevronLeft className="size-5" />
        </button>
        <button
          aria-label="Next"
          onClick={next}
          className="absolute right-1.5 top-1/2 -translate-y-1/2 rounded-full border border-slate-300 bg-white p-2 hover:border-slate-400 shadow z-10"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>

      {/* dots lebih dekat */}
      <div className="mt-3 flex justify-center gap-1.5">
        {Array.from({ length: pages }).map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-2 rounded-full transition-all ${i === page ? "w-5 bg-slate-900" : "w-2 bg-slate-300"}`}
            aria-label={`Halaman ${i + 1}`}
          />
        ))}
      </div>

      {/* Button mobile */}
      <div className="sm:hidden mt-5 flex justify-center">
        <a
          href={allHref}
          className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/80 px-4 py-2 text-sm font-semibold text-slate-800 shadow hover:bg-white transition"
        >
          View All Projects
          <svg xmlns="http://www.w3.org/2000/svg" className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </a>
      </div>
    </section>
  );
}

/* ===== helpers ===== */
function usePerView() {
  const [pv, setPv] = useState(getPV());
  useEffect(() => {
    const onR = () => setPv(getPV());
    window.addEventListener("resize", onR);
    return () => window.removeEventListener("resize", onR);
  }, []);
  return pv;
}
function getPV() {
  const w = window.innerWidth;
  if (w >= 1280) return 4; // xl
  if (w >= 1024) return 3; // lg
  if (w >= 640)  return 2; // sm
  return 1;                // mobile
}

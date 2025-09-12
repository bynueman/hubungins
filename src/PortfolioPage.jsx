// src/PortfolioPage.jsx
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ✅ Import semua gambar dari ./assets/portofolio
import unteyo        from "./assets/portofolio/unteyo.png";
import mojok         from "./assets/portofolio/mojok.png";
import utycampus     from "./assets/portofolio/utycampus.png";
import uch           from "./assets/portofolio/uch.png";
import kuyrotibakar  from "./assets/portofolio/kuyrotibakar.png";
import mindcura      from "./assets/portofolio/mindcura.png";
import growpath      from "./assets/portofolio/growpath.png";
import perspektif    from "./assets/portofolio/perspektif.png";
import nawasena      from "./assets/portofolio/nawasena.png";
import nawaskin      from "./assets/portofolio/nawaskin.png";
import ursa          from "./assets/portofolio/ursaconsulting.png";
import ikapawitikra  from "./assets/portofolio/ikapawitikra.png";

// ==== fallback data ====
const FALLBACK = [
  {
    title: "Unteyo Journey",
    tag: "Media",
    url: "https://www.instagram.com/unteyojourney/",
    thumb: unteyo,
    featured: false,
  },
  {
    title: "Mojok",
    tag: "Media",
    url: "https://www.instagram.com/p/DONEqIMkv5m/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    thumb: mojok,
    featured: false,
  },
  {
    title: "UTY Campus Campaign",
    tag: "Lembaga Pendidikan",
    url: "https://www.instagram.com/utycampus/",
    thumb: utycampus,
    featured: true,
  },
  {
    title: "UTY Creative Hub",
    tag: "Media Kreatif",
    url: "https://www.instagram.com/utycreative/",
    thumb: uch,
    featured: true,
  },
  {
    title: "KUY! Roti Bakar",
    tag: "Makanan & Minuman",
    url: "https://www.instagram.com/tibatibakuy/",
    thumb: kuyrotibakar,
    featured: true,
  },
  {
    title: "Mindcura",
    tag: "Teknologi",
    url: "https://www.youtube.com/@MindCura",
    thumb: mindcura,
    featured: true,
  },
  {
    title: "Growpath Expo",
    tag: "Event",
    url: "https://www.instagram.com/utygrowpath.expo/",
    thumb: growpath,
  },
  {
    title: "Perspektif UTY",
    tag: "Organisasi",
    url: "https://www.instagram.com/perspektif.uty/",
    thumb: perspektif,
  },
  {
    title: "Nawasena Hipnoterapi",
    tag: "Kesehatan",
    url: "https://www.instagram.com/nawasena.hipnoterapi/",
    thumb: nawasena,
  },
  {
    title: "Nawa Skincare",
    tag: "Kesehatan",
    url: "https://www.instagram.com/nawaskincare.id/",
    thumb: nawaskin,
  },
  {
    title: "Ursa Consulting",
    tag: "Konsultan",
    url: "https://www.instagram.com/reel/DM99pPNRGcs/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    thumb: ursa,
  },
  {
    title: "IKA Pawitikra",
    tag: "Lembaga Pendidikan",
    url: "https://youtu.be/l5XnxGlaqJo?si=NFtSN7WKFqCedDc3",
    thumb: ikapawitikra,
  },
];

export default function PortfolioPage({ items = FALLBACK }) {
  const [active, setActive] = useState("Semua");

  const categories = useMemo(
    () => ["Semua", ...Array.from(new Set(items.map((i) => i.tag)))],
    [items]
  );

  const list = useMemo(
    () => (active === "Semua" ? items : items.filter((i) => i.tag === active)),
    [items, active]
  );

  return (
    <section
      className="container mx-auto max-w-7xl px-4 sm:px-6 pb-14 pt-24 md:pt-28"
      style={{ fontFamily: '"Helvetica Now", Helvetica, Arial, sans-serif' }}
    >
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <h1 className="text-[clamp(1.6rem,3.2vw,2.4rem)] font-extrabold tracking-tight">
            All Projects
          </h1>
          <p className="mt-1 text-slate-600">
            Telusuri semua portofolio kami berdasarkan kategori.
          </p>
        </div>
      </div>

      {/* Filter kategori */}
      <div className="mb-6 flex flex-wrap gap-2">
        {categories.map((c) => {
          const on = c === active;
          return (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm ring-1 transition
                ${
                  on
                    ? "bg-[#156773] text-white ring-white/10"
                    : "bg-white text-slate-800 ring-slate-300 hover:bg-slate-50"
                }`}
            >
              {c}
            </button>
          );
        })}
      </div>

      {/* Grid elegan */}
      <motion.ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5">
        <AnimatePresence mode="sync" initial={false}>
          {list.map((it) => (
            <motion.li
              key={it.title}
              layout="position"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{
                duration: 0.18,
                ease: "easeOut",
                layout: { type: "tween", duration: 0.18, ease: "easeOut" },
              }}
              className="group rounded-xl border border-slate-200 bg-white/90 backdrop-blur-sm shadow-sm hover:shadow-md transition"
            >
              <a
                href={it.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#156773]/30 rounded-xl"
              >
                <div className="aspect-[4/5] w-full overflow-hidden rounded-t-xl bg-slate-100">
                  <img
                    src={it.thumb}
                    alt={it.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-[1.01]"
                  />
                </div>

                <div className="p-3">
                  <p className="text-[13px] font-semibold leading-snug line-clamp-2">
                    {it.title}
                  </p>
                  <div className="mt-2 flex items-center justify-between gap-2">
                    <span className="truncate rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-700 border border-slate-200">
                      {it.tag}
                    </span>
                    <svg
                      className="size-4 text-slate-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <path d="M15 3h6v6" />
                      <path d="M10 14 21 3" />
                    </svg>
                  </div>
                </div>
              </a>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </section>
  );
}

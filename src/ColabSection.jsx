import React, { useEffect, useMemo, useRef, useState } from "react";

const LOGOS = [
  "uty-min.png",
  "dinkopsleman-min.png",
  "ikapawitikra-min.png",
  "sigma-min.png",
  "smp5yk-min.png",
  "tribes-min.png",
  "uch-min.png",
  "unteyo-min.png",
  "ursa-min.png",
  "xetupid-min.png",
];

export default function ColabSection() {
  // Gandakan agar loop mulus
  const logos = useMemo(() => [...LOGOS, ...LOGOS], []);
  const trackRef = useRef(null);
  const frameRef = useRef(0);
  const lastTsRef = useRef(0);

  // State kontrol
  const [paused, setPaused] = useState(false);
  const speedRef = useRef(40); // px per detik (feel free to tweak)
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const startScrollRef = useRef(0);

  // Auto-scroll RAF loop
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const step = (ts) => {
      const last = lastTsRef.current || ts;
      const dt = Math.min(50, ts - last); // cap delta biar stabil
      lastTsRef.current = ts;

      if (!paused && !isDraggingRef.current) {
        const px = (speedRef.current * dt) / 1000; // v = px/s
        el.scrollLeft += px;

        // Loop mulus: kalau sudah lewat setengah konten, reset balik
        const half = el.scrollWidth / 2;
        if (el.scrollLeft >= half) {
          el.scrollLeft -= half;
        }
      }
      frameRef.current = requestAnimationFrame(step);
    };
    frameRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameRef.current);
  }, [paused]);

  // Drag-to-scroll (mouse & touch)
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    // Helper pause/resume
    const pause = () => setPaused(true);
    const resume = () => setPaused(false);

    // Pointer events
    const onPointerDown = (e) => {
      // tahan tombol (kiri/kanan/apa pun) -> pause + drag
      isDraggingRef.current = true;
      pause();
      el.setPointerCapture?.(e.pointerId);
      startXRef.current = e.clientX;
      startScrollRef.current = el.scrollLeft;
      // matikan inertial scroll Safari iOS saat drag
      el.style.scrollBehavior = "auto";
      el.classList.add("cursor-grabbing");
    };

    const onPointerMove = (e) => {
      if (!isDraggingRef.current) return;
      const dx = e.clientX - startXRef.current;
      el.scrollLeft = startScrollRef.current - dx;

      // Jaga loop saat drag manual
      const half = el.scrollWidth / 2;
      if (el.scrollLeft < 0) el.scrollLeft += half;
      else if (el.scrollLeft >= half) el.scrollLeft -= half;
    };

    const endDrag = (e) => {
      if (!isDraggingRef.current) return;
      isDraggingRef.current = false;
      el.releasePointerCapture?.(e.pointerId);
      el.classList.remove("cursor-grabbing");
      // beri sedikit delay sebelum jalan lagi biar gak kaget
      setTimeout(resume, 200);
    };

    // Touch fallback (untuk browser lama tanpa Pointer Events)
    let touchStartX = 0;
    let touchStartScroll = 0;

    const onTouchStart = (e) => {
      pause();
      isDraggingRef.current = true;
      const t = e.touches[0];
      touchStartX = t.clientX;
      touchStartScroll = el.scrollLeft;
      el.style.scrollBehavior = "auto";
    };
    const onTouchMove = (e) => {
      if (!isDraggingRef.current) return;
      const t = e.touches[0];
      const dx = t.clientX - touchStartX;
      el.scrollLeft = touchStartScroll - dx;

      const half = el.scrollWidth / 2;
      if (el.scrollLeft < 0) el.scrollLeft += half;
      else if (el.scrollLeft >= half) el.scrollLeft -= half;
    };
    const onTouchEnd = () => {
      isDraggingRef.current = false;
      setTimeout(resume, 200);
    };

    // Wheel: juga pause saat user interaksi pakai roda
    const onWheel = () => {
      pause();
      clearTimeout(onWheel._t);
      onWheel._t = setTimeout(() => setPaused(false), 400);
    };

    el.addEventListener("pointerdown", onPointerDown);
    el.addEventListener("pointermove", onPointerMove);
    el.addEventListener("pointerup", endDrag);
    el.addEventListener("pointercancel", endDrag);
    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchmove", onTouchMove, { passive: true });
    el.addEventListener("touchend", onTouchEnd);
    el.addEventListener("wheel", onWheel, { passive: true });

    return () => {
      el.removeEventListener("pointerdown", onPointerDown);
      el.removeEventListener("pointermove", onPointerMove);
      el.removeEventListener("pointerup", endDrag);
      el.removeEventListener("pointercancel", endDrag);
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
      el.removeEventListener("touchend", onTouchEnd);
      el.removeEventListener("wheel", onWheel);
    };
  }, []);

  return (
    <section className="w-full py-12">
      <div className="mb-8">
        <h2
          className="text-2xl sm:text-3xl font-bold text-center tracking-wide"
          style={{
            fontFamily: `"Helvetica Now", Helvetica, Arial, sans-serif`,
            letterSpacing: "0.06em",
            color: "#000000ff",
          }}
        >
          Kolaborasi & Client Kami
        </h2>
      </div>

      <div className="relative max-w-full py-2 md:py-4">
        {/* Fader kiri */}
        <div
          className="pointer-events-none absolute left-0 top-0 h-full z-10 w-20 sm:w-24 md:w-[200px]"
          style={{
            background: "linear-gradient(to right, #fff 83%, rgba(255,255,255,0))",
          }}
        />
        {/* Fader kanan */}
        <div
          className="pointer-events-none absolute right-0 top-0 h-full z-10 w-20 sm:w-24 md:w-[200px]"
          style={{
            background: "linear-gradient(to left, #fff 83%, rgba(255,255,255,0))",
          }}
        />

        {/* TRACK (scrollable) */}
        <div
          ref={trackRef}
          className="relative flex items-center gap-6 sm:gap-10 md:gap-20 px-4 sm:px-8 md:px-[104px] overflow-x-hidden select-none"
          style={{
            // Hindari jalan-jalan sendiri dari browser saat drag
            touchAction: "pan-y",
            cursor: "grab",
            scrollBehavior: "auto",
          }}
          aria-label="Marquee logo klien – drag untuk menggulir"
          role="group"
        >
          {logos.map((logo, i) => (
            <div key={i} className="flex items-center justify-center opacity-100 shrink-0">
              <img
                src={`/colab/${logo}`}
                alt={logo.replace("-min.png", "")}
                className={`
                  block object-contain transition
                  h-16 w-auto sm:h-16 md:h-20
                  md:grayscale md:brightness-90 md:hover:grayscale-0 md:hover:brightness-105
                `}
                style={{ maxWidth: 200 }}
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bantuan aksesibilitas */}
      <p className="sr-only">
        Logo bergulir otomatis. Tahan klik atau sentuh untuk menghentikan dan seret untuk menggulir manual.
      </p>
    </section>
  );
}

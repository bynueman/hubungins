import React from "react";

const LOGOS = [
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
  // Gandakan agar looping tidak putus
  const logos = [...LOGOS, ...LOGOS];

  return (
    <section className="w-full py-12">
      <div className="mb-8">
        <h2
          className="text-2xl sm:text-3xl font-bold text-center tracking-wide"
          style={{
            fontFamily: `"Helvetica Now", Helvetica, Arial, sans-serif`,
            letterSpacing: "0.06em",
            color: "#303a49",
          }}
        >
          Kolaborasi & Client Kami
        </h2>
      </div>

      <div className="relative overflow-x-hidden max-w-full py-2 md:py-4">
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

        {/* MARQUEE LOGO */}
        <div
          className="flex items-center gap-6 sm:gap-10 md:gap-20 animate-marquee whitespace-nowrap px-4 sm:px-8 md:px-[104px]"
          style={{ animationDuration: "36s", animationTimingFunction: "linear" }}
        >
          {logos.map((logo, i) => (
            <div key={i} className="flex items-center justify-center opacity-100">
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

      {/* Keyframes */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation-name: marquee;
          animation-iteration-count: infinite;
        }
      `}</style>
    </section>
  );
}

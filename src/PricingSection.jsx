import { PhoneCall } from "lucide-react";

export default function PricingSection({ contactHref = "#contact" }) {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-white
                 scroll-mt-24 sm:scroll-mt-28 lg:scroll-mt-32"
    >
      {/* === BACKDROP === */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div
          className="absolute -inset-[12%] animate-aurora pointer-events-none"
          style={{
            background:
              "radial-gradient(60rem 40rem at 20% 30%, rgba(21,103,115,0.10), transparent 60%), radial-gradient(50rem 35rem at 80% 70%, rgba(21,103,115,0.08), transparent 60%)",
          }}
        />
        <div className="absolute -top-40 -left-32 w-[42rem] h-[42rem] rounded-full bg-[#156773]/10 blur-3xl animate-float-slow" />
        <div className="absolute -bottom-48 -right-20 w-[38rem] h-[38rem] rounded-full bg-[#156773]/8 blur-3xl animate-float-slower" />
        <div className="absolute inset-0 opacity-[0.06] overflow-hidden pointer-events-none">
          <div className="animate-grid-pan">
            <svg width="1600" height="420">
              <defs>
                <pattern id="pricing-grid" width="28" height="28" patternUnits="userSpaceOnUse">
                  <path d="M28 0H0V28" fill="none" stroke="currentColor" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="1600" height="420" fill="url(#pricing-grid)" />
            </svg>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="container mx-auto max-w-7xl px-6 py-12 md:py-14 lg:py-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center">
          Harga & Paket
        </h2>

        {/* CTA – center, max width, radius 15 */}
        <div className="mt-6 sm:mt-8 flex justify-center">
          <a
            href={contactHref}
            aria-label="Hubungi Kami"
            className="
              group relative inline-flex items-center justify-center gap-3
              w-full max-w-md
              rounded-[15px] px-7 sm:px-9 py-3.5 sm:py-4
              text-white text-lg sm:text-xl font-semibold
              shadow-[0_8px_30px_rgba(21,103,115,.35)]
              transition active:scale-[0.985]
            "
            style={{
              background:
                'linear-gradient(90deg, #156773, #1A8A98, #23A3B3, #156773)',
              backgroundSize: '200% 100%',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundPosition = '100% 0')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundPosition = '0% 0')}
          >
            {/* Sheen full sweep */}
            <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-[15px]">
              <span className="sheen" />
            </span>

            <PhoneCall className="size-5 opacity-90" />
            <span>Hubungi Kami</span>
          </a>
        </div>

        <p className="mt-4 text-xs text-slate-500 text-center">
          * Semua paket fleksibel & bisa dinegosiasikan sesuai kebutuhan dan target brand.
        </p>
      </div>

      {/* Animations + Sheen CSS */}
      <style>{`
        @keyframes float-slow { 
          0%,100% { transform: translateY(0) }
          50% { transform: translateY(22px) }
        }
        @keyframes float-slower { 
          0%,100% { transform: translateY(0) }
          50% { transform: translateY(-18px) }
        }
        @keyframes auroraShift {
          0%   { transform: translate3d(0,0,0) }
          50%  { transform: translate3d(2%, -1%, 0) }
          100% { transform: translate3d(0,0,0) }
        }
        @keyframes gridPan {
          0%   { transform: translateX(0) }
          50%  { transform: translateX(-16px) }
          100% { transform: translateX(0) }
        }
        .animate-float-slow   { animation: float-slow 12s ease-in-out infinite; }
        .animate-float-slower { animation: float-slower 16s ease-in-out infinite; }
        .animate-aurora       { animation: auroraShift 18s ease-in-out infinite; will-change: transform; }
        .animate-grid-pan     { animation: gridPan 22s ease-in-out infinite; will-change: transform; }

        /* Sheen full sweep */
        .sheen {
          position: absolute;
          top: 0;
          left: 0;
          width: 60%;
          height: 100%;
          background: linear-gradient(
            100deg,
            rgba(255,255,255,0) 0%,
            rgba(255,255,255,.65) 50%,
            rgba(255,255,255,0) 100%
          );
          filter: blur(6px);
          transform: translateX(-120%) skewX(-12deg);
          transition: transform .9s cubic-bezier(.22,.61,.36,1);
        }
        .group:hover .sheen {
          transform: translateX(220%) skewX(-12deg);
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-float-slow, .animate-float-slower, .animate-aurora, .animate-grid-pan { animation: none; }
          .sheen { transition: none; }
        }
      `}</style>
    </section>
  );
}

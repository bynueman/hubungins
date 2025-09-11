import React from "react";

export default function ServicesSection() {
  const services = [
    {
      title: "Podcast Production",
      description:
        "Produksi podcast profesional dengan kualitas audio terbaik dan konten menarik.",
      image: "public/services/podcastprod.png",
    },
    {
      title: "Content Production",
      description:
        "Pembuatan konten video dan audio berkualitas tinggi yang sesuai dengan kebutuhan Anda.",
      image: "public/services/contentprod.png",
    },
  ];

  return (
    <section
      id="services"
      className="relative overflow-hidden container mx-auto max-w-7xl px-4 sm:px-6 pt-6 sm:pt-10 pb-6 sm:pb-16 md:mt-[-20px]"
      style={{ fontFamily: '"Helvetica Now", Helvetica, Arial, sans-serif' }}
    >
      {/* === BACKDROP: radial glow + grid halus (brand #156773) === */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(55rem 45rem at 85% -10%, rgba(21,103,115,0.12), transparent 60%), radial-gradient(48rem 38rem at -12% 30%, rgba(21,103,115,0.08), transparent 62%)",
        }}
      />
      <svg
        aria-hidden
        className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-0 opacity-[0.06] -z-10"
        width="1400"
        height="320"
      >
        <defs>
          <pattern
            id="services-grid"
            width="28"
            height="28"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M28 0H0V28"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="1400" height="320" fill="url(#services-grid)" />
      </svg>
      {/* === END BACKDROP === */}

      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-center">
        Layanan Kami
      </h2>
      <p className="mt-3 text-center text-slate-600">
        Solusi yang paling sering dipesan klien kami.
      </p>
      <div className="mt-10 sm:mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 max-w-3xl mx-auto">
        {services.map(({ title, description, image }, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-center rounded-2xl border-2 border-[#156773] bg-white p-8 shadow-md hover:shadow-lg transition transform hover:-translate-y-1 hover:scale-[1.03] duration-200"
          >
            <img
              src={image}
              alt={title}
              className="mb-4 w-16 h-16 object-contain rounded-xl shadow-sm border border-slate-100 bg-white"
              loading="lazy"
            />
            <h3 className="text-xl font-semibold text-[#156773]">{title}</h3>
            <p className="mt-2 text-slate-700">{description}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <a
          href="https://wa.me/62881023513057"
          className="inline-block rounded-xl bg-[#156773] px-7 py-3 font-semibold text-white shadow hover:brightness-110 transition"
        >
          Konsultasi
        </a>
      </div>
    </section>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="bg-white">
      <div className="container mx-auto max-w-7xl px-6 py-20 md:py-24">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
            Est. 2024 • Agency Creative
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight">
            Kalo Soal Ngonten, Gampang Dihubungin!
          </h2>
          <p className="mt-4 text-slate-600">
            Short Video Content Specialist No.1 di Yogyakarta, kami bantu brand tampil beda
            dengan konten desain & video pendek yang fresh dan berdampak.
          </p>
        </div>


        {/* What makes us different */}
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-semibold">Kenapa Hubung’ins?</h3>
            <p className="mt-2 text-sm text-slate-600">
              Kami nggak sekadar ikut tren, kami bantu kamu jadi trendsetter lewat solusi kreatif
              yang dirancang khusus untuk kebutuhan brand-mu.
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                "Ide fresh yang nggak pasaran",
                "Tim gesit: eksekusi cepat tanpa ribet",
                "Layanan super personal & tailored",
                "Fokus ke hasil yang bisa dilihat & dirasakan",
              ].map((t, i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-1 inline-block size-1.5 rounded-full bg-[#156773]" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {/* Masalah umum brand owner */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-semibold">Tantangan yang sering kamu hadapi</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                "Pengen konten keren, bingung mulai dari mana",
                "Produksi, operasional, marketing dipegang sendiri",
                "Nggak sempat riset tren, konsep, syuting, editing, algoritma",
                "Posting asal-asalan, performa jalan di tempat",
              ].map((t, i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-1 inline-block size-1.5 rounded-full bg-[#156773]" />
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-3 text-sm text-slate-600">
              Saatnya bikin brand kamu <span className="font-semibold">stand out</span> bareng Hubung’ins.
            </p>
          </div>
        </div>

        {/* Proof / social numbers */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { k: "9+", v: "Clients (UMKM, Universitas, Startup)" },
            { k: "6", v: "Kolaborasi B2B" },
            { k: "30+", v: "Talent & KOL Partners" },
            { k: "2", v: "Program pemberdayaan komunitas" },
          ].map((s, i) => (
            <div key={i} className="rounded-xl border border-slate-200 bg-white p-5">
              <div className="text-xl font-bold text-[#156773]">{s.k}</div>
              <div className="mt-1 text-sm text-slate-600">{s.v}</div>
            </div>
          ))}
        </div>

        {/* Philosophy / commitment */}
        <div className="mt-12 rounded-2xl border border-slate-200 bg-[#156773]/5 p-6">
          <p className="text-sm text-slate-700">
            Kami percaya setiap brand butuh sentuhan yang fokus & personal. Karena itu, kami
            sengaja membatasi jumlah klien tiap bulan untuk menjaga kualitas, kreativitas, dan
            komitmen penuh di setiap proyek.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-col items-center gap-3">
          <a
            href="#contact"
            className=" text-white rounded-xl bg-[#156773] px-6 py-3 text-base font-medium text-slate-900 hover:brightness-95"
          >
            Konsultasi Gratis
          </a>
          <p className="text-xs text-slate-500">
            Punya brief? Kirim sekarang—kami siap bantu tentukan strategi terbaik.
          </p>
        </div>
      </div>
    </section>
  )
}

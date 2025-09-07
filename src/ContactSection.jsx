import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contact" className="bg-[#156773]/5">
      <div className="container mx-auto max-w-7xl px-6 py-20 md:py-24">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Hubungi Kami</h2>
          <p className="mt-3 text-slate-600">
            Konsultasi gratis untuk semua kebutuhan konten & branding. Isi form atau kontak langsung via WhatsApp/Email.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-12 grid gap-12 md:grid-cols-2">
          {/* Info Kontak */}
          <div className="space-y-6 text-slate-700">
            <div className="flex items-start gap-3">
              <Phone className="size-5 text-[#156773]" />
              <div>
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
            </div>
            <div className="flex items-start gap-3">
              <Mail className="size-5 text-[#156773]" />
              <div>
                <p className="font-medium">Email</p>
                <a
                  href="mailto:hello@hubungins.com"
                  className="text-[#156773] hover:underline"
                >
                  hubugins@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="size-5 text-[#156773]" />
              <div>
                <p className="font-medium">Alamat</p>
                <p>Kranggahan II, Trihanggo, Kec. Gamping, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55291</p>
              </div>
            </div>
          </div>

          {/* Form Kontak */}
          <form
            action="https://formspree.io/f/{your-id}" // ganti dengan endpoint Formspree/EmailJS
            method="POST"
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div>
              <label className="block text-sm font-medium text-slate-700">Nama</label>
              <input
                type="text"
                name="name"
                required
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-[#156773] focus:ring-[#156773]"
              />
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-slate-700">Email</label>
              <input
                type="email"
                name="email"
                required
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-[#156773] focus:ring-[#156773]"
              />
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-slate-700">Pesan</label>
              <textarea
                name="message"
                rows="4"
                required
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-[#156773] focus:ring-[#156773]"
              />
            </div>
            <button
              type="submit"
              className="text-white mt-6 w-full rounded-xl bg-[#156773] px-5 py-3 font-medium text-slate-900 hover:brightness-95"
            >
              Kirim Pesan
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

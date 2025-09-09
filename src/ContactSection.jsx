import { Mail, Phone, MapPin } from "lucide-react";
import logo from "./assets/logo.png";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-[#156773]/5">
      <div className="container mx-auto max-w-7xl px-6 py-20 md:py-24">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Hubungi Kami</h2>
          <p className="mt-3 text-slate-600">
            Konsultasi gratis untuk semua kebutuhan konten & branding. Hubungi langsung via WhatsApp/Email.
          </p>
        </div>

        {/* Container logo dan kontak */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-7xl mx-auto text-slate-700">
          {/* Logo */}
          <div>
            <img src={logo} alt="Hubung’ins" className="h-20 w-auto mx-auto" />
          </div>

          {/* Kontak */}
          <div className="space-y-12 max-w-md">
            <div className="flex items-center gap-3">
              <Phone className="size-5 text-[#156773]" />
              <div className="text-left">
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

            <div className="flex items-center gap-3">
              <Mail className="size-5 text-[#156773]" />
              <div className="text-left">
                <p className="font-medium">Email</p>
                <a
                  href="mailto:hubugins@gmail.com"
                  className="text-[#156773] hover:underline"
                >
                  hubugins@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="size-5 text-[#156773]" />
              <div className="text-left">
                <p className="font-medium">Alamat</p>
                <p>Kranggahan II, Trihanggo, Kec. Gamping, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55291</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

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

        {/* Container utama */}
        <div className="flex flex-col md:flex-row items-start justify-center gap-12 text-slate-700">
          {/* Kiri: Logo + Kontak */}
          <div className="w-full md:w-1/2 space-y-12">
            {/* Logo */}
            <img src={logo} alt="Hubung’ins" className="h-20 w-auto mx-auto md:mx-0" />

            {/* Kontak */}
            <div className="space-y-12">
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
                  <p>
                    Kranggahan II, Trihanggo, Kec. Gamping, Kabupaten Sleman,
                    Daerah Istimewa Yogyakarta 55291
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Kanan: Google Maps */}
          <div className="w-full md:w-1/2 rounded-xl overflow-hidden shadow border border-slate-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.08925529642715!2d110.34509723254747!3d-7.744335318498182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a589037fba58f%3A0x928298e99002d48d!2s784W%2B63J%2C%20Unnamed%20Road%2C%20Kranggahan%20II%2C%20Trihanggo%2C%20Kec.%20Gamping%2C%20Kabupaten%20Sleman%2C%20Daerah%20Istimewa%20Yogyakarta%2055291!5e0!3m2!1sen!2sid!4v1757522300163!5m2!1sen!2sid"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Hubung’ins"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

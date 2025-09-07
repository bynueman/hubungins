import { NavLink, Link } from "react-router-dom"

const link = ({ isActive }) =>
  `transition-colors ${isActive ? "text-[#156773]" : "hover:text-[#156773]"}`

export default function Header() {
  return (
    <header className="sticky top-0 z-10 border-b bg-white/80 backdrop-blur">
      <div className="container mx-auto max-w-7xl px-6 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <div className="size-8 rounded-md bg-[#156773]" />
          <span className="font-semibold tracking-tight">Hubung’ins</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <NavLink to="/" className={link}>Beranda</NavLink>
          <NavLink to="/services" className={link}>Layanan</NavLink>
          <NavLink to="/portfolio" className={link}>Portofolio</NavLink>
          <NavLink to="/about" className={link}>Tentang Kami</NavLink>
          <NavLink
            to="/contact"
            className="rounded-lg bg-[#FFD166] px-4 py-2 font-medium text-slate-900 hover:brightness-95"
          >
            Minta Penawaran
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

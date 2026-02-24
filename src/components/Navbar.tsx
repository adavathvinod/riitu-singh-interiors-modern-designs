import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Gallery", path: "/gallery" },
  { name: "Reviews", path: "/reviews" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <nav className="container-wide flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Riitu Singh Interiors" className="h-10 md:h-14 w-auto" loading="eager" />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <li key={l.path}>
              <Link
                to={l.path}
                className={`font-body text-sm tracking-wide uppercase transition-colors duration-200 hover:text-accent ${
                  location.pathname === l.path ? "text-accent font-semibold" : "text-foreground"
                }`}
              >
                {l.name}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href="tel:+919899185884"
          className="hidden lg:flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-body text-sm font-medium hover:bg-accent transition-colors"
        >
          <Phone className="w-4 h-4" />
          Call Now
        </a>

        <button onClick={() => setOpen(!open)} className="lg:hidden text-foreground p-2" aria-label="Menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-background border-b border-border animate-fade-in">
          <ul className="flex flex-col px-6 py-4 gap-3">
            {navLinks.map((l) => (
              <li key={l.path}>
                <Link
                  to={l.path}
                  onClick={() => setOpen(false)}
                  className={`block py-2 font-body text-sm uppercase tracking-wide ${
                    location.pathname === l.path ? "text-accent font-semibold" : "text-foreground"
                  }`}
                >
                  {l.name}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="tel:+919899185884"
                className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2.5 rounded-lg font-body text-sm font-medium w-fit"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;

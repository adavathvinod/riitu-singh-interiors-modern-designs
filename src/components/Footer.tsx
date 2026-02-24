import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container-wide section-padding !py-12 md:!py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <img src={logo} alt="Riitu Singh Interiors" className="h-14 w-auto mb-4 brightness-200" />
          <p className="text-sm opacity-80 leading-relaxed">
            Transforming ordinary spaces into beautiful, functional, and modern interiors across Delhi NCR.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm opacity-80">
            {["Home", "About", "Services", "Gallery", "Reviews", "Contact"].map((l) => (
              <li key={l}>
                <Link to={l === "Home" ? "/" : `/${l.toLowerCase()}`} className="hover:opacity-100 transition-opacity">
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading text-lg font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-3 text-sm opacity-80">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
              <span>1st Floor, C-3/9, above PNB Bank, Prashant Vihar, Sector 14, Rohini, Delhi 110085</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 shrink-0" />
              <a href="tel:+919899185884">098991 85884</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 shrink-0" />
              <a href="mailto:info@riitusinghinteriors.com">info@riitusinghinteriors.com</a>
            </li>
          </ul>
        </div>

        {/* Hours */}
        <div>
          <h4 className="font-heading text-lg font-semibold mb-4">Business Hours</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li className="flex items-center gap-2">
              <Clock className="w-4 h-4 shrink-0" />
              Mon – Sat: 10:30 AM – 6:00 PM
            </li>
            <li className="pl-6">Sunday: Closed</li>
          </ul>
          <div className="flex gap-3 mt-6">
            {[
              { href: "https://wa.me/919899185884", label: "WhatsApp", icon: "W" },
              { href: "https://instagram.com", label: "Instagram", icon: "I" },
              { href: "https://facebook.com", label: "Facebook", icon: "F" },
              { href: "https://youtube.com", label: "YouTube", icon: "Y" },
              { href: "https://linkedin.com", label: "LinkedIn", icon: "L" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center text-xs font-bold hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/20 mt-10 pt-6 text-center text-sm opacity-60">
        © {new Date().getFullYear()} Riitu Singh Interior Designer Studio. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;

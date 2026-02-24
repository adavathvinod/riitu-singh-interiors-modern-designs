import AnimateOnScroll from "@/components/AnimateOnScroll";
import BookingForm from "@/components/BookingForm";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => (
  <main className="pt-20">
    <section className="section-padding bg-warm">
      <div className="container-wide text-center">
        <AnimateOnScroll>
          <p className="font-body text-sm text-accent uppercase tracking-widest mb-2">Get In Touch</p>
          <h1 className="section-title mb-4">Contact Us</h1>
          <p className="section-subtitle mx-auto">Ready to transform your space? Get in touch for a free consultation.</p>
        </AnimateOnScroll>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-wide grid lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <AnimateOnScroll>
          <h2 className="font-heading text-2xl font-bold mb-6">Contact Information</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-accent shrink-0 mt-1" />
              <div>
                <p className="font-body font-semibold mb-1">Address</p>
                <p className="font-body text-sm text-muted-foreground">1st Floor, C-3/9, above PNB Bank, Prashant Vihar, Sector 14, Rohini, Delhi 110085</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-accent shrink-0 mt-1" />
              <div>
                <p className="font-body font-semibold mb-1">Phone</p>
                <a href="tel:+919899185884" className="font-body text-sm text-muted-foreground hover:text-accent">098991 85884</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-accent shrink-0 mt-1" />
              <div>
                <p className="font-body font-semibold mb-1">Email</p>
                <a href="mailto:info@riitusinghinteriors.com" className="font-body text-sm text-muted-foreground hover:text-accent">info@riitusinghinteriors.com</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-accent shrink-0 mt-1" />
              <div>
                <p className="font-body font-semibold mb-1">Business Hours</p>
                <p className="font-body text-sm text-muted-foreground">Monday – Saturday: 10:30 AM – 6:00 PM</p>
                <p className="font-body text-sm text-muted-foreground">Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* WhatsApp */}
          <a
            href="https://wa.me/919899185884"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 mt-8 px-6 py-3 bg-green-500 text-white rounded-lg font-body font-semibold text-sm hover:bg-green-600 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Chat on WhatsApp
          </a>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            {[
              { href: "https://instagram.com", label: "Instagram" },
              { href: "https://facebook.com", label: "Facebook" },
              { href: "https://linkedin.com", label: "LinkedIn" },
              { href: "https://youtube.com", label: "YouTube" },
            ].map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-xs font-bold hover:bg-accent hover:text-accent-foreground transition-colors" aria-label={s.label}>
                {s.label[0]}
              </a>
            ))}
          </div>
        </AnimateOnScroll>

        {/* Booking Form */}
        <AnimateOnScroll>
          <h2 className="font-heading text-2xl font-bold mb-6">Book Free Consultation</h2>
          <BookingForm />
        </AnimateOnScroll>
      </div>
    </section>

    {/* Map */}
    <section>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.022604218337!2d77.13102227529221!3d28.714822975619963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03a2801b7063%3A0xf6c67dd8e843e413!2sRiitu%20Singh%20Interior%20Designer%20Studio!5e1!3m2!1sen!2sin!4v1771939762118!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Riitu Singh Interior Designer Studio Location"
      />
    </section>
  </main>
);

export default Contact;

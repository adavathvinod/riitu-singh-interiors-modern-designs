import AnimateOnScroll from "@/components/AnimateOnScroll";
import BookingForm from "@/components/BookingForm";
import { Phone, Mail, MapPin, Clock, MessageCircle, CheckCircle } from "lucide-react";

const Contact = () => (
  <main className="pt-20">
    <section className="section-padding bg-warm">
      <div className="container-wide text-center">
        <AnimateOnScroll>
          <p className="font-body text-sm text-accent uppercase tracking-widest mb-2">Get In Touch</p>
          <h1 className="section-title mb-4">Contact Us Today</h1>
          <p className="section-subtitle mx-auto">Ready to transform your space? Whether you need a complete home interior, custom furniture, or a renovation — reach out for a free, no-obligation design consultation. Our team responds within 24 hours.</p>
        </AnimateOnScroll>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-wide grid lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <AnimateOnScroll>
          <h2 className="font-heading text-2xl font-bold mb-2">Contact Information</h2>
          <p className="font-body text-sm text-muted-foreground mb-6">Visit our design studio in Rohini to explore material samples, browse our portfolio, and discuss your project with our experienced designers. Walk-ins are welcome during business hours.</p>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-accent shrink-0 mt-1" />
              <div>
                <p className="font-body font-semibold mb-1">Studio Address</p>
                <p className="font-body text-sm text-muted-foreground">1st Floor, C-3/9, above PNB Bank, Prashant Vihar, Sector 14, Rohini, Delhi 110085</p>
                <p className="font-body text-xs text-muted-foreground mt-1">Landmark: Above Punjab National Bank, Main Market Prashant Vihar</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-accent shrink-0 mt-1" />
              <div>
                <p className="font-body font-semibold mb-1">Phone / Call</p>
                <a href="tel:+919899185884" className="font-body text-sm text-muted-foreground hover:text-accent transition-colors">098991 85884</a>
                <p className="font-body text-xs text-muted-foreground mt-1">Available during business hours for calls and enquiries</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-accent shrink-0 mt-1" />
              <div>
                <p className="font-body font-semibold mb-1">Email</p>
                <a href="mailto:info@riitusinghinteriors.com" className="font-body text-sm text-muted-foreground hover:text-accent transition-colors">info@riitusinghinteriors.com</a>
                <p className="font-body text-xs text-muted-foreground mt-1">We respond to all emails within 24 hours</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-accent shrink-0 mt-1" />
              <div>
                <p className="font-body font-semibold mb-1">Business Hours</p>
                <p className="font-body text-sm text-muted-foreground">Monday – Saturday: 10:30 AM – 6:00 PM</p>
                <p className="font-body text-sm text-muted-foreground">Sunday: Closed</p>
                <p className="font-body text-xs text-muted-foreground mt-1">Home visits can be scheduled outside business hours on request</p>
              </div>
            </div>
          </div>

          {/* WhatsApp */}
          <a
            href="https://wa.me/919899185884?text=Hi%2C%20I%20am%20interested%20in%20interior%20design%20services.%20Please%20share%20more%20details."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 mt-8 px-6 py-3 bg-green-500 text-white rounded-lg font-body font-semibold text-sm hover:bg-green-600 transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            Chat on WhatsApp — Get Instant Response
          </a>

          {/* Social Icons */}
          <div className="mt-6">
            <p className="font-body text-sm font-semibold mb-3">Follow Us on Social Media</p>
            <div className="flex gap-4">
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
          </div>

          {/* Why Contact Us */}
          <div className="mt-8 bg-warm rounded-2xl p-6">
            <h3 className="font-heading text-lg font-semibold mb-3">What Happens After You Contact Us?</h3>
            <ul className="space-y-2">
              {[
                "Our team calls you within 24 hours to understand your requirements",
                "We schedule a free site visit at your convenience",
                "Our designer takes measurements and discusses your vision",
                "You receive a detailed design proposal with 3D renders and pricing",
                "No obligation — you decide at your own pace",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 font-body text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </AnimateOnScroll>

        {/* Booking Form */}
        <AnimateOnScroll>
          <h2 className="font-heading text-2xl font-bold mb-2">Book Free Consultation</h2>
          <p className="font-body text-sm text-muted-foreground mb-6">Fill in the form below and our design team will reach out to you within 24 hours. All consultations are completely free with no obligations.</p>
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
        title="Riitu Singh Interior Designer Studio Location in Prashant Vihar Rohini Delhi"
      />
    </section>
  </main>
);

export default Contact;

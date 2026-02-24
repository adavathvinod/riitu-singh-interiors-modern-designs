import { Link } from "react-router-dom";
import { ArrowRight, Star, Clock, CheckCircle, Paintbrush, Sofa, Hammer, Sparkles, Shield, Users } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import BookingForm from "@/components/BookingForm";
import livingRoom1 from "@/assets/living-room-1.png";
import bedroom1 from "@/assets/bedroom-1.png";
import livingRoom2 from "@/assets/living-room-2.png";
import kitchen1 from "@/assets/kitchen-1.jpg";
import furniture1 from "@/assets/furniture-1.jpg";
import renovation1 from "@/assets/renovation-1.jpg";
import riituSingh from "@/assets/riitu-singh.png";

const services = [
  { title: "Interior Design", desc: "Complete living room, bedroom, kitchen & office interiors with modern Indian aesthetics. We create personalized spaces that reflect your lifestyle using premium materials, elegant color palettes, and smart space planning tailored to Indian homes.", img: livingRoom1, link: "/services" },
  { title: "Furniture", desc: "Custom-made sofas, beds, wardrobes, TV units & modular furniture with premium materials. Every piece is designed for durability, comfort, and style — crafted in-house by our skilled carpenters using the finest wood and laminates.", img: furniture1, link: "/services" },
  { title: "Home Renovation", desc: "Full renovation including painting, flooring, plumbing, electrical & false ceiling. Whether you're updating a single room or transforming your entire home, we deliver modern makeovers that breathe new life into old spaces.", img: renovation1, link: "/services" },
];

const whyUs = [
  { icon: Sparkles, title: "10+ Years Experience", desc: "Over a decade of transforming homes across Delhi NCR with award-winning designs and satisfied clients in Rohini, Pitampura, and beyond." },
  { icon: Shield, title: "Quality Materials", desc: "We source premium wood, branded laminates, Hettich & Hafele fittings, and top-grade paints to ensure your interiors last for decades." },
  { icon: Users, title: "Local Trust", desc: "Trusted by 500+ families in Rohini, Prashant Vihar, Shalimar Bagh & nearby areas. Our reputation is built on honest work and lasting relationships." },
  { icon: CheckCircle, title: "On-Time Delivery", desc: "Projects completed within committed timelines with regular progress updates. We respect your schedule and deliver on our promises, every single time." },
];

const testimonials = [
  { name: "Parveen Kumar", text: "I hire dem for my house and dey give me the best service and I love her work. The team was incredibly professional and the final result exceeded all expectations.", rating: 5 },
  { name: "Niti Chawla", text: "This is the place where one could dump all his money. Outstanding quality, beautiful designs, and a team that truly cares about delivering perfection.", rating: 5 },
  { name: "Meenakshi Naveen", text: "Their teamwork is fabulous. The coordination between designers, carpenters, and electricians was seamless. Our home looks like a magazine spread now!", rating: 5 },
];

const ratings = [
  { platform: "Google", rating: "4.2", reviews: "44 reviews" },
  { platform: "Facebook", rating: "4.7", reviews: "13 votes" },
  { platform: "Justdial", rating: "4.5", reviews: "88 votes" },
];

const processSteps = [
  { step: "01", title: "Free Consultation", desc: "Share your vision, budget, and requirements. We visit your space, take measurements, and understand your lifestyle needs." },
  { step: "02", title: "Design & Planning", desc: "Our designers create detailed 3D renderings and floor plans so you can visualize your dream interior before any work begins." },
  { step: "03", title: "Material Selection", desc: "Choose from our curated collection of premium woods, laminates, fabrics, tiles, and fittings at our studio in Rohini." },
  { step: "04", title: "Execution & Delivery", desc: "Our skilled team brings your design to life with precision craftsmanship, regular updates, and on-time project completion." },
];

const Index = () => {
  return (
    <main>
      {/* Hero Video */}
      <section className="relative h-screen min-h-[600px] overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover" src="/videos/hero-video.mp4" />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/40 to-charcoal/70" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 animate-fade-in">
            Riitu Singh Interior Designer Studio
          </h1>
          <p className="font-body text-lg md:text-xl text-white/80 tracking-[0.3em] uppercase mb-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Interior • Furniture • Home Renovation
          </p>
          <p className="font-body text-sm md:text-base text-white/60 max-w-2xl mb-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            Delhi's trusted interior design studio transforming homes in Rohini, Prashant Vihar & across NCR since 2014. Premium designs, quality materials, on-time delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Link to="/contact" className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-body font-semibold text-sm hover:opacity-90 transition-opacity">
              Book Free Consultation
            </Link>
            <Link to="/gallery" className="px-8 py-3 border border-white/40 text-white rounded-lg font-body text-sm hover:bg-white/10 transition-colors">
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding bg-warm">
        <div className="container-wide">
          <AnimateOnScroll>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="font-body text-sm text-accent uppercase tracking-widest mb-2">About Us</p>
                <h2 className="section-title mb-6">Crafting Dream Interiors in Delhi Since 2014</h2>
                <p className="section-subtitle mb-4">
                  Riitu Singh Interior Designer Studio is a professional interior design studio based in Rohini, Delhi. We specialize in creating beautiful, functional, and modern interiors for homes, apartments, offices, and commercial spaces using quality materials and skilled workmanship.
                </p>
                <p className="font-body text-muted-foreground mb-4">
                  With over 10 years of experience and 500+ successful projects across Delhi NCR, we bring your vision to life with designs that reflect modern Indian lifestyle while maximizing space and comfort. From modular kitchens designed for Indian cooking to elegant pooja rooms — we understand what Indian families need.
                </p>
                <p className="font-body text-muted-foreground mb-6">
                  Our expertise covers complete home interiors, custom furniture manufacturing, and full-scale home renovations. We handle everything in-house — from design consultation and 3D visualization to material sourcing, manufacturing, and installation.
                </p>
                <Link to="/about" className="inline-flex items-center gap-2 text-accent font-body font-semibold text-sm hover:gap-3 transition-all">
                  Learn More About Our Story <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="relative">
                <img src={riituSingh} alt="Riitu Singh, Founder of Riitu Singh Interior Designer Studio" className="rounded-2xl shadow-xl w-full object-cover aspect-square" loading="lazy" />
                <div className="absolute -bottom-4 -left-4 bg-accent text-accent-foreground px-6 py-3 rounded-xl font-body font-bold text-sm shadow-lg">
                  10+ Years Experience
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding">
        <div className="container-wide">
          <AnimateOnScroll className="text-center mb-12">
            <p className="font-body text-sm text-accent uppercase tracking-widest mb-2">Our Services</p>
            <h2 className="section-title mb-4">Complete Interior Solutions Under One Roof</h2>
            <p className="section-subtitle mx-auto">From complete home interiors to custom furniture and renovation — we handle every aspect of your space transformation with precision, quality, and care. No middlemen, no delays.</p>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s) => (
              <AnimateOnScroll key={s.title} className="group">
                <div className="rounded-2xl overflow-hidden bg-card border border-border hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                  <div className="overflow-hidden aspect-[4/3]">
                    <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-heading text-xl font-semibold mb-2">{s.title}</h3>
                    <p className="font-body text-sm text-muted-foreground mb-4 flex-1">{s.desc}</p>
                    <Link to={s.link} className="inline-flex items-center gap-1 text-accent font-body font-semibold text-sm hover:gap-2 transition-all">
                      Explore This Service <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="section-padding bg-warm">
        <div className="container-wide">
          <AnimateOnScroll className="text-center mb-12">
            <p className="font-body text-sm text-accent uppercase tracking-widest mb-2">How We Work</p>
            <h2 className="section-title mb-4">Our Simple 4-Step Process</h2>
            <p className="section-subtitle mx-auto">We've streamlined our process to make your interior design journey smooth, transparent, and stress-free from start to finish.</p>
          </AnimateOnScroll>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((item) => (
              <AnimateOnScroll key={item.step}>
                <div className="text-center">
                  <span className="font-heading text-5xl font-bold text-accent/20">{item.step}</span>
                  <h3 className="font-heading text-lg font-semibold mb-2 -mt-2">{item.title}</h3>
                  <p className="font-body text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-wide">
          <AnimateOnScroll className="text-center mb-12">
            <h2 className="section-title mb-4">Why 500+ Delhi Families Trust Us</h2>
            <p className="font-body text-primary-foreground/70 max-w-2xl mx-auto">We combine creativity, quality craftsmanship, and a deep understanding of Indian homes to deliver interiors that are beautiful, functional, and built to last.</p>
          </AnimateOnScroll>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyUs.map((item) => (
              <AnimateOnScroll key={item.title}>
                <div className="text-center">
                  <item.icon className="w-10 h-10 text-accent mx-auto mb-4" />
                  <h3 className="font-heading text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="font-body text-sm text-primary-foreground/70">{item.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="section-padding">
        <div className="container-wide">
          <AnimateOnScroll className="text-center mb-12">
            <p className="font-body text-sm text-accent uppercase tracking-widest mb-2">Our Portfolio</p>
            <h2 className="section-title mb-4">Recent Projects in Delhi NCR</h2>
            <p className="section-subtitle mx-auto">Browse through some of our latest interior design, furniture, and renovation projects completed across Rohini, Prashant Vihar, Pitampura, and other Delhi localities.</p>
          </AnimateOnScroll>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[livingRoom1, bedroom1, kitchen1, livingRoom2, furniture1, renovation1].map((img, i) => (
              <AnimateOnScroll key={i}>
                <div className="rounded-xl overflow-hidden aspect-[4/3]">
                  <img src={img} alt={`Interior design project ${i + 1} by Riitu Singh Studio`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
              </AnimateOnScroll>
            ))}
          </div>
          {/* YouTube Shorts */}
          <AnimateOnScroll className="mt-10">
            <h3 className="font-heading text-xl font-semibold text-center mb-6">Watch Our Latest Design Videos</h3>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {["kHLksEnj0NY", "SkI__pGPIXs", "2B5I1yks5FI"].map((id) => (
              <AnimateOnScroll key={id}>
                <div className="rounded-xl overflow-hidden aspect-[9/16] max-h-[400px]">
                  <iframe src={`https://www.youtube.com/embed/${id}`} title="YouTube Short - Interior Design by Riitu Singh" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-full" loading="lazy" />
                </div>
              </AnimateOnScroll>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/gallery" className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-accent-foreground rounded-lg font-body font-semibold text-sm">
              View Full Gallery <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Showcase Video */}
      <section className="section-padding bg-warm">
        <div className="container-wide">
          <AnimateOnScroll className="text-center mb-8">
            <h2 className="section-title mb-4">Watch Our Craftsmanship in Action</h2>
            <p className="section-subtitle mx-auto">See how we transform empty spaces into stunning interiors — from raw materials to the final polished result.</p>
          </AnimateOnScroll>
          <div className="rounded-2xl overflow-hidden max-w-4xl mx-auto shadow-xl">
            <video autoPlay muted loop playsInline className="w-full aspect-video object-cover" src="/videos/showcase-video.mp4" />
          </div>
        </div>
      </section>

      {/* Social Proof & Reviews */}
      <section className="section-padding">
        <div className="container-wide">
          <AnimateOnScroll className="text-center mb-12">
            <p className="font-body text-sm text-accent uppercase tracking-widest mb-2">Trusted By Hundreds</p>
            <h2 className="section-title mb-4">What Our Clients Say About Us</h2>
            <p className="section-subtitle mx-auto mb-8">We're proud to be one of the highest-rated interior design studios in Rohini, Delhi. Here's what our clients across Google, Facebook, and Justdial have to say.</p>
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              {ratings.map((r) => (
                <div key={r.platform} className="text-center">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className={`w-5 h-5 ${i < Math.floor(parseFloat(r.rating)) ? "text-accent fill-accent" : "text-border"}`} />
                    ))}
                  </div>
                  <p className="font-heading text-2xl font-bold">{r.rating}</p>
                  <p className="font-body text-xs text-muted-foreground">{r.platform} • {r.reviews}</p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <AnimateOnScroll key={t.name}>
                <div className="bg-card border border-border rounded-2xl p-6">
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                    ))}
                  </div>
                  <p className="font-body text-sm text-muted-foreground mb-4 italic">"{t.text}"</p>
                  <p className="font-body text-sm font-semibold">— {t.name}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/reviews" className="inline-flex items-center gap-2 text-accent font-body font-semibold text-sm hover:gap-3 transition-all">
              Read All Reviews <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="section-padding bg-warm">
        <div className="container-wide">
          <AnimateOnScroll className="text-center mb-10">
            <p className="font-body text-sm text-accent uppercase tracking-widest mb-2">Get In Touch</p>
            <h2 className="section-title mb-4">Book Your Free Design Consultation</h2>
            <p className="section-subtitle mx-auto">Tell us about your project — whether it's a new home interior, custom furniture, or a renovation — and our design team will get back to you within 24 hours with a personalized proposal.</p>
          </AnimateOnScroll>
          <AnimateOnScroll>
            <BookingForm />
          </AnimateOnScroll>
        </div>
      </section>

      {/* Google Map */}
      <section>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.022604218337!2d77.13102227529221!3d28.714822975619963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03a2801b7063%3A0xf6c67dd8e843e413!2sRiitu%20Singh%20Interior%20Designer%20Studio!5e1!3m2!1sen!2sin!4v1771939762118!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Riitu Singh Interior Designer Studio Location in Rohini Delhi"
        />
      </section>

      {/* Business Hours */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-wide text-center">
          <Clock className="w-10 h-10 text-accent mx-auto mb-4" />
          <h2 className="font-heading text-2xl font-bold mb-4">Visit Our Studio</h2>
          <p className="font-body text-sm text-primary-foreground/70 max-w-xl mx-auto mb-4">
            Walk into our design studio in Prashant Vihar, Rohini to explore material samples, browse our portfolio, and discuss your project with our designers.
          </p>
          <p className="font-body text-lg">Monday – Saturday: 10:30 AM – 6:00 PM</p>
          <p className="font-body text-primary-foreground/60 mt-1">Sunday: Closed</p>
          <p className="font-body text-sm text-primary-foreground/50 mt-3">
            1st Floor, C-3/9, above PNB Bank, Prashant Vihar, Sector 14, Rohini, Delhi 110085
          </p>
        </div>
      </section>
    </main>
  );
};

export default Index;

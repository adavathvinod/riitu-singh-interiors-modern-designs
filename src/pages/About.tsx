import AnimateOnScroll from "@/components/AnimateOnScroll";
import riituSingh from "@/assets/riitu-singh.png";
import livingRoom2 from "@/assets/living-room-2.png";
import { CheckCircle, Award, Users, Home } from "lucide-react";

const values = [
  { icon: Award, title: "Our Vision", desc: "To be Delhi's most trusted interior design studio, transforming every space into a masterpiece of comfort and elegance." },
  { icon: Users, title: "Our Mission", desc: "To deliver exceptional interior design solutions that blend modern aesthetics with Indian sensibilities, using premium materials and skilled craftsmanship." },
  { icon: Home, title: "Our Promise", desc: "Quality materials, on-time delivery, transparent pricing, and designs that truly feel like home." },
];

const stats = [
  { number: "500+", label: "Projects Completed" },
  { number: "10+", label: "Years Experience" },
  { number: "100%", label: "Client Satisfaction" },
  { number: "50+", label: "Expert Team Members" },
];

const About = () => (
  <main className="pt-20">
    {/* Hero */}
    <section className="section-padding bg-warm">
      <div className="container-wide grid md:grid-cols-2 gap-12 items-center">
        <AnimateOnScroll>
          <p className="font-body text-sm text-accent uppercase tracking-widest mb-2">About Us</p>
          <h1 className="section-title mb-6">Designing Spaces, Creating Experiences</h1>
          <p className="font-body text-muted-foreground leading-relaxed mb-4">
            Riitu Singh Interior Designer Studio is a professional interior design studio based in Rohini, Delhi. We specialize in interior design, furniture solutions, and home renovation services for residential and commercial spaces.
          </p>
          <p className="font-body text-muted-foreground leading-relaxed mb-4">
            Our mission is to transform ordinary spaces into beautiful, functional, and modern interiors using quality materials and skilled workmanship. Every project we undertake is a reflection of our passion for design and commitment to excellence.
          </p>
          <p className="font-body text-muted-foreground leading-relaxed">
            Founded by Riitu Singh, our studio has grown from a small design consultancy to one of Rohini's most sought-after interior design firms. We understand the unique needs of Indian homes — from modular kitchens optimized for Indian cooking to pooja rooms that blend tradition with modern aesthetics.
          </p>
        </AnimateOnScroll>
        <AnimateOnScroll>
          <img src={riituSingh} alt="Riitu Singh" className="rounded-2xl shadow-xl w-full object-cover aspect-[4/5]" loading="lazy" />
        </AnimateOnScroll>
      </div>
    </section>

    {/* Stats */}
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-wide grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((s) => (
          <AnimateOnScroll key={s.label} className="text-center">
            <p className="font-heading text-4xl md:text-5xl font-bold text-accent">{s.number}</p>
            <p className="font-body text-sm mt-2 text-primary-foreground/70">{s.label}</p>
          </AnimateOnScroll>
        ))}
      </div>
    </section>

    {/* Vision & Mission */}
    <section className="section-padding">
      <div className="container-wide">
        <AnimateOnScroll className="text-center mb-12">
          <h2 className="section-title mb-4">What Drives Us</h2>
        </AnimateOnScroll>
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((v) => (
            <AnimateOnScroll key={v.title}>
              <div className="bg-card border border-border rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
                <v.icon className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="font-heading text-xl font-semibold mb-3">{v.title}</h3>
                <p className="font-body text-sm text-muted-foreground">{v.desc}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>

    {/* Local Projects */}
    <section className="section-padding bg-warm">
      <div className="container-wide grid md:grid-cols-2 gap-12 items-center">
        <AnimateOnScroll>
          <img src={livingRoom2} alt="Delhi project" className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]" loading="lazy" />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <h2 className="section-title mb-6">Local Delhi Projects</h2>
          <p className="font-body text-muted-foreground mb-6">
            We've successfully completed hundreds of projects across Rohini, Prashant Vihar, Pitampura, Shalimar Bagh, and nearby areas. Our deep understanding of local architecture, flat layouts, and client preferences sets us apart.
          </p>
          <ul className="space-y-3">
            {["Residential apartments in Rohini Sector 14-24", "Builder floors in Prashant Vihar", "Commercial offices in Pitampura", "Luxury villas in Model Town & Shalimar Bagh"].map((item) => (
              <li key={item} className="flex items-center gap-3 font-body text-sm">
                <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </AnimateOnScroll>
      </div>
    </section>

    {/* Team */}
    <section className="section-padding">
      <div className="container-wide text-center">
        <AnimateOnScroll>
          <h2 className="section-title mb-4">Our Professional Team</h2>
          <p className="section-subtitle mx-auto mb-8">
            Our team of 50+ skilled professionals includes interior designers, architects, carpenters, electricians, plumbers, and project managers who work together to deliver exceptional results on every project.
          </p>
          <p className="font-body text-muted-foreground max-w-3xl mx-auto">
            Led by Riitu Singh, a passionate interior designer with over a decade of experience, our team combines creativity with technical expertise. We stay updated with the latest design trends, materials, and technologies to bring you the very best in interior design solutions. Every team member shares our commitment to quality, punctuality, and client satisfaction.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  </main>
);

export default About;

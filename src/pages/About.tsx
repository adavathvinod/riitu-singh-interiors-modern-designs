import AnimateOnScroll from "@/components/AnimateOnScroll";
import riituSingh from "@/assets/riitu-singh.png";
import livingRoom2 from "@/assets/living-room-2.png";
import kitchen1 from "@/assets/kitchen-1.jpg";
import { CheckCircle, Award, Users, Home, Lightbulb, Heart, Target } from "lucide-react";

const values = [
  { icon: Award, title: "Our Vision", desc: "To be Delhi's most trusted interior design studio, transforming every space into a masterpiece of comfort and elegance. We envision a future where every Indian home reflects the personality and lifestyle of its owners through thoughtful, high-quality design." },
  { icon: Target, title: "Our Mission", desc: "To deliver exceptional interior design solutions that blend modern aesthetics with Indian sensibilities, using premium materials and skilled craftsmanship. We aim to make professional interior design accessible and affordable for every family in Delhi NCR." },
  { icon: Heart, title: "Our Promise", desc: "Quality materials, on-time delivery, transparent pricing, and designs that truly feel like home. We promise no hidden charges, no compromises on quality, and complete dedication to turning your dream space into reality." },
];

const stats = [
  { number: "500+", label: "Projects Completed" },
  { number: "10+", label: "Years Experience" },
  { number: "100%", label: "Client Satisfaction" },
  { number: "50+", label: "Expert Team Members" },
];

const expertise = [
  "Complete home interior design for 1BHK, 2BHK, 3BHK & 4BHK apartments",
  "Modular kitchen design optimized for Indian cooking styles",
  "Custom wardrobes and storage solutions for compact spaces",
  "False ceiling with cove lighting and modern profiles",
  "Pooja room designs blending tradition with contemporary aesthetics",
  "Office and commercial space interiors",
  "Full home renovation including painting, flooring & electrical",
  "Custom furniture manufacturing with premium wood and laminates",
];

const About = () => (
  <main className="pt-20">
    {/* Hero */}
    <section className="section-padding bg-warm">
      <div className="container-wide grid md:grid-cols-2 gap-12 items-center">
        <AnimateOnScroll>
          <p className="font-body text-sm text-accent uppercase tracking-widest mb-2">About Us</p>
          <h1 className="section-title mb-6">Designing Spaces, Creating Experiences Since 2014</h1>
          <p className="font-body text-muted-foreground leading-relaxed mb-4">
            Riitu Singh Interior Designer Studio is a professional interior design studio based in Rohini, Delhi. We specialize in interior design, furniture solutions, and home renovation services for residential and commercial spaces across Delhi NCR.
          </p>
          <p className="font-body text-muted-foreground leading-relaxed mb-4">
            Our mission is to transform ordinary spaces into beautiful, functional, and modern interiors using quality materials and skilled workmanship. Every project we undertake is a reflection of our passion for design and commitment to excellence — from a simple bedroom makeover to a complete 4BHK luxury interior.
          </p>
          <p className="font-body text-muted-foreground leading-relaxed mb-4">
            Founded by Riitu Singh, our studio has grown from a small design consultancy to one of Rohini's most sought-after interior design firms. We understand the unique needs of Indian homes — from modular kitchens optimized for Indian cooking to pooja rooms that blend tradition with modern aesthetics.
          </p>
          <p className="font-body text-muted-foreground leading-relaxed">
            What sets us apart is our end-to-end approach. We don't just design — we manufacture, source, and install everything in-house. This means better quality control, faster delivery, and no middleman costs. Our 50+ member team includes experienced designers, architects, carpenters, electricians, and project managers working together under one roof.
          </p>
        </AnimateOnScroll>
        <AnimateOnScroll>
          <img src={riituSingh} alt="Riitu Singh - Founder of Riitu Singh Interior Designer Studio in Delhi" className="rounded-2xl shadow-xl w-full object-cover aspect-[4/5]" loading="lazy" />
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

    {/* Our Expertise */}
    <section className="section-padding">
      <div className="container-wide grid md:grid-cols-2 gap-12 items-center">
        <AnimateOnScroll>
          <p className="font-body text-sm text-accent uppercase tracking-widest mb-2">What We Do Best</p>
          <h2 className="section-title mb-6">Our Areas of Expertise</h2>
          <p className="font-body text-muted-foreground mb-6">
            Over the last decade, we have honed our skills across every aspect of interior design and home improvement. Here's what we bring to your project:
          </p>
          <ul className="space-y-3">
            {expertise.map((item) => (
              <li key={item} className="flex items-start gap-3 font-body text-sm">
                <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </AnimateOnScroll>
        <AnimateOnScroll>
          <img src={kitchen1} alt="Modular kitchen designed by Riitu Singh Interiors in Delhi" className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]" loading="lazy" />
        </AnimateOnScroll>
      </div>
    </section>

    {/* Vision & Mission */}
    <section className="section-padding bg-warm">
      <div className="container-wide">
        <AnimateOnScroll className="text-center mb-12">
          <h2 className="section-title mb-4">What Drives Us Every Day</h2>
          <p className="section-subtitle mx-auto">Our core values shape every design decision, material choice, and client interaction.</p>
        </AnimateOnScroll>
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((v) => (
            <AnimateOnScroll key={v.title}>
              <div className="bg-card border border-border rounded-2xl p-8 text-center hover:shadow-lg transition-shadow h-full">
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
    <section className="section-padding">
      <div className="container-wide grid md:grid-cols-2 gap-12 items-center">
        <AnimateOnScroll>
          <img src={livingRoom2} alt="Living room interior project in Rohini Delhi" className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]" loading="lazy" />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <p className="font-body text-sm text-accent uppercase tracking-widest mb-2">Serving Delhi NCR</p>
          <h2 className="section-title mb-6">Deep Roots in Local Delhi Communities</h2>
          <p className="font-body text-muted-foreground mb-4">
            We've successfully completed hundreds of projects across Rohini, Prashant Vihar, Pitampura, Shalimar Bagh, and nearby areas. Our deep understanding of local architecture, flat layouts, builder floor designs, and client preferences sets us apart from generic interior firms.
          </p>
          <p className="font-body text-muted-foreground mb-6">
            Whether you've just purchased a new apartment in Rohini Sector 24 or want to renovate your builder floor in Prashant Vihar — we know the exact challenges and opportunities your space presents. Our local presence means faster site visits, quicker material delivery, and hands-on project supervision.
          </p>
          <ul className="space-y-3">
            {["Residential apartments in Rohini Sector 14-24", "Builder floors in Prashant Vihar & Sector 15", "Commercial offices in Pitampura & Netaji Subhash Place", "Luxury villas in Model Town & Shalimar Bagh", "Society flats in Paschim Vihar & Punjabi Bagh"].map((item) => (
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
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-wide text-center">
        <AnimateOnScroll>
          <Users className="w-12 h-12 text-accent mx-auto mb-4" />
          <h2 className="section-title mb-4">Our Professional Team</h2>
          <p className="font-body text-primary-foreground/70 max-w-3xl mx-auto mb-6">
            Our team of 50+ skilled professionals includes interior designers, architects, carpenters, electricians, plumbers, painters, and dedicated project managers who work together to deliver exceptional results on every project.
          </p>
          <p className="font-body text-primary-foreground/60 max-w-3xl mx-auto mb-6">
            Led by Riitu Singh, a passionate interior designer with over a decade of experience, our team combines creativity with technical expertise. We stay updated with the latest design trends, materials, and technologies to bring you the very best in interior design solutions. Every team member shares our commitment to quality, punctuality, and client satisfaction.
          </p>
          <p className="font-body text-primary-foreground/60 max-w-3xl mx-auto">
            From the first consultation to the final handover, you'll have a dedicated project manager as your single point of contact — ensuring smooth communication, timely updates, and zero hassle throughout the entire process.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  </main>
);

export default About;

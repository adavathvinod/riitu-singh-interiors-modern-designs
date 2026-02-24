import { Link } from "react-router-dom";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import livingRoom1 from "@/assets/living-room-1.png";
import bedroom1 from "@/assets/bedroom-1.png";
import kitchen1 from "@/assets/kitchen-1.jpg";
import wardrobe1 from "@/assets/wardrobe-1.jpg";
import falseCeiling from "@/assets/false-ceiling.jpg";
import poojaRoom from "@/assets/pooja-room.jpg";
import furniture1 from "@/assets/furniture-1.jpg";
import renovation1 from "@/assets/renovation-1.jpg";
import bathroom1 from "@/assets/bathroom-1.jpg";
import { ArrowRight } from "lucide-react";

const interiorItems = [
  { title: "Living Room Interiors", img: livingRoom1, desc: "Elegant living rooms with modern furniture, statement walls, ambient lighting, and space-optimized layouts." },
  { title: "Bedroom Interiors", img: bedroom1, desc: "Cozy bedrooms with premium bed designs, wooden paneling, false ceiling, and custom wardrobes." },
  { title: "Modular Kitchen", img: kitchen1, desc: "Functional modular kitchens with granite/marble countertops, soft-close drawers, chimney integration, and optimized storage." },
  { title: "Wardrobes", img: wardrobe1, desc: "Walk-in and sliding wardrobes with mirror panels, organized compartments, and premium laminate finish." },
  { title: "False Ceiling", img: falseCeiling, desc: "Designer false ceilings with cove lighting, chandeliers, POP/gypsum work, and modern profiles." },
  { title: "Pooja Room Interiors", img: poojaRoom, desc: "Traditional yet modern pooja rooms with marble, wooden carvings, brass elements, and LED backlighting." },
];

const furnitureItems = [
  { title: "Custom Wardrobes", desc: "Tailor-made wardrobes designed to fit your space perfectly with premium finishes." },
  { title: "Modular Furniture", desc: "Space-saving modular designs for modern apartments and compact homes." },
  { title: "Sofa & Seating", desc: "Custom upholstered sofas, recliners, and dining chairs in premium fabrics." },
  { title: "Beds & Storage", desc: "Platform beds, hydraulic storage beds, and bunk beds with integrated storage." },
  { title: "Office Furniture", desc: "Ergonomic desks, conference tables, and storage solutions for productive workspaces." },
  { title: "Wooden & Laminated", desc: "Solid wood and laminated furniture with durable, scratch-resistant finishes." },
];

const renovationItems = [
  { title: "Painting & Polishing", desc: "Interior/exterior painting, wood polishing, texture painting, and decorative wall finishes." },
  { title: "Flooring", desc: "Tiles, marble, granite, wooden, and vinyl flooring installation with expert finishing." },
  { title: "Electrical & Plumbing", desc: "Complete rewiring, modern switchboards, concealed wiring, and plumbing upgrades." },
  { title: "False Ceiling", desc: "Gypsum, POP, and wooden false ceiling installation with integrated lighting." },
  { title: "Kitchen Renovation", desc: "Complete kitchen makeover including cabinets, countertops, backsplash, and appliances." },
  { title: "Bathroom Renovation", desc: "Modern bathroom redesign with premium fixtures, glass enclosures, and vanity units." },
];

const Services = () => (
  <main className="pt-20">
    <section className="section-padding bg-warm">
      <div className="container-wide text-center">
        <AnimateOnScroll>
          <p className="font-body text-sm text-accent uppercase tracking-widest mb-2">Our Services</p>
          <h1 className="section-title mb-4">Complete Interior Solutions</h1>
          <p className="section-subtitle mx-auto">From concept to completion, we handle every aspect of your interior transformation.</p>
        </AnimateOnScroll>
      </div>
    </section>

    {/* Interior Design */}
    <section id="interior" className="section-padding">
      <div className="container-wide">
        <AnimateOnScroll>
          <h2 className="section-title mb-4">Interior Design</h2>
          <p className="font-body text-muted-foreground max-w-3xl mb-4">
            We offer complete interior design solutions for living rooms, bedrooms, kitchens, offices, and commercial spaces. Our designs focus on modern Indian lifestyle, space optimization, lighting, color combinations, and long-lasting materials.
          </p>
          <p className="font-body text-muted-foreground max-w-3xl mb-10">
            Every design is customized to your taste, budget, and space requirements. We use 3D visualization so you can see your dream interior before we build it. Our team handles everything from design consultation to final installation.
          </p>
        </AnimateOnScroll>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {interiorItems.map((item) => (
            <AnimateOnScroll key={item.title}>
              <div className="group rounded-2xl overflow-hidden bg-card border border-border hover:shadow-xl transition-shadow">
                <div className="overflow-hidden aspect-[4/3]">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="font-body text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
        <div className="mt-8">
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-accent-foreground rounded-lg font-body font-semibold text-sm">
            Book Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>

    {/* Furniture */}
    <section id="furniture" className="section-padding bg-warm">
      <div className="container-wide">
        <AnimateOnScroll>
          <h2 className="section-title mb-4">Furniture</h2>
          <p className="font-body text-muted-foreground max-w-3xl mb-10">
            Custom-made furniture designed for comfort, durability, and style. We manufacture and install sofas, beds, dining tables, wardrobes, TV units, office furniture, and storage solutions using premium wood and modern designs. Every piece is crafted to match your interior theme perfectly.
          </p>
        </AnimateOnScroll>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {furnitureItems.map((item) => (
            <AnimateOnScroll key={item.title}>
              <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-heading text-lg font-semibold mb-2">{item.title}</h3>
                <p className="font-body text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
        <div className="mt-8">
          <img src={furniture1} alt="Custom furniture" className="rounded-2xl w-full max-h-[400px] object-cover shadow-xl" loading="lazy" />
        </div>
        <div className="mt-8">
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-accent-foreground rounded-lg font-body font-semibold text-sm">
            Book Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>

    {/* Renovation */}
    <section id="renovation" className="section-padding">
      <div className="container-wide">
        <AnimateOnScroll>
          <h2 className="section-title mb-4">Home Renovation</h2>
          <p className="font-body text-muted-foreground max-w-3xl mb-10">
            We provide complete home renovation services including painting, flooring, plumbing, electrical works, false ceiling, and redesigning old homes into modern living spaces. Whether it's a single room refresh or a complete home makeover, our team delivers quality results within your budget and timeline.
          </p>
        </AnimateOnScroll>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {renovationItems.map((item) => (
            <AnimateOnScroll key={item.title}>
              <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-heading text-lg font-semibold mb-2">{item.title}</h3>
                <p className="font-body text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 gap-4 mt-8">
          <img src={renovation1} alt="Renovation project" className="rounded-2xl w-full h-64 object-cover shadow-xl" loading="lazy" />
          <img src={bathroom1} alt="Bathroom renovation" className="rounded-2xl w-full h-64 object-cover shadow-xl" loading="lazy" />
        </div>
        <div className="mt-8">
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-accent-foreground rounded-lg font-body font-semibold text-sm">
            Book Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  </main>
);

export default Services;

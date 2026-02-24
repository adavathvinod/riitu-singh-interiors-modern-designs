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
import { ArrowRight, CheckCircle } from "lucide-react";

const interiorItems = [
  { title: "Living Room Interiors", img: livingRoom1, desc: "Elegant living rooms with modern furniture, statement walls, ambient lighting, and space-optimized layouts. We design living spaces that are perfect for Indian families — from cozy 2BHK halls to spacious 4BHK drawing rooms with TV unit walls, sofa arrangements, and false ceiling highlights." },
  { title: "Bedroom Interiors", img: bedroom1, desc: "Cozy bedrooms with premium bed designs, wooden paneling, false ceiling, and custom wardrobes. Our bedroom designs focus on creating a peaceful retreat with smart storage solutions, soft lighting, and luxurious finishes that make every morning feel special." },
  { title: "Modular Kitchen", img: kitchen1, desc: "Functional modular kitchens with granite/marble countertops, soft-close drawers, chimney integration, and optimized storage. Designed specifically for Indian cooking with oil-resistant finishes, tall unit pantries, and dedicated masala racks." },
  { title: "Wardrobes", img: wardrobe1, desc: "Walk-in and sliding wardrobes with mirror panels, organized compartments, and premium laminate finish. Every wardrobe is tailor-made to your exact room dimensions with dedicated sections for sarees, suits, accessories, and seasonal storage." },
  { title: "False Ceiling", img: falseCeiling, desc: "Designer false ceilings with cove lighting, chandeliers, POP/gypsum work, and modern profiles. From minimalist recessed panels to elaborate multi-layered designs — we create ceilings that add depth, drama, and elegance to every room." },
  { title: "Pooja Room Interiors", img: poojaRoom, desc: "Traditional yet modern pooja rooms with marble, wooden carvings, brass elements, and LED backlighting. We respect Indian traditions while incorporating contemporary design elements like Corian mandirs, backlit panels, and bell-shaped arches." },
];

const furnitureItems = [
  { title: "Custom Wardrobes", desc: "Tailor-made wardrobes designed to fit your space perfectly with premium finishes. Choose from sliding, hinged, or walk-in configurations with soft-close mechanisms and internal LED lighting." },
  { title: "Modular Furniture", desc: "Space-saving modular designs for modern apartments and compact homes. Foldable dining tables, murphy beds, convertible desks — smart furniture that maximizes every square foot." },
  { title: "Sofa & Seating", desc: "Custom upholstered sofas, recliners, and dining chairs in premium fabrics and leatherette. Choose your exact dimensions, cushion firmness, fabric color, and armrest style." },
  { title: "Beds & Storage", desc: "Platform beds, hydraulic storage beds, and bunk beds with integrated storage. Our beds come with 6-8 inch box storage underneath — perfect for storing blankets, pillows, and seasonal items." },
  { title: "Office Furniture", desc: "Ergonomic desks, conference tables, and storage solutions for productive workspaces. Designed for both home offices and commercial setups with cable management and privacy panels." },
  { title: "Wooden & Laminated", desc: "Solid wood and laminated furniture with durable, scratch-resistant finishes. We work with Teak, Sheesham, MDF, and HDHMR boards paired with Greenlam and Merino laminates for lasting beauty." },
];

const renovationItems = [
  { title: "Painting & Polishing", desc: "Interior/exterior painting, wood polishing, texture painting, and decorative wall finishes. We use Asian Paints, Berger, and Nerolac products with professional application for a flawless, long-lasting finish." },
  { title: "Flooring", desc: "Tiles, marble, granite, wooden, and vinyl flooring installation with expert finishing. Whether you prefer classic Italian marble or modern wooden laminate — we source and install with precision leveling." },
  { title: "Electrical & Plumbing", desc: "Complete rewiring, modern switchboards, concealed wiring, and plumbing upgrades. We use Havells, Polycab wiring and Jaquar, Hindware plumbing fixtures for safety and durability." },
  { title: "False Ceiling", desc: "Gypsum, POP, and wooden false ceiling installation with integrated lighting. Includes cove lights, spot lights, chandelier points, and AC duct hiding — all with clean, seamless finishes." },
  { title: "Kitchen Renovation", desc: "Complete kitchen makeover including cabinets, countertops, backsplash, and appliances. We tear down old kitchens and rebuild them with modular fittings, better layouts, and modern finishes." },
  { title: "Bathroom Renovation", desc: "Modern bathroom redesign with premium fixtures, glass enclosures, and vanity units. From waterproofing and tiling to shower panels and mirror cabinets — we handle every detail." },
];

const Services = () => (
  <main className="pt-20">
    <section className="section-padding bg-warm">
      <div className="container-wide text-center">
        <AnimateOnScroll>
          <p className="font-body text-sm text-accent uppercase tracking-widest mb-2">Our Services</p>
          <h1 className="section-title mb-4">Complete Interior Solutions in Delhi</h1>
          <p className="section-subtitle mx-auto">From concept to completion, we handle every aspect of your interior transformation. Whether you need a single room designed or an entire home renovated, our expert team delivers premium results within your budget and timeline.</p>
        </AnimateOnScroll>
      </div>
    </section>

    {/* Interior Design */}
    <section id="interior" className="section-padding">
      <div className="container-wide">
        <AnimateOnScroll>
          <h2 className="section-title mb-4">Interior Design Services</h2>
          <p className="font-body text-muted-foreground max-w-4xl mb-4">
            We offer complete interior design solutions for living rooms, bedrooms, kitchens, offices, and commercial spaces. Our designs focus on modern Indian lifestyle, space optimization, lighting, color combinations, and long-lasting materials. Every design is created keeping your family's daily routines, preferences, and cultural needs in mind.
          </p>
          <p className="font-body text-muted-foreground max-w-4xl mb-4">
            Every design is customized to your taste, budget, and space requirements. We use advanced 3D visualization software so you can see your dream interior before we build it — making changes and adjustments before a single nail is hammered. Our team handles everything from design consultation to material procurement to final installation and cleanup.
          </p>
          <div className="flex flex-wrap gap-3 mb-10">
            {["3D Design Visualization", "Vastu Compliant Layouts", "Premium Material Selection", "Complete Project Management", "After-Installation Support"].map((tag) => (
              <span key={tag} className="flex items-center gap-1 bg-warm px-3 py-1.5 rounded-full font-body text-xs font-medium">
                <CheckCircle className="w-3 h-3 text-accent" /> {tag}
              </span>
            ))}
          </div>
        </AnimateOnScroll>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {interiorItems.map((item) => (
            <AnimateOnScroll key={item.title}>
              <div className="group rounded-2xl overflow-hidden bg-card border border-border hover:shadow-xl transition-shadow h-full flex flex-col">
                <div className="overflow-hidden aspect-[4/3]">
                  <img src={item.img} alt={`${item.title} by Riitu Singh Interior Designer Studio Delhi`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="font-heading text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="font-body text-sm text-muted-foreground flex-1">{item.desc}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
        <div className="mt-8">
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-accent-foreground rounded-lg font-body font-semibold text-sm">
            Book Interior Design Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>

    {/* Furniture */}
    <section id="furniture" className="section-padding bg-warm">
      <div className="container-wide">
        <AnimateOnScroll>
          <h2 className="section-title mb-4">Custom Furniture Manufacturing</h2>
          <p className="font-body text-muted-foreground max-w-4xl mb-4">
            Custom-made furniture designed for comfort, durability, and style. We manufacture and install sofas, beds, dining tables, wardrobes, TV units, office furniture, and storage solutions using premium wood and modern designs. Every piece is crafted in our own workshop by experienced carpenters to match your interior theme perfectly.
          </p>
          <p className="font-body text-muted-foreground max-w-4xl mb-10">
            Unlike readymade furniture from stores, our custom pieces are built to your exact measurements, style preferences, and quality standards. We use seasoned wood, branded laminates (Greenlam, Merino, Century), Hettich soft-close hardware, and factory-finished edges for a showroom-quality result that lasts for years.
          </p>
        </AnimateOnScroll>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {furnitureItems.map((item) => (
            <AnimateOnScroll key={item.title}>
              <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow h-full">
                <h3 className="font-heading text-lg font-semibold mb-2">{item.title}</h3>
                <p className="font-body text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
        <div className="mt-8">
          <img src={furniture1} alt="Custom furniture showroom by Riitu Singh Interiors Delhi" className="rounded-2xl w-full max-h-[400px] object-cover shadow-xl" loading="lazy" />
        </div>
        <div className="mt-8">
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-accent-foreground rounded-lg font-body font-semibold text-sm">
            Book Furniture Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>

    {/* Renovation */}
    <section id="renovation" className="section-padding">
      <div className="container-wide">
        <AnimateOnScroll>
          <h2 className="section-title mb-4">Home Renovation Services in Delhi</h2>
          <p className="font-body text-muted-foreground max-w-4xl mb-4">
            We provide complete home renovation services including painting, flooring, plumbing, electrical works, false ceiling, and redesigning old homes into modern living spaces. Whether it's a single room refresh or a complete home makeover, our team delivers quality results within your budget and timeline.
          </p>
          <p className="font-body text-muted-foreground max-w-4xl mb-10">
            Our renovation service is ideal for homeowners who want to modernize their 10-20 year old homes without the hassle of dealing with multiple contractors. We bring our entire team — painters, plumbers, electricians, carpenters, and masons — under one project manager, so you get a coordinated, stress-free renovation experience with guaranteed quality.
          </p>
        </AnimateOnScroll>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {renovationItems.map((item) => (
            <AnimateOnScroll key={item.title}>
              <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow h-full">
                <h3 className="font-heading text-lg font-semibold mb-2">{item.title}</h3>
                <p className="font-body text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 gap-4 mt-8">
          <img src={renovation1} alt="Home renovation project in Rohini Delhi" className="rounded-2xl w-full h-64 object-cover shadow-xl" loading="lazy" />
          <img src={bathroom1} alt="Bathroom renovation by Riitu Singh Interiors" className="rounded-2xl w-full h-64 object-cover shadow-xl" loading="lazy" />
        </div>
        <div className="mt-8">
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-accent-foreground rounded-lg font-body font-semibold text-sm">
            Book Renovation Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  </main>
);

export default Services;

import { useState } from "react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import livingRoom1 from "@/assets/living-room-1.png";
import bedroom1 from "@/assets/bedroom-1.png";
import livingRoom2 from "@/assets/living-room-2.png";
import kitchen1 from "@/assets/kitchen-1.jpg";
import wardrobe1 from "@/assets/wardrobe-1.jpg";
import falseCeiling from "@/assets/false-ceiling.jpg";
import poojaRoom from "@/assets/pooja-room.jpg";
import furniture1 from "@/assets/furniture-1.jpg";
import renovation1 from "@/assets/renovation-1.jpg";
import bathroom1 from "@/assets/bathroom-1.jpg";
import { X } from "lucide-react";

const categories = ["All", "Living Room", "Kitchen", "Bedroom", "Furniture", "Renovation"];

const images = [
  { src: livingRoom1, cat: "Living Room", title: "Modern Living Room Design" },
  { src: livingRoom2, cat: "Living Room", title: "Contemporary Living Space" },
  { src: kitchen1, cat: "Kitchen", title: "Modular Kitchen" },
  { src: bedroom1, cat: "Bedroom", title: "Luxury Bedroom" },
  { src: wardrobe1, cat: "Furniture", title: "Walk-in Wardrobe" },
  { src: falseCeiling, cat: "Living Room", title: "False Ceiling Design" },
  { src: poojaRoom, cat: "Living Room", title: "Pooja Room" },
  { src: furniture1, cat: "Furniture", title: "Premium Furniture" },
  { src: renovation1, cat: "Renovation", title: "Home Renovation" },
  { src: bathroom1, cat: "Renovation", title: "Bathroom Makeover" },
];

const Gallery = () => {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = filter === "All" ? images : images.filter((i) => i.cat === filter);

  return (
    <main className="pt-20">
      <section className="section-padding bg-warm">
        <div className="container-wide text-center">
          <AnimateOnScroll>
            <p className="font-body text-sm text-accent uppercase tracking-widest mb-2">Our Portfolio</p>
            <h1 className="section-title mb-4">Project Gallery</h1>
            <p className="section-subtitle mx-auto">Explore our completed projects across Delhi NCR — from modern living rooms to complete home renovations.</p>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-5 py-2 rounded-full font-body text-sm transition-colors ${
                  filter === c ? "bg-accent text-accent-foreground" : "bg-card border border-border text-foreground hover:bg-secondary"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {filtered.map((img, i) => (
              <AnimateOnScroll key={`${img.title}-${i}`}>
                <button onClick={() => setLightbox(img.src)} className="w-full rounded-xl overflow-hidden aspect-[4/3] group">
                  <img src={img.src} alt={img.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </button>
              </AnimateOnScroll>
            ))}
          </div>

          {/* YouTube Shorts */}
          <AnimateOnScroll className="mt-12">
            <h2 className="section-title text-center mb-8">Video Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {["kHLksEnj0NY", "SkI__pGPIXs", "2B5I1yks5FI"].map((id) => (
                <div key={id} className="rounded-xl overflow-hidden aspect-[9/16] max-h-[450px]">
                  <iframe
                    src={`https://www.youtube.com/embed/${id}`}
                    title="YouTube Short"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div className="fixed inset-0 z-[100] bg-charcoal/90 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <button className="absolute top-6 right-6 text-white" onClick={() => setLightbox(null)} aria-label="Close">
            <X className="w-8 h-8" />
          </button>
          <img src={lightbox} alt="Gallery preview" className="max-w-full max-h-[90vh] rounded-xl object-contain" />
        </div>
      )}
    </main>
  );
};

export default Gallery;

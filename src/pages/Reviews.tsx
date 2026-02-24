import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Star, Shield, ThumbsUp, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const ratings = [
  { platform: "Google", rating: "4.2", count: "44 reviews", icon: Star },
  { platform: "Facebook", rating: "4.7", count: "13 votes", icon: ThumbsUp },
  { platform: "Justdial", rating: "4.5", count: "88 votes", icon: Shield },
];

const testimonials = [
  { name: "Parveen Kumar", location: "Rohini Sector 16", text: "I hire dem for my house and dey give me the best service and I love her work. The attention to detail was amazing and the team was very professional. They completed our 3BHK interior in just 45 days. Highly recommended for anyone looking to redesign their home!", rating: 5 },
  { name: "Niti Chawla", location: "Prashant Vihar", text: "This is the place where one could dump all his money. The quality of work is exceptional and the designs are truly world-class. Riitu and her team understood exactly what we wanted and delivered beyond expectations. Our modular kitchen is the envy of all our neighbors!", rating: 5 },
  { name: "Meenakshi Naveen", location: "Pitampura", text: "Their teamwork is fabulous. From the initial consultation to the final handover, everything was smooth and well-coordinated. The kitchen and bedroom designs they created for us are simply stunning. The false ceiling lighting transforms our living room completely.", rating: 5 },
  { name: "Rohit Sharma", location: "Rohini Sector 24", text: "Excellent work on our 3BHK apartment in Rohini. The modular kitchen design is both beautiful and functional — perfect for Indian cooking with ample storage. The team completed the project on time and within budget. Very satisfied with the wardrobe designs too.", rating: 5 },
  { name: "Priya Gupta", location: "Shalimar Bagh", text: "We got our entire flat renovated by Riitu Singh Interiors. The false ceiling, wardrobes, and kitchen look amazing. Very professional team with great attention to detail. They even helped us choose the right paint colors and flooring materials. Worth every rupee!", rating: 4 },
  { name: "Amit Verma", location: "Model Town", text: "Best interior designer in Rohini! They transformed our old flat into a modern, beautiful home. The pooja room design they created is the highlight of our house — traditional yet contemporary with beautiful LED backlighting. Everyone who visits compliments it.", rating: 5 },
  { name: "Sunita Devi", location: "Rohini Sector 22", text: "We were worried about renovating our 15-year-old flat, but Riitu Singh's team made it completely stress-free. New flooring, fresh paint, modern kitchen, and beautiful bathrooms — our home feels brand new! The project manager kept us updated daily.", rating: 5 },
  { name: "Rajesh Kumar", location: "Paschim Vihar", text: "Got office interiors done by Riitu Singh Studio. Very professional approach — they understood our brand identity and created a workspace that impresses every visitor. The furniture quality is excellent and was delivered on the exact promised date.", rating: 5 },
];

const Reviews = () => (
  <main className="pt-20">
    <section className="section-padding bg-warm">
      <div className="container-wide text-center">
        <AnimateOnScroll>
          <p className="font-body text-sm text-accent uppercase tracking-widest mb-2">Client Love</p>
          <h1 className="section-title mb-4">Reviews & Testimonials</h1>
          <p className="section-subtitle mx-auto">Hear from our happy clients across Delhi NCR who trusted us with their homes, offices, and commercial spaces. Their satisfaction is our greatest achievement.</p>
        </AnimateOnScroll>
      </div>
    </section>

    {/* Rating Cards */}
    <section className="section-padding">
      <div className="container-wide">
        <AnimateOnScroll className="text-center mb-8">
          <h2 className="font-heading text-2xl font-bold mb-2">Our Ratings Across Platforms</h2>
          <p className="font-body text-sm text-muted-foreground">Verified ratings from real customers on trusted review platforms</p>
        </AnimateOnScroll>
        <div className="grid sm:grid-cols-3 gap-8 mb-16">
          {ratings.map((r) => (
            <AnimateOnScroll key={r.platform}>
              <div className="bg-card border border-border rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
                <r.icon className="w-10 h-10 text-accent mx-auto mb-4" />
                <p className="font-heading text-4xl font-bold text-accent mb-1">{r.rating}</p>
                <div className="flex justify-center gap-1 mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < Math.floor(parseFloat(r.rating)) ? "text-accent fill-accent" : "text-border"}`} />
                  ))}
                </div>
                <p className="font-body text-sm font-semibold">{r.platform}</p>
                <p className="font-body text-xs text-muted-foreground">{r.count}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Testimonials */}
        <AnimateOnScroll className="text-center mb-8">
          <h2 className="font-heading text-2xl font-bold mb-2">What Our Clients Say</h2>
          <p className="font-body text-sm text-muted-foreground">Real reviews from homeowners across Rohini, Pitampura, Shalimar Bagh & more</p>
        </AnimateOnScroll>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <AnimateOnScroll key={t.name}>
              <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow h-full flex flex-col">
                <Quote className="w-8 h-8 text-accent/20 mb-2" />
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                  ))}
                </div>
                <p className="font-body text-sm text-muted-foreground mb-4 italic flex-1">"{t.text}"</p>
                <div>
                  <p className="font-body text-sm font-semibold">— {t.name}</p>
                  <p className="font-body text-xs text-muted-foreground">{t.location}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Trust Badges */}
        <AnimateOnScroll className="mt-16 text-center">
          <h2 className="font-heading text-2xl font-bold mb-3">Trusted & Verified</h2>
          <p className="font-body text-sm text-muted-foreground mb-6 max-w-2xl mx-auto">We are listed and verified on all major business platforms. Our consistent ratings reflect our commitment to quality and customer satisfaction.</p>
          <div className="flex flex-wrap justify-center gap-4">
            {["Google Verified Business", "Justdial Listed", "Facebook Recommended", "10+ Years Experience", "500+ Happy Clients", "50+ Team Members"].map((badge) => (
              <div key={badge} className="flex items-center gap-2 bg-warm px-4 py-2 rounded-full">
                <Shield className="w-4 h-4 text-accent" />
                <span className="font-body text-sm font-medium">{badge}</span>
              </div>
            ))}
          </div>
        </AnimateOnScroll>

        {/* CTA */}
        <AnimateOnScroll className="mt-16 text-center bg-primary text-primary-foreground rounded-2xl p-10">
          <h2 className="font-heading text-2xl font-bold mb-3">Ready to Join Our Happy Clients?</h2>
          <p className="font-body text-sm text-primary-foreground/70 max-w-xl mx-auto mb-6">Book a free consultation today and let us design the home you've always dreamed of.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-accent-foreground rounded-lg font-body font-semibold text-sm">
            Book Free Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </AnimateOnScroll>
      </div>
    </section>
  </main>
);

export default Reviews;

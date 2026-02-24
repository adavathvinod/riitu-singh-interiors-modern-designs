import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Star, Shield, ThumbsUp } from "lucide-react";

const ratings = [
  { platform: "Google", rating: "4.2", count: "44 reviews", icon: Star },
  { platform: "Facebook", rating: "4.7", count: "13 votes", icon: ThumbsUp },
  { platform: "Justdial", rating: "4.5", count: "88 votes", icon: Shield },
];

const testimonials = [
  { name: "Parveen Kumar", text: "I hire dem for my house and dey give me the best service and I love her work. The attention to detail was amazing and the team was very professional. Highly recommended for anyone looking to redesign their home!", rating: 5 },
  { name: "Niti Chawla", text: "This is the place where one could dump all his money. The quality of work is exceptional and the designs are truly world-class. Riitu and her team understood exactly what we wanted and delivered beyond expectations.", rating: 5 },
  { name: "Meenakshi Naveen", text: "Their teamwork is fabulous. From the initial consultation to the final handover, everything was smooth and well-coordinated. The kitchen and bedroom designs they created for us are simply stunning.", rating: 5 },
  { name: "Rohit Sharma", text: "Excellent work on our 3BHK apartment in Rohini. The modular kitchen design is both beautiful and functional. The team completed the project on time and within budget.", rating: 5 },
  { name: "Priya Gupta", text: "We got our entire flat renovated by Riitu Singh Interiors. The false ceiling, wardrobes, and kitchen look amazing. Very professional team with great attention to detail.", rating: 4 },
  { name: "Amit Verma", text: "Best interior designer in Rohini! They transformed our old flat into a modern, beautiful home. The pooja room design they created is the highlight of our house.", rating: 5 },
];

const Reviews = () => (
  <main className="pt-20">
    <section className="section-padding bg-warm">
      <div className="container-wide text-center">
        <AnimateOnScroll>
          <p className="font-body text-sm text-accent uppercase tracking-widest mb-2">Client Love</p>
          <h1 className="section-title mb-4">Reviews & Testimonials</h1>
          <p className="section-subtitle mx-auto">Hear from our happy clients across Delhi NCR.</p>
        </AnimateOnScroll>
      </div>
    </section>

    {/* Rating Cards */}
    <section className="section-padding">
      <div className="container-wide">
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <AnimateOnScroll key={t.name}>
              <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow h-full flex flex-col">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                  ))}
                </div>
                <p className="font-body text-sm text-muted-foreground mb-4 italic flex-1">"{t.text}"</p>
                <p className="font-body text-sm font-semibold">— {t.name}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Trust Badges */}
        <AnimateOnScroll className="mt-16 text-center">
          <h2 className="font-heading text-2xl font-bold mb-6">Trusted & Verified</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {["Google Verified Business", "Justdial Listed", "Facebook Recommended", "10+ Years Experience"].map((badge) => (
              <div key={badge} className="flex items-center gap-2 bg-warm px-4 py-2 rounded-full">
                <Shield className="w-4 h-4 text-accent" />
                <span className="font-body text-sm font-medium">{badge}</span>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  </main>
);

export default Reviews;

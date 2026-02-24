import { useState } from "react";
import { Send } from "lucide-react";

const BookingForm = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", phone: "", email: "", service: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          required
          type="text"
          placeholder="Full Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent"
        />
        <input
          required
          type="tel"
          placeholder="Phone Number"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent"
        />
      </div>
      <input
        required
        type="email"
        placeholder="Email Address"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent"
      />
      <select
        required
        value={form.service}
        onChange={(e) => setForm({ ...form, service: e.target.value })}
        className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent"
      >
        <option value="">Select Service Required</option>
        <option value="interior">Interior Design</option>
        <option value="furniture">Furniture</option>
        <option value="renovation">Home Renovation</option>
        <option value="consultation">Free Consultation</option>
      </select>
      <textarea
        placeholder="Your Message"
        rows={4}
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent resize-none"
      />
      <button
        type="submit"
        className="w-full sm:w-auto px-8 py-3 bg-accent text-accent-foreground rounded-lg font-body font-semibold text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
      >
        <Send className="w-4 h-4" />
        {submitted ? "Thank you! We'll contact you soon." : "Book Free Consultation"}
      </button>
    </form>
  );
};

export default BookingForm;

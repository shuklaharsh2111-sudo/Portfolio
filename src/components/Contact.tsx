import { useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { ref, isVisible } = useScrollReveal();
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();

  try {
    await emailjs.send(
      /*"service_gway1xe",*/
      "service_ea31rrp",
      "template_oqr1cmo",
      {
        name: form.name,
        email: form.email,
        message: form.message,
      },
      "QQIMU_Cy-CmQDMMJj"
    );

    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });

    setForm({
      name: "",
      email: "",
      message: "",
    });

  } catch (error) {
    console.log(error);

    toast({
      title: "Failed to send message",
      description: "Please try again later.",
    });
  }
};

  return (
    <section id="contact" className="py-24 px-4">
      <div
        ref={ref}
        className={`container mx-auto max-w-5xl transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          Contact <span className="text-gradient">Me</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full" />

        <div className="grid md:grid-cols-2 gap-12">
          {/* Info */}
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              Have a project in mind or want to collaborate? Feel free to reach out!
            </p>

            <div className="space-y-4">
              {[
                { icon: Mail, label: "shukla.harsh.2111@gmail.com" },
                { icon: Phone, label: "+91 8108728060", href: "https://wa.me/918108728060?text=Can%20I%20get%20more%20info%20on%20this?" },
                { icon: MapPin, label: "India" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <a
  key={item.label}
  href={item.href || "#"}
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-3"
>
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon size={18} className="text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">{item.label}</span>
                  </a>
                );
              })}
            </div>

            <div className="flex items-center gap-4 pt-4">
              {[
                { icon: Github, href: "https://github.com/shuklaharsh2111-sudo" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/harsh-shukla-b032b7416" },
                { icon: Instagram, href: "https://www.instagram.com/harsh_shukla_21" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-muted border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors text-sm"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors text-sm"
            />
            <textarea
              placeholder="Your Message"
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors text-sm resize-none"
            />
            <button
              type="submit"
              className="w-full px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              <Send size={16} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

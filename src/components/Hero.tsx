import { ArrowDown, Download } from "lucide-react";
import { useTypingAnimation } from "@/hooks/useTypingAnimation";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const typedText = useTypingAnimation(
    ["FullStack Developer","Database Designer", "Problem Solver", "Rest API Developer", "App Developer"],
    80,
    40,
    2000
  );

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/30 animate-float"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="text-primary font-mono text-sm md:text-base mb-4 animate-fade-in">
          Hi, my name is
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 animate-fade-up">
          <span className="text-gradient">Harsh Shukla</span>
        </h1>
        <div className="h-12 md:h-16 flex items-center justify-center mb-6">
          <span className="text-xl md:text-3xl text-muted-foreground font-light">
            I'm a{" "}
            <span className="text-primary font-medium typing-cursor">
              {typedText}
            </span>
          </span>
        </div>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-10 text-base md:text-lg animate-fade-in" style={{ animationDelay: "0.4s" }}>
          I build secure, scalable, and intelligent applications. Passionate about
          creating impactful digital experiences.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.6s" }}>
          <a
            href="#projects"
            className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
          >
            View Projects
          </a>
<a
  href="/dev_shukla_harsh_resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="px-8 py-3 rounded-lg border border-primary text-primary font-semibold hover:bg-primary/10 transition-colors flex items-center gap-2"
>
  <Download size={18} />
  View Resume
</a>
        </div>
      </div>
             <a
          href="#about"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
        >
          <ArrowDown size={24} />
        </a>
    </section>
  );
};

export default Hero;

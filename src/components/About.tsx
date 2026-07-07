import { useScrollReveal } from "@/hooks/useScrollReveal";
import profileImg from "@/assets/my_profile.jpeg";

const About = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="py-24 px-4">
      <div
        ref={ref}
        className={`container mx-auto max-w-5xl transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          About <span className="text-gradient">Me</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full" />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden glow">
                <img
                  src={profileImg}
                  alt="Harsh Shukla"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={512}
                  height={512}
                />
              </div>
              <div className="absolute -bottom-3 -right-3 w-64 h-64 md:w-80 md:h-80 rounded-2xl border-2 border-primary/20 -z-10" />
            </div>
          </div>

          {/* Text */}
<div className="space-y-4">
  <p className="text-muted-foreground leading-relaxed">
    Hi, I'm{" "}
    <span className="text-foreground font-semibold">Harsh Shukla</span>, a
    passionate{" "}
    <span className="text-primary">Full Stack Developer</span> Completed B.Sc.Computer Science with 8.96/10 CGPA, 
    currently
    pursuing a{" "}
    <span className="text-primary">
      Masters of Science (M.Sc.) in Computer Science
    </span>
    . I enjoy building modern, responsive, and user-friendly web applications
    that solve real-world problems.
  </p>

  <p className="text-muted-foreground leading-relaxed">
    I have experience developing full-stack applications using modern web
    technologies, <span className="text-primary">REST APIs</span>, and{" "}
    <span className="text-primary">database-driven systems</span>. I enjoy
    learning new technologies, improving my development skills, and turning
    ideas into practical applications.
  </p>

  <p className="text-muted-foreground leading-relaxed">
    I'm currently focused on strengthening my expertise in{" "}
    <span className="text-primary">Full Stack Development</span> by building
    real-world projects and continuously expanding my technical knowledge.
  </p>

  <div className="grid grid-cols-2 gap-4 pt-4">
    {[
      {
        label: "Education",
        value: "B.Sc. Computer Science (Completed with 8.96/10 CGPA) M.Sc. Computer Science(Pursuing)",
      },
      {
        label: "Location",
        value: "India",
      },
      {
        label: "Specialization",
        value: "Full Stack Development",
      },
      {
        label: "Available",
        value: "Jobs & Freelancing",
      },
    ].map((item) => (
      <div key={item.label}>
        <p className="text-xs text-muted-foreground uppercase tracking-wider">
          {item.label}
        </p>
        <p className="text-sm text-foreground font-medium">
          {item.value}
        </p>
      </div>
    ))}
  </div>
</div>
        </div>
      </div>
    </section>
  );
};

export default About;

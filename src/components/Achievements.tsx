import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Award, Medal, Trophy } from "lucide-react";
import pythonCert from "@/assets/python_certificate.pdf";
import webDevCert from "@/assets/web_des_dev_certificate.pdf";
import cppCert from "@/assets/c_cpp_certificate.pdf";

const achievements = [
    {
    icon: Award,
    title: "Industry Internship",
    description:
      "Completed an industry internship in Full Stack Web Development, gaining practical experience in application development.",
  },
  {
    icon: Trophy,
    title: "Academic Excellence",
    description:
      "Maintained a CGPA of 8.96/10 in B.Sc. Computer Science with consistent academic performance.",
  },
  {
    icon: Medal,
    title: "Full Stack Development",
    description:
      "Developed multiple full-stack web applications using Node.js, Express.js, MySQL, and modern web technologies.",
  },
];

const certifications = [
  {
    title: "KLiC MKCL Python Certification",
    description:
      "Completed Python programming certification covering programming fundamentals and development concepts.",
    link: pythonCert,
  },
  {
    title: "KLiC MKCL Web Designing and Web Development Certification",
    description:
      "Completed Web Development certification covering frontend and backend development concepts.",
    link:webDevCert,
  },
  {
    title: "KLiC MKCL C/C++ Certification",
    description:
      "Completed C/C++ programming certification covering core programming concepts.",
    link:cppCert,
  },
];

const Achievements = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="achievements" className="py-24 px-4 bg-card/50">
      <div
        ref={ref}
        className={`container mx-auto max-w-5xl transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          <span className="text-gradient">Achievements</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full" />

        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300 text-center group hover:-translate-y-1"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Icon size={28} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            );
          })}
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mt-20 mb-2 text-center">
          <span className="text-gradient">Certifications</span>
        </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full" />

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {cert.title}
                </h3>
            
                <p className="text-sm text-muted-foreground">
                  {cert.description}
                </p>
                {cert.link && (
                    <a href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 px-4 py-2 rounded-lg bg-primary text-white text-sm hover:opacity-90 transition"
                    >View Certificate</a>
                  )}
              </div>
            ))}
          </div>
      </div>
    </section>
  );
};

export default Achievements;

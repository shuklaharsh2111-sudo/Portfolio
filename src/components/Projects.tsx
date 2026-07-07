import { useScrollReveal } from "@/hooks/useScrollReveal";
import {ExternalLink, Github, ChevronLeft, ChevronRight,} from "lucide-react";
import { useState } from "react";
import healthcareImg from "@/assets/prj_medikare.png";
import crmImg from "@/assets/prj_company_crm.png";
import votingImg from "@/assets/prj_voting_portal.png";
import workoutImg from "@/assets/prj_gymtrack.png";
import styleHubImg from "@/assets/prj_stylehub.png";

const projects = [
    {
    title: "Smart Healthcare Marketplace(fullstack)",
    description:"Developed a full-stack Healthcare Vendor Management & Service Marketplace with dedicated Admin, User, and six vendor panels. Vendors can register, manage service listings after admin approval, while users can browse, book, and access healthcare services. The platform also supports commission-based payments, vendor management, and secure online lab report uploads and downloads.",
    tech: [ "HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MySQL", "REST APIs", "Multer", "Authentication"],
    github: "https://github.com/shuklaharsh2111-sudo/Medikare",
    live: "",
    color: "from-emerald-500/20 to-primary/20",
    image: healthcareImg,
  },
  {
    title: "Company CRM(fullstack)",
    description:"Designed and developed a comprehensive CRM platform to manage business operations efficiently. The system includes lead management, employee activity tracking, meeting and payment records, project assignment, and role-based access with dedicated Admin, Employee, and Developer dashboards. It improves collaboration, project monitoring, and overall organizational productivity.",
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MySQL", "REST APIs", "Role-Based Access"],
    github: "https://github.com/shuklaharsh2111-sudo/Company_CRM",
    live: "",
    color: "from-primary/20 to-blue-500/20",
    image: crmImg,
  },
  {
    title: "Online College Voting Portal(fullstack)",
    description:
      "Developed a secure College Voting Portal with role-based access, allowing candidates to register for elections, students to cast one vote per position, and admins to manage approvals, messaging, and election results. The platform also generates downloadable PDF and CSV reports for transparent result management",
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MySQL", "REST APIs", "PDF/CSV Export"],
    github: "https://github.com/shuklaharsh2111-sudo/clg_voting_portal",
    live: "",
    color: "from-violet-500/20 to-primary/20",
    image: votingImg,
  },
  {
    title: "Workout Tracker(fullstack)",
    description:
      "Developed a Gym Workout Tracker that enables users to register, choose their fitness goals (Weight Training, Cardio, or Both), log detailed workout sessions, and monitor their complete fitness history. The system provides searchable workout records, allowing users to track progress, compare past performance, and analyze training improvements over time.",
    tech: [ "HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MySQL", "REST APIs", "Search & Filtering"],
    github: "https://github.com/shuklaharsh2111-sudo/GymTracker",
    live: "",
    color: "from-violet-500/20 to-primary/20",
    image: workoutImg,
  },
  {
    title: "Style Hub(Frontend Only)",
    description:
      "Developed a responsive e-commerce frontend for a clothing brand featuring product browsing, a temporary shopping cart, invoice generation, and payment gateway integration in a testing environment.",
    tech: ["React.js", "Vite", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Responsive Design"],
    github: "https://github.com/shuklaharsh2111-sudo/StyleHub",
    live: "",
    color: "from-violet-500/20 to-primary/20",
    image: styleHubImg,
  },
];

const Projects = () => {
  const { ref, isVisible } = useScrollReveal();
  const [currentProject, setCurrentProject] = useState(0);

const nextProject = () => {
  setCurrentProject((prev) =>
    prev === projects.length - 1 ? 0 : prev + 1
  );
};

const prevProject = () => {
  setCurrentProject((prev) =>
    prev === 0 ? projects.length - 1 : prev - 1
  );
};

  return (
    <section id="projects" className="py-24 px-4">
      <div
        ref={ref}
        className={`container mx-auto max-w-5xl transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          My <span className="text-gradient">Projects</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full" />
<div className="relative max-w-4xl mx-auto">

  {/* Previous Button */}
  <button
    onClick={prevProject}
    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-card border hover:bg-primary hover:text-white transition"
  >
    <ChevronLeft size={24} />
  </button>

  {/* Next Button */}
  <button
    onClick={nextProject}
    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-card border hover:bg-primary hover:text-white transition"
  >
    <ChevronRight size={24} />
  </button>

  <div className="rounded-xl border border-border bg-card overflow-hidden">

    {/* IMAGE */}
    <img
      src={projects[currentProject].image}
      alt={projects[currentProject].title}
      className="w-full h-80 object-contain"
    />

    {/* CONTENT */}
    <div className="p-8">

      <h3 className="text-2xl font-bold mb-4">
        {projects[currentProject].title}
      </h3>

      <p className="text-muted-foreground mb-6">
        {projects[currentProject].description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {projects[currentProject].tech.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 rounded bg-muted text-primary text-sm"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-5">
        <a
          href={projects[currentProject].github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github />
        </a>

        {projects[currentProject].live && (
          <a
            href={projects[currentProject].live}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink />
          </a>
        )}
      </div>

    </div>
  </div>

</div>
      </div>
    </section>
  );
};

export default Projects;

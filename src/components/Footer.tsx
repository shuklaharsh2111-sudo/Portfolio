import { Heart } from "lucide-react";

const Footer = () => (
  <footer className="py-8 px-4 border-t border-border">
    <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground font-mono">
        {"<HS />"} © {new Date().getFullYear()}
      </p>
      <p className="text-sm text-muted-foreground flex items-center gap-1">
        Made by Harsh Shukla
      </p>
    </div>
  </footer>
);

export default Footer;

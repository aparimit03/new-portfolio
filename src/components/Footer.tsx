
import { Link } from "react-router-dom";
import { ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container-custom">
        <div className="flex flex-col items-center">
          {/* Back to top button */}
          <Button
            variant="outline"
            size="icon"
            className="rounded-full mb-8"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <ChevronUp className="h-5 w-5" />
          </Button>

          {/* Logo / Name */}
          <Link to="/" className="text-2xl font-bold tracking-tighter mb-6">
            AR<span className="text-primary">.</span>
          </Link>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-6">
            <Link to="/" className="text-sm hover:text-primary transition-colors">Home</Link>
            <Link to="/about" className="text-sm hover:text-primary transition-colors">About</Link>
            <Link to="/skills" className="text-sm hover:text-primary transition-colors">Skills</Link>
            <Link to="/projects" className="text-sm hover:text-primary transition-colors">Projects</Link>
            <Link to="/experience" className="text-sm hover:text-primary transition-colors">Experience</Link>
            <Link to="/achievements" className="text-sm hover:text-primary transition-colors">Achievements</Link>
            <Link to="/blog" className="text-sm hover:text-primary transition-colors">Blog</Link>
            <Link to="/contact" className="text-sm hover:text-primary transition-colors">Contact</Link>
          </nav>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Aparimit Rathour. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

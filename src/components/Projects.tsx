
import { useState } from "react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

// Define project interface
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveLink?: string;
  githubLink?: string;
  featured: boolean;
}

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  // Project data
  const projects: Project[] = [
    {
      id: 1,
      title: "QwickTix",
      description: "A mobile event ticketing platform that simplifies the process of finding, booking, and managing event tickets. Built with Kotlin, Jetpack Compose, and Firebase.",
      image: "/placeholder.svg",
      tags: ["Kotlin", "Jetpack Compose", "Firebase", "MVVM", "Material Design"],
      liveLink: "https://play.google.com/store",
      githubLink: "https://github.com/aparimit-rathour/qwicktix",
      featured: true,
    },
    {
      id: 2,
      title: "Vibé",
      description: "Real-time chat application with features like message reactions, file sharing, and voice messages. Implements WebSockets for instant messaging.",
      image: "/placeholder.svg",
      tags: ["React", "Node.js", "Socket.io", "MongoDB", "JWT"],
      liveLink: "https://vibe-chat.vercel.app",
      githubLink: "https://github.com/aparimit-rathour/vibe-chat",
      featured: true,
    },
    {
      id: 3,
      title: "Eventador",
      description: "Event discovery app with personalized recommendations based on user preferences and location. Includes features like event reminder and ticket management.",
      image: "/placeholder.svg",
      tags: ["Kotlin", "Android SDK", "Retrofit", "Room", "Google Maps API"],
      githubLink: "https://github.com/aparimit-rathour/eventador",
      featured: true,
    },
    {
      id: 4,
      title: "Blind Coding Platform",
      description: "A web platform for blind coding competitions where participants write code without seeing the output until submission.",
      image: "/placeholder.svg",
      tags: ["React", "Express", "MongoDB", "Judge0 API", "WebSockets"],
      liveLink: "https://blindcoding.vercel.app",
      githubLink: "https://github.com/aparimit-rathour/blind-coding",
      featured: true,
    },
    {
      id: 5,
      title: "Digital Business Card",
      description: "A mobile app that creates and shares digital business cards with NFC support and analytics tracking.",
      image: "/placeholder.svg",
      tags: ["Kotlin", "Jetpack Compose", "Firebase", "NFC API"],
      githubLink: "https://github.com/aparimit-rathour/digital-biz-card",
      featured: true,
    },
    {
      id: 6,
      title: "Portfolio Website",
      description: "My personal portfolio website built with React, TypeScript, and Tailwind CSS.",
      image: "/placeholder.svg",
      tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      liveLink: "https://aparimit-rathour.com",
      githubLink: "https://github.com/aparimit-rathour/portfolio",
      featured: false,
    },
  ];

  // Filter projects based on the showAll state
  const displayedProjects = showAll ? projects : projects.filter((project) => project.featured);

  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-background to-secondary/30">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            My Work
          </div>
          <h2 className="mb-4">Featured Projects</h2>
          <p className="text-muted-foreground">
            Explore some of my recent projects that showcase my skills and expertise in mobile and web development.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project) => (
            <Card key={project.id} className="project-card overflow-hidden flex flex-col h-full">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardContent className="flex-grow p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="tag bg-secondary/50">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex justify-between gap-4">
                {project.liveLink && (
                  <Button variant="outline" size="sm" asChild className="flex-1">
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                    </a>
                  </Button>
                )}
                {project.githubLink && (
                  <Button variant="outline" size="sm" asChild className="flex-1">
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> GitHub
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Show More/Less Button */}
        <div className="mt-12 text-center">
          <Button
            onClick={() => setShowAll(!showAll)}
            variant="outline"
            className="rounded-full"
          >
            {showAll ? "Show Less" : "View All Projects"} 
            <ArrowRight className={`ml-2 h-4 w-4 transition-transform ${showAll ? "rotate-90" : ""}`} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;

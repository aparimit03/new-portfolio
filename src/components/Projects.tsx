
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
			title: "Glyd",
			description:
				"A mobile Image Carousel library library simplifies the process of displaying a series of images in a slider on Android.",
			image: "/glyd.png",
			tags: [
				"Kotlin",
				"Android",
				"Open Source",
				"UI/UX",
				"Auto Scroll",
				"MVP",
			],
			liveLink: "https://jitpack.io/#aparimit03/image-carousel-kotlin",
			githubLink: "https://github.com/aparimit03/image-carousel-kotlin",
			featured: true,
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
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                  {/* {project.tags.length > 3 && (
                    <span className="tag bg-secondary/50">
                      +{project.tags.length - 3}
                    </span>
                  )} */}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex justify-between gap-4">
                {project.liveLink && (
                  <Button variant="outline" size="sm" asChild className="flex-1">
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Live
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
        {/* <div className="mt-12 text-center">
          <Button
            onClick={() => setShowAll(!showAll)}
            variant="outline"
            className="rounded-full"
          >
            {showAll ? "Show Less" : "View All Projects"} 
            <ArrowRight className={`ml-2 h-4 w-4 transition-transform ${showAll ? "rotate-90" : ""}`} />
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;

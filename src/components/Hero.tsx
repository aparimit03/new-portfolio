import { useEffect, useRef } from "react";
import { ChevronDown, Download, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

declare global {
  interface Window {
    particlesJS: any;
  }
}

const Hero = () => {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window.particlesJS !== 'undefined' && particlesRef.current) {
      window.particlesJS('particles-js', {
        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: ["#8B5CF6", "#0EA5E9", "#F97316"]
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#000000"
            },
          },
          opacity: {
            value: 0.6,
            random: true,
            anim: {
              enable: true,
              speed: 0.8,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: 4,
            random: true,
            anim: {
              enable: true,
              speed: 2,
              size_min: 0.3,
              sync: false
            }
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#9b87f5",
            opacity: 0.3,
            width: 1
          },
          move: {
            enable: true,
            speed: 3,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "bounce",
            bounce: true,
            attract: {
              enable: true,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "bubble"
            },
            onclick: {
              enable: true,
              mode: "repulse"
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 200,
              line_linked: {
                opacity: 0.8
              }
            },
            bubble: {
              distance: 200,
              size: 6,
              duration: 0.8,
              opacity: 0.6,
              speed: 3
            },
            repulse: {
              distance: 200,
              duration: 0.8
            },
            push: {
              particles_nb: 4
            }
          }
        },
        retina_detect: true
      });
    }
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Particles Background */}
      <div id="particles-js" ref={particlesRef} className="absolute inset-0 z-0"></div>

      {/* Content Container */}
      <div className="container-custom relative z-10 flex flex-col items-center justify-center text-center">
        <div className="max-w-3xl mx-auto">
          {/* Avatar image with animation */}
          <div className="relative w-36 h-36 md:w-40 md:h-40 mx-auto mb-8 rounded-full overflow-hidden border-4 border-primary/30 animate-float">
            <img 
              src="/placeholder.svg" 
              alt="Aparimit Rathour" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Animated text */}
          <div className="space-y-4">
            <h2 className="text-xl text-primary font-semibold opacity-0 animate-text-reveal">
              Hello, I'm
            </h2>
            <h1 className="font-bold opacity-0 animate-text-reveal-delay-1 mb-4">
              Aparimit Rathour
            </h1>
            <h3 className="text-xl opacity-0 animate-text-reveal-delay-2 mb-6">
              Android Developer | React Enthusiast | Tech Innovator
            </h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto opacity-0 animate-text-reveal-delay-3">
              Building impactful digital experiences that transform ideas into reality.
            </p>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 opacity-0 animate-text-reveal-delay-3">
            <Button asChild size="lg" className="rounded-full">
              <a href="#projects">
                View My Projects <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="rounded-full">
              <a href="/resume.pdf" download="AparimitRathour_Resume.pdf">
                Download CV <Download className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-pulse-slow hidden md:block">
          <a href="#about" className="flex flex-col items-center text-sm text-muted-foreground">
            <span className="mb-2">Scroll Down</span>
            <ChevronDown className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

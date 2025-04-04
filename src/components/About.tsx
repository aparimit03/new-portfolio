
import { ArrowRight, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
		<section
			id="about"
			className="section-padding bg-secondary/30"
		>
			<div className="container-custom">
				<div className="flex flex-col md:flex-row gap-12 items-center">
					{/* Image Column */}
					<div className="md:w-5/12 lg:w-1/2">
						<div className="relative">
							<div className="rounded-xl overflow-hidden shadow-lg">
								<img
									src="/profile.jpeg"
									alt="Aparimit Rathour"
									className="w-full h-auto object-cover"
								/>
							</div>
							{/* Experience badge */}
							{/* <Card className="absolute -bottom-5 -right-5 flex items-center justify-center p-4 shadow-lg">
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary">2+</p>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
              </Card> */}
						</div>
					</div>

					{/* Content Column */}
					<div className="md:w-7/12 lg:w-1/2">
						<div className="space-y-4">
							<div className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium">
								About Me
							</div>
							<h2 className="mb-4">Get to know me better</h2>
							<p className="text-lg text-muted-foreground mb-4">
								I'm an Android Developer with a passion for
								building innovative mobile applications that
								deliver exceptional user experiences. Currently
								working at Zypp Electric, where I develop and
								enhance mobile solutions for electric mobility.
							</p>
							<p className="text-muted-foreground mb-4">
								My expertise spans across the Android ecosystem,
								with a focus on Kotlin, Jetpack Compose, and
								Firebase. I'm also enthusiastic about web
								development, particularly React and its
								ecosystem, allowing me to create cohesive
								experiences across platforms.
							</p>
							<p className="text-muted-foreground mb-8">
								Beyond coding, I'm passionate about sharing
								knowledge, solving real-world problems through
								technology, and staying at the forefront of
								development trends. When I'm not coding, you'll
								find me exploring new technologies, contributing
								to open-source projects, or enjoying a good cup
								of coffee.
							</p>

							{/* Key facts */}
							{/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="space-y-1">
                  <p className="font-medium">Name</p>
                  <p className="text-muted-foreground">Aparimit Rathour</p>
                </div>
                <div className="space-y-1">
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">contact@aparimit.dev</p>
                </div>
                <div className="space-y-1">
                  <p className="font-medium">Location</p>
                  <p className="text-muted-foreground">Delhi NCR, India</p>
                </div>
                <div className="space-y-1">
                  <p className="font-medium">Current Role</p>
                  <p className="text-muted-foreground">Android Developer at Zypp Electric</p>
                </div>
              </div> */}

							{/* Call to action */}
							<div className="flex flex-wrap gap-4">
								<Button asChild>
									<a href="/contact">
										Contact Me{" "}
										<ArrowRight className="ml-2 h-4 w-4" />
									</a>
								</Button>
								<Button
									variant="outline"
									asChild
								>
									<a
										href="/Resume.pdf"
										download="Aparimit_Resume.pdf"
									>
										Download Resumé{" "}
										<Download className="ml-2 h-4 w-4" />
									</a>
								</Button>
								{/* <Button variant="outline" asChild>
                  <a href="https://www.linkedin.com/in/aparimit-rathour/" target="_blank" rel="noopener noreferrer">
                    LinkedIn <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
  );
};

export default About;

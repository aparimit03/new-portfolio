
import { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    const subject = encodeURIComponent(
		`${formData.subject} from ${formData.name} (${formData.email})`
	);
	const body = encodeURIComponent(formData.message);
	const mailtoLink = `mailto:aparimit2003@gmail.com?subject=${subject}&body=${body}`;
	e.preventDefault();
	setIsLoading(true);
	window.open(mailtoLink, "_blank");

    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsLoading(false);
    }, 1500);
  };

  return (
		<section
			id="contact"
			className="section-padding bg-gradient-to-b from-secondary/30 to-background"
		>
			<div className="container-custom">
				<div className="text-center max-w-3xl mx-auto mb-16">
					<div className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
						Get In Touch
					</div>
					<h2 className="mb-4">Contact Me</h2>
					<p className="text-muted-foreground">
						Have a question or want to work together? Feel free to
						reach out using the form below or through my social
						media profiles.
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					{/* Contact Information */}
					<div className="lg:col-span-1 space-y-6">
						{/* Contact Cards */}
						<Card className="p-6 flex items-start space-x-4">
							<div className="p-3 rounded-full bg-primary/10 text-primary">
								<Mail className="h-6 w-6" />
							</div>
							<div>
								<h4 className="font-medium mb-1">Email</h4>
								<a
									href="mailto:aparimit2003@gmail.com"
									className="text-muted-foreground hover:text-primary transition-colors"
								>
									aparimit2003@gmail.com
								</a>
							</div>
						</Card>

						<Card className="p-6 flex items-start space-x-4">
							<div className="p-3 rounded-full bg-primary/10 text-primary">
								<Phone className="h-6 w-6" />
							</div>
							<div>
								<h4 className="font-medium mb-1">Phone</h4>
								<p className="text-muted-foreground">
									+91 90447 42129
								</p>
							</div>
						</Card>

						<Card className="p-6 flex items-start space-x-4">
							<div className="p-3 rounded-full bg-primary/10 text-primary">
								<MapPin className="h-6 w-6" />
							</div>
							<div>
								<h4 className="font-medium mb-1">Location</h4>
								<p className="text-muted-foreground">
									Delhi NCR, India
								</p>
							</div>
						</Card>

						{/* Social Links */}
						<div className="mt-8">
							<h4 className="font-medium mb-4">My Socials</h4>
							<div className="flex space-x-4">
								<a
									href="https://github.com/aparimit03/"
									target="_blank"
									rel="noopener noreferrer"
									className="p-3 rounded-full bg-card border border-border hover:bg-secondary transition-colors"
									aria-label="GitHub"
								>
									<Github className="h-5 w-5" />
								</a>
								<a
									href="https://linkedin.com/in/aparimit03/"
									target="_blank"
									rel="noopener noreferrer"
									className="p-3 rounded-full bg-card border border-border hover:bg-secondary transition-colors"
									aria-label="LinkedIn"
								>
									<Linkedin className="h-5 w-5" />
								</a>
								<a
									href="https://x.com/aparimit03"
									target="_blank"
									rel="noopener noreferrer"
									className="p-3 rounded-full bg-card border border-border hover:bg-secondary transition-colors"
									aria-label="Twitter"
								>
									<Twitter className="h-5 w-5" />
								</a>
								<a
									href="https://leetcode.com/u/aparimit2003/"
									target="_blank"
									rel="noopener noreferrer"
									className="p-3 rounded-full bg-card border border-border hover:bg-secondary transition-colors"
									aria-label="Leetcode"
								>
									<Terminal className="h-5 w-5" />
								</a>
							</div>
						</div>
					</div>

					{/* Contact Form */}
					<div className="lg:col-span-2">
						<Card className="p-6">
							<form
								onSubmit={handleSubmit}
								className="space-y-6"
							>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									<div className="space-y-2">
										<Label htmlFor="name">
											Name{" "}
											<span className="text-destructive">
												*
											</span>
										</Label>
										<Input
											id="name"
											name="name"
											placeholder="Your name"
											value={formData.name}
											onChange={handleChange}
											required
										/>
									</div>
									<div className="space-y-2">
										<Label htmlFor="email">
											Email{" "}
											<span className="text-destructive">
												*
											</span>
										</Label>
										<Input
											id="email"
											name="email"
											type="email"
											placeholder="Your email"
											value={formData.email}
											onChange={handleChange}
											required
										/>
									</div>
								</div>
								<div className="space-y-2">
									<Label htmlFor="subject">Subject</Label>
									<Input
										id="subject"
										name="subject"
										placeholder="Subject"
										value={formData.subject}
										onChange={handleChange}
									/>
								</div>
								<div className="space-y-2">
									<Label htmlFor="message">
										Message{" "}
										<span className="text-destructive">
											*
										</span>
									</Label>
									<Textarea
										id="message"
										name="message"
										placeholder="Your message"
										rows={6}
										value={formData.message}
										onChange={handleChange}
										required
									/>
								</div>
								<Button
									type="submit"
									className="w-full"
									disabled={isLoading}
								>
									{isLoading ? (
										<>Sending...</>
									) : (
										<>
											Send Message{" "}
											<Send className="ml-2 h-4 w-4" />
										</>
									)}
								</Button>
							</form>
						</Card>
					</div>
				</div>
			</div>
		</section>
  );
};

export default Contact;

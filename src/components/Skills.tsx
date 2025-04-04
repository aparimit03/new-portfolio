
import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

// Define skill types and their levels
interface Skill {
  name: string;
  level: number; // 1-5 where 5 is expert
  description: string;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
  icon: string;
}

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const skillCategories: SkillCategory[] = [
		{
			name: "Mobile Development",
			icon: "📱",
			skills: [
				{
					name: "Kotlin",
					level: 5,
					description: "Primary language for Android development",
				},
				{
					name: "Jetpack Compose",
					level: 4,
					description: "Modern toolkit for building native UI",
				},
				{
					name: "Android SDK",
					level: 4,
					description: "Core Android development",
				},
				{
					name: "Firebase",
					level: 4,
					description: "Backend services & analytics",
				},
				// { name: "MVVM Architecture", level: 4, description: "App architecture pattern" },
				{ name: "Retrofit", level: 4, description: "REST API client" },
				{
					name: "Room Database",
					level: 4,
					description: "Local data persistence",
				},
			],
		},
		{
			name: "Web Development",
			icon: "💻",
			skills: [
				{
					name: "React",
					level: 1,
					description: "UI library for web applications",
				},
				// { name: "Next.js", level: 2, description: "React framework for production" },
				{
					name: "Tailwind CSS",
					level: 2,
					description: "Utility-first CSS framework",
				},
				{
					name: "JavaScript",
					level: 4,
					description: "Web programming language",
				},
				{
					name: "TypeScript",
					level: 3,
					description: "Typed JavaScript",
				},
				{
					name: "HTML5/CSS3",
					level: 4,
					description: "Web markup & styling",
				},
			],
		},
		{
			name: "Backend",
			icon: "⚙️",
			skills: [
				{
					name: "Node.js",
					level: 3,
					description: "JavaScript runtime",
				},
				{
					name: "Express",
					level: 3,
					description: "Web application framework",
				},
				{ name: "MongoDB", level: 3, description: "NoSQL database" },
				{
					name: "RESTful APIs",
					level: 4,
					description: "API design & development",
				},
				{
					name: "Firebase",
					level: 4,
					description: "Backend-as-a-Service",
				},
			],
		},
		{
			name: "Tools & Others",
			icon: "🔧",
			skills: [
				{ name: "Git", level: 4, description: "Version control" },
				{
					name: "GitHub",
					level: 4,
					description: "Code repository & collaboration",
				},
				{
					name: "Agile/Scrum",
					level: 3,
					description: "Development methodology",
				},
				{ name: "Jira", level: 3, description: "Project management" },
				{
					name: "Figma",
					level: 3,
					description: "Design & prototyping",
				},
				// { name: "CI/CD", level: 3, description: "Continuous integration/deployment" },
			],
		},
  ];

  // Handle skill category selection
  const handleCategorySelect = (categoryName: string) => {
    setSelectedCategory(categoryName === selectedCategory ? null : categoryName);
  };

  // Get the selected category skills
  const getSelectedCategorySkills = () => {
    if (!selectedCategory) return [];
    return skillCategories.find((cat) => cat.name === selectedCategory)?.skills || [];
  };

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            My Skills
          </div>
          <h2 className="mb-4">Technical Expertise</h2>
          <p className="text-muted-foreground">
            I specialize in mobile and web development with a focus on creating performant, user-friendly applications. Here's an overview of my technical skills and competencies.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {skillCategories.map((category) => (
            <Card
              key={category.name}
              className={`skill-card cursor-pointer transition-all ${
                selectedCategory === category.name
                  ? "border-primary bg-primary/5"
                  : "hover:border-primary/50"
              }`}
              onClick={() => handleCategorySelect(category.name)}
            >
              <div className="text-3xl mb-3">{category.icon}</div>
              <h4 className="font-medium mb-1">{category.name}</h4>
              <p className="text-sm text-muted-foreground">
                {category.skills.length} skills
              </p>
            </Card>
          ))}
        </div>

        {/* Selected Skills Detail */}
        <div className="min-h-[300px]">
          {selectedCategory ? (
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-2xl font-medium mb-6">{selectedCategory}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {getSelectedCategorySkills().map((skill, index) => (
                  <div
                    key={skill.name}
                    className="p-4 rounded-lg border bg-card"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium">{skill.name}</h4>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`h-2 w-6 rounded-full mx-0.5 ${
                              i < skill.level
                                ? "bg-primary"
                                : "bg-muted"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-center text-muted-foreground py-16">
              <p className="mb-2">Select a category to view detailed skills</p>
              <p className="text-sm">Click on any skill category above</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;

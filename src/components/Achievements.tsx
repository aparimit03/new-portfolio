
import { Award, Star, Trophy, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// Define achievement interface
interface Achievement {
  id: number;
  title: string;
  description: string;
  icon: "award" | "star" | "trophy" | "trending";
  category: "competition" | "leadership" | "recognition";
}

const Achievements = () => {
  // Achievement data
  const achievements: Achievement[] = [
    {
      id: 1,
      title: "National Coding Contest Winner",
      description: "Secured 1st place in GeeksforGeeks National Coding Competition 2022 among 5000+ participants",
      icon: "trophy",
      category: "competition",
    },
    {
      id: 2,
      title: "Best Android App Award",
      description: "Received recognition for developing an innovative Android application at the University Tech Expo",
      icon: "award",
      category: "recognition",
    },
    {
      id: 3,
      title: "GeeksforGeeks ABESEC Leadership",
      description: "Led the student chapter as Vice-President, growing membership by 70% and organizing 15+ events",
      icon: "trending",
      category: "leadership",
    },
    {
      id: 4,
      title: "Harmony Fest Organizer",
      description: "Core team member for organizing the college's largest technical fest with 2000+ participants",
      icon: "star",
      category: "leadership",
    },
    {
      id: 5,
      title: "5-Star Coder on Competitive Platforms",
      description: "Achieved 5-star rating on CodeChef and Expert level on Codeforces",
      icon: "star",
      category: "competition",
    },
    {
      id: 6,
      title: "Open Source Contributor",
      description: "Active contributor to Android open source projects with 50+ accepted pull requests",
      icon: "award",
      category: "recognition",
    },
  ];

  // Get icon component based on icon type
  const getIcon = (iconType: string) => {
    switch (iconType) {
      case "award":
        return <Award className="h-6 w-6" />;
      case "star":
        return <Star className="h-6 w-6" />;
      case "trophy":
        return <Trophy className="h-6 w-6" />;
      case "trending":
        return <TrendingUp className="h-6 w-6" />;
      default:
        return <Award className="h-6 w-6" />;
    }
  };

  return (
    <section id="achievements" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Recognition
          </div>
          <h2 className="mb-4">Achievements & Awards</h2>
          <p className="text-muted-foreground">
            Highlights of my professional accomplishments, recognitions, and contributions to the tech community.
          </p>
        </div>

        {/* Achievement Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement) => (
            <Card 
              key={achievement.id} 
              className="card-hover border-l-4"
              style={{
                borderLeftColor: 
                  achievement.category === "competition" 
                    ? "hsl(var(--primary))" 
                    : achievement.category === "leadership" 
                    ? "hsl(var(--accent))" 
                    : "hsl(var(--secondary-foreground)/50)"
              }}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div 
                    className="p-3 rounded-full"
                    style={{
                      backgroundColor: 
                        achievement.category === "competition" 
                          ? "hsl(var(--primary)/10)" 
                          : achievement.category === "leadership" 
                          ? "hsl(var(--accent)/10)" 
                          : "hsl(var(--secondary-foreground)/10)",
                      color: 
                        achievement.category === "competition" 
                          ? "hsl(var(--primary))" 
                          : achievement.category === "leadership" 
                          ? "hsl(var(--accent))" 
                          : "hsl(var(--secondary-foreground))"
                    }}
                  >
                    {getIcon(achievement.icon)}
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-2">{achievement.title}</h4>
                    <p className="text-muted-foreground text-sm">{achievement.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;

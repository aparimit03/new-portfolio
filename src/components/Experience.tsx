
import { Card } from "@/components/ui/card";
import { CalendarIcon, Building2, Briefcase } from "lucide-react";

// Define experience interface
interface Experience {
  id: number;
  role: string;
  company: string;
  duration: string;
  date: string;
  description: string[];
  logo: string;
}

const Experience = () => {
  // Experience data
  const experiences: Experience[] = [
    {
      id: 1,
      role: "Android Developer",
      company: "Zypp Electric",
      duration: "1.5 years",
      date: "Jan 2023 - Present",
      description: [
        "Led the development of driver-side Android application using Kotlin and Jetpack Compose",
        "Implemented real-time tracking, push notifications, and payment integration features",
        "Reduced app crash rate by 60% through optimized performance and memory management",
        "Collaborated with design and backend teams to deliver seamless user experience"
      ],
      logo: "/placeholder.svg"
    },
    {
      id: 2,
      role: "Android Development Intern",
      company: "GeeksforGeeks",
      duration: "6 months",
      date: "Jun 2022 - Dec 2022",
      description: [
        "Developed and maintained features for the GeeksforGeeks Android application",
        "Created custom UI components and implemented responsive layouts",
        "Worked on integrating REST APIs and local data persistence using Room",
        "Participated in code reviews and testing to ensure app quality"
      ],
      logo: "/placeholder.svg"
    },
    {
      id: 3,
      role: "Vice-President",
      company: "GeeksforGeeks ABESEC",
      duration: "1 year",
      date: "Aug 2021 - Jul 2022",
      description: [
        "Led a team of 15 students to organize technical workshops and coding competitions",
        "Conducted Android development workshops for over 200 students",
        "Managed community engagement and growth strategies",
        "Collaborated with other student chapters for joint technical events"
      ],
      logo: "/placeholder.svg"
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Work History
          </div>
          <h2 className="mb-4">Professional Experience</h2>
          <p className="text-muted-foreground">
            My professional journey and roles that have shaped my expertise in mobile and web development.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="mb-12 last:mb-0">
              <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                {/* Company Logo and Timeline */}
                <div className="md:w-1/3">
                  <div className="flex flex-row md:flex-col md:items-start items-center gap-4 md:sticky md:top-24">
                    <div className="w-16 h-16 rounded-full overflow-hidden border bg-card flex items-center justify-center">
                      {exp.logo ? (
                        <img src={exp.logo} alt={exp.company} className="w-10 h-10 object-contain" />
                      ) : (
                        <Building2 className="w-8 h-8 text-muted-foreground" />
                      )}
                    </div>
                    <div>
                      <h4 className="font-semibold">{exp.company}</h4>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <CalendarIcon className="mr-1 h-3.5 w-3.5" />
                        <span>{exp.date}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Role Details */}
                <Card className="md:w-2/3 p-6 bg-card">
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold flex items-center gap-2">
                      <Briefcase className="h-5 w-5 text-primary" />
                      {exp.role}
                    </h3>
                    <p className="text-muted-foreground">{exp.duration}</p>
                  </div>
                  <ul className="space-y-3 list-disc list-inside text-muted-foreground">
                    {exp.description.map((item, i) => (
                      <li key={i} className="pl-2">{item}</li>
                    ))}
                  </ul>
                </Card>
              </div>

              {/* Connector line for all except the last item */}
              {index < experiences.length - 1 && (
                <div className="hidden md:block h-12 w-px bg-border mx-auto my-2 opacity-50"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

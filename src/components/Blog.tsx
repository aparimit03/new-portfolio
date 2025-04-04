
import { useState } from "react";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Define blog post interface
interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
  category: "android" | "react" | "career" | "tutorial";
}

const Blog = () => {
  const [filter, setFilter] = useState<string | null>(null);

  // Blog post data
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Building Better Android UIs with Jetpack Compose",
      excerpt: "Learn how to create modern, responsive UIs with Jetpack Compose, Android's modern toolkit for building native UI.",
      date: "March 15, 2023",
      readTime: "8 min read",
      image: "/placeholder.svg",
      tags: ["Android", "Jetpack Compose", "UI"],
      category: "android",
    },
    {
      id: 2,
      title: "React Hooks: A Comprehensive Guide for Beginners",
      excerpt: "Understand the fundamentals of React Hooks and how they can simplify your component logic and state management.",
      date: "February 22, 2023",
      readTime: "10 min read",
      image: "/placeholder.svg",
      tags: ["React", "Hooks", "Web Development"],
      category: "react",
    },
    {
      id: 3,
      title: "Firebase vs. MongoDB: Choosing the Right Database",
      excerpt: "A detailed comparison of Firebase and MongoDB to help you choose the right database for your next project.",
      date: "January 8, 2023",
      readTime: "7 min read",
      image: "/placeholder.svg",
      tags: ["Firebase", "MongoDB", "Database"],
      category: "tutorial",
    },
    {
      id: 4,
      title: "Navigating Your Tech Career: Junior to Senior Developer",
      excerpt: "Strategies and skills to help you advance from a junior to senior developer role in the tech industry.",
      date: "December 12, 2022",
      readTime: "12 min read",
      image: "/placeholder.svg",
      tags: ["Career", "Professional Growth"],
      category: "career",
    },
  ];

  // Filter posts based on selected category
  const filteredPosts = filter
    ? blogPosts.filter((post) => post.category === filter)
    : blogPosts;

  // Category options for filter
  const categories = [
    { value: "android", label: "Android" },
    { value: "react", label: "React" },
    { value: "tutorial", label: "Tutorials" },
    { value: "career", label: "Career" },
  ];

  return (
    <section id="blog" className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            My Blog
          </div>
          <h2 className="mb-4">Latest Articles</h2>
          <p className="text-muted-foreground">
            Insights, tutorials, and thoughts on mobile development, web technologies, and career growth.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          <Button
            variant={filter === null ? "default" : "outline"}
            size="sm"
            className="rounded-full"
            onClick={() => setFilter(null)}
          >
            All
          </Button>
          {categories.map((category) => (
            <Button
              key={category.value}
              variant={filter === category.value ? "default" : "outline"}
              size="sm"
              className="rounded-full"
              onClick={() => setFilter(category.value)}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredPosts.map((post) => (
            <Card key={post.id} className="flex flex-col h-full overflow-hidden card-hover">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <Badge
                  variant={
                    post.category === "android" ? "default" :
                    post.category === "react" ? "secondary" :
                    post.category === "tutorial" ? "destructive" : "outline"
                  }
                >
                  {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
                </Badge>
              </div>
              <CardContent className="p-6 flex-grow">
                <div className="flex items-center text-sm text-muted-foreground mb-3 gap-4">
                  <span className="flex items-center">
                    <Calendar className="mr-1 h-3.5 w-3.5" />
                    {post.date}
                  </span>
                  <span className="flex items-center">
                    <Clock className="mr-1 h-3.5 w-3.5" />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2 line-clamp-2">{post.title}</h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {post.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button variant="ghost" className="p-0 h-auto font-medium hover:bg-transparent hover:text-primary">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="mt-12 text-center">
          <Button
            variant="outline"
            className="rounded-full"
            asChild
          >
            <a href="https://blog.aparimit.dev" target="_blank" rel="noopener noreferrer">
              View All Articles <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;

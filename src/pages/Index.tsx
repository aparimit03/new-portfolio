
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Aparimit Rathour | Android Developer & React Enthusiast</title>
        <meta name="description" content="Professional portfolio of Aparimit Rathour - Android Developer, React Enthusiast, and Tech Innovator based at Zypp Electric." />
      </Helmet>
      
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Index;

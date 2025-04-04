
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

const ProjectsPage = () => {
  return (
    <>
      <Helmet>
        <title>Projects | Aparimit Rathour</title>
        <meta name="description" content="Discover the portfolio of projects built by Aparimit Rathour, showcasing Android and React development." />
      </Helmet>
      
      <Header />
      <main>
        <Projects />
      </main>
      <Footer />
    </>
  );
};

export default ProjectsPage;

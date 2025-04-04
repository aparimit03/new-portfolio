
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

const ExperiencePage = () => {
  return (
    <>
      <Helmet>
        <title>Experience | Aparimit Rathour</title>
        <meta name="description" content="Explore the professional experience and career path of Aparimit Rathour." />
      </Helmet>
      
      <Header />
      <main>
        <Experience />
      </main>
      <Footer />
    </>
  );
};

export default ExperiencePage;

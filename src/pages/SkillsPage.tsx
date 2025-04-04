
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

const SkillsPage = () => {
  return (
    <>
      <Helmet>
        <title>Skills | Aparimit</title>
        <meta name="description" content="Explore the technical skills and expertise of Aparimit Rathour in mobile and web development." />
      </Helmet>
      
      <Header />
      <main>
        <Skills />
      </main>
    </>
  );
};

export default SkillsPage;

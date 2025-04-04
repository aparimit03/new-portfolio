
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import About from "@/components/About";
import Footer from "@/components/Footer";

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About | Aparimit Rathour</title>
        <meta name="description" content="Learn more about Aparimit Rathour - Android Developer, React Enthusiast, and Tech Innovator." />
      </Helmet>
      
      <Header />
      <main>
        <About />
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;

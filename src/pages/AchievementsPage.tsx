
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Achievements from "@/components/Achievements";
import Footer from "@/components/Footer";

const AchievementsPage = () => {
  return (
    <>
      <Helmet>
        <title>Achievements | Aparimit Rathour</title>
        <meta name="description" content="Explore the awards and achievements of Aparimit Rathour in technology and leadership." />
      </Helmet>
      
      <Header />
      <main>
        <Achievements />
      </main>
      <Footer />
    </>
  );
};

export default AchievementsPage;

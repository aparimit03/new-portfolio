
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact | Aparimit</title>
        <meta name="description" content="Get in touch with Aparimit Rathour for collaborations, projects, or inquiries." />
      </Helmet>
      
      <Header />
      <main>
        <Contact />
      </main>
    </>
  );
};

export default ContactPage;

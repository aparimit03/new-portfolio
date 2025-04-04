
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";

const BlogPage = () => {
  return (
    <>
      <Helmet>
        <title>Blog | Aparimit Rathour</title>
        <meta name="description" content="Read the latest articles and insights from Aparimit Rathour on technology and development." />
      </Helmet>
      
      <Header />
      <main>
        <Blog />
      </main>
      <Footer />
    </>
  );
};

export default BlogPage;

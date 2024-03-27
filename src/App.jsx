import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/NewsBody/MainContent";
import useNewsQuery from "./hooks/useNewsQuery";

const App = () => {
  const { articles, loading, error, fetchNews } = useNewsQuery();

  const handleCategoryClick = (category) => {
    fetchNews(category);
  };

  return (
    <main>
      <Header onCategoryClick={handleCategoryClick} />
      {loading && <p className="text-xl text-center text-purple-600">Loading...</p>}
      {error && <p className="text-xl text-red-600 text-center">Error: {error.message}</p>}
      <section>
        <MainContent articles={articles} />
      </section>
      <Footer />
    </main>
  );
};

export default App;

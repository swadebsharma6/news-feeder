import { useContext } from "react";
import { AuthContext } from "./Context/AuthProvider";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/NewsBody/MainContent";
import SearchNews from "./components/SearchNews/SearchNews";
import useNewsQuery from "./hooks/useNewsQuery";

const App = () => {
  const { articles, loading, error, fetchNews } = useNewsQuery();
  const {searchResult, } = useContext(AuthContext);

  const handleCategoryClick = (category) => {
    fetchNews(category);
  };

  return (
    <main>
      <Header onCategoryClick={handleCategoryClick} />
      {loading && <p className="text-xl text-center text-purple-600">Loading...</p>}
      {error && <p className="text-xl text-red-600 text-center">Error: {error.message}</p>}
      <section>
        <div className="max-w-6xl mx-auto">
        {
        
          searchResult.map((searchNews, idx) => <SearchNews
            key={idx}
            searchNews={searchNews}
            ></SearchNews>)
        
       }
        </div>
        <MainContent searchResult={searchResult} articles={articles} />
      </section>
      <Footer />
    </main>
  );
};

export default App;

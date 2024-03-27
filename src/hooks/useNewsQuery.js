import { useEffect, useState } from "react";

const API_BASE_URL = 'http://localhost:8000/v2/top-headlines';

const useNewsQuery = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  

  const fetchNews = async (category = '') => {
    setLoading(true);
    setError(null);

    try {
      const url = category ? `${API_BASE_URL}?category=${category}` : API_BASE_URL;
      const response = await fetch(url);
      const data = await response.json();
      setArticles(data.articles);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return { articles, loading, error, fetchNews };
};

export default useNewsQuery;

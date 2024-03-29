import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {

 const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
//   console.log(searchResult)


  const handleSearch = async () => {
      if (searchTerm.trim() === '') {
          alert('Please enter a search term');
          return;
      }

      setLoading(true);

      try {
          const response = await fetch(`http://localhost:8000/v2/search?q=${searchTerm}`);
          const data = await response.json();
          setSearchResults(data.result);
        
      } catch (error) {
          console.error('Error fetching data:', error);
          setSearchResults([]);
          
      }

      setLoading(false);
  };



    const authInfo = {
        handleSearch,
        loading,
        setSearchResults,
        searchResult,
        setSearchTerm,

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
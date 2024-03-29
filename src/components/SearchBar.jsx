import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import searchLogo from "../assets/icons/search.svg";

const SearchBar = () => {
 const {searchTerm, setSearchTerm, handleSearch, loading} = useContext(AuthContext);


  return (
    <div className="max-w-md mx-auto rounded-md p-6 mb-10">
      <div className="relative">
        <input
          type="text"
          id="inputField"
          name="inputField"
          value={searchTerm}
          onChange={(e)=> setSearchTerm(e.target.value)}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Search By Student"
          required
        />
        <button
        onClick={handleSearch}
        disabled={loading}
          className="absolute right-0 top-0  px-4 py-2 rounded-md  focus:outline-none"
        >
          <img src={searchLogo} alt="" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;

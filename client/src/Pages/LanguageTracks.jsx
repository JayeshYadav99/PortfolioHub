import { useState, useEffect } from "react";
import "./LanguageTracks.css";
import LanguageCards from "./LanguageCards";
import data from "./data.jsx";

function App() {
  const categories = data.categories;
  const programmingData = data.programmingLanguages;
  const [search, setSearch] = useState("");
  const [bookData, setData] = useState(programmingData);

  function generateRandomKey() {
    return Math.floor(Math.random() * 100000);
  }

  function fetchData() {
    const filteredData = programmingData.filter((language) =>
      language.name.toLowerCase().startsWith(search.toLowerCase())
    );
    setData(filteredData);
  }

  function handleClick() {
    fetchData();
  }

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      fetchData();
    }
  }

  return (
    <div>
      <div>
        <input
          id="default-search"
          className="inputBar"
          placeholder="Search Books"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button type="button" className="searchBtn" onClick={handleClick}>
          Search
        </button>
      </div>
      <div className="card-grid">
        {bookData.map((data) => (
          <LanguageCards key={generateRandomKey()} singleData={data} />
        ))}
      </div>
    </div>
  );
}

export default App;

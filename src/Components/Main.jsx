import { useState } from "react";
import Input from "./Input";
import Output from "./Output";
import Header from "./Header";

const Main = () => {
  const [fontFamily, setFontFamily] = useState("Arial");
  const [userInput, setUserInput] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  //Update state based on Header child
  const handleFontChange = (newFont) => {
    setFontFamily(newFont);
  };

  //Update state based on Input child
  const handleInput = (newWord) => {
    setUserInput(newWord);
  };

const handleSearch = async () => {
  try {
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${userInput}`
    );

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error("No results found for this word. Please try again.");
      } else {
        throw new Error("Something went wrong. Please try again.");
      }
    }

    const data = await response.json();
    setResults(data);
  } catch (err) {
    setResults([]);
    setError(err.message);
  }
};

  return (
    <main style={{ fontFamily }}>
      <Header change={handleFontChange} />
      <Input change={handleInput} search={handleSearch} />
      <Output results={results} error={error}/>
    </main>
  );
};

export default Main;

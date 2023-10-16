import { useState, useEffect } from "react";
import Input from "./Input";
import Output from "./Output";
import Header from "./Header";

const Main = () => {
  const [fontFamily, setFontFamily] = useState("Arial");
  const [userInput, setUserInput] = useState("");
  const [results, setResults] = useState([]);

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
      const data = await (
        await fetch(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${userInput}`
        )
      ).json();
      setResults(data);
    } catch (err) {
      console.log(err.message);
      //   setResults(data);
    }
  };

  return (
    <main style={{ fontFamily }}>
      <Header change={handleFontChange} />
      <Input change={handleInput} search={handleSearch} />
      <Output results={results} />
    </main>
  );
};

export default Main;

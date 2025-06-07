import { useState, useEffect } from "react";

const Input = ({ change, search }) => {
  const [word, setWord] = useState("");
  const [data, setData] = useState(null);

  const handleUserInput = (e) => {
    setWord(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    search();
  }

  useEffect(() => {
    change(word);
  }, [word]);

  return (
    <div className="input-icon">
      <i className="fa-solid fa-magnifying-glass" onClick={search}></i>
      <form onSubmit={handleFormSubmit}>
        <input
          className="input-field"
          type="text"
          value={word ? word : ""}
          onChange={handleUserInput}
        />
      </form>
    </div>
  );
};

export default Input;
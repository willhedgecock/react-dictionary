import { useState, useEffect } from "react";

const Input = ({ change, search }) => {
  const [word, setWord] = useState("");
  const [data, setData] = useState(null);

  const handleUserInput = (e) => {
    setWord(e.target.value);
    console.log(change, e, word);
  };

  useEffect(() => {
    change(word);
  }, [word]);

  return (
    <div className="input-icon">
      <i className="fa-solid fa-magnifying-glass" onClick={search}></i>
      <input
        className="input-field"
        type="text"
        value={word ? word : ""}
        onChange={handleUserInput}
      />
    </div>
  );
};

export default Input;

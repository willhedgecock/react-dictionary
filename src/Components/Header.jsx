import { useState } from "react";

const Header = ({change}) => {

  const fonts = [
    {arial: "Arial"},
    {timesNewRoman: "Times New Roman"},
    {courierNew: "Courier New"},
    {poppins: "Poppins"}
  ]

  const [fontFamily, setFontFamily] = useState('');

  const handleFontChange = (e) => {
    let value = e.target.value;
    setFontFamily(value);
    change(value);
  };

  return (
    <div className="top-bar">
      <div>
        <i className="fa-solid fa-book"></i>
        <h1>Dictionary App</h1>
      </div>
      <div className="interactive-options">
        <select onChange={handleFontChange}>
          {fonts.map((font, index) => {
            const key = Object.keys(font)[0];
            const value = Object.values(font)[0];
            return (
              <option key={index} value={value}>
                {value}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default Header;
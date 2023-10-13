import { useState, useEffect } from "react";
import Input from "./Input";
import Header from "./Header";

const Main = () => {

    const [fontFamily, setFontFamily] = useState('Arial');
    const [userInput, setUserInput] = useState('');

    //Update state based on Header child
    const handleFontChange = (newFont) => {
        setFontFamily(newFont)
    }

    //Update state based on Input child
    const handleInput = (newWord) => {
        setUserInput(newWord);
    }

    return (
        <main style={{fontFamily}}>
            <Header change = {handleFontChange} />
            <Input change = {handleInput} />
        </main>
    )
}

export default Main;
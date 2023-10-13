import { useState } from "react";

const Input = ({change}) => {

    const [word, setWord] = useState('');
    const [data, setData] = useState(null);

    const handleUserInput = (e) => {
        setWord(e.target.value);
        change(word);
    }

    const handleSearch = async () => {
        try {
            const data = await (await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)).json();
            setData(data);
            console.log(data);
        } catch (err) {
            console.log(err.message);
        }
    }

    return (
            <div className="input-icon">
                <i className="fa-solid fa-magnifying-glass"
                    onClick={handleSearch}
                ></i>
                <input className="input-field" type="text" value={word ? word : ''}
                    onChange={handleUserInput}
                />
            </div>
    )
}

export default Input;
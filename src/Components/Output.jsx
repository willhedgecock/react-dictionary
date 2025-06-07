const Output = ({ results, error }) => {
  if (results.length) {
    return (
      <div className="results-container">
        {results.map(({ word, meanings }, index) => (
          <div className="individual-definition" key={index}>
            <h2 className="queried-word">{word}</h2>
            {meanings.map((meaning, i) => (
              <div key={i} className="inner-definition">
                <h3 className="part-of-speech">as {meaning.partOfSpeech}</h3>
                <ul>
                  {meaning.definitions.map((def, j) => (
                    <li key={j}>{def.definition}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  } else {
    return <div className="error-message">{error}</div>;
  }
};

export default Output;
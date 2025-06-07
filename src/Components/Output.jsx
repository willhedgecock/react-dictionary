const Output = ({ results, error }) => {
  if (results.length) {
    return (
      <div className="results-container">
        {results.map(({ word, meanings }, index) => (
          <div className="individual-definition" key={index}>
            <h2>
              {word} (as {meanings[0].partOfSpeech})
            </h2>
            <ul>
              {meanings.map((meaning, i) =>
                meaning.definitions.map((def, j) => (
                  <li key={`${i}-${j}`}>{def.definition}</li>
                ))
              )}
            </ul>
          </div>
        ))}
      </div>
    );
} else {
  return (
    <div className="error-message">{error}</div>
  );
}};

export default Output;
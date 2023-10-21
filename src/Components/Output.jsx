export const Output = ({ results }) => {
  if (results.length) {
    return (
      <div>
        <ul>
          {results.map(({ word, meanings }, index) => (
            <li key={index}>
              <h2>
                {word} ({meanings.length})
              </h2>
              {meanings.map(({ definitions }) => (
                <p>
                  {definitions.map(({ definition }) => (
                    <p> {definition}</p>
                  ))}
                </p>
              ))}
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

export default Output;

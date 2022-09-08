export default function Country({ selectedCountry, setSelectedCountry }) {
  if (selectedCountry === {}) {
    return <h3>Please, type a country name in the search box</h3>;
  } else {
    return (
      <>
        <div style={{ display: "flex" }}>
          <h1 style={{ marginRight: "2rem" }}>{selectedCountry.name.common}</h1>
          <button
            title="Reset selection"
            style={{
              cursor: "pointer",
              fontFamily: "sans-serif",
              height: "2rem",
              alignSelf: "center",
            }}
            onClick={() => setSelectedCountry("")}
          >
            Close
          </button>
        </div>
        <h3>Capital:</h3>
        <p>{selectedCountry.capital[0]}</p>
        <h3>Area:</h3>
        <p>{selectedCountry.area}</p>
        <h3>Languages:</h3>
        <ul>
          {Object.keys(selectedCountry.languages).map((key, index) => {
            return <li key={index}>{selectedCountry.languages[key]}</li>;
          })}
        </ul>
        <img
          src={selectedCountry.flags.png}
          alt={`Flag of ${selectedCountry.name.common}`}
          title={`Flag of ${selectedCountry.name.common}`}
        />
      </>
    );
  }
}

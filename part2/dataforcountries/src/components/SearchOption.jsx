export default function SearchOption({
  country,
  setSelectedCountry,
  handleWeather,
}) {
  return (
    <div style={{ display: "flex" }}>
      <h2 style={{ marginLeft: "1erm", marginRight: "1rem" }}>
        {country.name.common}
      </h2>
      <button
        onClick={() => {
          setSelectedCountry(country);
          handleWeather(country.capital[0]);
        }}
        style={{ height: "2rem", alignSelf: "center", cursor: "pointer" }}
      >
        Select
      </button>
    </div>
  );
}

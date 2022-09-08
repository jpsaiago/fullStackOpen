export default function Weather({ countryCapital, weatherData }) {
  if (weatherData) {
    return (
      <>
        <h1>Weather in {countryCapital}</h1>
        <h3>Temperature: {weatherData.main.temp} Celsius</h3>
        <img
          src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
          alt=""
        />
      </>
    );
  }
  return <></>;
}

const apiKey = ''; // Reemplaza con tu API Key de OpenWeatherMap
const ciudad = ''; // Aca tu ciudad segun la api

const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(ciudad)}&appid=${apiKey}`;

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('No se pudo obtener el clima de la ciudad.');
    }
    return response.json();
  })
  .then(data => {
    // Temperatura en Kelvin
    const tempK = data.main.temp;
    // Conversión a Celsius
    const tempC = tempK - 273.15;
    const humedad = data.main.humidity;
    const descripcion = data.weather[0].description;

    console.log(`Temperatura actual: ${tempC.toFixed(2)} °C`);
    console.log(`Humedad: ${humedad}%`);
    console.log(`Descripción del clima: ${descripcion}`);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });
  
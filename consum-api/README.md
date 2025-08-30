# Parte 1: Consumiendo APIs Externas (Cliente)

## Ejercicio 1: El Traductor de Star Wars

🪐 **Objetivo:** Practicar una petición GET a una API divertida y poco convencional.

- Investiga la "Fun Translations API" y encuentra el endpoint para traducir texto al idioma de Yoda.
- Haz una petición POST (¡sí, POST!) a la API con un texto simple en inglés (ej: "You must learn the ways of the force").
- La API requiere que el texto a traducir se envíe en el cuerpo (body) de la petición. Investiga cómo agregar un body a una petición fetch.
- Imprime en la consola la traducción que recibes en la respuesta.

## Ejercicio 2: ¿Qué tiempo hace?

🌦️ **Objetivo:** Utilizar una API que requiere una clave (API Key), un concepto fundamental en el mundo real, busca la forma de generar tu propia API y cómo usarla, van a tener que investigar en la documentación.

- Regístrate en OpenWeatherMap (openweathermap.org) y obtén una API Key gratuita.
- Lee su documentación para encontrar el endpoint del "Current weather data".
- Realiza una petición GET para obtener el clima actual de tu ciudad, pasando tu API Key como un parámetro de búsqueda (query param) en la URL.
- Imprime en la consola la temperatura actual (viene en Kelvin, ¡investiga cómo convertirla a Celsius!), la humedad y la descripción del clima (ej: "cielo despejado").

## Ejercicio 3: Manejador de errores Pokémon

🚫 **Objetivo:** Aprender a manejar respuestas de error de una API, este clavo ya lo discutimos en clase.

- Reutiliza el código del ejercicio de la PokéAPI de la clase.
- Modifícalo para que intente buscar un Pokémon que no existe (ej: pikachuuuu).
- La API devolverá un error (código de estado 404 Not Found). Usa un bloque .catch() en tu fetch o revisa la propiedad response.ok para detectar el error.
- En lugar de que tu programa falle, debe imprimir un mensaje amigable en la consola, como: "Error: No se encontró el Pokémon
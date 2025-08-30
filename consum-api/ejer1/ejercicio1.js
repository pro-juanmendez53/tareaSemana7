//API DE STAR WARS

// Usar fetch para traducir texto al idioma Yoda
const url = 'https://api.funtranslations.com/translate/yoda.json';
const texto = 'Failure is the best teacher';

async function traducirYoda(texto) {
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `text=${encodeURIComponent(texto)}`
  });

  const data = await response.json();
  // Imprime la traducción recibida
  console.log(data.contents.translated);
}

traducirYoda(texto);

//PRUEBA ERROR
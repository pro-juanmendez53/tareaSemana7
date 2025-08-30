// obtener el nombre del pokemon desde los argumentos de la linea de comando
const nombrePokemon = process.argv[2];

if (!nombrePokemon) {
  console.error('Por favor, ingresa el nombre de un Pokémon como argumento.');
  console.error('Ejemplo: node ejercicio3.js pikachu');
  process.exit(1);
}

// hacer la peticion a la API de pokeapi
fetch('https://pokeapi.co/api/v2/pokemon/' + nombrePokemon)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Pokémon "${nombrePokemon}" no encontrado. Verifica el nombre e intenta de nuevo.`);
    }
    return response.json();
  })
  .then(data => {
    console.log('Nombre:', data.name);
    console.log('Número de Pokédex:', data.id);
    console.log('Peso:', data.weight);
    console.log('Altura:', data.height);
    // Obtener los nombres de los tipos
    const tipos = data.types.map(tipo => tipo.type.name);
    console.log('Tipos:', tipos.join(', '));
  })
  .catch(error => {
    console.error('Error:', error.message);
  });
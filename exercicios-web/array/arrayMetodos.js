const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'];
pilotos.pop(); // Massa quebrou o carro!
console.log(pilotos);

pilotos.push('Verstappen');
console.log(pilotos);

pilotos.shift(); // Remove o primeiro!
console.log(pilotos);

pilotos.unshift('Hamilton');
console.log(pilotos);

// Splice pode adicionar e remover elementos.

// Adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa');
console.log(pilotos);

// Remover
pilotos.splice(3, 1); // Massa quebrou :(
console.log(pilotos);

const algunsPilotos1 = pilotos.slice(2); // Novo array.
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(1, 4);
console.log(algunsPilotos2);
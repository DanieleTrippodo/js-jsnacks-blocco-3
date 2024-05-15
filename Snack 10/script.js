// Creiamo i nostri due array con un numero diverso di elementi
let Array1 = [1, 2, 3];
let Array2 = [4, 5, 6, 7, 8, 9];
console.log('Valore iniziale:', Array1);





// Controlliamo quale dei due array sia il più corto e aggiungiamo elementi all'array più corto finché non ha lo stesso numero di elementi dell'altro array
while (Array1.length < Array2.length) { // se Array1 ha meno elementi di Array2
    Array1.push(Math.floor(Math.random() * 10)); // aggiungiamo un numero casuale ad Array1
}

while (Array2.length < Array1.length) { // se Array2 ha meno elementi di Array1
    Array2.push(Math.floor(Math.random() * 10)); // aggiungiamo un numero casuale ad Array2
}




console.log('Array1:', Array1);
console.log('Array2:', Array2);

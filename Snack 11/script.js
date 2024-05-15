// Creiamo il nostro Array
let Numeri = [];

// determinerà la somma dei valori dentro l'arrya
let somma = 0;





// continuiamo a chiedere all'utente di inserire un valore finchè la somma degli elementi da lui inseriti non raggiunge il 50
while (somma < 50) {
    let numeroUtente = parseInt(prompt("Inserisci un numero:")); // Chiediamo all'utente di inserire un numero
    Numeri.push(Numeri); // Aggiungiamo il numero all'array
    somma += numeroUtente; // Aggiorniamo la somma degli elementi
}



// risultati
console.log('il numero finale è:', Numeri);
console.log('la somma dei tuoi valori è:', somma);
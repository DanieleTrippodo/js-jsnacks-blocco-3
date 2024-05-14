// # Sezione Array dell'utente
/* l'utente scrive una stringa che viene trasformata in number dal programma */
const NumeroElementi = Number.parseInt(prompt('Inserisci un numero'));

let ArrayUtente = [];


/* utente decide quanti numeri inserire dentro la sua array e quali */
for(let i=0; i < NumeroElementi; i++){
    let elementi = prompt('inserisci l elemento'+ (i + 1) );
    ArrayUtente.push(elementi)
}

/* per verificare se tutto funziona */
console.log(ArrayUtente);








// # Sezione Array del Computer
const NumeroElementiRandom = Math.floor( Math.random() * 10); 

let ArrayRandom = [];


for(let i=0; i < NumeroElementiRandom; i++){
    let elementiRandom = Math.floor( Math.random() * 10);
    ArrayRandom.push(elementiRandom)
}

console.log(ArrayRandom);
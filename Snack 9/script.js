// Array vuota dell'utente
let ArrayNumeroUtente = [];


// Finchè l'array non ha 6 numeri
while(ArrayNumeroUtente < 6) {
    let numero = parseInt(prompt('inserisci un numero:'));


    // verifichiamo se il numero è dispari
    if (numero % 2 !== 0){
        ArrayNumeroUtente.push(numero);
    }
}

// Stampiamo il risultato della Array finale
console.log('Array Finale:', ArrayNumeroUtente);
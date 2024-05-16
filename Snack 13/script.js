// Chiediamo all'utente di inserire un numero
let NumeroUtente = Number.parseInt(prompt('Inserisci un numero'));

// chiediamo alla funzione invertiCifre e salviamo il risultato
let NumeroInvertito = invertiCifre(NumeroUtente);

// chiediamo il risultato della funzione, ovvero il numero invertito
console.log("Numero invertito:", NumeroInvertito);





// # Sezione Funzione
function invertiCifre(numero) {
    // Converto il numero in una stringa per modificarlo
    let numeroStringa = numero.toString();

    // creiamo una stringa vuota per inserire il numero invertito
    let numeroInvertito = "";




    // caratteri della stringa al contrario
    for (let i = numeroStringa.length - 1; i >= 0; i--) {
        // aggiungiamo il carattere corrente alla stringa del numero invertito
        numeroInvertito += numeroStringa[i];
    }

    // Restituisco il numero invertito
    return parseInt(numeroInvertito);
}

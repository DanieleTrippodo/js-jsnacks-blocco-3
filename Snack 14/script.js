// chiediamo all'utente quanti secondi vuole aspettare
let secondi = parseInt(prompt("Quanti secondi?"));




// controlliamo che l'utente abbia inserito un numero o un numero che sia diverso e più grande di 0
if (isNaN(secondi) || secondi <= 0) {
    document.getElementById("timer").textContent = "Per favore, inserisci un numero valido di secondi.";
} else {
    // Funzione che aggiorna i secondi del timer
    function aggiornaTimer() {
        document.getElementById("timer").textContent = `Tempo rimanente: ${secondi} secondi`;
        secondi--;
        
        // quando i secondi "superano" il valore 0, allora il timer si ferma
        if (secondi < 0) {
            clearInterval(intervalId);
            document.getElementById("timer").textContent = "Il tempo è scaduto";
        }
    }





    // aggiornamento timer
    aggiornaTimer();

    // per aggiornare il timer ogni secondo
    let intervalId = setInterval(aggiornaTimer, 1000);
}

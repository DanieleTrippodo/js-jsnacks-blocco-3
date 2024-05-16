// dammi due parole
const Parola1 = prompt('Scrivi quello che vuoi:');
const Parola2 = prompt('Scrivi per la seconda volta, quello che vuoi:');


// eseguiamo la nostra funzione
ConfrontaLunghezzaParole(Parola1, Parola2);







// # SEZIONE DELLA FUNZIONE
function ConfrontaLunghezzaParole(Parola1, Parola2) {
    if (Parola1.length === Parola2.length) {
        console.log("Le due parole hanno la stessa lunghezza:", Parola1, Parola2);
    } else {
        if (Parola1.length > Parola2.length) {
            console.log("La parola più lunga è:", Parola1);
        } else {
            console.log("La parola più lunga è:", Parola2);
        }
    }
}
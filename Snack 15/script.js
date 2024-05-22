// creazione del nostro oggetto "Palla"
let Palla = {
    peso: 0,
    setPeso: function(nuovoPeso) {
        this.peso = nuovoPeso;
        console.log(`Il nuovo peso della palla è: ${this.peso}`);
    }
};


// Esegui la funzione per modificare il peso della palla
modificaPesoPalla();






//# Sezione Funzioni
// Funzione per chiedere all'utente di modificare il peso della palla
function modificaPesoPalla() {
    let nuovoPeso = prompt("Inserisci il nuovo peso della palla:");

    nuovoPeso = parseFloat(nuovoPeso); 
    console.log(nuovoPeso);
}
/* Frigo con dentro tutti gli ingredienti che abbiamo */
let Frigo = ['banana', 'mela','pera','ciliega','arancia','mandarino','cocomero','limone','fragola'];

/* nel tavolo c'è una pesca che dobbiamo mettere dentro il frigo */
const Tavolo = 'pesca';


/* mettiamo la pesca dentro il frigo */
Frigo.push(Tavolo);


// impostiamo il valore trovato di default a false
let trovato = false;


// controlliamo se in ogni elemento della Array Frigo, è presente il cocomero con un ciclo FOR
for (let i=0; i < Frigo.length; i++){

    // se trova il cocomero allora imposta il valore Trovata su True
    if(Frigo[i] === 'cocomero'){
        trovata = true;
    }
}



if(trovata = true){
    console.log('Trovato! Devo solo preparare il cocktail')
} else {
    console.log('Oh no, devo uscire a comprare il cocomero!')
}


// // # Metodo più facile, ma che non possiamo usare!
// /* verifichiamo se dentro al frigo abbiamo "cocomero"  */
// if(Frigo.includes('cocomero')){
//     console.log('Trovato! Devo solo preparare il cocktail')
// } else{
//     console.log('Oh no, devo uscire a comprare il cocomero!')
// }
// // # ---------------------------------------------




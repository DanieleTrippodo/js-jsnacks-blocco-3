/* Frigo con dentro tutti gli ingredienti che abbiamo */
let Frigo = ['banana', 'mela','pera','ciliega','arancia','mandarino','cocomero','limone','fragola'];

/* nel tavolo c'è una pesca che dobbiamo mettere dentro il frigo */
const Tavolo = 'pesca';


/* mettiamo la pesca dentro il frigo */
Frigo.push(Tavolo);




/* verifichiamo se dentro al frigo abbiamo "cocomero"  */
if(Frigo.includes('cocomero')){
    console.log('Trovato! Devo solo preparare il cocktail')
} else{
    console.log('Oh no, devo uscire a comprare il cocomero!')
}
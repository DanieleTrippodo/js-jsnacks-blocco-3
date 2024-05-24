// Array con tutte le zucchine
const zucchine = [
    { varieta: 'Zucchina 1', peso: 150, lunghezza: 7 },
    { varieta: 'Zucchina 2', peso: 130, lunghezza: 9 },
    { varieta: 'Zucchina 3', peso: 170, lunghezza: 8 },
    { varieta: 'Zucchina 4', peso: 100, lunghezza: 6 },
    { varieta: 'Zucchina 5', peso: 180, lunghezza: 12 },
    { varieta: 'Zucchina 6', peso: 200, lunghezza: 14 },
    { varieta: 'Zucchina 7', peso: 110, lunghezza: 5 },
    { varieta: 'Zucchina 8', peso: 140, lunghezza: 10 },
    { varieta: 'Zucchina 9', peso: 90, lunghezza: 4 },
    { varieta: 'Zucchina 10', peso: 190, lunghezza: 11 }
];



// Calcoliamo il peso totale di tutte le zucchine
const pesoTotale = zucchine.reduce((total, { peso }) => total + peso, 0);
console.log(`Peso totale di tutte le zucchine: ${pesoTotale} grammi`);



// # Dividiamo tutte le zucchine in due array separate in base alla loro lunghezza ---------------
const [zucchineCorte, zucchineLunghe] = zucchine.reduce(([corte, lunghe], zucchina) => {
    return zucchina.lunghezza < 8 ? [[...corte, zucchina], lunghe] : [corte, [...lunghe, zucchina]];
}, [[], []]);

//! Verifica -------------------------------------------------
console.log('le zucchine più lunghe sono:', zucchineLunghe);
console.log('le zucchine più corte sono:',zucchineCorte);
//! ----------------------------------------------------------
// # ----------------------------------------------------------------------------------------------



// ? calcolo dei risultati (peso totale 2 liste zucchine) ----------------------------------

// peso totale delle zucchine corte
const pesoZucchineCorte = zucchineCorte.reduce((total, { peso }) => total + peso, 0);
console.log(`Peso totale delle zucchine corte: ${pesoZucchineCorte} grammi`);




// peso totale delle zucchine lunghe
const pesoZucchineLunghe = zucchineLunghe.reduce((total, { peso }) => total + peso, 0);
console.log(`Peso totale delle zucchine lunghe: ${pesoZucchineLunghe} grammi`);

// ? calcolo dei risultati (peso totale 2 liste zucchine) -----------FINE--------------------
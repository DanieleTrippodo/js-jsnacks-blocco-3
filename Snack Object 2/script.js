
// Tutte le persone
const persone = [
    { nome: 'Mario', cognome: 'Rossi', eta: 18 },
    { nome: 'Luigi', cognome: 'mhanz', eta: 17 },
    { nome: 'Anna', cognome: 'lezzo', eta: 22 },
    { nome: 'Laura', cognome: 'Neri', eta: 16 },
    { nome: 'Paolo', cognome: 'paoletti', eta: 20 },
    { nome: 'Giorgio', cognome: 'boh', eta: 15 },
    { nome: 'Chiara', cognome: 'Volo', eta: 25 },
    { nome: 'Federico', cognome: 'Marrone', eta: 21 },
    { nome: 'Lucia', cognome: 'Rosa', eta: 19 },
    { nome: 'Marco', cognome: 'Nero', eta: 14 }
];



//nuovo array con ogni persona, nome e cognome e l'indicazione se può guidare o no
const HaLaPatente = persone.map(persona => {
    const PuoGuidare = persona.eta >= 18 ? 'può guidare' : 'non può guidare';
    return `${persona.nome} ${persona.cognome} ${PuoGuidare}`;
});




// Stampa l'array "HaLaPatente" in console
console.log(HaLaPatente);

// Tutte le Automobili
const automobili = [
    { marca: 'Toyota', modello: 'Yaris', alimentazione: 'benzina' },
    { marca: 'Ford', modello: 'Fiesta', alimentazione: 'diesel' },
    { marca: 'Volkswagen', modello: 'Golf', alimentazione: 'elettrico' },
    { marca: 'Fiat', modello: '500', alimentazione: 'benzina' },
    { marca: 'BMW', modello: 'i3', alimentazione: 'elettrico' },
    { marca: 'Audi', modello: 'A3', alimentazione: 'diesel' },
    { marca: 'Hyundai', modello: 'i20', alimentazione: 'benzina' },
    { marca: 'Kia', modello: 'Niro', alimentazione: 'gpl' },
    { marca: 'Peugeot', modello: '208', alimentazione: 'benzina' },
    { marca: 'Mercedes', modello: 'A-Class', alimentazione: 'diesel' },
    { marca: 'Opel', modello: 'Corsa', alimentazione: 'benzina' },
    { marca: 'Nissan', modello: 'Leaf', alimentazione: 'elettrico' },
    { marca: 'Renault', modello: 'Clio', alimentazione: 'gpl' },
    { marca: 'Skoda', modello: 'Fabia', alimentazione: 'metano' },
    { marca: 'Mazda', modello: '2', alimentazione: 'benzina' }
];



// Filtriamo tutte le automobili che usano alimentazione a benzina
const benzina = automobili.filter(auto => auto.alimentazione === 'benzina');


// filtriamo tutte le automobili che usano alimentazione a disel
const disel = automobili.filter(auto => auto.alimentazione === 'disel');


// filtriamo tutte le automobili che usano alimentazione gpl
const gpl = automobili.filter(auto => auto.alimentazione === 'gpl');



// stampiamo nella console i dati filtrati
console.log(benzina);
console.log(disel);
console.log(gpl);
// creiamo i nostri 2 array vuoti
let Array1 = [1,2,3];
let Array2 = [4,5,6,7,8,9];
console.log('Valore iniziale:', Array1);




// controlliamo quale dei due array sia il più corto
while (Array1.length > Array2.length){    // nel caso in cui Array1 fosse maggiore di Array2

    Array2.push(Math.floor( Math.random() * 10));
}



// controlliamo quale dei due array sia il più corto
while (Array2.length > Array1.length){    // nel caso in cui Array2 fosse maggiore di Array1

    Array1.push(Math.floor( Math.random() * 10));
}

console.log(Array1);

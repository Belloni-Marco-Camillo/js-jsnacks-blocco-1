/* let numeroScomposto = parseInt(prompt(`inserisci un numero di 4 cifre`))

const prova = numeroScomposto.split("");
console.log(prova); */

//chiedo il numero

let number = parseInt(prompt(`inserisci un numero di 4 cifre`))
    //inizializzo il mio array  
output = []
    // trasformo gli elementi del mio array in stringhe
sNumber = number.toString();



/* const sum = Math.sum(variabile1, variabile2, variabile3, variabile4)
console.log(sum); */

var var1 = sNumber[0];
console.log(var1);
var var2 = sNumber[1];
console.log(var2);
var var3 = sNumber[2];
console.log(var3);
var var4 = sNumber[3];
console.log(var4);
const result = Number(var1) + Number(var2) + Number(var3) + Number(var4);

console.log(result);
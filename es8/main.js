//chiedo il numero

let number = parseInt(prompt(`inserisci un numero di 4 cifre`))

// scompongo il mio elemento in stringhe
sNumber = number.toString();


var var1 = sNumber[0];
console.log(var1);
var var2 = sNumber[1];
console.log(var2);
var var3 = sNumber[2];
console.log(var3);
var var4 = sNumber[3];
console.log(var4);
const risultato = Number(var1) + Number(var2) + Number(var3) + Number(var4);

console.log(risultato);
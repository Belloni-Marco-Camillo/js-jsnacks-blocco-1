const numberInput = parseInt(prompt(`inserisci numero`));
let indice
indice = 0

for (i = 0; i < numberInput; i++) {
    indice++
    console.log(Math.pow(indice, 3));
}
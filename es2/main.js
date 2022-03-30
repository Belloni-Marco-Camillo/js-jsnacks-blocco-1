const primaParola = prompt(`inserisci prima parola`);
console.log(primaParola);
const numPrimaParola = primaParola.length;
console.log(numPrimaParola);
const secondaParola = prompt(`inserisci seconda parola`);
console.log(secondaParola);
const numSecondaParola = secondaParola.length;
console.log(numSecondaParola);
if (numPrimaParola > numSecondaParola) {
    document.getElementById(`risultato`).innerHTML = `la parola ${primaParola} è più lunga di ${secondaParola}`
} else if (numSecondaParola > numPrimaParola) {
    document.getElementById(`risultato`).innerHTML = `la parola ${secondaParola} è più lunga di ${primaParola}`
} else {
    document.getElementById(`risultato`).innerHTML = `la lunghezza delle parole è la stessa`
}
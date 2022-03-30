const primoNumero = prompt(`inserisci il pirmo numero`)
const secondoNumero = prompt(`inserisci secondo numero`)
console.log(primoNumero);
console.log(secondoNumero);

if (primoNumero > secondoNumero) {
    document.getElementById(`risultato`).innerHTML = `complimenti ha vinto il primo`
} else if (secondoNumero > primoNumero) {
    document.getElementById(`risultato`).innerHTML = `complimenti ha vinto il secondo`
} else {
    document.getElementById(`risultato`).innerHTML = `complimenti questo è un pareggio`
}
/* Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti. */

let count, numberSum, number_users;
numberSum = 0
count = 0

while (count < 10) {
    number_users = parseInt(prompt(`inserisci numero`))
    numberSum = numberSum + number_users
    count++
}
console.log(numberSum);
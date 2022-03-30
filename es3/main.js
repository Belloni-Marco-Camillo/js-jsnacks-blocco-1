let numberSum, number_users;
numberSum = 0


for (i = 0; i < 3; i++) {
    number_users = parseInt(prompt(`inserisci un numero`))
    numberSum = numberSum + number_users
}
console.log(numberSum);
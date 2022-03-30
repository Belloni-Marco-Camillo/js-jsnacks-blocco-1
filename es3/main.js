const numbers = [];
let numberSum = 0

for (i = 0; i < 3; i++) {
    let number = numbers.push(prompt(`inserisci un numero`))
    numberSum = numberSum + number
}
console.log(numberSum);
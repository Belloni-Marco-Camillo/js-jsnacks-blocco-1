const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(`questa è la somma ${sum}`);
const media = sum / numbers.length
console.log(`questa è la media ${media}`);
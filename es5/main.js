const dispNumb = []

for (i = 0; i < 6; i++) {
    let numInput = parseInt(prompt(`inserisci un numero`))
    if (numInput % 2 != 0) {
        const numberPush = dispNumb.push(numInput);
    }
}

console.log(dispNumb);
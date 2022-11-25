const numbers = [
    10,
    20,
    30,
    27,
    10,
    20,
    30,
    27,
    10,
    20,
    30,
    27,
    10,
    20,
    30,
    27,
]

let somma = 0;

let media = 0;

for( let i = 0; i < 10; i++){
    somma += numbers[i];
    media += (numbers[i]) / 10;
}
console.log(somma);
console.log(media);
const numbers = [
    10,
    20,
    30,
    27,
    38,
    82,
    93,
    53,
    39,
    80,
    12,
    29,
    50,
    25,
    2,
    9,
]

let somma = 0;

let media = 0;

let valoreMassimo = numbers[0];

for( let i = 0; i < 10; i++){
    somma += numbers[i];
    
    if(numbers[i] > valoreMassimo){
        valoreMassimo = numbers[i];
    }
    
}

media = somma / 10;

console.log(somma);
console.log(media);
console.log(valoreMassimo);

const numbers = [];

let userNumber;

for( let i = 0; i < 6; i++){

    userNumber =parseInt(prompt('inserisci un numero'));

    if(userNumber % 2 == 1){
        numbers.push(userNumber);    
    }
}

console.log(numbers);

const number = [];

let userNumber;

for( let i = 0; i < 6; i++){

    userNumber = prompt('inserisci un numero');

    if(userNumber % 2 == 1){
        userNumber = number;
    }
}

console.log(number);

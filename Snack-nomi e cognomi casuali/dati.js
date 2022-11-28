const names = [
    'Michela', 
    'Giuseppina', 
    'Taylor',
    'Donna', 
    'Marsha', 
    'Fabio', 
    'Roberto'
];

const lastnames = [
    'Cappelletti', 
    'Jager',
    'Porcinelli' ,
    'Buffetti', 
    'Forghieri',
    'Papagni', 
    'Marazzini'
];

const nomiRandom = [];

let randomNames = Math.floor(Math.random() * names.length);
let randomLastnames = Math.floor(Math.random() * lastnames.length);

const guest = names[randomNames] + " " + lastnames[randomLastnames];

console.log(guest);

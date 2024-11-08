/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
console.log("------es 1------");

const pets = ["dog", "cat", "hamster", "redfish"];
console.log(pets[0]);
console.log(pets[1]);
console.log(pets[2]);
console.log(pets[3]);

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
console.log("------es 2------");

const petSort = pets.sort();
console.log(petSort);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
console.log("------es 3------");

const petInverse = pets.reverse();
console.log(petInverse);

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
console.log("------es 4------");

let firstPet = pets.shift();
pets.push(firstPet);
console.log(pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
console.log("------es 5------");

const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];

for (let i = 0; i < cars.length; i++) {
  cars[i].licensePlate = "KO987JS";
}
console.log(cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
console.log("------es 6------");

cars.push({
  brand: "Lamborghini",
  model: "revuelto",
  color: "pink",
  trims: ["titanium", "st", "active"],
});
console.log(cars);

for (let i = 0; i < cars.length; i++) {
  cars[i].trims.pop();
}
console.log(cars);
/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
console.log("------es 7------");
const justTrims = [];

for (let i = 0; i < cars.length; i++) {
  justTrims.push(cars[i].trims[0]);
}
console.log(justTrims);
/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
console.log("------es 8------");

for (let i = 0; i < cars.length; i++) {
  if (cars[i].color[0] === "b") {
    console.log("Fizz");
  } else {
    console.log("Buzz");
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
console.log("------es 9------");

const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
];

let i = 0;
while (i < numericArray.length && numericArray[i] !== 66) {
  console.log(numericArray[i]);
  i++;
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
console.log("------es 10------");

const charactersArray = ["a", "r", "u", "z", "d"];
const positionsArray = [];

let gennaio = 1;
let febbraio = 2;
let marzo = 3;

for (let i = 0; i < charactersArray.length; i++) {
  let posizione;
  switch (charactersArray[i]) {
    case "a":
      posizione = 1;
      break;
    case "b":
      posizione = 2;
      break;
    case "c":
      posizione = 3;
      break;
    case "d":
      posizione = 4;
      break;
    case "e":
      posizione = 5;
      break;
    case "f":
      posizione = 6;
      break;
    case "g":
      posizione = 7;
      break;
    case "h":
      posizione = 8;
      break;
    case "i":
      posizione = 9;
      break;
    case "l":
      posizione = 10;
      break;
    case "m":
      posizione = 11;
      break;
    case "n":
      posizione = 12;
      break;
    case "o":
      posizione = 13;
      break;
    case "p":
      posizione = 14;
      break;
    case "q":
      posizione = 15;
      break;
    case "r":
      posizione = 16;
      break;
    case "s":
      posizione = 17;
      break;
    case "t":
      posizione = 18;
      break;
    case "u":
      posizione = 19;
      break;
    case "v":
      posizione = 20;
      break;
    case "z":
      posizione = 21;
      break;
    default:
      position = null;
  }
  positionsArray.push(posizione);
}
console.log(positionsArray);

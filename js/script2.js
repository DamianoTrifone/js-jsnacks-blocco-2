// Snack 2
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate inizialmente a 0.
// Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
// Infine creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

function getRandomNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

var squadre =
[
    {
        nome: "Inter",
        // puntiFatti: 0,
        // falliSubiti: 0
    },

    {
        nome: "Milan",
        // puntiFatti: 0,
        // falliSubiti: 0
    },

    {
        nome: "Juventus",
        // puntiFatti: 0,
        // falliSubiti: 0
    },

    {
        nome: "Catania",
        // puntiFatti: 0,
        // falliSubiti: 0
    },
];

// puntiFatti = getRandomNumber(20, 80);
squadre.puntiFatti = getRandomNumber(20, 80);
console.log(squadre);
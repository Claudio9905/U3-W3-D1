//  Esercitazione con domande su TypeScript
/*

1)  Quali sono i tipi primitivi principali in TypeScript?

I tipi Primitivi in TypeScript sono :
- number;
- string;
- boolean;
- undefined;
- null;
- any;
*/
// 2)  Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età, e un booleano che indica se stai studiando TypeScript.
var nome = "Claudio";
var età = 25;
var skill_TypeScript = true;
// 3) Tipizza il parametro della seguente funzione:
// const greet = (name) => {  return "Ciao " + name }
var greet = function (name) {
    return "Ciao" + name;
};
// 4) Specifica il tipo di ritorno della seguente funzione:
var sum = function (a, b) {
    return a + b;
};
// il tipo che ritorna è un numero, proprio perchè abbiamo tipizzato i parametri e quindi TS riconosce automaticamente i tipi in base al valore che noi gli abbiamo dato
console.log("Somma tra due numeri", sum(3, 5));
// 5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.
var price = function (p) {
    return (p * 100) / 22;
};
console.log("Prezzo IVA:", price(8), "€");
// 6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.
var totLenght = function (str1, str2) {
    var str3 = str1 + str2;
    return str3.length;
};
console.log("Lunghezza totale:", totLenght);
// 7) Cos'è un Type Union e come si scrive?
// Il Type Union permette di creare un collegamento tra diversi tipi al fine di rappresentare meglio la tipizzazione di alcune porzioni di codice. Ad esempio:
var myVariable = "Ciao";
myVariable = 25;
myVariable = true;
// 8) Crea una variabile che possa contenere un numero, null o undefined.
var var1;
var days1 = "lunedi";
var days2 = "martedì";
var days3 = "mercoledì";
var days4 = "giovedì";
var days5 = "venerdi";
var days6 = "sabato";
var days7 = "domenica";
// 10) Tipizza il seguente array di numeri nei due modi possibili:
// const numbers = [1, 2, 3]
var array1 = [1, 2, 3];
var array2 = [1, 2, 3];
// 11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.
var myTuple = [
    "claudio",
    "stefano",
    "antimo",
    1,
    2,
];
var studente1 = {
    nome: "Claudio",
    voto: 9,
};
var arrayStudents = [];
arrayStudents.push(studente1);
console.log(arrayStudents);
// 17) Crea un oggetto che implementi l'interfaccia Auto.
var auto1 = {
    targa: "FS846RN",
    nomeVeicolo: "Panda City Cross",
    colore: "Blu",
    marca: "Fiat",
};
fetch("https://striveschool-api.herokuapp.com/food-books")
    .then(function (response) {
    if (response.ok) {
        return response.json();
    }
    else {
        throw new Error("Errore nel recupero dati");
    }
})
    .then(function (resData) {
    console.log(resData[0].title);
})
    .catch(function (err) {
    console.log("Error:", err);
});

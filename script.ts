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

const nome: string = "Claudio";
const età: number = 25;
const skill_TypeScript: boolean = true;

// 3) Tipizza il parametro della seguente funzione:

// const greet = (name) => {  return "Ciao " + name }

const greet = (name: string) => {
  return "Ciao" + name;
};

// 4) Specifica il tipo di ritorno della seguente funzione:

const sum = (a: number, b: number) => {
  return a + b;
};
// il tipo che ritorna è un numero, proprio perchè abbiamo tipizzato i parametri e quindi TS riconosce automaticamente i tipi in base al valore che noi gli abbiamo dato

console.log("Somma tra due numeri", sum(3, 5));

// 5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.

const price = (p: number) => {
  return (p * 100) / 22;
};

console.log("Prezzo IVA:", price(8), "€");

// 6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.

const totLenght = (str1: string, str2: string) => {
  const str3: string = str1 + str2;

  return str3.length;
};

console.log("Lunghezza totale:", totLenght);

// 7) Cos'è un Type Union e come si scrive?

// Il Type Union permette di creare un collegamento tra diversi tipi al fine di rappresentare meglio la tipizzazione di alcune porzioni di codice. Ad esempio:

let myVariable: string | number | boolean = "Ciao";
myVariable = 25;
myVariable = true;

// 8) Crea una variabile che possa contenere un numero, null o undefined.

let var1: number | null | undefined;

// 9) Crea un tipo per rappresentare i giorni della settimana usando union di stringhe letterali.

type daysWeek = string;
let days1: daysWeek = "lunedi";
let days2: daysWeek = "martedì";
let days3: daysWeek = "mercoledì";
let days4: daysWeek = "giovedì";
let days5: daysWeek = "venerdi";
let days6: daysWeek = "sabato";
let days7: daysWeek = "domenica";

// 10) Tipizza il seguente array di numeri nei due modi possibili:

// const numbers = [1, 2, 3]

const array1: number[] = [1, 2, 3];
const array2: Array<number> = [1, 2, 3];

// 11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.

const myTuple: [string, string, string, number, number] = [
  "claudio",
  "stefano",
  "antimo",
  1,
  2,
];

// 12) Qual è la differenza tra type e interface?

// Allora, "Type" viene usato proprio per creare dei tipi personalizzati a cui possiamo affidare alle varibili con il nome che gli diamo, mentre le "interface" serve principalmente per modellare gli oggetti al posto del TYPE ALIAS

// 13) Definisci un'interfaccia in TypeScript per un oggetto dotato di proprietà "firstname", "lastname", e "age".

interface MyPersona {
  firstName: string;
  lastName: string;
  age: number;
}

// 14) Crea un'interfaccia per un utente con email obbligatoria e telefono opzionale.

interface utente {
  email: string;
  TelNumber: number;
}

// 15) Crea un array tipizzato di oggetti "Studente" con nome e voto.

interface studente {
  nome: string;
  voto: number;
}

const studente1: studente = {
  nome: "Claudio",
  voto: 9,
};

const arrayStudents: studente[] = [];
arrayStudents.push(studente1);
console.log(arrayStudents);

// 16) Crea un'interfaccia base "Veicolo" e estendila per creare "Auto".

interface Veicolo {
  targa: string;
  nomeVeicolo: string;
}

interface Auto extends Veicolo {
  colore: string;
  marca: string;
}

// 17) Crea un oggetto che implementi l'interfaccia Auto.

const auto1: Auto = {
  targa: "FS846RN",
  nomeVeicolo: "Panda City Cross",
  colore: "Blu",
  marca: "Fiat",
};

// 18) Cosa sono i Generics in TypeScript?

//  I Generics vengono utilizzati per per indicare un tipo che viene passato come argomento per un interfaccia rendendola più versatile

// 19) È possibile avere più tipi generici in un'interfaccia?

// Si è possibili adattare più tipi generici in un interfaccia rendendola più flessibile e riusabile in modo da adattarsi ai diversi tipi di dato

interface result<A, B, C> {}

// 20) Crea un'interfaccia generica per una risposta API.

interface Book {
  id: string;
  price: string;
  title: string;
  description: string;
  imageUrl: string;
}

fetch("https://striveschool-api.herokuapp.com/food-books")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Errore nel recupero dati");
    }
  })
  .then((resData: Book[]) => {
    console.log(resData[0].title);
  })
  .catch((err) => {
    console.log("Error:", err);
  });

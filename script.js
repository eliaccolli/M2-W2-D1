//ESERCIZI SUGLI IF: 

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

let num1 = 4;
let num2 = 12;

if(num1 > num2) {
  console.log("ESERCIZIO 1: Il primo numero inserito è il più grande")
}
else if(num1 === num2) {
  console.log("ESERCIZIO 1: I numeri inseriti sono uguali")
}
else {
    console.log("ESERCIZIO 1: Il secondo numero inserito è il più grande")
}

/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/
let num = 35;

if (num < 5) {
    console.log("ESERCIZIO 2: Tiny")
}
else if (num < 10) {
    console.log("ESERCIZIO 2: Small")
} 
else if (num < 15) {
    console.log("ESERCIZIO 2: Medium")
} 
else if (num < 20) {
    console.log("ESERCIZIO 2: Large")
} 
else {
    console.log("ESERCIZIO 2: Huge")
}

//ESERCIZI SUI CICLI: 

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/

for (let i=0; i<11; i++) {
    if (i===3 || i===8) {
        continue;
    }
    console.log ("ESERCIZIO 3: " + i);
}

/* ESERCIZIO 4
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

for (let i=0; i<16; i++) {
    if ((i % 2) === 0) {
        console.log ("ESERCIZIO 4: " + i + " è un numero pari")
    }
    else {
        console.log ("ESERCIZIO 4: " + i + " è un numero dispari")
    }
}

//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

if (num1 === 8 || num2 === 8) {
    console.log ("ESERCIZIO EX1: Uno dei due numeri inseriti è 8")
}
else if ((num1 + num2 === 8) || (num1 - num2 === 8) || (num2 - num1 === 8)) {
    console.log ("ESERCIZIO EX1: L'addizione o la sottrazione dei due numeri inseriti è 8")
}
else {
    console.log ("ESERCIZIO EX1: Spiacente! Non ci sono 8")
}

/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totalShoppingCart = 52;

if (totalShoppingCart > 50) {
    console.log("ESERCIZIO EX2: Congratulazioni! Hai diritto alla spedizione gratuita! Il totale dovuto è di " + totalShoppingCart + " €")
}
else {
    console.log("ESERCIZIO EX2: Il totale dovuto è di " + (totalShoppingCart + 10) + "  €")
}

/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/
let totalShoppingCartDiscount = ((totalShoppingCart/100)*80)

if (totalShoppingCartDiscount > 50) {
    console.log("ESERCIZIO EX3: Congratulazioni! Hai diritto alla spedizione gratuita! Il totale dovuto è di " + totalShoppingCartDiscount + " €")
}
else {
    console.log("ESERCIZIO EX3: Il totale dovuto è di " + (totalShoppingCartDiscount + 10) + "  €")
}

/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/

let gender;
let isMale = false;

isMale === true ? gender = "male" : gender = "female";
console.log("ESERCIZIO EX4: Il genere è " + gender);

/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3 (operatore modulo!), stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/

for (let i=1; i<101; i++) {
    if (i%3 === 0 && i%5 !== 0) {
        console.log ("ESERCIZIO EX5: Fizz");
    }
    else if (i%5 === 0 && i%3 !== 0) {
        console.log ("ESERCIZIO EX5: Buzz");
    }
    else if (i%3 === 0 && i%5 === 0) {
        console.log ("ESERCIZIO EX5: FizzBuzz");
    }
    else {
        console.log ("ESERCIZIO EX5: " + i);
    }
}
// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// palindromi
// chiedo all'utente una parola palindroma



// l'utente sceglie se pari o dispari
const userChoicePOD = document.querySelector('.podinput');

// l'utente inserisce un numero da 1 a 5
const userChoiceNum =document.querySelector('.numberinput');

// bottone per l'output
const podButton = document.querySelector(".podbutton");

podButton.addEventListener('click',
    function(){
        
        const podValue = userChoicePOD.value;
        const numValue = parseInt(userChoiceNum.value);

        // FUNZIONE
        const pcNum = generateRandomNumber(1,5);

        const somma= pcNum + numValue;
    
        console.log(somma);

        let risultato;

        if(somma % 2 === 0){
            risultato = 'pari';
        }else{
            risultato= 'dispari';
        }
        console.log(risultato)

        if(risultato === podValue){
            console.log('l utente ha vinto')
        }else{
            console.log('l utente ha perso')

        }
    }
    )


// sommo i numeri

// stabilisco se il  numero è pari o è dispari
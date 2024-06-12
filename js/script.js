

// palindromi
// chiedo all'utente una parola palindroma
let userChoicePal = document.querySelector('.palinput');

// bottone output
const palButton = document.querySelector(".palbutton");

// creo output
let palOutput = document.querySelector('.paloutput');
// inserisco la funzione creata su functions.js all'interno di un addevent listener
palButton.addEventListener('click',
    function(){
        let check = palindromeCheck(userChoicePal.value);
        palOutput.innerHTML= check;
        
    }
);















// l'utente sceglie se pari o dispari
const userChoicePOD = document.querySelector('.podinput');

// l'utente inserisce un numero da 1 a 5
const userChoiceNum =document.querySelector('.numberinput');

// bottone per l'output
const podButton = document.querySelector(".podbutton");


// creo output
let polOutput = document.querySelector('.podoutput');

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
            polOutput.innerHTML= 'hai vinto';
        }else{
            polOutput.innerHTML= 'hai perso';

        }
    }
    )


// sommo i numeri

// stabilisco se il  numero è pari o è dispari
  
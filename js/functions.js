// FUNZIONE PER CREAZIONE DI NUMERO RANDOM
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// FUNZIONE PER CREARE IL REVERSE DELLE STRINGHE
function reverseString(string){
    // utilizzo split per dividere i singoli caratteri in elemeni array
    let splitString = string.split("");

    // ora che ho creato l'array di caratteri uso reverse per specchiare le loro posizioni
    let reversedArray = splitString.reverse();

    // ora utilizzo join per riunire tutte le parti dell'array in una singola stringa
    let joinedArray = reversedArray.join("");

    // uso return per finalizzare la funzione
    return joinedArray;
}

// CREO UNA FUNZIONE CHE SFRUTTA reverseString PER IDENTIFICARE UN PALINDROMO
function palindromeCheck(string){

    let reversedWord = reverseString(string);

    if(string === reversedWord){
        let palindrome = 'palindrome';
        return palindrome;
    }else{
        let nonPalindrome = 'not palindrome';
        return nonPalindrome;
    }

}


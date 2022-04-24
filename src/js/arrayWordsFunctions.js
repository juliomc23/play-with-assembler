import { arrayWords } from "./words.js";


export const getWord = () => {

    const randomWord = Math.round(Math.random() * arrayWords.length);

    if (localStorage.length === 0) {
        localStorage.setItem("solution", (arrayWords[randomWord]).toUpperCase());
    }
}

export const guessWord = () => {

    let maxTries = 0;

    while (maxTries < 6) {
        let wordPrompt = prompt("Guess the word!");

        //palabra que se compara con el localStorage
        const guessedWord = wordPrompt.toUpperCase();

        //palabra que está en el localStorage
        const solution = localStorage.getItem("solution");

        //acertar la palabra
        if (guessedWord === solution) {
            console.log('You won!');
            maxTries++;
            break;
        }

        //que la palabra sea mayor de 5 letras
        if (guessedWord.length > 5) {
            console.log('This word is too long');

            //que la palabra sea menor de 5 letras
        } else if (guessedWord.length < 5) {
            console.log('This word is too short');

            //que la palabra no esté en la lista de palabras
        } else if (!arrayWords.includes(wordPrompt)) {
            console.log('This word is not in the list');

        } else if (arrayWords.includes(wordPrompt)) {
            maxTries++;
        }

        console.log(maxTries);
    }







}


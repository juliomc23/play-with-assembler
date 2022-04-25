import { arrayWords } from "./words.js";

//Global Variables

let arrayWord = [];
let maxTries = 0;

// const solutionDiv = document.querySelectorAll('[data-try]');

//Global Variables


//Functions---------------------------------------------------------------

/**
 * Getting random word
 */
const getWord = () => {

    const randomNumber = Math.round(Math.random() * arrayWords.length);

    if (localStorage.length === 0) {
        localStorage.setItem("solution", (arrayWords[randomNumber]).toUpperCase());
    }
}
getWord();

/**
 * Getting textContent from KeyValues
 */
const getValueButton = () => {

    const keyButton = document.querySelectorAll('[data-key]');

    keyButton.forEach(key => {

        key.addEventListener('click', () => {

            arrayWord.push(key.textContent);

            if (key.textContent === "┘") {
                arrayWord.pop();
                const arrayString = arrayWord.join('');
                arrayWord = [];
                guessWord(arrayString);
            }
        })

    })
}

getValueButton();


/** 
 * Guessing the word
*/
const guessWord = (word) => {

    console.log(word);

    if (maxTries < 5) {

        const guessedWord = word.toUpperCase();

        const solution = localStorage.getItem("solution");

        if (guessedWord === solution) {
            console.log('You won!');
        }

        if (guessedWord.length < 5) {
            console.log('This word is too short');
        } else if (!arrayWords.includes(word)) {
            console.log('This word is not in the list');
        } else if (arrayWords.includes(word)) {
            maxTries++;
        }
    } else {
        console.log('You lose');
        maxTries++
    }

    console.log(maxTries);

}

//Functions---------------------------------------------------------------

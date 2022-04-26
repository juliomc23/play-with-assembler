import { arrayWords } from "./words.js";

//Global Variables

let arrayWord = [];
let maxTries = 0;

const solutionDiv = document.querySelectorAll('[data-try]');
const keyButton = document.querySelectorAll('[data-key]');
const circle = document.querySelectorAll('[data-circle]');

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
let indexWord = 0;
const getValueButton = () => {

    keyButton.forEach(key => {

        key.addEventListener('click', () => {

            arrayWord.push(key.textContent);

            if (key.textContent === "┘") {
                circle[indexWord].innerHTML += "";

                arrayWord.pop();
                const arrayString = arrayWord.join('');
                arrayWord = [];
                guessWord(arrayString);

            } else if (circle[indexWord].innerText === "") {
                circle[indexWord].textContent += key.textContent;
                indexWord++;
            }

        })



    })

}

getValueButton();


/** 
 * Guessing the word
*/

let index = 0;
const guessWord = (word) => {

    console.log(word);
    const guessedWord = word.toUpperCase();

    const solution = localStorage.getItem("solution");

    if (maxTries >= 5 && guessedWord !== solution) {
        console.log('You lose');
        maxTries++;
    } else {


        if (guessedWord === solution) {
            console.log('You won!');
        }

        if (guessedWord.length < 5) {
            console.log('This word is too short');
        } else if (!arrayWords.includes(word)) {
            console.log('This word is not in the list');
        } else if (arrayWords.includes(word)) {

            if (solutionDiv[index].innerText == "") {
                solutionDiv[index].textContent = word.toUpperCase();
                index++;
            }
            maxTries++;
        }
    }

    console.log(`tries: ${maxTries}`);

}

//Functions---------------------------------------------------------------

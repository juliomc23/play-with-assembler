import { arrayWords } from "./words.js";

//Global Variables

let arrayWord = [];
let maxTries = 0;

const keyButton = document.querySelectorAll('[data-key]');
const circle = document.querySelectorAll('[data-circle]');

const sendValues = document.querySelector('#send');
const deleteLetter = document.querySelector('#back');
// let userGuessWord = null;

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
let index = 0;
const getValueButton = () => {

    keyButton.forEach(key => {

        key.addEventListener('click', () => {
            

            if (circle[index].innerText === "") {

                circle[index].textContent += key.textContent.toUpperCase();
                
                index++;
            } else {
                index++;
            }
            // userGuessWord = arrayWord.join('')
            
        })

        // console.log(newArray);
            

    })

    

}

getValueButton();


/** 
 * Guessing the word
*/

const guessWord = (word) => {

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
            maxTries++;
        }
    }

    console.log(`tries: ${maxTries}`);

}


const changeColor = () => {
    
    const mixArray = [];

    mixArray.push(arrayWord);
   
    const localString = localStorage.getItem("solution").toLowerCase();
    const splitWord = localString.split('');
    // const comparedObj = {
    //     computerWord: localString,
    //     guessWord: userGuessWord
    // }
    // const {computerWord , guessWord} = comparedObj
 
    // for (const userLetter of guessWord) {


    //     if (computerWord.includes(userLetter) == false) {
    //         console.log(userLetter, 'this letter is not in the word')
    //     } else {
    //         if (guessWord.indexOf(userLetter) == computerWord.indexOf(userLetter)) {
    //             console.log(userLetter, 'this letter is in this word and in the correct place')
    //         } else if (guessWord == computerWord) {
    //             console.log('You won - that is the exact word')
    //         } else {
    //             console.log('this letter exist but not in the same position')
    //         }
    //     }
    // }
   
    
    mixArray.push(splitWord);
    
    mixArray.forEach(word =>{

        word.forEach((letter, letterIndex) => {
            console.log(letter)
            if(mixArray[0][letterIndex] === mixArray[1][letterIndex]){

                circle[letterIndex].style.backgroundColor = "green";
                
            }
            
        })
    })

    console.log(mixArray)

}


//Functions---------------------------------------------------------------




//**PRUEBAS */


const sendValuesFunction = () => {
    sendValues.addEventListener('click', () => {
        const arrayString = arrayWord.join('');
        changeColor();
        // arrayWord = [];
        guessWord(arrayString);

        console.log(arrayWord);

    })
}

sendValuesFunction();


const deleteLetterFunction = () => {

    deleteLetter.addEventListener('click', () => {
        index--;
        circle[index].innerHTML = "";
        arrayWord.pop();
    })
}

deleteLetterFunction()



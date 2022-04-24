import { arrayWords } from "./words.js";


export const getWord = ()=>{

    const randomWord = Math.round(Math.random() * arrayWords.length);

    if(localStorage.length === 0){
        localStorage.setItem("solution", arrayWords[randomWord]);
    }

    
}

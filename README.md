# Play with Assembler

Let´s put into practice what we have learnt so far by developing a game with HTML, CSS & JS.

## Index

- [Goals](#goals)
- [Introduction](#introduction)
- [Develop a game](#develop-a-game)
- [Deployment (optional)](#deployment-optional)
- [Technologies used](#technologies-used)
- [Project delivery](#project-delivery)
- [Resources](#resources)

## Goals

- Improve your knowledge of JavaScript
- Learn and improve your knowledge in logic processes
- Improve your knowledge working with HTML, CSS and JS together.


## Introduction

In this pill, you will develop several games with JavaScript to improve your skills and learn how to develop simple games with JavaScript and the browser.

## Develop a game

This project must be developed in teams of 4 people. Each team should choose and develop one of the following games explained below:

### <b>GAME 1: wordle</b>
In this game, you will generate a similar game to [Wordle](https://wordle.danielfrg.com/). In this game, the user has to guess the hidden word by picking up the different available letter from the alphabet.

### Phase 1

- Guess the hidden word in six attempts.
- Each guess must be a valid 5-letter word.
- After each guess the color of the letters changes to show how close you are to getting the correct word.
- The letters of the alphabet will be displayed on the screen in div boxes. When a letter is clicked, you will have to compare the letter in the div to see if the hidden word contains that letter.
- If the clicked letter is not part of the hidden word it will be disabled. This way the user can´t repeat it twice. You can also remove it from the screen.
- The user will have six attemps to guess the word. Every attemp will be displayed in a different row. 
- You will have to count the number of attemps and stop the game once the user has failed the last one..
- If the user unsuccessfully guessed the word, it means that the user lost.
- If the user guesses the word before they run out of attemps, the user wins the game and the game ends.
- You can store the used words in a single or multiple arrays.
- The words could have different lengths so that each round has a word that is longer than the previous word <b>(optional)</b>.

<b>Conditionals</b>

<i>The letter <b>C is in the right position</b> for the hidden word.</i> \
<a href='https://www.linkpicture.com/view.php?img=LPic6227c8a97b2b2833456798'><img src='https://www.linkpicture.com/q/first_1.png' type='image' height="55px" width="auto"></a>

<i>The hidden word <b>contains the letter B</b> but not in the position where it should be.</i>\
<a href='https://www.linkpicture.com/view.php?img=LPic6227c8a97b2b2833456798'><img src='https://www.linkpicture.com/q/second_1.png' type='image' height="59px" width="auto"></a>

<i>The <b>letters 'P', 'I', 'X' are not in the hidden word</b>. \
'E' is in the word but in the wrong position.\
'L' is in the word and in the right position.</i> \
<a href='https://www.linkpicture.com/view.php?img=LPic6227c8a97b2b2833456798'><img src='https://www.linkpicture.com/q/third_1.png' type='image' height="59px" width="auto"></a>

<i>The word might contain words that are <b>repeated</b>.</i>\
<a href='https://www.linkpicture.com/view.php?img=LPic6227c8a97b2b2833456798'><img src='https://www.linkpicture.com/q/fourth.png' type='image' height="59px" width="auto"></a>

### Wireframe example

- The user should be able to choose their username and look through other user results.

<a href='https://www.linkpicture.com/view.php?img=LPic6228622d4cc83717147300'><img src='https://www.linkpicture.com/q/choose_username.png' type='image' height="auto" width="500px"></a>

- A user interface to interact with the game. 

<a href='https://www.linkpicture.com/view.php?img=LPic62288dcd10fd61760906687'><img src='https://www.linkpicture.com/q/wordle_site-page_1.png' type='image' height="auto" width="500px"></a>


When the user wins the game they should be able to check their time and their position against other users.

<a href='https://www.linkpicture.com/view.php?img=LPic6228622d4cc83717147300'><img src='https://www.linkpicture.com/q/you_won.png' type='image' height="auto" width="500px"></a>

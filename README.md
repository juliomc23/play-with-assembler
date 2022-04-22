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


## 1. Introduction

In this pill, you will develop several games with JavaScript to improve your skills and learn how to develop simple games with JavaScript and the browser.

## 2. Develop a game

This project must be developed in teams of 3 or 4 people. Each team should choose and develop one of the following games explained below:

## <b>GAME 1: wordle</b>
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

<a href='https://www.linkpicture.com/view.php?img=LPic6241a27d6c8ab1283254816'><img src='https://www.linkpicture.com/q/wordle_site-page_2.png' type='image' height="auto" width="500px"></a>


When the user wins the game they should be able to check their time and their position against other users.

<a href='https://www.linkpicture.com/view.php?img=LPic6228622d4cc83717147300'><img src='https://www.linkpicture.com/q/you_won.png' type='image' height="auto" width="500px"></a>

### Phase 2

- After each round, the words gets one letter longer.

### Extra steps

- All the game interaction should be usable with only the keyboard
- Improve the design such that it is designed using a mobile-first strategy and responsive

### <b>GAME 2: Test your reflexes</b>
This game consists in measuring how many time does it take to click a button.

### Phase 1

- In this game you will test your reflexes and reaction time.
- The game consists of measuring the time it takes you to press a button once the timer started.
- The game will have a “Start Game” button that, once pressed, will display a message on the screen with the text of “Get ready...” for a random amount of seconds (from 0 to 10 seconds) and then it displays a “Stop game” button that you will have to press as quickly as you can to measure the time it takes you to press the button, this way you can measure your reaction time.
- Once the “Get ready…” message disappears and the “Stop Game” button appears, you will have to start a timer using JavaScript dates to measure the time between the moment the “Stop Game” button has been displayed on the screen and the moment the “Stop Game” button is clicked to stop the game. 
- Once the button is clicked, you will have to stop the time counter and display the amount of seconds it took you to press the button to display the time on the screen and in the right hand panel with the username and the time it took the user to press the “Stop Game” button.

### Phase 2

In this phase the stop game button should appear in a random position on the screen for each round and not always in the same place.

### Extra Steps
- Every second that passes without clicking the position changes randomly
- Improve the design such that it is designed using a mobile-first strategy and responsive


### Wireframe example

- The user should be able to choose their username and look through other user results.

<a href='https://www.linkpicture.com/view.php?img=LPic6228622d4cc83717147300'><img src='https://www.linkpicture.com/q/choose_username.png' type='image' height="auto" width="500px"></a>

- Start game

<a href='https://www.linkpicture.com/view.php?img=LPic62417ae4d78dd53086125'><img src='https://www.linkpicture.com/q/start_game.png' type='image' height="auto" width="500px"></a>

- Get ready screen

<a href='https://www.linkpicture.com/view.php?img=LPic624179a6621ea23600470'><img src='https://www.linkpicture.com/q/get-ready.png' type='image' height="auto" width="500px"></a>

- A user interface to interact with the game. 

<a href='https://www.linkpicture.com/view.php?img=LPic62417ae4d78dd53086125'><img src='https://www.linkpicture.com/q/stop_game.png' type='image' height="auto" width="500px"></a>

When the user wins the game they should be able to check their time and their position against other users.

<a href='https://www.linkpicture.com/view.php?img=LPic62417ae4d78dd53086125'><img src='https://www.linkpicture.com/q/end_game.png' type='image' height="auto" width="500px"></a>

### <b>GAME 3: Memory</b>
In this game you must test your memory. In order to develop the game you will need 16 images, of which half will be repeated, so that each image will have its identical partner.

### Phase 1

- When the game starts, all 16 images should be displayed randomly on a 4x4 grid for 3 seconds.
- Once these 3 seconds have elapsed, the images should be hidden as if it were a board game and you had turned them over. In this way you will be able to see these 16 elements in the same order that they were but without showing what image is in each cell.
- In phase one you will have to click images two by two to know if they are identical, in the negative case the current two selected images are hidden and you continue with the game. If the images that you clicked are identical they will be discovered during the game.
- You win if you match all the images on the board. The score is calculated with the time that you spend to win the game.
 
### Phase 2
- In phase two you must add a second game mode, by entering your username to start the game you can choose easy or hard mode. The easy mode will be the previous mode (phase 1).
- In this hard mode you will have to solve all the pairs without making a mistake, once you make a mistake showing two cards and that they are not the same, you will lose the game.

### Extra Steps
- All the game interaction should be usable with only the keyboard
- Improve the design such that it is designed using a mobile-first strategy and responsive.

### Wireframe example

- The user should be able to choose their username and look through other user results.

<a href='https://www.linkpicture.com/view.php?img=LPic6228622d4cc83717147300'><img src='https://www.linkpicture.com/q/choose_username.png' type='image' height="auto" width="500px"></a>

- A user interface to interact with the game. 

<a href='https://www.linkpicture.com/view.php?img=LPic6241a40b4bacc1266308033'><img src='https://www.linkpicture.com/q/memory_game2.png' type='image' height="auto" width="500px"></a>

<a href='https://www.linkpicture.com/view.php?img=LPic6241a40b4bacc1266308033'><img src='https://www.linkpicture.com/q/memory_game.png' type='image' height="auto" width="500px"></a>


When the user wins the game they should be able to check their time and their position against other users.

<a href='https://www.linkpicture.com/view.php?img=LPic6228622d4cc83717147300'><img src='https://www.linkpicture.com/q/you_won.png' type='image' height="auto" width="500px"></a>

### <b>GAME 4: Clicks in 10 seconds</b>
This game consists in measuring the number of clicks you can make in a 10 second period.

### Phase 1

- The game will have a start button that you will have to press before starting the game. Then, once the button is pressed and the game begins, you will have to create a timer to stop the game after 10 seconds have passed since the “Start game” button was pressed.
- Once the game has started, you will also have to count the number of clicks that you make on a box on the screen.
- Once the 10 seconds have passed, the game ends and stops counting the number of clicks on the box and displays the result to the user.
 
### Phase 2
- In this phase the “Click here” box should move around the screen to a random position after each click and should change the size of the box.

### Extra Steps
- Possibility to play with mouse click or spacebar. (Different user scores)
- Improve the design such that it is designed using a mobile-first strategy and responsive

### Wireframe example

- The user should be able to choose their username and look through other user results.

<a href='https://www.linkpicture.com/view.php?img=LPic6228622d4cc83717147300'><img src='https://www.linkpicture.com/q/choose_username.png' type='image' height="auto" width="500px"></a>

- Start game

<a href='https://www.linkpicture.com/view.php?img=LPic62417ae4d78dd53086125'><img src='https://www.linkpicture.com/q/start_game.png' type='image' height="auto" width="500px"></a>

- Get ready screen

<a href='https://www.linkpicture.com/view.php?img=LPic624179a6621ea23600470'><img src='https://www.linkpicture.com/q/get-ready.png' type='image' height="auto" width="500px"></a>

- A user interface to interact with the game. 

<a href='https://www.linkpicture.com/view.php?img=LPic6241a9a8094531384757323'><img src='https://www.linkpicture.com/q/click_it.png' type='image' height="auto" width="500px"></a>

When the user wins the game they should be able to check their time and their position against other users.

<a href='https://www.linkpicture.com/view.php?img=LPic6241a9a8094531384757323'><img src='https://www.linkpicture.com/q/total_clicks.png' type='image' height="auto" width="500px"></a>


## 3. Requirements

- You must use only one HTML file to develop this game, this means that you must hide and show dynamic elements without reloading the page.
- Before starting the game, you must enter your username on the screen to start the game.
- The ranking of the players who have played a game
  - Must always be visible on screen
  - Refreshing the page will lose the information stored in the ranking, since the information must be stored in JS variables
  - When a player enters his username and clicks on the start button, the player must be added to the ranking with the message "Currently playing ..."
  - When this player finishes the game, the ranking will be dynamically updated to show your score instead of the previous message
- When the player finishes the game, the Scoring screen will be displayed with the results of the game.
- All game processes must be carried out without reloading the page
- You will not be able to use cookies, localStorage or any similar technology
- You must store:
  - Current game
    - User name
    - Game duration
    - Scoring of the current game
  - Ranking
    - User name
    - Scoring
- The ranking will show above the last record that has been entered
- After each game the total score is stored (if you refresh the browser is lost)
- You cannot use third-party libraries
- You must use Git for the development of the project and branches for each feature, try not to separate branches by person

## 4. Deliverables

To evaluate the project you will need the following deliverables:

- Repository with the code that includes also the documentation bellow
- A presentation in Google Slides explaining:
  - Explain what lessons you’ve learned during this project
  - How have you decided to organize the three stages of the game that you have had to develop?
  
## 5. Resources

- License free images https://unsplash.com/
- Undraw: https://undraw.co/illustrations



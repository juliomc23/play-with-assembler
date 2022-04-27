// const userName = document.getElementById('username');
// const startButton = document.getElementById('btn-start');
// const welcomeUser = document.getElementById('welcome');
// const gameKeyboard = document.getElementById('keyboard');
// const gameBoard = document.getElementById('letter-board');
// const scoreBoard = document.getElementById('score-board');

// const scoreBoardContainer = document.getElementById('scoreboard-container');
// const userScores = []
// if (localStorage.length !== 0) {
//     userScores = JSON.parse(localStorage.getItem('username'));
// }

// startButton.addEventListener('click', userLog);

// function userLog(e) {
//     e.preventDefault();
//     let userIn = userName.value;
//     if (userIn === '') {
//         console.log('vacio');
//     }else {
//         setLocalStorage(userIn);
//         welcomeUser.classList.replace('active', 'inactive');
//         gameKeyboard.classList.replace('inactive', 'active');
//         gameBoard.classList.replace('inactive', 'active');
//         scoreBoard.classList.replace('inactive', 'active');
//     }
// }

// function getScoreBoard() {
//     userScores.forEach((user) => {
//         let scores = document.createElement('div');
//         scores.className = 'user-scoreboard';
//         scoreBoardContainer.appendChild(scores);
//         console.log(user.time)

//         let scoreUser = document.createElement('h4');
//         let scoreTime = document.createElement('p');
//         scoreUser.textContent = user.name
//         scores.appendChild(scoreUser)
//         console.log(scoreTime);
//         scoreTime.textContent = `${user.time} seconds`;
//         scores.appendChild(scoreTime)

//     })
// }

// getScoreBoard()

// function setLocalStorage (userIn) {
//     localStorage.setItem('user', userIn);
//     const user = {name: userIn, time: 15}
//     userScores.push(user)
//     localStorage.setItem('username', JSON.stringify(userScores));
// }

const userName = document.getElementById("username");
const startButton = document.getElementById("btn-start");
const welcomeUser = document.getElementById("welcome");
const gameKeyboard = document.getElementById("keyboard");
const gameBoard = document.getElementById("letter-board");
const scoreBoard = document.getElementById("score-board");

const scoreBoardContainer = document.getElementById("scoreboard-container");
let userScores = [];

if (localStorage.length !== 0) {
    userScores = JSON.parse(localStorage.getItem("username"));
}

startButton.addEventListener("click", userLog);

function userLog(e) {
    e.preventDefault();
    let userIn = userName.value;
    if (userIn === "") {
        console.log("vacio");
    } else {
        setLocalStorage(userIn);
        welcomeUser.classList.replace("active", "inactive");
        gameKeyboard.classList.replace("inactive", "active");
        gameBoard.classList.replace("inactive", "active");
        scoreBoard.classList.replace("inactive", "active");
    }
    
    let sectime = 0;
    let mintime = 0;
    const timer = setInterval(() => {
        sectime++;
        if (sectime > 59) {
            sectime = 0;
            mintime++;
        }
        if (mintime <= 0) {
            console.log(`${sectime}sec`);
        } else {
            console.log(`${mintime}min ${sectime}sec`);
        }
    }, 1000);
}

function getScoreBoard() {
    userScores.forEach((user) => {
        let scores = document.createElement("div");
        scores.className = "user-scoreboard";
        scoreBoardContainer.appendChild(scores);

        let scoreUser = document.createElement("h4");
        let scoreTime = document.createElement("p");
        scoreUser.textContent = user.name;
        scores.appendChild(scoreUser);
        scoreTime.textContent = `${user.time} seconds`;
        scores.appendChild(scoreTime);
    });

    // function timeCounterGame() {
    //     let counterGame = document.querySelectorAll(".user-scoreboard p");
    //     setInterval(function () {
    //         counterGame.textContent = timeGame;
    //         timeGame++;
    //     }, 1000);
    //     console.log(counterGame);
    // }

    // timeCounterGame();
}
getScoreBoard();

function setLocalStorage(userIn) {
    localStorage.setItem("user", userIn);
    const user = { name: userIn, time: 15 };
    userScores.push(user);
    localStorage.setItem("username", JSON.stringify(userScores));
}

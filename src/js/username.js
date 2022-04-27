const userName = document.getElementById('username');
const startButton = document.getElementById('btn-start');
const welcomeUser = document.getElementById('welcome');
const gameKeyboard = document.getElementById('keyboard');
const gameBoard = document.getElementById('letter-board');
const scoreBoard = document.getElementById('score-board');

const scoreBoardContainer = document.getElementById('scoreboard-container');
const userScores = []
if (localStorage.length !== 0) {
    userScores === JSON.parse(localStorage.getItem('username'));
}

startButton.addEventListener('click', userLog);


function userLog(e) {
    e.preventDefault();
    let userIn = userName.value;
    if (userIn === '') {
        console.log('vacio');
    }else {
        setLocalStorage(userIn);
        welcomeUser.classList.replace('active', 'inactive');
        gameKeyboard.classList.replace('inactive', 'active');
        gameBoard.classList.replace('inactive', 'active');
        scoreBoard.classList.replace('inactive', 'active');
    }
}

function getScoreBoard() {
    userScores.forEach((user) => {
        let scores = document.createElement('div');
        scores.className = 'user-scoreboard';
        scoreBoardContainer.appendChild(scores);
        console.log(user.time)

        let scoreUser = document.createElement('h4');
        let scoreTime = document.createElement('p');
        scoreUser.textContent = user.name
        scores.appendChild(scoreUser)
        console.log(scoreTime);
        scoreTime.textContent = `${user.time} seconds`;
        scores.appendChild(scoreTime)

    })
}

getScoreBoard()

function setLocalStorage (userIn) {
    localStorage.setItem('user', userIn);
    const user = {name: userIn, time: 15}
    userScores.push(user)
    localStorage.setItem('username', JSON.stringify(userScores));
}
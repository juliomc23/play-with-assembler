const userName = document.getElementById('username');
const startButton = document.getElementById('btn-start');
const welcomeUser = document.getElementById('welcome');
const gameKeyboard = document.getElementById('keyboard');
const gameBoard = document.getElementById('letter-board');

startButton.addEventListener('click', userLog);

function userLog(e) {
    e.preventDefault();
    let userIn = userName.value;
    if (userIn === '') {
        console.log('vacio');
    }else {
        localStorage.setItem('user', userIn);
        welcomeUser.classList.replace('active', 'inactive');
        gameKeyboard.classList.replace('inactive', 'active');
        gameBoard.classList.replace('inactive', 'active');
    }
}
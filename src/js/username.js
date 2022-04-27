const userName = document.getElementById('username');
const userButton = document.getElementById('btnLogin');

console.log(userButton);
userButton.addEventListener('click', userLog);

function userLog(e) {
    e.preventDefault();
    let userIn = userName.value;
    localStorage.setItem('user', userIn);
}

// export {userLog}
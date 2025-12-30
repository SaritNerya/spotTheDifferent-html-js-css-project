//function that updates the user profile
function updateUserProfile() {
    let loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));//get the user from the localStorage
    let profileElement = document.getElementById('result');
    if (loggedInUser) {
        let firstLetter = loggedInUser.username.charAt(0).toUpperCase();
        profileElement.innerText = firstLetter;
        profileElement.style.backgroundImage = '';
    } else {
        profileElement.innerText = '';
        profileElement.style.backgroundImage = 'url(../image/person.jpg)';
        profileElement.style.backgroundSize = 'cover';
    }
}

// calls the function when loading page
document.addEventListener('DOMContentLoaded', updateUserProfile);
if (document.getElementById('signinForm')) {
    document.getElementById('signinForm').addEventListener('submit', function (event) {
        event.preventDefault();//so that the form will not be sent aotomatically
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const passwordConformation = document.getElementById('passwordConformation').value;
        const email = document.getElementById('email').value;
        let users = JSON.parse(localStorage.getItem('users')) || [];

        if (users.find(user => user.username === username)) {
            alert('שם המשתמש כבר קיים');
            return;
        }
        if (password !== passwordConformation) {
            alert('אימות סיסמא לא צלח');
            return;
        }

        let newUser = { username, password, email, score: 0 }; // score starts at 0
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        alert('הרישום הצליח!');
        localStorage.setItem('loggedInUser', JSON.stringify({ username, email, score: 0 }));

        updateUserProfile();
        window.location.href = '../html/home.html';
    });
}
if (document.getElementById('loginForm')) {
    document.getElementById('loginForm').addEventListener('submit', function (event) {
        event.preventDefault();//so that the form will not be sent aotomatically
        const username = document.getElementById('loginUsername').value;
        const password = document.getElementById('loginPassword').value;
        const email = document.getElementById('loginEmail').value;
        let users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(user => user.username === username && user.password === password && user.email === email);
        if (user) {
            alert('ההתחברות הצליחה!');
            user.score = user.score || 0;
            localStorage.setItem('loggedInUser', JSON.stringify(user));
            updateUserProfile();
            window.location.href = '../html/home.html';
        } else {
            alert('שם המשתמש סיסמא או האימייל שגויים');
        }
    });
}
//listens to events on the profile
document.getElementById('score').addEventListener('click', function () {
    const scoreDiv = document.querySelector('.scoreDivProfile');
    scoreDiv.style.display = 'flex';
    let loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    const points = loggedInUser.score || 0;
    document.getElementById('userPointsProfile').innerText = `הנקודות שלך הן: ${points}`;
});
document.getElementById('log_out').addEventListener('click', function () {
    localStorage.removeItem('loggedInUser');
    window.location.href = '../html/home.html';
});


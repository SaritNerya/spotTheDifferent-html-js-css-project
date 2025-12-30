let differencesanimals = [
    { x: 15.34, y: 10.03, radius: 6.09, isclicked: false }, // sun
    { x: 30.56, y: 25.25, radius: 6.73, isclicked: false }, //leaf
    { x: 74.04, y: 60.2, radius: 3.6, isclicked: false },// hipo
    { x: 93, y: 46.48, radius: 4.9, isclicked: false }, // monkey tail
    { x: 39.72, y: 60.53, radius: 2.7, isclicked: false }, // girrafe
    { x: 54.4, y: 91.63, radius: 5.41, isclicked: false },// tiger
    { x: 22.44, y: 59.59, radius: 5.36, isclicked: false },// lion hair
    { x: 53.49, y: 17.72, radius: 2.25, isclicked: false }, // chicken
    { x: 95.5, y: 82, radius: 2.24, isclicked: false },// hipo tail
    { x: 88.98, y: 6.39, radius: 10.11, isclicked: false } // sky
];
let differencesdinosaur = [
    { x: 70.44, y: 50.89, radius: 2.5, isclicked: false },//dot
    { x: 87.211, y: 51.788, radius: 4.19, isclicked: false },//trunck
    { x: 20.33, y: 34.5, radius: 3.35, isclicked: false },//date
    { x: 49.26, y: 20.53, radius: 2.0, isclicked: false },//eye
    { x: 64.57, y: 78.57, radius: 7.09, isclicked: false },//heart
    { x: 94.1, y: 82.49, radius: 2.1, isclicked: false },//bird
    { x: 26.94, y: 40.94, radius: 2.5, isclicked: false }//flower
];
let differencesspace = [
    { x: 3.05, y: 16.82, radius: 2.62, isclicked: false },//star
    { x: 16.59, y: 52.88, radius: 4.51, isclicked: false },//robot
    { x: 98.2, y: 55.28, radius: 2.03, isclicked: false },//tree
    { x: 85.58, y: 50.72, radius: 8.89, isclicked: false },//spaceship
    { x: 34.06, y: 86.53, radius: 6.73, isclicked: false },//cloud missing
    { x: 96.36, y: 71.63, radius: 6.375, isclicked: false },//cloud upside down
    { x: 11.49, y: 76.68, radius: 4.8, isclicked: false }//orange thing
];
let differencesschool_bus = [
    { x: 70.99, y: 4.41, radius: 4.21, isclicked: false },//cloud
    { x: 65.76, y: 63.72, radius: 2.19, isclicked: false },//glasses
    { x: 40.97, y: 77.209, radius: 4.55, isclicked: false },//stop sign
    { x: 17.03, y: 75.34, radius: 2.52, isclicked: false },//light
    { x: 39.62, y: 29.76, radius: 1.68, isclicked: false }//window
];

let loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
let tmp = [];
let foundDifferences = 0;
let timer;
// gets the current URL
let whichLink = window.location.href;
// gets the name of the page from the url.
let pageName = whichLink.substring(whichLink.lastIndexOf('/') + 1, whichLink.lastIndexOf('.'));
//checks which array to use
switch (pageName) {
    case 'animals':
        tmp = differencesanimals;
        break;
    case 'dinosaur':
        tmp = differencesdinosaur;
        break;
    case 'space':
        tmp = differencesspace;
        break;
    case 'school_bus':
        tmp = differencesschool_bus;
        break;
    default:
        window.location.href = 'index.html';;
}
//checks which img got the click and then draws a circle on the other img.
let circleBothImg = (whichimg, pressx, pressy, radiusInPixels, widthpic) => {
    if (whichimg === pageName + '1') {
        const circle = document.createElement('div');
        circle.classList.add('circle'); // מחלקה לעיצוב CSS
        circle.style.position = 'absolute';
        circle.style.width = `${(radiusInPixels) * 2}px`;
        circle.style.height = `${(radiusInPixels) * 2}px`;
        circle.style.left = `${(pressx - radiusInPixels) + widthpic}px`;
        circle.style.top = `${pressy - radiusInPixels}px`;
        circle.style.border = '4px solid rgb(22, 228, 255)';
        circle.style.borderRadius = '50%';
        document.body.appendChild(circle); // adds the circle to the page
    }
    else {
        const circle = document.createElement('div');
        circle.classList.add('circle');
        circle.style.position = 'absolute';
        circle.style.width = `${(radiusInPixels) * 2}px`;
        circle.style.height = `${(radiusInPixels) * 2}px`;
        circle.style.left = `${(pressx - radiusInPixels) - widthpic}px`;
        circle.style.top = `${pressy - radiusInPixels}px`;
        circle.style.border = '4px solid rgb(22, 228, 255)';
        circle.style.borderRadius = '50%';
        document.body.appendChild(circle); // adds the circle to the page
    }
}
//check the number diffrence is found
let updatesdifferences = (differences) => {
    const amountdiffound = document.getElementById("found");
    amountdiffound.textContent = (tmp.length) - differences;
}
function updateScore(score) {
    loggedInUser.score += score;
    localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const loggedinUserIndex = users.findIndex(user => user.email === loggedInUser.email);
    if (loggedinUserIndex !== -1) {
        users[loggedinUserIndex] = loggedInUser;
        localStorage.setItem('users', JSON.stringify(users));
    }
}
//checks to see if the click matches a diffrence
function checkDifference(event, imageId) {
    let xPos, yPos, pressx = event.clientX, pressy = event.clientY;
    const img = document.getElementById(imageId);
    const rect = img.getBoundingClientRect();
    const whichimg = event.target.id;
    if (whichimg === pageName + '1') {
        xPos = pressx - rect.left;
        yPos = pressy - rect.top;
    }
    else {
        xPos = pressx - rect.left - rect.width;
        yPos = pressy - rect.top;
    }
    for (let diff of tmp) {
        if (diff.isclicked === false) {
            const xDiff = (diff.x / 100) * rect.width;
            const yDiff = (diff.y / 100) * rect.height;
            const radiusInPixels = (diff.radius / 100) * rect.width;//finds the radius with the % that is saved in the array
            const dist = Math.sqrt(Math.pow(xPos - xDiff, 2) + Math.pow(yPos - yDiff, 2));//finds the radius length off the click
            if (dist <= radiusInPixels) {
                const circle = document.createElement('div');
                circle.classList.add('circle');
                circle.style.position = 'absolute';
                circle.style.width = `${(radiusInPixels) * 2}px`;
                circle.style.height = `${(radiusInPixels) * 2}px`;
                circle.style.left = `${pressx - radiusInPixels}px`;
                circle.style.top = `${pressy - radiusInPixels}px`;
                circle.style.border = '4px solid rgb(22, 228, 255)';
                circle.style.borderRadius = '50%';
                document.body.appendChild(circle); // adds the circle to the page
                circleBothImg(whichimg, pressx, pressy, radiusInPixels, rect.width);
                diff.isclicked = true;
                foundDifferences++;
                updatesdifferences(foundDifferences);
                if (foundDifferences === tmp.length) {
                    clearInterval(timer); //stops the timer
                    const score = timeLeft;
                    updateScore(score);
                    const hourglassImg = document.getElementById('hourglass-img');
                    hourglassImg.style.animation = 'none';
                    const youwinDiv = document.querySelector('.youwin');
                    youwinDiv.style.display = 'flex';
                    document.getElementById('cheersound').play();
                    return;
                }
                return;
            }
        }
    }
}
let timeLeft = 30;
const timerElement = document.getElementById("timer");
timer = setInterval(() => {
    timeLeft--;
    timerElement.textContent = timeLeft;
    if (timeLeft <= 0) {
        clearInterval(timer); //stop the timer
        timerElement.textContent = "0";
        const timeUpDiv = document.querySelector('.timeup');
        timeUpDiv.style.display = 'flex';
        document.getElementById('alarmSound').play();
    }
}, 1000);
document.querySelectorAll('.home').forEach(button => {
    button.addEventListener('click', function () {
        window.location.href = 'index.html';
    });
});
document.querySelectorAll('.score').forEach(button => {
    button.addEventListener('click', function () {
        const points = loggedInUser.score;
        const scoreDiv = document.querySelector('.scoreDiv');
        scoreDiv.style.display = 'flex';
        document.getElementById('userPoints').innerText = `הנקודות שלך הן: ${points}`;
    });
});
const endGame = document.getElementById("end-play-game").addEventListener('click', function () {
    window.location.href = 'index.html'
});

document.getElementById('user-profile').addEventListener('click', function (event) {
    if (loggedInUser) {
        const profilePic = document.querySelector('.profile');
        if (profilePic.style.display === 'none') {
            profilePic.style.display = 'flex';
        } 
        else {
            profilePic.style.display = 'none';
        }
        event.stopPropagation(); //stops the click from spreading
    }
});

const divPageName = document.querySelector('.animals, .space, .dinosaur, .school_bus');
divPageName.addEventListener('click', function (event) {
    if(loggedInUser)
    {
        checkDifference(event, pageName + '1');
    }
    else{
         window.location.href = 'sign_in.html'
    }
    
});



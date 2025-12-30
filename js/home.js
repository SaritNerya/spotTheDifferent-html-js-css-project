document.getElementById('mario').addEventListener('click', function () {
    window.location.href = 'web_being_built.html';
});

document.getElementById('tictactoe').addEventListener('click', function () {
    window.location.href = 'web_being_built.html';
});

document.getElementById('spotthedifference').addEventListener('click', function () {
    let loginUser = localStorage.getItem('loggedInUser');
    if (!loginUser) {
        window.location.href = 'sign_in.html';
    }
    else {
        window.location.href = 'menu.html';
    }

});

const imageButtons = document.querySelectorAll('.image-button');
imageButtons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.1)';
        button.style.transition = 'transform 0.3s ease-in-out';
        button.style.boxShadow = '0px 4px 15px rgba(0, 0, 0, 0.8)';
    });

    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
        button.style.boxShadow = 'none';
    });
});
document.getElementById('user-profile').addEventListener('click', function (event) {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (loggedInUser) {
        const profilePic = document.querySelector('.profile');
        if (profilePic.style.display === 'none' || profilePic.style.display === '') {
            profilePic.style.display = 'flex';
        } else {
            profilePic.style.display = 'none';
        }

        event.stopPropagation(); // makes sure the click doesn't spread to other elements
    }
});


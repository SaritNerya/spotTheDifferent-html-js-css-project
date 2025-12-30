const loggedInUser=JSON.parse(localStorage.getItem('loggedInUser'));
document.getElementById('dinosaur').addEventListener('click', function () {
    if(loggedInUser)
        {
            window.location.href = 'dinosaur.html';
        }
        else{
             window.location.href = 'sign_in.html'
        }
   
});
document.getElementById('space').addEventListener('click', function () {
    if(loggedInUser)
        {
            window.location.href = 'space.html';
        }
        else{
             window.location.href = 'sign_in.html'
        }
    
});
document.getElementById('animals').addEventListener('click', function () {
    if(loggedInUser)
        {
            window.location.href = 'animals.html';
        }
        else{
             window.location.href = 'sign_in.html'
        }
    
});
document.getElementById('school_bus').addEventListener('click', function () {
    if(loggedInUser)
        {
            window.location.href = 'school_bus.html';
        }
        else{
             window.location.href = 'sign_in.html'
        }
   
});
document.getElementById('user-profile').addEventListener('click', function (event) {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (loggedInUser) {
        const profilePic = document.querySelector('.profile');
        if (profilePic.style.display === 'none' || profilePic.style.display === '') {
            profilePic.style.display = 'flex';
        }
        else {
            profilePic.style.display = 'none';
        }
        event.stopPropagation(); // makes sure that the click doesn't spread to other elements
    }
});









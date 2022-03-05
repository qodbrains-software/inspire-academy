// MOBILE/ HAMBURGER NAVIGATION SCRIPT

const hamburgerButton = document.querySelector('.hamburger-container');
const mobileNavigation = document.querySelector('.mobile-navigation');
const backDrop = document.querySelector('.back-drop');

let navigationOpen = false;

hamburgerButton.addEventListener('click', function () {
    if (!navigationOpen) {
        mobileNavigation.style.display = 'block';
        backDrop.style.display = 'block';
        navigationOpen = true;
        
    } else {
        mobileNavigation.style.display = 'none';
        backDrop.style.display = 'none';
        navigationOpen = false;
        
    }
});

backDrop.addEventListener('click', function() {
    if(!navigationOpen) {
    navigationOpen = true;
    } else {
        mobileNavigation.style.display = 'none';
        backDrop.style.display = 'none';
        navigationOpen = false;
    }
})
// MOBILE/ HAMBURGER NAVIGATION SCRIPT ENDS!!
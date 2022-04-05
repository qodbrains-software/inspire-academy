// MOBILE/ HAMBURGER NAVIGATION SCRIPT

const hamburgerButton = document.querySelector('.hamburger-container');
const mobileNavigation = document.querySelector('.mobile-navigation');
const backDrop = document.querySelector('.back-drop');
const subscribeButton = document.querySelector('.sub-btn');
const subscribeOpen = document.querySelector('.subscribe-modal__enclosure');
const modalDrop = document.querySelector('.successfull-modal_grid__container');
const closeButton = document.querySelector('.icon-close');
const subscribeIpad = document.querySelector('.sub-btn__black');
const footerSub = document.querySelector('.sub-btn2');
const myButton = document.querySelector('.more-info__button');
const moreModal = document.querySelector('.more-info__modal');
const myContainer = document.querySelector('.more-info__container');
const closeModal = document.querySelector('.more-info_icon__leaving');
let openMore = false
let navigationOpen = false;
let modalOpen = false;

hamburgerButton.addEventListener('click', function() {
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

closeButton.addEventListener('click', function() {
    if (!modalOpen) {
        modalOpen = true;
    } else {
        subscribeOpen.style.display = 'none';
        modalDrop.style.display = 'none';
        modalOpen = false;
    }
})

subscribeIpad.addEventListener('click', function() {
    if (!modalOpen) {
        subscribeOpen.style.display = 'inline-block';
        modalDrop.style.display = 'block';
        modalOpen = true;

    } else {
        modalOpen = false;

    }
});

subscribeButton.addEventListener('click', function() {
    if (!modalOpen) {
        subscribeOpen.style.display = 'inline-block';
        modalDrop.style.display = 'block';
        modalOpen = true;

    } else {
        modalOpen = false;

    }
});

footerSub.addEventListener('click', function() {
    if (!modalOpen) {
        subscribeOpen.style.display = 'inline-block';
        modalDrop.style.display = 'block';
        modalOpen = true;

    } else {
        modalOpen = false;

    }
});


myButton.addEventListener('click', function() {
    if(!openMore) {
        myButton.classList.add('open');
        myContainer.classList.add('vula');
        moreModal.style.dispaly = 'flex';
        openMore = true;
    } else {
        openMore = false;

    }
});


closeModal.addEventListener('click', function() {
    if(!openMore) {
        openMore = true;
    } else {
        myButton.classList.remove('open');
        myContainer.classList.remove('vula');
        openMore = false;

    }
});


backDrop.addEventListener('click', function() {
    if (!navigationOpen) {
        navigationOpen = true;
    } else {
        mobileNavigation.style.display = 'none';
        backDrop.style.display = 'none';
        navigationOpen = false;
    }
})


// MOBILE/ HAMBURGER NAVIGATION SCRIPT ENDS!!
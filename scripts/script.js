// MOBILE/ HAMBURGER NAVIGATION SCRIPT

const hamburgerButton = document.querySelector('.hamburger-container');
const mobileNavigation = document.querySelector('.mobile-navigation');
const backDrop = document.querySelector('.back-drop');
const subscribeButton = document.querySelector('.sub-btn');
const subscribeOpen = document.querySelector('.subscribe-modal__enclosure');
const modalDrop = document.querySelector('.successfull-modal_grid__container');
const closeButton = document.querySelector('.icon-close');
const subscribeIpad = document.querySelector('.sub-btn__black');

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

// Payment modal


const hide = document.querySelector(".main-method");
const btn_payment = document.querySelector(".buybook");
const btn_2 = document.querySelector(".buy2");
const btn_3 = document.querySelector(".buy3");
const close_btn = document.querySelector(".icon");

function payment() {
    hide.style.display = "flex";
    modalDrop.style.display = 'block';
}

function close() {
    hide.style.display = "none";
    modalDrop.style.display = 'none';
}

close_btn.addEventListener("click", close);
btn_payment.addEventListener("click", payment);
btn_2.addEventListener("click", payment);
btn_3.addEventListener("click", payment);
// MOBILE/ HAMBURGER NAVIGATION SCRIPT

const hamburgerButton = document.querySelector('.hamburger-container');
const mobileNavigation = document.querySelector('.mobile-navigation');
const backDrop = document.querySelector('.back-drop');

let navigationOpen = false;

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

// CAROUSEL

const track = document.querySelector(".main-container");
const slides = Array.from(track.children);
const dotsContainer = document.querySelector(".dotsContainer");
const dots = Array.from(dotsContainer.children);

let pause = false;

// manual carousel

dotsContainer.addEventListener("click", e => {

    const dots = document.querySelectorAll(".dots");
    const targetClass = e.target.classList[1];

    switch (targetClass) {
        case "dots1":
            pause = true;
            slides[0].style.display = "flex";
            slides[1].style.display = "none";
            slides[2].style.display = "none";
            break;
        case "dots2":
            pause = true;
            slides[1].style.display = "flex";
            slides[0].style.display = "none";
            slides[2].style.display = "none";
            break;
        case "dots3":
            pause = true;
            slides[2].style.display = "flex";
            slides[1].style.display = "none";
            slides[0].style.display = "none";
            break;
    }
})

let slider = () => {
    let index = 0;


    setInterval(() => {
        if (!pause) {
            switch (index) {
                case 0:
                    slides[0].style.display = "flex";
                    slides[1].style.display = "none";
                    slides[2].style.display = "none";
                    break;
                case 1:
                    slides[1].style.display = "flex";
                    slides[0].style.display = "none";
                    slides[2].style.display = "none";
                    break;
                case 2:
                    slides[2].style.display = "flex";
                    slides[1].style.display = "none";
                    slides[0].style.display = "none";
                    break;

            }
        }

        index++;
        if (index === 3) {
            index = 0;
        }

    }, 4000)
}
slider()
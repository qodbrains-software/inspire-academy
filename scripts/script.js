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
const nextbtn = document.querySelector(".next");
const prevbtn = document.querySelector(".prev");
const dotsContainer = document.querySelector(".dotsContainer");
const dots = Array.from(dotsContainer.children);


const slideWidth = slides[0].getBoundingClientRect().width;
// slides[0].style.left = slideWidth * 0 + "px";
// slides[1].style.left = slideWidth * 1 + "px";
// slides[2].style.left = slideWidth * 2 + "px";

const setslides = (slide, index) => {
    slide.style.left = slideWidth * index + "px";
};

slides.forEach(setslides);

const moveToSlide = (track, firstslide, targetSlide) => {
    track.style.transform = "translatex(-" + targetSlide.style.left + ")"
    firstslide.classList.remove("first");
    targetSlide.classList.add("first");
}

// manual carousel
nextbtn.addEventListener("click", e => {
    const firstslide = track.querySelector(".first");
    const nextslide = firstslide.nextElementSibling;

    moveToSlide(track, firstslide, nextslide);
})

prevbtn.addEventListener("click", e => {
    const firstslide = track.querySelector(".first");
    const prevslide = firstslide.previousElementSibling;

    moveToSlide(track, firstslide, prevslide);
})


dotsContainer.addEventListener("click", e => {
    const targetDot = e.target.closest("i");

    if (!targetDot) return;

    const firstslide = track.querySelector(".first");
    const currentDot = dotsContainer.querySelector("first");
    const targetIndex = dots.findIndex(dots => dots === targetDot);
    const targetSlide = slides[targetIndex];

    moveToSlide(track, firstslide, targetSlide);
})


// const slider = () => {
//     let i = 0;
//     setInterval(() => {
//         moveToSlide(track, slides[i], slides[i + 1])
//         i++;
//         if (i == 2) {
//             i = 0;
//         }
//     }, 6000)
// }

// slider();

let slider = () => {
    let index = 0;

    setInterval(() => {
        slides[index].style.display = "none";
        index++;

        if (index === 3) {
            index = 0;
            slides[0].style.display = "flex";
            slides[1].style.display = "flex";
            slides[2].style.display = "flex";
        }

    }, 4000)
}
slider()
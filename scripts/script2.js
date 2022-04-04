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

// End of carousel



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
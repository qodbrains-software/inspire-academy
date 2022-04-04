// Payment modal

const hide = document.querySelector(".main-method");
const btn_payment = document.querySelector(".buybook");
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
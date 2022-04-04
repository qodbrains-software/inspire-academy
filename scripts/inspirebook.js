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
// btn_2.addEventListener("click", payment);
// btn_3.addEventListener("click", payment);
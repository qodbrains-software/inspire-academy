const checkoutEmail = document.querySelector(".checkout-email");
const checkoutName = document.querySelector(".checkout-name");
const checkoutLastName = document.querySelector(".checkout-last-name");
const checkoutCell = document.querySelector(".checkout-cell");
const checkoutAddress = document.querySelector(".checkout-address");
const checkoutQuantity = document.querySelector(".checkout-quantity");
const checkoutTotalPrice = document.querySelector(".checkout-price-total");

const loaderContainer = document.querySelector(".loader-container");

const bookID = "47eb85de-6421-4fe5-ba0a-0362a05e7ea4"


const proceedBtn = document.querySelector(".proceed-to-pay");


const fieldHasValues = () => {
    if(checkoutEmail.value.length && checkoutName.value.length && 
        checkoutLastName.value.length && checkoutCell.value.length &&
        checkoutAddress.value.length && checkoutQuantity.value.length
        ) {
            return true;
        }
    return false;
}

proceedBtn.addEventListener('click', () => {
    if(fieldHasValues()) {
        loaderContainer.style.display = "flex";
        fetch(`https://safe-hollows-27802.herokuapp.com/buy/${bookID}`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email_address: checkoutEmail.value,
                name_first: checkoutName.value,
                name_last: checkoutLastName.value,
                address: checkoutAddress.value,
                quantity: checkoutQuantity.value
            })
        })
        .then(async response => {
            const data = await response.json();
            loaderContainer.style.display = "none";
            location.href = data;
        })
        .catch(err => {
            console.log(err);
            loaderContainer.style.display = "none";
        })
    } else {
        alert("Please provide all required fields")
    }
})



const handleQuantityChange = (e) => {
    checkoutTotalPrice.textContent = `R ${e.target.value * 350}`
}

checkoutQuantity.addEventListener('input', handleQuantityChange);




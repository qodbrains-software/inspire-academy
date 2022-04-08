/*

SUBSCRIBE LOGIC STARTS:

*/

const loaderContainer = document.querySelector(".loader-container");

const email = document.querySelector(".email-input");
const nameSurname = document.querySelector(".name-surname-input");
const cell = document.querySelector(".phone-number-input");
const school = document.querySelector(".name-of-school-input");
const grade = document.querySelector(".grade-input");

const subBtn = document.querySelector(".subscribe-btn");


const subscribe = () => {

    let name;
    let surname;

    if(nameSurname){
        name = nameSurname.value.split(" ")[0];
        surname = nameSurname.value.split(" ")[1];
    }

    loaderContainer.style.display = 'flex';
    fetch('https://safe-hollows-27802.herokuapp.com/subscribe', {
        method: "post",
        headers: { 'Content-Type' : 'application/json'},
        body: JSON.stringify({
            name,
            surname,
            email: email.value,
            cell: cell.value,
            school: school.value,
            grade: grade.value
        })
    }).then(response => {
        console.log(response);
        loaderContainer.style.display = 'none';
    })
    .catch(err => {
        console.log(err);
        loaderContainer.style.display = 'none';
    })
}

subBtn.addEventListener('click', () => {
    subscribe();
})

/*

SUBSCRIBE LOGIC ENDS:

*/
/*

SUBSCRIBE LOGIC STARTS:

*/

const deskLoader =document.querySelector(".desk-loader");
const email = document.querySelector(".email-input");
const nameSurname = document.querySelector(".name-surname-input");
const cell = document.querySelector(".phone-number-input");
const school = document.querySelector(".name-of-school-input");
const grade = document.querySelector(".grade-input");
const backDropContainer = document.querySelector(".subscribed-successfull");
const successfullModal = document.querySelector(".successfull-modal__grid");
const successfullButton = document.querySelector(".successfull-btn")

const subBtn = document.querySelector(".subscribe-btn");

const clearFields = () => {
  grade.value = 10;
  school.value = "";
  cell.value = "";
  email.value = "";
  nameSurname.value = "";
};

const subscribe = () => {
  let name;
  let surname;

  if (nameSurname) {
    name = nameSurname.value.split(" ")[0];
    surname = nameSurname.value.split(" ")[1];
  }
  deskLoader.style.display = "flex";
  fetch("https://safe-hollows-27802.herokuapp.com/subscribe", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name,
      surname,
      email: email.value,
      cell: cell.value,
      school: school.value,
      grade: grade.value,
    }),
  })
    .then(async (response) => {
      deskLoader.style.display = "none";
      clearFields();
      backDropContainer.style.display = "grid";
      successfullModal.style.display = "grid";
    })
    .catch((err) => {
      deskLoader.style.display = "none";
      clearFields();
    });
};

subBtn.addEventListener("click", () => {
  if(
    school.value.length <= 0 ||
    cell.value.length <= 0 ||
    email.value.length <= 0 ||
    nameSurname.value.length <= 0) {
      alert("Please provided input for all fields");
      return;
    }
  subscribe();
});

/*

SUBSCRIBE LOGIC ENDS:

*/

// successefully sub modal close
successfullButton.addEventListener("click", () => {
  backDropContainer.style.display = "none";
  successfullModal.style.display = "none";
});
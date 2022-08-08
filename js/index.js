const card = document.querySelector(".elewen");
const cardone = document.querySelector(".one");
const cardtwo = document.querySelector(".two");
const cardthree = document.querySelector(".three");
const cardfour = document.querySelector(".four");
const cardfifte = document.querySelector(".fifte");
const cardsex = document.querySelector(".sex");
const submitForm = document.querySelector(".submitbtn");
const loginInput = submitForm.querySelector(".email");
const loginPassword = submitForm.querySelector(".password");

let Text = document.getElementById("text");
let modal = document.getElementById("modal");
let modalCloseBtn = document.getElementById("modalCloseBtn");

async function UrlData(evt) {
  evt.preventDefault();
  const url = await fetch(
    "https://unlimited-telecom-backend.herokuapp.com/login",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: loginInput.value,
        password: loginPassword.value,
      }),
    }
  );
  const content = await url.json();

  localStorage.setItem("token", JSON.stringify(content.token));
  modalCloseBtn.addEventListener("click", () => {
    console.log("OK");
    modal.style.display = "none";
  });
  


  content.token ? (location = "/pages/admin.html") : "/";
}

//modal message
modalCloseBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

const localText = localStorage.getItem("data")
console.log(localText);
modalCloseBtn.addEventListener('click', clearStorages)
function clearStorages() {
  localStorage.clear(localText)  
}
if (localText) {
  modal.style.display = "flex";
  Text.textContent = localText;
} else {
  modal.style.display = "none";
}


//modal message end 


submitForm.addEventListener("submit", UrlData);

card.addEventListener("click", function (e) {
  card.classList.toggle("is-flipped");
});
cardone.addEventListener("click", function (e) {
  cardone.classList.toggle("is-flipped");
});
cardtwo.addEventListener("click", function (e) {
  cardtwo.classList.toggle("is-flipped");
});
cardthree.addEventListener("click", function (e) {
  cardthree.classList.toggle("is-flipped");
});
cardfour.addEventListener("click", function (e) {
  cardfour.classList.toggle("is-flipped");
});
cardfifte.addEventListener("click", function (e) {
  cardfifte.classList.toggle("is-flipped");
});
cardsex.addEventListener("click", function (e) {
  cardsex.classList.toggle("is-flipped");
});







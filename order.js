window.onload = function () {
  const colour_btn = document.querySelectorAll(".colours .colour");
  const exterior = document.querySelector(".images .exterior");
  const interior = document.querySelector(".images .interior");

  //click-function that changes the colours of buttons - and also changes images based on which button is clicked, calling on dataset-names (colours in this case) and the css classes 'colours' and 'selected' //
  for (let i = 0; i < colour_btn.length; i++) {
    let btn = colour_btn[i];

    btn.addEventListener("click", function () {
      document
        .querySelector(".colours .colour.selected")
        .classList.remove("selected");
      this.classList.add("selected");
      exterior.src = "images/customize/electric-" + this.dataset.name + ".png";
    });
  }

  //Another function to simply get the images of the interior aswell, based on which button is clicked.//
  for (let i = 0; i < colour_btn.length; i++) {
    let btn = colour_btn[i];

    btn.addEventListener("click", function () {
      interior.src = "images/customize/interior-" + this.dataset.name + ".png";
    });
  }
};

//Response to form-input//
const thankYou = document.querySelector(".sign-up h3");
const form = document.querySelector(".form-container-sign-up");
const sendButton = document.querySelector(".button-sign-up");
const name = document.querySelector(".name input");
const email = document.querySelector(".email input");
const goTop = document.querySelector(".sign-up .goTop");
const check = document.querySelector(".checkbox input");

sendButton.addEventListener("click", () => {
  if (name.value && email.value !== "") {
    thankYou.textContent =
      "Thank you for signing up! We will contact you soon.";
    form.style.display = "none";
    goTop.style.display = "block";
    goTop.style.margin = "1rem";
  }
  if (name.value && email.value === "") {
    false;
    email.addEventListener("input", function (event) {
      if (email.validity.typeMismatch) {
        email.setCustomValidity("I am expecting an email address!");
      }
    });
  }
});

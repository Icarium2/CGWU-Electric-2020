const navAnimation = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-items");
  const navItems = document.querySelectorAll(".nav-items li");

  //toggle nav

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    navItems.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navItemFade 0.5s ease forwards ${
          index / 8 + 0.3
        }s`;
      }
    });
  });
};
navAnimation();

window.onload = function () {
  document.querySelector(".hero-content h1").style.opacity = 1;
  document.querySelector(".hero-content .button").style.opacity = 1;
};

// Open Chat, Close Chat

// function openForm() {document.getElementById("myForm").style.display = "block";}
// function closeForm() {document.get ElementById(".btn cancel").style.display = "none";}
//HTML: onclick="openForm()", onclick="closeForm()"


/*

const openChat = document.querySelector(".open-button");
const closeChat = document.querySelector(".btn cancel");
const myForm = document.querySelector("#myForm");

openChat.addEventListener('click', () => {
  myForm.style.display = "block";
});

closeChat.addEventListener('click', () => {
  myForm.style.display = "none";
});
*/
// "Thanks for your question!" Message, after Chat Submit

/*const XX = document.querySelector('.XX');
const XX = document.querySelector('.XX');
const XX = document.querySelector('.XX');
const XX = document.querySelector('.XX');
const XX = document.querySelector('.XX');


// "Thank you for signing up!" Message, after Sign Up

const thankYou = document.querySelector('.sign-up h3');
const form = document.querySelector('.form-container-sign-up');
const sendButton = document.querySelector('.button-sign-up'); 
const name = document.querySelector('.name input');
const email = document.querySelector('.email input');
const goTop = document.querySelector('.sign-up .goTop');
const check = document.querySelector('.checkbox input');


sendButton.addEventListener('click',  () => {
  
  if(name.value && email.value !== "") {
    thankYou.textContent = "Thank you for signing up! We will contact you soon.";
    form.style.display ="none";
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
});*/



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

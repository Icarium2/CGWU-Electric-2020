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
  document.querySelector(".date").style.opacity = 1;
  document.querySelector(".hero-content .button").style.opacity = 1;
};

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}






const thankYou = document.querySelector('.sign-up h3');
const form = document.querySelector('.form-container-sign-up');
const sendButton = document.querySelector('.button-sign-up'); 
const name = document.querySelector('.name input');
const email = document.querySelector('.email input');
const goTop = document.querySelector('.sign-up h3 p');


sendButton.addEventListener('click',  () => {
  if(name.value === "" ){
    false;
  }
  if(email.value === "" ){
   false; 
  }
  else{
    thankYou.textContent = "Thank you for signing up! We will contact you soon";
    form.style.display ="none";
    goTop.style.color = "white";
    goTop.textContent = "Go back to top"; 
    goTop.href = "/index.html"; 
     
  }
 
}); 


/*const value = input.value; 
  if(value ===""){
    const span = document.createElement('span');
    span.textContent = 'Please enter yout name!';
  }
  else{
    form.style.display ="none";
    thankYou.textContent = "Thank you for signing up!";
  }*/
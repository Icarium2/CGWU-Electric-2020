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

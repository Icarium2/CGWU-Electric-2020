window.onload = function () {
  const colour_btn = document.querySelectorAll(".colours .colour");
  const view_btn = document.querySelectorAll(".view .size");
  const imageEl = document.querySelector(".imagery .image");

  //Click-function that frames the current active button (interior/exterior)//
  for (let i = 0; i < view_btn.length; i++) {
    let btn = view_btn[i];

    btn.addEventListener("click", function () {
      document
        .querySelector(".view .size.selected")
        .classList.remove("selected");
      this.classList.add("selected");
    });
  }

  //click-function that changes colours of buttons and the background of the image - and also changes images based on which button is clicked //
  for (let i = 0; i < colour_btn.length; i++) {
    let btn = colour_btn[i];

    btn.addEventListener("click", function () {
      document
        .querySelector(".colours .colour.selected")
        .classList.remove("selected");
      this.classList.add("selected");
      imageEl.src = "images/customize/electric-" + this.dataset.name + ".png";
    });
  }
};

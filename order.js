window.onload = function () {
  const colour_btn = document.querySelectorAll(".colours .colour");
  const exterior = document.querySelector(".images .exterior");
  const interior = document.querySelector(".images .interior");

  //click-function that changes the colours of buttons - and also changes images based on which button is clicked //
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

  //The same function, except it gets the interior-images instead of the exterior ones //
  for (let i = 0; i < colour_btn.length; i++) {
    let btn = colour_btn[i];

    btn.addEventListener("click", function () {
      document
        .querySelector(".colours .colour.selected")
        .classList.remove("selected");
      this.classList.add("selected");
      interior.src = "images/customize/interior-" + this.dataset.name + ".png";
    });
  }
};

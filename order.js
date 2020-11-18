window.onload = function () {
  const colour_btn = document.querySelectorAll(".colours .colour");
  const view_btn = document.querySelectorAll(".view .size");
  const imageryEl = document.querySelector(".imagery");
  const imageEl = document.querySelector(".imagery .image");

  for (let i = 0; i < view_btn.length; i++) {
    let btn = view_btn[i];

    btn.addEventListener("click", function () {
      document
        .querySelector(".view .size.selected")
        .classList.remove("selected");
      this.classList.add("selected");
    });
  }

  for (let i = 0; i < colour_btn.length; i++) {
    let btn = colour_btn[i];

    btn.addEventListener("click", function () {
      document
        .querySelector(".colours .colour.selected")
        .classList.remove("selected");
      this.classList.add("selected");
      imageEl.src = "images/xr-" + this.dataset.name + ".png";
      imageryEl.style.backgroundColor = this.dataset.colour;
    });
  }
};

const showCatButton = document.querySelector(".show-cat");
const cat = document.querySelector(".cat");

showCatButton.addEventListener("mouseover", function () {
  cat.classList.remove("hide");
  cat.classList.add("show");
});
showCatButton.addEventListener("mouseout", function () {
  cat.classList.remove("show");
  showCatButton.innerText = "Kitty come back!";
  cat.classList.add("hide");
});
const toggleBtn = document.querySelector(".navbar__toggleBtn");
const menu = document.querySelector("#menu");
const links = document.querySelector("#sns");

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  links.classList.toggle("active");
});

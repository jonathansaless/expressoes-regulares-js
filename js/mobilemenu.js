const button = document.getElementById("mobile-menu-button");

button.addEventListener("click", () => {
  let menuMobile = document.querySelector(".mobile-menu");
  if (menuMobile.classList.contains("open")) {
    menuMobile.classList.remove("open");
    document.querySelector(".icon").src = "./imgs/menu.svg";
  } else {
    menuMobile.classList.add("open");
    document.querySelector(".icon").src = "./imgs/close.svg";
  }
});

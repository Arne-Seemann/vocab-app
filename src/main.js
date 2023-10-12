import { createApp } from "vue";
import App from "./App.vue";

createApp(App).mount("#app");

//Dropdown-Handler
document.addEventListener("click", (e) => {
  if (e.target.matches("[data-dropdown-button]")) {
    e.target.closest("[data-dropdown]").classList.toggle("focus");
  }
  const dropdowns = document.querySelectorAll("[data-dropdown]");
  dropdowns.forEach((dropdown) => {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove("focus");
    }
  });
});

//Pop-Up-Handler
document.addEventListener("click", (e) => {
  if (e.target.tagName === "SPAN") {
    e.target.parentElement.classList.toggle("active");
  }
  const isPopUp = e.target.matches(".popUp");
  if (isPopUp) return;

  const popUps = document.querySelectorAll(".popUp");
  popUps.forEach((popUp) => {
    if (!popUp.parentElement.contains(e.target)) {
      popUp.parentElement.classList.remove("active");
    }
  });
});

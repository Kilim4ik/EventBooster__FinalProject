const switcher = document.querySelector(".theme-switcher");
switcher.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
  switcher.classList.toggle("light");
});
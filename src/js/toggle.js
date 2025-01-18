const switcher = document.querySelector(".theme-switcher");
const searchHeader = document.querySelector('header')
switcher.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
  searchHeader.classList.toggle("light-theme")
  switcher.classList.toggle("light");
});
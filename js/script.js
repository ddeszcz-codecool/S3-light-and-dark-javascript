function switchTheme() {

  const body = document.querySelector("body");
  const nav = document.querySelector("nav");
  const cards = document.querySelectorAll(".card");
  body.classList.add("background-color-dark");
  nav.classList.add("navbar-dark", "bg-dark");



  for (let i = 0; i < cards.length; i++) {
    cards[i].classList.add("text-white", "bg-dark", "border-light");
  }
}
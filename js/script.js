function switchTheme() {

  const body = document.getElementsByTagName("body");
  const nav = document.querySelector(".navbar");
  const cards = document.querySelectorAll(".card");
  body[0].classList.add("background-color-dark");
  nav.classList.add("navbar-dark", "bg-dark");

  for (let i = 0; i < cards.length; i++) {
    cards[i].classList.add("text-white", "bg-dark", "border-light");
  }

  const tables = document.querySelectorAll("table");

  tables.forEach((table)=>{
    table.setAttribute("class", "table-stripped table table-dark")});
}
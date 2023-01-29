const button = document.getElementById("themeSwitch");
const body = document.getElementsByTagName("body");
const nav = document.querySelector(".navbar");
const cards = document.querySelectorAll(".card");
const tables = document.querySelectorAll("table");
const footer = document.getElementById("page-footer");
const header = document.getElementById("page-header");

let numberOfClicks = 0

button.addEventListener("click", function (){
  numberOfClicks++;
  console.log(numberOfClicks);
  if(numberOfClicks%2===0){
    switchToLight()
  }else {
    switchToDark()
  }
});

function switchToLight(){
  body[0].classList.remove("background-color-dark");
  nav.classList.remove("navbar-dark", "bg-dark");
  cards.forEach((card)=>{card.classList.remove("text-white", "bg-dark", "border-light")});
  tables.forEach((table)=>{
    table.setAttribute("class","table table-stripped")});
  footer.classList.remove("text-white", "footer-settings");
  header.innerHTML = "This is the Light theme";
  header.classList.remove("text-white");
  button.innerHTML = "Activate Dark Theme";
}

function switchToDark(){
  body[0].classList.add("background-color-dark");
  nav.classList.add("navbar-dark", "bg-dark");
  for (let i = 0; i < cards.length; i++) {
    cards[i].classList.add("text-white", "bg-dark", "border-light");
  }
  tables.forEach((table)=>{
    table.setAttribute("class", "table-stripped table table-dark")});
  footer.classList.add("text-white", "footer-settings");
  header.innerHTML = "This is the Dark theme";
  header.classList.add("text-white");
  button.innerHTML = "Activate Light Theme";
}

function switchTheme() {}

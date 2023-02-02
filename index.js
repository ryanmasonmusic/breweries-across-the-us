let list = document.getElementById("breweryList");

let rightList = document.getElementById("beerList");

let breweryList = [];

fetch("http://localhost:3000/breweries")
.then (response => response.json())
.then ((brewery)=>brewery.forEach((brewery => {renderBrewery(brewery);renderBeers(brewery)})))

function renderBrewery(brewery){
    let li = document.createElement("li");
        li.innerText = brewery.name;
        list.appendChild(li);
        return brewery;
};

let btn = document.querySelector("#beerBtn");

let brewList = document.querySelector(".brewList");

brewList.style.display = "none";

btn.addEventListener("click", () => {
    if (brewList.style.display === "none"){
        brewList.style.display = "block"
    } else {
        brewList.style.display = "none"
    }
});

btn.addEventListener("mouseenter", e => {
    e.target.style.background = "green";
}, false);

btn.addEventListener("mouseleave", e =>{
    e.target.style.background = "red"
}, false);

let middleBtn = document.querySelector("#beerTypeBtn");

let beerType = document.querySelector(".beerType");

beerType.style.display = "none";

middleBtn.addEventListener("click", () => {
    if (beerType.style.display === "none"){
        beerType.style.display = "block"
    } else {
        beerType.style.display = "none"
    }
});

middleBtn.addEventListener("mouseenter", e => {
    e.target.style.background = "green";
}, false);

middleBtn.addEventListener("mouseleave", e =>{
    e.target.style.background = "yellow"
}, false);

function renderBeers(brewery) {
    let middleLi = document.createElement("li");
       middleLi.innerText = brewery.brewery_type;
       rightList.appendChild(middleLi);
       return brewery;
   };


let rightBtn = document.querySelector("#beerLocationBtn");

let beerLocation = document.querySelector(".beerLocation");
   
beerLocation.style.display = "none";   

rightBtn.addEventListener("click", () => {
    if (beerLocation.style.display === "none"){
        beerLocation.style.display = "block"
    } else {
        beerLocation.style.display = "none"
    }
});

rightBtn.addEventListener("mouseenter", e => {
    e.target.style.background = "green";
}, false);

rightBtn.addEventListener("mouseleave", e =>{
    e.target.style.background = "yellow"
}, false);


function renderLocation(brewery){
    let rightLi = document.createElement("li");
        rightLi.innerText = brewery.state;
        rightList.appendChild(rightLi);
        return brewery;
}
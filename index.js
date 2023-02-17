const list = document.getElementById("breweryList");

const middleList = document.getElementById("beerList")

const rightList = document.getElementById("locationList");

const breweryList = [];

fetch("http://localhost:3000/breweries")
.then (response => response.json())
.then ((brewery)=> { 
    brewery.forEach((brewery => {
        renderBrewery(brewery);
        renderBeers(brewery);
        renderLocation(brewery)
    }))
})


function renderBrewery(brewery){
    const li = document.createElement("li");
        li.innerText = brewery.name;
        list.appendChild(li);
        return brewery;
};


const btn = document.querySelector("#beerBtn");

const brewList = document.querySelector(".brewList");

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





const middleBtn = document.querySelector("#beerTypeBtn");

const beerType = document.querySelector(".beerType");

beerType.style.display = "none";

function renderBeers(brewery) {
    const middleLi = document.createElement("li");
       middleLi.innerText = brewery.brewery_type;
       middleList.appendChild(middleLi);
       return brewery;
   };


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






const rightBtn = document.querySelector("#beerLocationBtn");

const beerLocation = document.querySelector(".beerLocation");
   
beerLocation.style.display = "none";  

function renderLocation(brewery){
    const rightLi = document.createElement("li");
        rightLi.innerText = brewery.state;
        rightList.appendChild(rightLi);
        return brewery;
}

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
    e.target.style.background = "green"
}, false);





const colorBtn = document.querySelector("#colorBtn")

colorBtn.addEventListener("dblclick", () => {

    const backColor = document.body.style.backgroundColor;

    if (backColor === 'white') {
        document.body.style.backgroundColor = "orange";
    } else {
        document.body.style.backgroundColor = "white";
    }
});
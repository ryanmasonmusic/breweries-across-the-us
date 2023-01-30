let list = document.getElementById("breweryList");

let rightList = document.getElementById("beerList");

let breweryList = [];

fetch("http://localhost:3000/breweries")
.then (response => response.json())
.then ((brewery) => console.log(brewery))
// console.log(breweryList)
// brewery.forEach((brewery => renderBrewery(brewery))))

function renderBrewery(brewery){
    let li = document.createElement("li");
        li.innerText = brewery.name;
        list.appendChild(li);
        return brewery
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
let list = document.getElementById("breweryList");

let rightList = document.getElementById("beerList");

let breweryList = [];

fetch("http://localhost:3000/breweries")
.then (response => response.json())
.then ((brewery) => console.log(brewery))
// console.log(breweryList)
// brewery.forEach((brewery => renderBrewery(brewery))))
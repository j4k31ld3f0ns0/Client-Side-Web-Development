// Required by Webpack - do not touch
require.context('../fonts/', true, /\.(eot|ttf|woff|woff2)$/i)
require.context('../images/', true, /\.(png|jpg|jpeg|gif|svg)$/i)
require.context('../stylesheets/', true, /\.(css|scss)$/i)

//TODO - Your ES6 JavaScript code (if any) goes here
import 'bootstrap'

// Events.html stuff
export function beartrap(e){ //usage of function
    e.preventDefault()
    var audio = new Audio('http://soundfxcenter.com/television/tom-and-jerry/8d82b5_Tom_Scream_Sound_Effect.mp3'); //Usage of object
    audio.play();
    alert("I mean, I don't know what you expected to happen, you have just stepped in a bear trap, and are now going to do a tom-and-jerry-like scream. (If you have earbuds in, or have your volume turned all the way up, I would turn it down now.)");
}

document.querySelector("#beartrap").onclick = beartrap

// Objects.html stuff
let exampleCars = [
    {
        name: "Ford Pinto",
        color: "green",
        year: 1980
    },
    {
        name: "Dodge Charger",
        color: "white",
        year: "2009"
    }
]
function getCars() {
    if(localStorage.getItem('cars') && localStorage.getItem("cars") != '[]') {
        return JSON.parse(localStorage.getItem('cars'))
    }
    else {
        localStorage.setItem('cars', JSON.stringify(exampleCars))
        return exampleCars
    }
}
function displayCars() {
    let cars = getCars()
    for(let c of cars) {
        console.log("found car, car is " +c.name)
    }
    let cars_html = ''
    for(let c of cars) {
        cars_html += `
        <div class="m-3">
            <p>Name: ${c.name}</p>
            <p>Color: ${c.color}</p>
            <p>Year: ${c.year}</p>
        </div>`
    }
    document.querySelector(".displayArea").innerHTML = cars_html;
}
function addNewCar(event) {
    event.preventDefault()
    console.log("In AddNewCar")
    let n = document.querySelector("#name").value
    let c = document.querySelector("#color").value
    let y = document.querySelector("#year").value

    let cars = getCars()

    if(n && c && y) {
        console.log("inputs valid, " + n + c + y)
        let car = {name: n, color: c, year: y}
        console.log("car is " + n + c + y)
        cars.push(car)
        console.log("cars is " + cars)
        localStorage.setItem('cars', JSON.stringify(cars))
    }
    // this.reset()
    displayCars()
}

document.querySelector("#carForm").onsubmit = addNewCar

displayCars()
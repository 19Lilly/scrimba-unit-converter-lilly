/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.getElementById("convert-btn")


let length = document.getElementById("length")
let volume = document.getElementById("volume")
let mass = document.getElementById("mass")

convertBtn.addEventListener("click", function convert(){
    const userInput = document.getElementById("input-value").value
    const meterFeet = 3.281
    const literGallon = 0.264
    const kilogramPound = 2.204

    let meters = ((Number(userInput)/meterFeet).toFixed(3))
    let feets = ((Number(userInput)*meterFeet).toFixed(3))

    let liters = ((Number(userInput)/literGallon).toFixed(3))
    let gallons = ((Number(userInput)*literGallon).toFixed(3))

    let kilograms = ((Number(userInput)/kilogramPound).toFixed(3))
    let pounds = ((Number(userInput)*kilogramPound).toFixed(3))

    length.innerHTML = `${userInput} meters = ${feets} feet | ${userInput} feet = ${meters} meters`
    volume.innerHTML = `${userInput} liters = ${gallons} gallons | ${userInput} gallons = ${liters} liters`
    mass.innerHTML = `${userInput} kilos = ${pounds} pounds | ${userInput} pounds = ${kilograms} kilos`
})


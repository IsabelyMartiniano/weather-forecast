const key ="2209d00b549a1907afeba1c98b9ba25a"

function screenData(data) {

    document.querySelector(".city").innerHTML = data.name

    document.querySelector(".temperature").innerHTML = Math.floor(data.main.temp) + "°F"

    document.querySelector(".forecast").innerHTML = data.weather[0].description

    document.querySelector(".umidity").innerHTML = "Umidity: " + data.main.humidity + "%"

    document.querySelector(".img-forecast").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
}

async function searchCity(city) {

    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`).then(response => response.json())

    screenData(data)
}

function clickButton() {
    const city = document.querySelector(".input-city").value
    
    searchCity(city)
}
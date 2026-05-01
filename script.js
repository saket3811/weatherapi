async function weather() {
    const city = document.getElementById("cityInput").value;
    const url = `http://api.weatherapi.com/v1/current.json?key=96dc60bf186841859dd63000250412&q=${city}&aqi=no`;

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    if (data.location){
        document.getElementById("weatherResult").innerHTML = `
        ⛅ weather in <b>${data.location.name}</b>: <br>
        Temperature: ${data.current.temp_c}c <br>
        Condition: ${data.current.condition.text} <br>
        <img src="${data.current.condition.icon}" />
        `;
    } else {
        document.getElementById("weatherResult").innerHTML = "City not found"
    }
}
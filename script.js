let input = document.getElementById('inputValue');
let output = document.getElementById('output');
let humidity = document.getElementById('humidity');
function showInfo(){
    fetch('http://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=2c11cc38f5a4850231888e39ff9fd5fa&units=metric')
    .then(resp => resp.json())
    .then(data => {
        output.textContent = `Temperature in ${input.value} is ${data.main.temp}°C`
        humidity.textContent = `Humidity is ${data.main.humidity}%`
    })
    .catch(err => alert("The city you have entered does not exist in our database"))
}
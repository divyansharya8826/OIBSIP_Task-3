document.getElementById("convert").addEventListener("click", function () {
    const temperatureInput = document.getElementById("temperature");
    const resultElement = document.getElementById("result");
    const conversionDirection = document.querySelector('input[name="conversion"]:checked').value;
    
    if (temperatureInput.value === "") {
        resultElement.innerText = "Please enter a value.";
        return;
    }
    
    const temperature = parseFloat(temperatureInput.value);
    let convertedTemperature;
    
    if (conversionDirection === "toFahrenheit") {
        convertedTemperature = (temperature * 9/5) + 32;
        resultElement.innerText = `${convertedTemperature.toFixed(2)}°F`;
    } else if (conversionDirection === "toCelsius") {
        convertedTemperature = (temperature - 32) * 5/9;
        resultElement.innerText = `${convertedTemperature.toFixed(2)}°C`;
    }
});
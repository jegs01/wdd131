// Function to calculate windchill factor
function calculateWindChill(temperature, windSpeed) {

    if (temperature <= 10 && windSpeed > 4.8) {
        let windChill = 13.12 + (0.6215 * temperature) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temperature * Math.pow(windSpeed, 0.16));
        windChill = Math.round(windChill * 100) / 100;
        return windChill;
    } else {
        return "N/A";
    }
}

const temperature = 33; // Temperature in Celsius
const windSpeed = 3.0555555556; // Wind speed in meters per second
const windChillFactor = calculateWindChill(temperature, windSpeed);

document.getElementById("windChillFactor").innerHTML = "<strong>Wind Chill:</strong> " + windChillFactor + "°C";


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('copyright-year').textContent = new Date().getFullYear();
    document.getElementById('last-modified').textContent = document.lastModified;
});
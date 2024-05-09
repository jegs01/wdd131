// Function to calculate windchill factor
function calculateWindChill(temperature, windSpeed) {
    // Check if conditions are met for windchill calculation
    if (temperature <= 40 && windSpeed > 3) {
        // Calculate windchill factor
        let windChill = 13.12 + (0.6215 * temperature) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temperature * Math.pow(windSpeed, 0.16));
        // Round to two decimal places
        windChill = Math.round(windChill * 100) / 100;
        return windChill;
    } else {
        // Conditions not met, return "N/A"
        return "N/A";
    }
}

// Example usage of calculateWindChill function
const temperature = 33; // Temperature in Celsius
const windSpeed = 3.0555555556; // Wind speed in meters per second
const windChillFactor = calculateWindChill(temperature, windSpeed);

// Update the content of the <p> element with the calculated wind chill factor
document.getElementById("windChillFactor").innerHTML = "<strong>Wind Chill:</strong> " + windChillFactor + "°C";


document.addEventListener('DOMContentLoaded', function() {
    // Set footer copyright year
    document.getElementById('copyright-year').textContent = new Date().getFullYear();

    // Set footer last modified date
    document.getElementById('last-modified').textContent = document.lastModified;

});
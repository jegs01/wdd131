const hamButton = document.getElementById('menu'); // Select the menu button
const navigation = document.querySelector('.navigation'); // Select the navigation container

document.addEventListener('DOMContentLoaded', function() {
    // Set footer copyright year
    document.getElementById('copyright-year').textContent = new Date().getFullYear();

    // Set footer last modified date
    document.getElementById('last-modified').textContent = document.lastModified;

    // Add event listener to the menu button
    hamButton.addEventListener('click', function() {
        hamButton.classList.toggle('open');
        navigation.classList.toggle('open');
    });
});


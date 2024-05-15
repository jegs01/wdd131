const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Accra Ghana",
        location: "Accra Ghana",
        dedicated: "2004, January, 11",
        area: 17500,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/400x250/accra-ghana-temple-detail-249022-2400x1200.jpg"
      },
      {
        templeName: "Boise Idaho",
        location: "Boise, Idaho, United States",
        dedicated: "1984, May, 25",
        area: 35868,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/boise-idaho/2018/400x250/1-Boise-Idaho-Temple-1968984.jpg"
      },
      {
        templeName: "Durban South Africa",
        location: "Durban, South Africa",
        dedicated: "2020, February, 16",
        area: 19860,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/durban-south-africa/400x250/1-8b3f1b895a7c92ee66c2d0c7e78606f75f0d0cc8.jpg"
      },
  ];

const templeContainer = document.getElementById('templeContainer');
templeContainer.classList.add('temple-container');
const navItems = document.querySelectorAll('.nav-item');

function createTempleCard(temple) {
    const card = document.createElement('div');
    card.className = 'temple-card';
    
    const img = document.createElement('img');
    img.src = temple.imageUrl;
    img.alt = temple.templeName;
    img.loading = 'lazy';
    card.appendChild(img);
    
    const name = document.createElement('h2');
    name.textContent = temple.templeName;
    card.appendChild(name);
    
    const location = document.createElement('p');
    location.textContent = `Location: ${temple.location}`;
    card.appendChild(location);
    
    const dedicated = document.createElement('p');
    dedicated.textContent = `Dedicated: ${temple.dedicated}`;
    card.appendChild(dedicated);
    
    const area = document.createElement('p');
    area.textContent = `Area: ${temple.area} square feet`;
    card.appendChild(area);
    
    templeContainer.appendChild(card);
}

function displayTemples(filteredTemples) {
    templeContainer.innerHTML = '';
    filteredTemples.forEach(createTempleCard);
}

function filterTemples(criteria) {
    let filteredTemples = temples;

    switch (criteria) {
        case 'Old':
            filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
            break;
        case 'New':
            filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
            break;
        case 'Large':
            filteredTemples = temples.filter(temple => temple.area > 90000);
            break;
        case 'Small':
            filteredTemples = temples.filter(temple => temple.area < 10000);
            break;
        case 'Home':
        default:
            filteredTemples = temples;
            break;
    }

    displayTemples(filteredTemples);
}

navItems.forEach(item => {
    item.addEventListener('click', () => {
        const criteria = item.dataset.criteria;
        filterTemples(criteria);
    });
});

displayTemples(temples);

document.addEventListener('DOMContentLoaded', function() {
    
    document.getElementById('copyright-year').textContent = new Date().getFullYear();

    document.getElementById('last-modified').textContent = document.lastModified;

    const hamButton = document.getElementById('menu'); 
    const navigation = document.querySelector('.navigation'); 
    hamButton.addEventListener('click', function() {
        hamButton.classList.toggle('open');
        navigation.classList.toggle('open');
    });
});

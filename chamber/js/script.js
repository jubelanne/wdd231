// OpenWeatherMap API for Weather
const apiKey = 'your-api-key'; // Replace with your OpenWeatherMap API key
const city = 'ChamberCity';    // Replace with the actual city for the Chamber

// Fetch Weather Data
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
  .then(response => response.json())
  .then(data => {
    const weatherInfo = `
      <p>Temperature: ${data.main.temp}°C</p>
      <p>Weather: ${capitalizeWords(data.weather[0].description)}</p>
      <h3>3-Day Forecast:</h3>
      <ul>
        ${data.daily.slice(0, 3).map(day => `
          <li>
            ${new Date(day.dt * 1000).toLocaleDateString()}: ${day.temp.day}°C
          </li>
        `).join('')}
      </ul>
    `;
    document.getElementById('weather-info').innerHTML = weatherInfo;
  });

// Function to Capitalize Each Word
function capitalizeWords(str) {
  return str.replace(/\b\w/g, char => char.toUpperCase());
}

// Fetch Chamber Member Spotlights (using a static JSON example here)
const members = [
  {
    company: 'Company A',
    logo: 'images/companyA-logo.png',
    phone: '123-456-7890',
    address: '123 Business St, ChamberCity',
    website: 'https://companya.com',
    membershipLevel: 'Gold'
  },
  {
    company: 'Company B',
    logo: 'images/companyB-logo.png',
    phone: '098-765-4321',
    address: '456 Commerce Rd, ChamberCity',
    website: 'https://companyb.com',
    membershipLevel: 'Silver'
  }
];

// Randomly display member spotlight
function loadSpotlights() {
  const spotlightContainer = document.getElementById('spotlight-container');
  const randomMembers = members.sort(() => 0.5 - Math.random()).slice(0, 2);

  randomMembers.forEach(member => {
    const spotlightCard = `
      <div class="spotlight-card">
        <img src="${member.logo}" alt="${member.company} Logo">
        <h3>${member.company}</h3>
        <p>Phone: ${member.phone}</p>
        <p>Address: ${member.address}</p>
        <p>Website: <a href="${member.website}" target="_blank">${member.website}</a></p>
        <p>Membership Level: ${member.membershipLevel}</p>
      </div>
    `;
    spotlightContainer.innerHTML += spotlightCard;
  });
}

// Load spotlights when the page is ready
window.onload = loadSpotlights;

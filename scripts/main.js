// Set Current Year in Footer
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Set Last Modified Date in Footer
document.getElementById("modDate").textContent = document.lastModified;

// Fetch Weather Data from OpenWeatherMap API
const apiKey = 'your-api-key'; // Replace with your OpenWeatherMap API key
const city = 'Toronto'; // Replace with your city's name

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
  .then(response => response.json())
  .then(data => {
    const weatherInfo = `
      <p>Temperature: ${data.main.temp.toFixed(0)}°C</p>
      <p>Weather: ${capitalizeWords(data.weather.map(w => w.description).join(', '))}</p>
      <h3>3-Day Forecast:</h3>
      <ul>
        ${data.daily.slice(0, 3).map(day => `
          <li>
            ${new Date(day.dt * 1000).toLocaleDateString()}: ${day.temp.day.toFixed(0)}°C
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

// Member Spotlights (example)
const members = [
  {
    company: 'Company A',
    logo: 'https://i.ibb.co/gryw6J3/ai-generated-free-branding-identity-corporate-logo-a-design-vector.jpg',
    phone: '123-456-7890',
    address: '123 Business St, Toronto',
    website: 'https://companya.com',
    membershipLevel: 'Gold'
  },
  {
    company: 'Company B',
    logo: 'https://i.ibb.co/56cCgvC/company-b-logo-wspacer.png',
    phone: '098-765-4321',
    address: '456 Commerce Rd, Toronto',
    website: 'https://companyb.com',
    membershipLevel: 'Silver'
  }
];

function loadSpotlights() {
  const spotlightContainer = document.getElementById('spotlight-container');
  const randomMembers = members.sort(() => 0.5 - Math.random()).slice(0, 3);

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

window.onload = loadSpotlights;

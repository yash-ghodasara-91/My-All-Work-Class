const API_KEY = '5174a4c980abc22f0dc589db984742cf';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

const inputBox = document.getElementById('input-box');
const button = document.getElementById('btn');
const weatherBody = document.getElementById('weather-body');
const parent = document.getElementById('parent');

// Event listeners
inputBox.addEventListener('keypress', e => {
    if (e.key === 'Enter') getWeather(inputBox.value);
});
button.addEventListener('click', () => getWeather(inputBox.value));

// Main function
function getWeather(city) {
    if (!city.trim()) return swal("Empty Input", "Please enter a city name", "error");

    fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`)
        .then(res => res.json())
        .then(data => {
            if (+data.cod === 404) {
                swal("Bad Input", "City not found", "warning");
                clearInput();
            } else {
                showWeather(data);
            }
        })
        .catch(() => swal("Error", "Something went wrong", "error"));
}

// Show weather details
function showWeather(data) {
    const w = data.weather[0].main;
    const now = new Date();

    weatherBody.style.display = 'block';
    weatherBody.innerHTML = `
        <div class="location-deatils">
            <div class="city">${data.name}, ${data.sys.country}</div>
            <div class="date">${formatDate(now)}</div>
        </div>
        <div class="weather-status">
            <div class="temp">${Math.round(data.main.temp)}&deg;C</div>
            <div class="weather">${w} <i class="${getIcon(w)}"></i></div>
            <div class="min-max">${Math.floor(data.main.temp_min)}&deg;C (min) / ${Math.ceil(data.main.temp_max)}&deg;C (max)</div>
            <div id="updated_on">Updated at ${formatTime(now)}</div>
        </div>
        <hr>
        <div class="day-details">
            <div class="basic">
                Feels like ${data.main.feels_like}&deg;C | Humidity ${data.main.humidity}%
                <br>Pressure ${data.main.pressure} mb | Wind ${data.wind.speed} KMPH
            </div>
        </div>
    `;

    parent.append(weatherBody);
    setBackground(w);
    clearInput();
}

// Helpers
function formatTime(date) {
    return `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
}

function formatDate(date) {
    const d = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const m = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    return `${date.getDate()} ${m[date.getMonth()]} (${d[date.getDay()]}) , ${date.getFullYear()}`;
}

function getIcon(status) {
    const icons = {
        Rain: 'fas fa-cloud-showers-heavy',
        Clouds: 'fas fa-cloud',
        Clear: 'fas fa-cloud-sun',
        Snow: 'fas fa-snowman',
        Sunny: 'fas fa-sun',
        Mist: 'fas fa-smog',
        Thunderstorm: 'fas fa-thunderstorm',
        Drizzle: 'fas fa-thunderstorm'
    };
    return icons[status] || 'fas fa-cloud-sun';
}

function setBackground(status) {
    const bg = {
        Clouds: 'clouds.jpeg',
        Rain: 'rain.jpeg',
        Clear: 'clear.jpeg',
        Snow: 'snow.jpeg',
        Sunny: 'sunny.jpeg',
        Thunderstorm: 'thunder.jpeg',
        Drizzle: 'drizzle.jpeg',
        Mist: 'mist.jpeg',
        Haze: 'mist.jpeg',
        Fog: 'mist.jpeg'
    };
    document.body.style.backgroundImage = `url(images/${bg[status] || 'bg1.jpeg'})`;
}

function clearInput() {
    inputBox.value = '';
}

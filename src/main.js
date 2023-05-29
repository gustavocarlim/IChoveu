import { handleSearch, createCityElement } from './helpers/pageFunctions';
import './style.css';

import { searchCities, getWeatherByCity } from './helpers/weatherAPI.js';

document.getElementById('search-form')
  .addEventListener('submit', handleSearch);

document.getElementById('close-forecast')
  .addEventListener('click', () => {
    document.getElementById('forecast-container').classList.add('hidden');
  });

const searchButton = document.getElementById('search-button');
const searchTerm = document.getElementById('search-term');
const citiesList = document.getElementById('cities');

searchButton.addEventListener('click', async () => {
  const term = searchTerm.value;

  const cities = await searchCities(term);

  citiesList.innerHTML = '';

  if (cities.length === 0) {
    window.alert('Nenhuma cidade encontrada');
    return;
  }

  cities.forEach(async (city) => {
    const weatherData = await getWeatherByCity(city.url);
    const cityElement = createCityElement({
      name: city.name,
      country: city.country,
      temp: weatherData.temp,
      condition: weatherData.condition,
      icon: weatherData.icon,
      url: city.url,
    });
    citiesList.appendChild(cityElement);
  });
});

const TOKEN = '05f7b4d9cdc3455ea75185621232505';

export const searchCities = async (term) => {
  const response = await fetch(`http://api.weatherapi.com/v1/search.json?lang=pt&key=${TOKEN}&q=${term}`);
  const data = await response.json();

  if (data.length === 0) {
    window.alert('Nenhuma cidade encontrada');
  }

  return console.log(data);
};


export const getWeatherByCity = async (cityURL) => {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?lang=pt&key=${TOKEN}&q=${cityURL}`);
    const data = await response.json();
  
    const weatherData = {
      temp: data.current.temp_c,
      condition: data.current.condition.text,
      icon: data.current.condition.icon
    };
  
    return console.log (weatherData);
  };

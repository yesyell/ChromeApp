// 5. 날씨와 위치
function showWeather(position) {
    const { latitude, longitude } = position.coords;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=YOUR_API_KEY&units=metric`;
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const location = `${data.name}, ${data.sys.country}`;
        const temperature = `${data.main.temp} °C`;
        const weather = data.weather[0].main;
        document.getElementById('location').textContent = location;
        document.getElementById('temperature').textContent = temperature;
        document.getElementById('weather').textContent = weather;
      })
      .catch(error => console.error(error));
  }
  
  function showError(error) {
    console.error(error);
  }
  
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showWeather, showError);
  } else {
    console.error('Geolocation is not supported by this browser.');
  }
  
JSON
Example of API response:
{
  "coord": {
    "lon": -122.08,
    "lat": 37.39
  },
  "weather": [
    {
      "id": 800,
      "main": "Clear",
      "description": "clear sky",
      "icon": "01d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 296.71,
    "pressure": 1013,
    "humidity": 53,
    "temp_min": 294.82,
    "temp_max": 298.71
  },
  "visibility": 16093,
  "wind": {
    "speed": 1.5,
    "deg": 350
  },
  "clouds": {
    "all": 1
  },
  "dt": 1560350645,
  "sys": {
    "type": 1,
    "id": 5122,
    "message": 0.0139,
    "country": "US",
    "sunrise": 1560343627,
    "sunset": 1560396563
  },
  "timezone": -25200,
  "id": 420006353,
  "name": "Mountain View",
  "cod": 200
}

Mountain View, US example 

Parameters:
coord
    coord.lon City geo location, longitude
    coord.lat City geo location, latitude
weather (more info Weather condition codes)
    weather.id Weather condition id
    weather.main Group of weather parameters (Rain, Snow, Extreme etc.)
    weather.description Weather condition within the group
    weather.icon Weather icon id
base Internal parameter
main
    main.temp Temperature. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
    main.pressure Atmospheric pressure (on the sea level, if there is no sea_level or grnd_level data), hPa
    main.humidity Humidity, %
    main.temp_min Minimum temperature at the moment. This is deviation from current temp that is possible for large cities and megalopolises geographically expanded (use these parameter optionally). Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
    main.temp_max Maximum temperature at the moment. This is deviation from current temp that is possible for large cities and megalopolises geographically expanded (use these parameter optionally). Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
    main.sea_level Atmospheric pressure on the sea level, hPa
    main.grnd_level Atmospheric pressure on the ground level, hPa
wind
    wind.speed Wind speed. Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour.
    wind.deg Wind direction, degrees (meteorological)
clouds
    clouds.all Cloudiness, %
rain
    rain.1h Rain volume for the last 1 hour, mm
    rain.3h Rain volume for the last 3 hours, mm
snow
    snow.1h Snow volume for the last 1 hour, mm
    snow.3h Snow volume for the last 3 hours, mm
dt Time of data calculation, unix, UTC
sys
    sys.type Internal parameter
    sys.id Internal parameter
    sys.message Internal parameter
    sys.country Country code (GB, JP etc.)
    sys.sunrise Sunrise time, unix, UTC
    sys.sunset Sunset time, unix, UTC
timezone Shift in seconds from UTC
id City ID
name City name
cod Internal parameter



WEATHER CONTIDION CODES AND RELATIVE icon

https://openweathermap.org/weather-conditions
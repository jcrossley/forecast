/**
 * Your forecast.io key: API_KEY
 * Your forecast URL: https://api.forecast.io/forecast
 * Your google maps URL: http://maps.googleapis.com/maps/api/geocode/json?address=
 *
 */

$('#forecast-button').on('click', getWeather)

var MAPBOX_API_KEY = 'pk.eyJ1IjoiamlsbGlhbmMiLCJhIjoiY2pveDIxdmdjMWc2MDN3czN5dWp4NDRtYSJ9.LxW3zFPaNUQe6zsGuCqmjg'
var DARKSKY_API_KEY = '84370feb5f1639ecff182057d94356de'

function showWeatherSummary(weatherData) {
  $('#forecast-summary').text(weatherData.daily.summary);
}

function getWeatherForCoordinates(coordinateData) {
  var coordinates = coordinateData.features[0].center;
  var longitude = coordinates[0];
  var latitude = coordinates[1];
  
  $.ajax({
      url: 'https://api.darksky.net/forecast/' + DARKSKY_API_KEY + '/' + latitude + ',' + longitude + '?units=si' ,
      type: 'GET',
      dataType: 'jsonp',
      success: showWeatherSummary,
      error: function() { alert('Failed!'); },
  });
}

function getWeather() {
    var location = $('#location').val();
    var mapBoxLocationUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + location + '.json?limit=1&access_token=' + MAPBOX_API_KEY;

    $.ajax({
        url: mapBoxLocationUrl,
        type: 'GET',
        success: getWeatherForCoordinates,
        error: function() { alert('Failed!'); },
    });
}


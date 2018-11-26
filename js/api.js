
$('#forecast-button').on('click', getWeather)

var MAPBOX_API_KEY = 'pk.eyJ1IjoiamlsbGlhbmMiLCJhIjoiY2pveDIxdmdjMWc2MDN3czN5dWp4NDRtYSJ9.LxW3zFPaNUQe6zsGuCqmjg'
var DARKSKY_API_KEY = '84370feb5f1639ecff182057d94356de'


function getWeather() {
    var location = // ???
    var mapBoxLocationUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + location + '.json?limit=1&access_token=' + MAPBOX_API_KEY;

    $.ajax({
        url: mapBoxLocationUrl,
        type: 'GET',
        success: /// ???
        error: function() { alert('Failed!'); },
    });
}


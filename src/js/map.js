import foo from './foo';

const {google} = window,
    myMap = {
        googleMap: null
    };

function init() {
    myMap.googleMap = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 0, lng: 0},
        zoom: 3
    });
}

init();

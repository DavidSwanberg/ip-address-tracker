import './style.css'

let ip = "8.8.8.8";
const api_key = "at_Sshnj6Ixj0r4TjUCpwRxrRkqoBBDi";
const api_url = "https://geo.ipify.org/api/v1?";
const url = api_url + 'apiKey=' + api_key + '&ipAddress=' + ip
fetch(url).then(function (response) {
  console.log ("response", response);
}).catch(function (err) {
  console.warn('error', err);
});

const mymap = L.map('mapid').setView([51.505, -0.09], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZGF2aWRzd2FuYmVyZyIsImEiOiJja3RkNXJtZ3YyY2M5MndxbjIxanVtOGl2In0.O7NFEkwmWF2gnTPcxvEcqw'
}).addTo(mymap);

var marker = L.marker([51.5, -0.09]).addTo(mymap);

marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
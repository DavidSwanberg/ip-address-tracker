import './style.css';

const mymap = L.map('mapid');

const myIcon = L.icon({
  iconUrl: '/images/icon-location.svg',
  iconSize: [50, 65],
});

const setMap = (data) => {
  mymap.setView([data.location.lat, data.location.lng], 17);

  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZGF2aWRzd2FuYmVyZyIsImEiOiJja3RkNXJtZ3YyY2M5MndxbjIxanVtOGl2In0.O7NFEkwmWF2gnTPcxvEcqw'
  }).addTo(mymap);

  L.marker([data.location.lat, data.location.lng], {icon: myIcon}).addTo(mymap);

}

const setInfo = (info) => {
  document.getElementById("ip-address").textContent=`${info.ip}`;
  document.getElementById("location").textContent=`${info.location.city}, ${info.location.region} ${info.location.postalCode}`;
  document.getElementById("timezone").textContent=`${info.location.timezone}`;
  document.getElementById("isp").textContent=`${info.isp}`;
}

const getData = (ip) => {
  const api_key = "at_Sshnj6Ixj0r4TjUCpwRxrRkqoBBDi";
  const api_url = "https://geo.ipify.org/api/v1?";
  const url = api_url + 'apiKey=' + api_key + '&ipAddress=' + ip
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      setInfo(json)
      setMap(json)
    })
    .catch(function (err) {
      console.warn('error', err);
    });
};


const handleSubmit = (event) => {
  event.preventDefault();
  const input = document.getElementById('input').value;
  getData(input)
};


const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);

getData('');
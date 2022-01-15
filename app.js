let map = L.map('map', {
   scrollWheelZoom: false,
   attributionControl: false, 
}).setView([39.0, -96.0], 13);

let accessToken =
  "pk.eyJ1IjoieGF2aWVyYmVsbGhhZGRvbiIsImEiOiJja3lnNWRqZHAwdnd4MndtbHoybXkyMmJyIn0.-rNg3J9WbddfnE9prvVgog";

  L.tileLayer(`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${accessToken}`, {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: accessToken
}).addTo(map);

map.setZoom(3);